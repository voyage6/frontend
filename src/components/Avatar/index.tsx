import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import { Wapper } from './styles';

const AvatarWapper = () => {
  return (
    <Wapper>
      <Avatar size={30} icon={<UserOutlined />} />
    </Wapper>
  );
};

export default AvatarWapper;
