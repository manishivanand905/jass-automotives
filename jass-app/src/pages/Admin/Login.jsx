import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #292929;
`;

const LoginBox = styled.div`
  background-color: #3a3a3a;
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  color: white;
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  background-color: #292929;
  border: 1px solid #cc0000;
  border-radius: 6px;
  color: white;
  font-size: 15px;
  outline: none;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b30000;
  }
`;

const ErrorMsg = styled.p`
  color: #ff6b6b;
  font-size: 14px;
  text-align: center;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <LoginWrapper>
      <LoginBox>
        <Title>Admin Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <ErrorMsg>{error}</ErrorMsg>}
          <Button type="submit">Login</Button>
        </Form>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;
