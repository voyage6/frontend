import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-bottom: 1em;
  & h1 {
    margin-bottom: 0;
    font-weight: 700;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 0.5em;
  border-bottom: 1px solid #d9d9d9;
`;

export const NavItem = styled.div`
  margin: 0 1em;
  cursor: pointer;
  transition: transform 200ms;
  &:hover {
    transform: translateY(-2px);
    font-weight: 500;
  }
`;
