import React from 'react';
import { ButtonWrapper, HomeWrapper, WriteButton } from './styles';
import PostList from '../../components/PostList';
import { MaxWidthContainer, PostListHeader } from '../../components/PostList/styles';
import { allPosts, recentPosts } from '../../services/mock';
import { Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <MaxWidthContainer>
        <ButtonWrapper>
          <WriteButton onClick={() => navigate('/write')}>
            <img src='/images/write.svg' alt='write' />
            작성하기
          </WriteButton>
        </ButtonWrapper>
        <PostListHeader>인기 악보</PostListHeader>
        <PostList data={recentPosts} />
        <Divider />
        <PostListHeader>최신 악보</PostListHeader>
        <PostList data={allPosts} />
      </MaxWidthContainer>
    </HomeWrapper>
  );
};

export default Home;
