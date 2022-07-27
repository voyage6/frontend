import React, { ChangeEvent, useCallback, useState } from 'react';
import { MaxWidthContainer } from '../../components/PostList/styles';
import { SubTitle } from './write';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPostById } from '../../api/fetchPostById';
import { Post } from '../../typings/Post';
import { AxiosError } from 'axios';
import CenterSpinner from '../../components/CenterSpinner';
import styled from 'styled-components';
import ImageSlider from '../../components/ImageSlider';
import Comments from '../../components/Comments';
import Editor from '../../components/CommentEditor';
import { addComment, CommentDto } from '../../api/addComment';
import { deletePost } from '../../api/deletePost';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const onDeletePost = useCallback(async () => {
    if (!id) return;

    const res = await deletePost(parseInt(id));
    console.log(res);

    if (res.status >= 200 && res.status < 400) {
      navigate(-1);
    }
  }, [id, navigate]);

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
  }, [commentValue, id, mutate]);

  if (!data) {
    return <CenterSpinner />;
  }

  return (
    <MaxWidthContainer style={{ padding: '2rem', maxWidth: '774px', marginTop: '4em' }}>
      <SubTitle>
        {data.title} <CategoryBox>{data.category}</CategoryBox>
      </SubTitle>
      <InfoBox>
        {data.writerName ? data.writerName : '익명'} | {data.createdAt}{' '}
        <DeleteButton onClick={onDeletePost}>삭제</DeleteButton>
      </InfoBox>
      <ImageSlider data={data.imgUrls} />
      <TextContent>{data.contents}</TextContent>
      <Comments
        data={data.comments.map((c) => ({
          author: c.writerName ? c.writerName : '익명',
          avatar: c.profileUrl ? c.profileUrl : '/images/avatar.jpeg',
          content: c.contents,
          datetime: c.createdAt,
          id: c.id,
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

export const DeleteButton = styled.span`
  color: tomato;
  cursor: pointer;
`;
