import React, { FC } from 'react';
import PostItem from '../PostItem';
import { Wrapper } from './styles';

interface Props {
  data: any[];
}

const PostList: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((d, idx) => (
        <PostItem key={idx} id={idx} />
      ))}
    </Wrapper>
  );
};

export default PostList;
