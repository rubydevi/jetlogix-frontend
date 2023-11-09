import styled from 'styled-components';
import plane from '../../assets/golfstreamnew.png';

const LoginStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${plane});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0;
  }
`;

export default LoginStyle;
