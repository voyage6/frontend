import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const AvatarWapper = () => {
  return (
    <Wapper>
      <div>
        <Avatar size={45} icon={<UserOutlined />} />
      </div>
    </Wapper>
  );
};

export default AvatarWapper;

export const Wapper = styled.div`
  position: absolute;
  top: 27px;
  right: 20px;
`;
