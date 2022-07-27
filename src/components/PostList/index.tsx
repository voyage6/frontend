import React, { FC } from 'react';
import PostItem from '../PostItem';
import { Wrapper } from './styles';
import { Post } from '../../typings/Post';

interface Props {
  data: Post[];
}

const PostList: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((d) => (
        <PostItem key={d.id} data={d} />
      ))}
    </Wrapper>
  );
};

export default PostList;
