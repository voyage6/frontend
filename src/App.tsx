import React from 'react';

import Login from './components/Login';
import MyPage from './components/MyPage';
import Signup from './components/Signup';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>HOME</h1>
        {/* <Login/> */}
        {/* <Signup/> */}
        <MyPage/>
    </div>
  );
}

export default App;
