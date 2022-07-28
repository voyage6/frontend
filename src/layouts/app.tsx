import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './Container';

const Home = React.lazy(() => import('../pages/Home'));
const LoginPage = React.lazy(() => import('../pages/Login'));
const SignupPage = React.lazy(() => import('../pages/Signup'));
const MyPage = React.lazy(() => import('../pages/Mypage'));
const WritePage = React.lazy(() => import('../pages/Post/write'));
const PostPage = React.lazy(() => import('../pages/Post'));

function App() {
  return (
    <Suspense>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/mypage' element={<MyPage/>} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/write' element={<WritePage />} />
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
