import React from 'react';
import { MaxWidthContainer } from '../../components/PostList/styles';
import styled from 'styled-components';
import SelectBox from '../../components/SelectBox';
import UploadImage from '../../components/UploadImage';
import { Divider } from 'antd';

const WritePage = () => {
  return (
    <MaxWidthContainer>
      <SubTitle>글쓰기</SubTitle>
      <SelectBox />
      <UploadImage />
      <InputBox>
        <input type='text' placeholder='제목' />
      </InputBox>
      <Divider />
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

  & input {
    font-weight: 700;
    font-size: 22px;
    line-height: 22px;
    color: #cccccc;
    border: none;
    width: 100%;
    outline: none;
  }
`;
//
