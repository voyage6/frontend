import { Badge, Card } from 'antd';
import React, { FC } from 'react';
import { CardItem } from './styles';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../typings/Post';
import { MessageOutlined } from '@ant-design/icons';

const { Meta } = Card;

interface Props {
  data: Post;
}

const PostItem: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/post/${id}`);
  };
  return (
    <Badge.Ribbon text={data.category} color='#ffc769'>
      <CardItem
        hoverable
        onClick={() => onClick(data.id)}
        cover={<img style={{ height: '400px', objectFit: 'contain' }} alt={data.title} src={data.imgUrls[0]} />}
      >
        <Meta
          title={data.title}
          description={data.contents.length > 52 ? data.contents.slice(0, 52) + '...' : data.contents}
        />
        <Meta style={{ marginTop: '.8em' }} description={`작성자 : ${data.writerName}`} />
        <Meta
          style={{ marginTop: '.2em' }}
          description={
            <div>
              {data.createdAt} | <MessageOutlined /> {data.comments.length}
            </div>
          }
        />
      </CardItem>
    </Badge.Ribbon>
  );
};

export default PostItem;
