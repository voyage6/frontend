import React, { Suspense, useCallback, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Container from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getCookies } from '../utils/cookie';
import instance from '../services/AxiosManager';
import { userSlice } from '../redux/features/userSlice';

const Home = React.lazy(() => import('../pages/Home'));
const LoginPage = React.lazy(() => import('../pages/Login'));
const SignupPage = React.lazy(() => import('../pages/Signup'));
const MyPage = React.lazy(() => import('../pages/Mypage'));
const WritePage = React.lazy(() => import('../pages/Post/write'));
const PostPage = React.lazy(() => import('../pages/Post'));

function App() {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setUser } = userSlice.actions;

  const handleAutoLogin = useCallback(
    async (token: string) => {
      const res = await instance.get('/api/users', {
        headers: {
          Authorization: token,
        },
      });
      dispatch(setUser({ ...res.data, isLogin: true }));
      navigate('/');
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    const token = getCookies('token');
    if (token) {
      handleAutoLogin(token);
    }
  }, []);

  useEffect(() => {
    if (!user.isLogin) {
      navigate('/login');
    }
  }, [navigate, user]);

  return (
    <Suspense>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/write' element={<WritePage />} />
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
