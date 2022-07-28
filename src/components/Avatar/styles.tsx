import styled from 'styled-components';

export const Wapper = styled.div`
  position: absolute;
  top: 45px;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;

  & ul {
    position: absolute;
    background-color: #fff;
    top: 30px;
    right: 0;
    width: 120px;
    z-index: 9999;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    & li {
      text-align: center;
      padding: 0.5em 0;
    }
  }
`;
