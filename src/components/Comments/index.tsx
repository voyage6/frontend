import { Comment, List, Tooltip } from 'antd';
import moment from 'moment';
import React from 'react';

interface Comment {
  author: string;
  avatar: string;
  content: string;
  datetime: string;
}

interface Props {
  data: Comment[];
}

const convertContent = (content: string) => {
  return <p>{content}</p>;
};

const convertDateTime = (dateTime: string) => {
  return (
    <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
      <span>
        {moment(moment(new Date(dateTime)))
          .subtract(2, 'days')
          .fromNow()}
      </span>
    </Tooltip>
  );
};

const Comments: React.FC<Props> = ({ data }) => (
  <List
    className='comment-list'
    header={`${data.length} replies`}
    itemLayout='horizontal'
    dataSource={data}
    renderItem={(item) => (
      <li>
        <Comment
          author={item.author}
          avatar={item.avatar}
          content={convertContent(item.content)}
          datetime={convertDateTime(item.datetime)}
        />
      </li>
    )}
  />
);

export default React.memo(Comments);
