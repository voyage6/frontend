import styled from 'styled-components';

export const HomeWrapper = styled.div`
  padding: 0 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 40px 0 10px 0;
`;

export const WriteButton = styled.button`
  border: none;
  background-color: #353535;
  font-weight: 500;
  font-size: 12px;
  color: white;
  padding: 0.3em 0.8em;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: #464646;
  }

  & > img {
    width: 1.7em;
    margin-right: 0.5em;
  }
`;
