import React, { FC } from 'react';
import { Header, Wrapper } from './styles';
import Avatar from '../../components/Avatar';

interface Props {
  children: JSX.Element;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <img src='/images/title-note.svg' alt='' />
        <h1>Chumkong</h1>
        <Avatar />
      </Header>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Container;
