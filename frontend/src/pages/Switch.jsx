import React, { useState } from 'react';
import Signup from './SignUp';
import Login from './Login';

function Switch() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="app-container">
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Go to Signup' : 'Go to Login'}
      </button>
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
};

export default Switch;
