import styled from 'styled-components'; 
import LoginForm from './LoginForm';

function LoginPage() {
  return (
    <Box>
      <LoginForm />
    </Box>
  )
}

export default LoginPage;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
