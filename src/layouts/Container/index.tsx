import React, { FC } from 'react';
import { Header, Nav, NavItem, Wrapper } from './styles';
import Avatar from '../../components/Avatar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { categorySlice } from '../../redux/features/categorySlice';

interface Props {
  children: JSX.Element;
}

const category = ['전체', '피아노', '기타', '우쿨렐레', '드럼', '바이올린', '클라리넷', '계이름'];

const Container: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { changeTo } = categorySlice.actions;
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header>
        <img src='/images/title-note.svg' alt='note' />
        <h1 onClick={() => navigate('/')}>Chumkong</h1>
        <Avatar />
      </Header>
      <Nav>
        {category.map((c, idx) => (
          <NavItem key={idx} onClick={() => dispatch(changeTo(c))}>
            {c}
          </NavItem>
        ))}
      </Nav>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Container;
