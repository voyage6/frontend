import React from 'react';
import { ButtonWrapper, HomeWrapper, WriteButton } from './styles';
import PostList from '../../components/PostList';
import { MaxWidthContainer, PostListHeader } from '../../components/PostList/styles';
import { Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../api/fetchPosts';
import { Post } from '../../typings/Post';
import { AxiosError } from 'axios';
import CenterSpinner from '../../components/CenterSpinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Home = () => {
  const navigate = useNavigate();
  const selectedCategory = useSelector((state: RootState) => state.category.value);

  const { data } = useQuery<Post[], AxiosError>(['posts'], fetchPosts);
  if (!data) {
    return <CenterSpinner />;
  }

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
        <PostList data={data.filter((d) => d.comments.length >= 2)} />
        <Divider />
        <PostListHeader>최신 악보</PostListHeader>
        <PostList data={selectedCategory === '전체' ? data : data.filter((d) => d.category === selectedCategory)} />
      </MaxWidthContainer>
    </HomeWrapper>
  );
};

export default Home;
