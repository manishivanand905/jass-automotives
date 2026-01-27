import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #292929;
  padding: 20px;
`;

const AuthWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 500px;
  border: 2px solid #cc0000;
  box-shadow: 0 0 25px rgba(204, 0, 0, 0.5);
  overflow: hidden;

  &.toggled .credentials-panel.signin .slide-element {
    transform: translateX(-120%);
    opacity: 0;
    transition-delay: ${props => `${props.$index * 0.1}s`};
  }

  &.toggled .credentials-panel.signup .slide-element {
    transform: translateX(0%);
    opacity: 1;
    filter: blur(0px);
    transition-delay: ${props => `${1.7 + props.$index * 0.1}s`};
  }

  &.toggled .welcome-section.signin .slide-element {
    transform: translateX(120%);
    opacity: 0;
    filter: blur(10px);
  }

  &.toggled .welcome-section.signup .slide-element {
    transform: translateX(0%);
    opacity: 1;
    filter: blur(0);
  }

  &.toggled .background-shape {
    transform: rotate(0deg) skewY(0deg);
    transition-delay: .5s;
  }

  &.toggled .secondary-shape {
    transform: rotate(-11deg) skewY(-41deg);
    transition-delay: 1.2s;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: auto;
    border: none;
    box-shadow: none;
    background: transparent;

    &.toggled .credentials-panel.signin {
      display: none;
    }

    &.toggled .credentials-panel.signup {
      display: flex;
    }
  }
`;

const CredentialsPanel = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 10;

  &.signin {
    left: 0;
    padding: 0 40px;
  }

  &.signup {
    left: 0;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    padding: 40px 30px;
    left: 0;
    right: 0;

    &.signup {
      display: none;
    }
  }
`;

const SlideElement = styled.div`
  transition: .7s ease;
  opacity: 1;
  transform: translateX(0%);

  @media (max-width: 768px) {
    transform: translateY(0);
    opacity: 0;
    filter: blur(0);
    animation: slideInUp 0.5s ease forwards;
    animation-delay: ${props => props.$index * 0.1}s;
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 25px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
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
  padding-right: 23px;
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

  @media (max-width: 480px) {
    font-size: 14px;
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

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border-bottom: 2px solid #fff;
  padding-right: 23px;
  transition: .5s;
  cursor: pointer;

  &:focus {
    border-bottom: 2px solid #cc0000;
  }

  option {
    background: #292929;
    color: #fff;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  position: relative;
  width: 100%;
  height: 45px;
  background: transparent;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #cc0000;
  overflow: hidden;
  z-index: 1;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    height: 300%;
    width: 100%;
    background: linear-gradient(#292929, #cc0000, #292929, #cc0000);
    top: -100%;
    left: 0;
    z-index: -1;
    transition: .5s;
  }

  &:hover::before {
    top: 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    height: 40px;
  }
`;

const SwitchLink = styled.div`
  font-size: 14px;
  text-align: center;
  margin: 20px 0 10px;
  color: #fff;

  button {
    background: none;
    border: none;
    text-decoration: none;
    color: #cc0000;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ForgotPassword = styled.div`
  text-align: right;
  margin-top: 10px;
  
  button {
    background: none;
    border: none;
    color: #cc0000;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    padding: 0;

    &:hover {
      text-decoration: underline;
    }
  }


`;

const WelcomeSection = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 8;

  &.signin {
    right: 0;
    text-align: right;
    padding: 0 40px 60px 150px;
  }

  &.signup {
    right: 0;
    text-align: right;
    padding: 0 40px 60px 150px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 36px;
    line-height: 1.3;
    color: #fff;
  }

  p {
    font-size: 16px;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none !important;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
`;

const WelcomeSlide = styled.div`
  transition: .7s ease;
  opacity: 1;
  transform: translateX(0);
`;

const BackgroundShape = styled.div`
  position: absolute;
  right: 0;
  top: -5px;
  height: 600px;
  width: 850px;
  background: linear-gradient(45deg, #292929, #cc0000);
  transform: rotate(10deg) skewY(40deg);
  transform-origin: bottom right;
  transition: 1.5s ease;
  transition-delay: 1.6s;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SecondaryShape = styled.div`
  position: absolute;
  left: 250px;
  top: 100%;
  height: 700px;
  width: 850px;
  background: #292929;
  border-top: 3px solid #cc0000;
  transform: rotate(0deg) skewY(0deg);
  transform-origin: bottom left;
  transition: 1.5s ease;
  transition-delay: .5s;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ErrorMsg = styled.p`
  color: #ff6b6b;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { register: registerSignin, handleSubmit: handleSubmitSignin, formState: { errors: errorsSignin }, setError: setErrorSignin } = useForm();
  const { register: registerSignup, handleSubmit: handleSubmitSignup } = useForm();
  const { register: registerForgot, handleSubmit: handleSubmitForgot } = useForm();

  const onSignin = (data) => {
    const credentials = {
      admin: { username: 'admin', password: 'admin123', redirect: '/admin/dashboard' },
      vendor: { username: 'vendor', password: 'vendor123', redirect: '/vendor/dashboard' },
      user: { username: 'user', password: 'user123', redirect: '/' }
    };

    const cred = credentials[data.role];
    
    if (data.username === cred.username && data.password === cred.password) {
      localStorage.setItem('userRole', data.role);
      localStorage.setItem('isAuthenticated', 'true');
      
      // Store user data for user role
      if (data.role === 'user') {
        localStorage.setItem('userData', JSON.stringify({
          name: 'Mani Shivanand',
          email: 'shivanand128510@gmail.com',
          phone: '+917416161249'
        }));
      }
      
      navigate(cred.redirect);
    } else {
      setErrorSignin('root', { message: 'Invalid credentials' });
    }
  };

  const onSignup = (data) => {
    console.log('Signup:', data);
    alert('Registration successful! Please login.');
    setIsToggled(false);
  };

  const onForgotPassword = (data) => {
    console.log('Forgot password:', data);
    alert('Password reset link sent to your email!');
    setShowForgotPassword(false);
  };

  if (showForgotPassword) {
    return (
      <PageWrapper>
        <AuthWrapper>
          <CredentialsPanel className="signin">
            <form onSubmit={handleSubmitForgot(onForgotPassword)}>
              <SlideElement $panel="signin" $index={0}>
                <Title>Forgot Password</Title>
              </SlideElement>
              <SlideElement $panel="signin" $index={1}>
                <FieldWrapper>
                  <Input type="email" required {...registerForgot("email")} />
                  <Label>Email</Label>
                </FieldWrapper>
              </SlideElement>
              <SlideElement $panel="signin" $index={2}>
                <SubmitButton type="submit">Reset Password</SubmitButton>
              </SlideElement>
              <SlideElement $panel="signin" $index={3}>
                <SwitchLink>
                  <button type="button" onClick={() => setShowForgotPassword(false)}>Back to Login</button>
                </SwitchLink>
              </SlideElement>
            </form>
          </CredentialsPanel>
        </AuthWrapper>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <AuthWrapper className={isToggled ? 'toggled' : ''}>
        <CredentialsPanel className="signin" style={{ display: isToggled ? 'none' : 'flex' }}>
          <form onSubmit={handleSubmitSignin(onSignin)}>
            <SlideElement $panel="signin" $index={0}>
              <Title>Login</Title>
            </SlideElement>
            <SlideElement $panel="signin" $index={1}>
              <FieldWrapper>
                <Select {...registerSignin("role", { required: true })}>
                  <option value="user">User</option>
                  <option value="vendor">Vendor</option>
                  <option value="admin">Admin</option>
                </Select>
              </FieldWrapper>
            </SlideElement>
            <SlideElement $panel="signin" $index={2}>
              <FieldWrapper>
                <Input type="text" required {...registerSignin("username")} />
                <Label>Username</Label>
              </FieldWrapper>
            </SlideElement>
            <SlideElement $panel="signin" $index={3}>
              <FieldWrapper>
                <Input type="password" required {...registerSignin("password")} />
                <Label>Password</Label>
              </FieldWrapper>
            </SlideElement>
            <SlideElement $panel="signin" $index={4}>
              <ForgotPassword>
                <button type="button" onClick={() => setShowForgotPassword(true)}>Forgot Password?</button>
              </ForgotPassword>
            </SlideElement>
            <SlideElement $panel="signin" $index={5}>
              <SubmitButton type="submit">Login</SubmitButton>
              {errorsSignin.root && <ErrorMsg>{errorsSignin.root.message}</ErrorMsg>}
            </SlideElement>
            <SlideElement $panel="signin" $index={6}>
              <SwitchLink>
                Don't have an account? <button type="button" onClick={() => setIsToggled(true)}>Sign Up</button>
              </SwitchLink>
            </SlideElement>
          </form>
        </CredentialsPanel>

        <CredentialsPanel className="signup" style={{ display: isToggled ? 'flex' : 'none' }}>
          <form onSubmit={handleSubmitSignup(onSignup)}>
            <SlideElement $panel="signup" $index={0}>
              <Title>Register</Title>
            </SlideElement>
            <SlideElement $panel="signup" $index={1}>
              <FieldWrapper>
                <Input type="text" required {...registerSignup("username")} />
                <Label>Username</Label>
              </FieldWrapper>
            </SlideElement>
            <SlideElement $panel="signup" $index={2}>
              <FieldWrapper>
                <Input type="email" required {...registerSignup("email")} />
                <Label>Email</Label>
              </FieldWrapper>
            </SlideElement>
            <SlideElement $panel="signup" $index={3}>
              <FieldWrapper>
                <Input type="password" required {...registerSignup("password")} />
                <Label>Password</Label>
              </FieldWrapper>
            </SlideElement>
            <SlideElement $panel="signup" $index={4}>
              <SubmitButton type="submit" style={{ marginTop: '20px' }}>Register</SubmitButton>
            </SlideElement>
            <SlideElement $panel="signup" $index={5}>
              <SwitchLink>
                Already have an account? <button type="button" onClick={() => setIsToggled(false)}>Sign In</button>
              </SwitchLink>
            </SlideElement>
          </form>
        </CredentialsPanel>

        <WelcomeSection className="signin" style={{ display: isToggled ? 'none' : 'flex' }}>
          <WelcomeSlide $section="signin" $index={0}>
            <h2>WELCOME BACK!</h2>
          </WelcomeSlide>
          <WelcomeSlide $section="signin" $index={1}>
            <p>Login to access your account</p>
          </WelcomeSlide>
        </WelcomeSection>

        <WelcomeSection className="signup" style={{ display: isToggled ? 'flex' : 'none' }}>
          <WelcomeSlide $section="signup" $index={0}>
            <h2>WELCOME!</h2>
          </WelcomeSlide>
          <WelcomeSlide $section="signup" $index={1}>
            <p>Create an account to get started</p>
          </WelcomeSlide>
        </WelcomeSection>

        <BackgroundShape className="background-shape" />
        <SecondaryShape className="secondary-shape" />
      </AuthWrapper>
    </PageWrapper>
  );
};

export default Login;
