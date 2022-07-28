import styled from 'styled-components';
import { Typography, Button, Form } from 'antd';

export const StyledForm = styled(Form)`
  width: 400px;
  margin: auto;
`;

export const StyledTypography = styled(Typography.Title)`
  margin-top: 60px;
  text-align: center;
`;

export const StyledFormItem = styled(Form.Item)`
  label {
    font-size: 16px;
  }
`;

export const StyledBtn = styled(Button)`
  border: none;
  background: #FFC769;
  font-weight: 700;

  :hover {
    background: #FFC769;

  }
`;