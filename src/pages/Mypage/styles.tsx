import styled from 'styled-components';
import { Image, Form, Button } from 'antd';

export const StyledImage = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  text-align: center;
  margin: auto;
`;

export const StyledForm = styled(Form)`
  width: 400px;
  margin: 40px auto;
`;

export const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 40px;
  padding: 6.5px 11px;
  border: 1px solid #d9d9d9;
  font-size: 16px;
  line-height: 1.5715;

  :hover {
    border: 1px solid #3496fe;
  }
  :focus {
    border: 1px solid #3496fe;
  }
`;

export const StyledBtn = styled(Button)`
  border: none;
  background: #ffc769;
  width: 100%;

  :hover {
    background: #ffc769;
  }
`;
