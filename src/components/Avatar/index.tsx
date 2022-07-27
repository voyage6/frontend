import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React, { useCallback, useState } from 'react';
import { Wapper } from './styles';
import { Link } from 'react-router-dom';

const AvatarWapper = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onShowMenu = useCallback(() => {
    setShowMenu(true);
  }, []);
  const onHideMenu = useCallback(() => {
    setShowMenu(false);
  }, []);

  return (
    <Wapper onMouseOver={onShowMenu} onMouseLeave={onHideMenu}>
      <Avatar size={30} icon={<UserOutlined />} />
      {showMenu && (
        <ul>
          <li>
            <Link to='/myPage'>마이페이지</Link>
          </li>
          <li style={{ color: 'tomato' }}>로그아웃</li>
        </ul>
      )}
    </Wapper>
  );
};

export default AvatarWapper;