import React, { useState } from 'react';
import { Typography, Form, Input } from 'antd';
import { StyledForm, StyledTypography, StyledBtn } from './styles';
import { useNavigate } from 'react-router-dom';

import { openNotification } from '../../utils/notification';
import instance from '../../services/AxiosManager';

const { Link } = Typography;

// Function

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');

  const valiedatPhoneNumber = (pwCheckInput: any, value: string) => {
    if (value !== userPw) {
      return Promise.reject(new Error(pwCheckInput.message));
    } else {
      return Promise.resolve();
    }
  };

  const SignupPost = async () => {
    try {
      await instance.post('/api/users/signup', {
        userId: userId,
        userPassword: userPw,
        userName: userName,
      });
      openNotification('bottom', '회원가입 성공', '');
      navigate('/login');
    } catch (e: any) {
      openNotification('bottom', '회원가입 실패', e.response.data, true);
    }
  };

  return (
    <StyledForm
      name='basic'
      initialValues={{ remember: true }}
      layout='vertical'
      size='large'
      autoComplete='off'
      requiredMark={false}
      onFinish={() => SignupPost()}
    >
      <StyledTypography level={3}>회원가입</StyledTypography>

      <Form.Item label='아이디' htmlFor='id' name='id' rules={[{ required: true, message: '아이디를 입력해주세요.' }]}>
        <Input id='id' value={userId} onChange={(e) => setUserId(e.target.value)} />
      </Form.Item>

      <Form.Item label='비밀번호' name='password' rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}>
        <Input.Password value={userPw} onChange={(e) => setUserPw(e.target.value)} />
      </Form.Item>

      <Form.Item
        label='비밀번호 확인'
        name='passwordCheck'
        rules={[
          {
            validator: valiedatPhoneNumber,
            message: '비밀번호가 맞지 않습니다.',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label='이름' name='name' rules={[{ required: true, message: '이름를 입력해주세요.' }]}>
        <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
      </Form.Item>

      <Form.Item>
        <StyledBtn type='primary' htmlType='submit' block>
          회원가입
        </StyledBtn>
      </Form.Item>

      <Link onClick={() => navigate('/login')} target='_blank'>
        이미 회원이신가요? 로그인하러 가기
      </Link>
    </StyledForm>
  );
};

export default SignupPage;
