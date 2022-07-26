import { Comment, List, Tooltip } from 'antd';
import moment from 'moment';
import React, { useCallback } from 'react';
import { removeComment } from '../../api/removeComment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface IComment {
  author: string;
  avatar: string;
  content: string;
  writerId: string;
  datetime: string;
  id: number;
}

interface Props {
  data: IComment[];
}

const convertContent = (content: string) => {
  return <p>{content}</p>;
};

const convertDateTime = (dateTime: string) => {
  return (
    <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm')}>
      <span>{moment(dateTime).format('YYYY-MM-DD HH:mm:ss')}</span>
    </Tooltip>
  );
};

const Comments: React.FC<Props> = ({ data }) => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const user = useSelector((state: RootState) => state.user);

  const { mutate } = useMutation((commentId: number) => removeComment(commentId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', id]);
    },
  });

  const onDelete = useCallback(
    (commentId: number) => {
      mutate(commentId);
    },
    [data]
  );

  return (
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
            actions={
              item.writerId === user?.userId?.toString()
                ? [
                    <span key='comment-nested-reply-to' onClick={() => onDelete(item.id)}>
                      삭제
                    </span>,
                  ]
                : []
            }
          />
        </li>
      )}
    />
  );
};

export default React.memo(Comments);
