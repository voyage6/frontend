import React, { ChangeEvent, ChangeEventHandler, useCallback, useEffect, useState } from 'react';
import { MaxWidthContainer } from '../../components/PostList/styles';
import { SubTitle } from './write';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../../api/fetchPostById';
import { Post } from '../../typings/Post';
import { AxiosError } from 'axios';
import CenterSpinner from '../../components/CenterSpinner';
import styled from 'styled-components';
import ImageSlider from '../../components/ImageSlider';
import Comments from '../../components/Comments';
import Editor from '../../components/CommentEditor';
import { Input } from 'antd';
import { addComment, CommentDto } from '../../api/addComment';
import { AxiosManager } from '../../services/AxiosManager';

const Detail = () => {
  const { id } = useParams();
  const { data } = useQuery<Post, AxiosError>(['post', id], () => fetchPostById(parseInt(id!)), {
    enabled: !!id,
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation((newComment: CommentDto) => addComment(newComment), {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', id]);
      setSubmitting(false);
    },
  });

  const [commentValue, setCommentValue] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    // TODO: 댓글 다는 API mutate
    if (!id) return;
    mutate({ postId: parseInt(id), contents: commentValue });
    setCommentValue('');
    setSubmitting(true);
  }, [commentValue]);

  if (!data) {
    return <CenterSpinner />;
  }

  return (
    <MaxWidthContainer style={{ padding: '2rem', maxWidth: '774px', marginTop: '4em' }}>
      <SubTitle>
        {data.title} <CategoryBox>{data.category}</CategoryBox>
      </SubTitle>
      <InfoBox>
        {data.writerName} | {data.createdAt}
      </InfoBox>
      <ImageSlider data={data.imgUrls} />
      <TextContent>{data.contents}</TextContent>
      <Comments
        data={data.comments.map((c) => ({
          author: 'username',
          avatar: '/images/avatar.jpeg', //FIXME: 유저 프로필 이미지 등록하기 아니면 기본프로필 적용
          content: c.contents,
          datetime: c.createdAt,
        }))}
      />
      <Editor onSubmit={onSubmit} submitting={submitting} onChange={onChange} value={commentValue} />
    </MaxWidthContainer>
  );
};

export default Detail;

export const CategoryBox = styled.span`
  font-weight: 500;
  font-size: 15px;
  color: #ccc;
`;

export const InfoBox = styled.div`
  font-weight: 300;
  font-size: 15px;
  color: #ccc;
  margin-bottom: 2em;
`;

export const TextContent = styled.div`
  margin-top: 4em;
`;
