import styled from 'styled-components';

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20%;
  padding-top: 12px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0;
  }
`;

export default CenteredDiv;
