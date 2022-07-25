import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const AvatarWapper = () => {
  return (
    <Wapper>
      <Avatar size={30} icon={<UserOutlined />} />
    </Wapper>
  );
};

export default AvatarWapper;

export const Wapper = styled.div`
  position: absolute;
  top: 45px;
  right: 20px;
  transform: translateY(-50%);
`;
