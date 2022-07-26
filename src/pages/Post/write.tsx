import React from 'react';
import { MaxWidthContainer } from '../../components/PostList/styles';
import styled from 'styled-components';
import SelectBox from '../../components/SelectBox';
import UploadImage from '../../components/UploadImage';
import { Divider, Input } from 'antd';

const { TextArea } = Input;

const WritePage = () => {
  return (
    <MaxWidthContainer style={{ padding: '2rem', maxWidth: '774px' }}>
      <SubTitle>글쓰기</SubTitle>
      <SelectBox />
      <UploadImage />
      <InputBox>
        <input type='text' placeholder='제목' />
        <textarea placeholder='내용을 입력하세요' />
      </InputBox>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button>등록</Button>
      </div>
    </MaxWidthContainer>
  );
};

export default WritePage;

const SubTitle = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
`;

const InputBox = styled.div`
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

const Button = styled.button`
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
