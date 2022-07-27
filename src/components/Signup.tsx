import React from 'react';
import { Button, Typography, Form, Input, Calendar } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Link } = Typography;

// Style

const StyledForm = styled(Form)`
width: 600px;
margin: auto;
`

const StyledTypography = styled(Typography.Title)`
  text-align: center;
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

const IdCheck = () => {
    alert('POST, ID 중복확인')
}

const SignupPost = () => {
    alert('POST, 회원가입')
}

const Signup: React.FC = () => {
    return (
        <StyledForm
            name="basic"
            initialValues={{ remember: true }}
            layout="vertical"
            size="large"
            autoComplete="off"
            requiredMark={false}
        >
            <StyledTypography>회원가입</StyledTypography>

            <Form.Item
                label="아이디"
                htmlFor='id'
                name="id"
                rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
            >
                <Input.Group>
                    <Input id='id' style={{ width: 'calc(100% - 100px)' }} />
                    <StyledBtn
                        type="primary"
                        style={{ width: '100px' }}
                        onClick={IdCheck}
                    >중복확인</StyledBtn>
                </Input.Group>
            </Form.Item>

            <Form.Item
                label="비밀번호"
                name="password"
                rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
            >
                <Input.Password />

            </Form.Item>

            <Form.Item
                label="비밀번호 확인"
                name="passwordCheck"
                rules={[{ required: true, message: '비밀번호 확인을 입력해주세요.' }]}
            >
                <Input.Password
                // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>

            <Form.Item
                label="이름"
                name="name"
                rules={[{ required: true, message: '이름를 입력해주세요.' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item >
                <StyledBtn
                    type="primary"
                    htmlType="submit"
                    onSubmit={SignupPost}
                    block>
                    회원가입
                </StyledBtn>
            </Form.Item>

            <Link href="https://ant.design" target="_blank">
             이미 회원이신가요? 로그인하러 가기
            </Link>
        </StyledForm>
    );
};

export default Signup;