import { Typography, Button, Form, Input } from 'antd';
import React from 'react';
import styled from 'styled-components';


// Style

const StyledForm = styled(Form)`
width: 600px;
margin: auto;
`

const StyledTypography = styled(Typography.Title)`
  text-align: center;
`

const StyledFormItem = styled(Form.Item)`
  label {
    font-size: 16px;
  }
`

const StyledBtn = styled(Button)`
  border: none;
  background: #FFC769;
  font-weight: 700;

  :hover {
    background: #FFC769;

  }
`

// Function

const LoginPost = () => {
  alert('POST, 로그인')
}

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <StyledForm
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        size="large"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <StyledTypography>ChumKong</StyledTypography>

        
        <StyledFormItem
          label="아이디"
          name="id"
          rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
        >
          <Input size='large'/>
        </StyledFormItem>

        <StyledFormItem
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
        >
          <Input.Password size='large' />
        </StyledFormItem>

        {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

        <Form.Item>
          <StyledBtn
            type="primary"
            htmlType="submit"
            onClick={LoginPost}
            block>
            로그인
          </StyledBtn>
        </Form.Item>

        <Form.Item>
          <Button
            href=''
            block
          >
            회원가입
          </Button>
        </Form.Item>
      </StyledForm>
  );
};

export default Login;