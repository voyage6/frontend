import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { StyledForm, StyledTypography, StyledFormItem, StyledBtn } from './styles'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setCookies } from '../../utils/cookie';


const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')

  const LoginPost = () => {
    axios.post('http://43.200.6.110/api/users/login', 
          {   userId : userId,
              userPassword : userPw,
          },{withCredentials: true})
          .then((response) => {
            const token = response.data
            setCookies('loginToken', token)
            console.log(token)
              // navigate('/')
          })
          .catch((response) => {
              console.log(response)
              alert('아이디 혹은 비밀번호가 올바르지 않습니다.')
          })
  }

    return (
      <StyledForm
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        size="large"
        autoComplete="off"
        requiredMark={false}
        onFinish={LoginPost}
      >
        <StyledTypography level={3}>로그인</StyledTypography>

        
        <StyledFormItem
          label="아이디"
          name="id"
          rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
        >
          <Input value={userId} onChange={(e) => setUserId(e.target.value)}/>
        </StyledFormItem>

        <StyledFormItem
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
        >
          <Input.Password value={userPw} onChange={(e) => setUserPw(e.target.value)} />
        </StyledFormItem>

        <Form.Item>
          <StyledBtn
            type="primary"
            htmlType="submit"
            block>
            로그인
          </StyledBtn>
        </Form.Item>

        <Form.Item>
          <Button
            onClick={() => navigate('/signup')}
            block
          >
            회원가입
          </Button>
        </Form.Item>
      </StyledForm>
  );
};

export default LoginPage;