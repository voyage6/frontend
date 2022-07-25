import React, { FC } from 'react';
import { Header, Nav, NavItem, Wrapper } from './styles';
import Avatar from '../../components/Avatar';

interface Props {
  children: JSX.Element;
}

const category = ['전체', '피아노', '기타', '우쿨렐레', '드럼', '오르골', '클라리넷'];

const Container: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <img src='/images/title-note.svg' alt='' />
        <h1>Chumkong</h1>
        <Avatar />
      </Header>
      <Nav>
        {category.map((c, idx) => (
          <NavItem key={idx}>{c}</NavItem>
        ))}
      </Nav>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Container;
