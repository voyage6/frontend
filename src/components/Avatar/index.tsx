import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React, { useCallback, useState } from 'react';
import { Wapper } from './styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/features/userSlice';

const AvatarWapper = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const { logout } = userSlice.actions;
  const onShowMenu = useCallback(() => {
    setShowMenu(true);
  }, []);
  const onHideMenu = useCallback(() => {
    setShowMenu(false);
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(logout());
    document.cookie = 'token=;Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }, [dispatch, logout]);

  return (
    <Wapper onMouseOver={onShowMenu} onMouseLeave={onHideMenu}>
      <Avatar size={30} icon={<UserOutlined />} />
      {showMenu && (
        <ul>
          <li>
            <Link to='/myPage'>마이페이지</Link>
          </li>
          <li style={{ color: 'tomato' }} onClick={onLogOut}>
            로그아웃
          </li>
        </ul>
      )}
    </Wapper>
  );
};

export default AvatarWapper;
