import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { StyledForm, StyledTypography, StyledFormItem, StyledBtn } from './styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setCookies } from '../../utils/cookie';
import instance from '../../services/AxiosManager';
import { openNotification } from '../../utils/notification';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/features/userSlice';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setUser } = userSlice.actions;
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const LoginPost = async () => {
    let token;
    try {
      const res = await instance.post('/api/users/login', { userId, userPassword: userPw });
      token = res.data;
      setCookies('token', token);
    } catch (e: any) {
      console.log(e);
      openNotification('bottom', '로그인 실패', '아이디 혹은 비밀번호가 올바르지 않습니다.', true);
    }

    try {
      const res = await instance.get('/api/users', {
        headers: {
          Authorization: token,
        },
      });
      dispatch(setUser({ ...res.data, isLogin: true }));
      navigate('/');
    } catch (e) {
      console.log(e);
      openNotification('bottom', '로그인 실패', '', true);
    }
  };

  return (
    <StyledForm
      name='basic'
      layout='vertical'
      initialValues={{ remember: true }}
      size='large'
      autoComplete='off'
      requiredMark={false}
      onFinish={LoginPost}
    >
      <StyledTypography level={3}>로그인</StyledTypography>

      <StyledFormItem label='아이디' name='id' rules={[{ required: true, message: '아이디를 입력해주세요.' }]}>
        <Input value={userId} onChange={(e) => setUserId(e.target.value)} />
      </StyledFormItem>

      <StyledFormItem
        label='비밀번호'
        name='password'
        rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
      >
        <Input.Password value={userPw} onChange={(e) => setUserPw(e.target.value)} />
      </StyledFormItem>

      <Form.Item>
        <StyledBtn type='primary' htmlType='submit' block>
          로그인
        </StyledBtn>
      </Form.Item>

      <Form.Item>
        <Button onClick={() => navigate('/signup')} block>
          회원가입
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default LoginPage;
