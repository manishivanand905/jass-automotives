import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { authService } from '../../services/authService';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #292929;
  padding: 20px;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: transparent;
  border: 2px solid #cc0000;
  box-shadow: 0 0 25px rgba(204, 0, 0, 0.5);
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
`;

const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 25px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border-bottom: 2px solid #fff;
  padding-right: 40px;
  transition: .5s;

  &:focus,
  &:valid {
    border-bottom: 2px solid #cc0000;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: -5px;
    color: #cc0000;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 16px;
  color: #fff;
  transition: .5s;
  pointer-events: none;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  background: transparent;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #cc0000;
  color: #fff;
  margin-top: 30px;
  transition: .5s;

  &:hover {
    background: #cc0000;
  }
`;

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await authService.resetPassword(token, data.password);
      alert('Password reset successful! Please login.');
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to reset password');
    }
  };

  return (
    <PageWrapper>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title>Reset Password</Title>
          <FieldWrapper>
            <Input type="password" required {...register("password")} />
            <Label>New Password</Label>
          </FieldWrapper>
          <FieldWrapper>
            <Input type="password" required {...register("confirmPassword")} />
            <Label>Confirm Password</Label>
          </FieldWrapper>
          {error && <p style={{ color: '#ff6b6b', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
          <SubmitButton type="submit">Reset Password</SubmitButton>
        </form>
      </FormContainer>
    </PageWrapper>
  );
};

export default ResetPassword;
