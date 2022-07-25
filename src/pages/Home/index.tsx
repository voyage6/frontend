import React from 'react';
import { ButtonWrapper, HomeWrapper, WriteButton } from './styles';
import PostList from '../../components/PostList';
import { PostListContainer, PostListHeader } from '../../components/PostList/styles';
import { allPosts, recentPosts } from '../../services/mock';
import { Divider } from 'antd';

const Home = () => {
  return (
    <HomeWrapper>
      <PostListContainer>
        <ButtonWrapper>
          <WriteButton>
            <img src='/images/write.svg' alt='write' />
            작성하기
          </WriteButton>
        </ButtonWrapper>
        <PostListHeader>인기 악보</PostListHeader>
        <PostList data={recentPosts} />
        <Divider />
        <PostListHeader>최신 악보</PostListHeader>
        <PostList data={allPosts} />
      </PostListContainer>
    </HomeWrapper>
  );
};

export default Home;
