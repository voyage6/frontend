import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './Container';

const Home = React.lazy(() => import('../pages/Home'));
const WritePage = React.lazy(() => import('../pages/Post/write'));
const PostPage = React.lazy(() => import('../pages/Post'));

function App() {
  return (
    <Suspense>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logIn' element={<div>logIn page</div>} />
          <Route path='/signUp' element={<div>signUp page</div>} />
          <Route path='/myPage' element={<div>myPage</div>} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/write' element={<WritePage />} />
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
