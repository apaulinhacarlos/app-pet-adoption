// import React, { useContext, useMemo, useState } from 'react';
// import { FiLock, FiUser } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="container">
      <header>
        <h1>Login</h1>
      </header>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
