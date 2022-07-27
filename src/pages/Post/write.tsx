import React, { useCallback, useState } from 'react';
import { MaxWidthContainer } from '../../components/PostList/styles';
import styled from 'styled-components';
import SelectBox from '../../components/SelectBox';
import UploadImage from '../../components/UploadImage';
import { createPost } from '../../api/createPost';
import { openNotification } from '../../utils/notification';
import { useNavigate } from 'react-router-dom';

const WritePage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const saveImagePath = useCallback((path: string) => {
    setImages((prev) => [...prev, path]);
  }, []);

  const onSubmit = useCallback(async () => {
    if (!category) {
      return openNotification('bottom', '카테고리를 선택해주세요', '');
    }
    if (!title || !contents || images.length === 0) {
      return openNotification('bottom', '이미지,제목,내용은 필수입니다.', '');
    }
    const res = await createPost({ title, contents, imgUrls: images, category });
    if (res.status === 201) {
      navigate(-1);
    }
  }, [category, images, title, contents]);

  return (
    <MaxWidthContainer style={{ padding: '2rem', maxWidth: '774px' }}>
      <SubTitle>글쓰기</SubTitle>
      <SelectBox setCategory={setCategory} />
      <UploadImage saveImagePath={saveImagePath} />
      <InputBox>
        <input type='text' placeholder='제목' value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder='내용을 입력하세요' value={contents} onChange={(e) => setContents(e.target.value)} />
      </InputBox>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onSubmit}>등록</Button>
      </div>
    </MaxWidthContainer>
  );
};

export default WritePage;

export const SubTitle = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
`;

export const InputBox = styled.div`
  border: 1px solid #d9d9d9;
  min-height: 470px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  & input {
    font-weight: 700;
    font-size: 22px;
    line-height: 22px;
    border: none;
    width: 100%;
    outline: none;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.3em;
  }

  & textarea {
    padding-top: 0.5em;
    width: 100%;
    border: none;
    outline: none;
    flex: 1;
    resize: none;
  }
`;

export const Button = styled.button`
  width: 72px;
  height: 28px;
  background: #ffc769;
  border: 1px solid #ffc769;
  border-radius: 2px;

  font-weight: 600;
  font-size: 13px;
  text-align: center;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;
  margin-top: 2em;
  margin-bottom: 10rem;

  &:hover {
    background: #d79b3a;
  }
`;
