import { Badge, Card } from 'antd';
import React, { FC, useMemo } from 'react';
import { CardItem } from './styles';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../typings/Post';
import { MessageOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Meta } = Card;

interface Props {
  data: Post;
}

const badgeTabe: { [key: string]: string } = {
  피아노: '#ffc769',
  기타: '#D75281',
  드럼: '#0096FF',
  우쿨렐레: '#5A8F7B',
  오르골: '#CA955C',
  클라리넷: '#EF5B0C',
  계이름: '#B2A4FF',
};

const PostItem: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/post/${id}`);
  };

  const color = useMemo(() => badgeTabe[data.category], [data]);

  return (
    <Badge.Ribbon text={data.category} color={color}>
      <CardItem
        hoverable
        onClick={() => onClick(data.id)}
        cover={<img style={{ height: '400px', objectFit: 'contain' }} alt={data.title} src={data.imgUrls[0]} />}
      >
        <Meta
          title={data.title}
          description={data.contents.length > 52 ? data.contents.slice(0, 52) + '...' : data.contents}
        />
        <Meta style={{ marginTop: '.8em' }} description={`작성자 : ${data.writerName ? data.writerName : '익명'}`} />
        <Meta
          style={{ marginTop: '.2em' }}
          description={
            <div>
              {dayjs(data.createdAt).format('YYYY-MM-DD')} | <MessageOutlined /> {data.comments.length}
            </div>
          }
        />
      </CardItem>
    </Badge.Ribbon>
  );
};

export default PostItem;
