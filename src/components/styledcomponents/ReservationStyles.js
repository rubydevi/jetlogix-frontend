import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  width: 450px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
  font-size: 1rem;
`;

export const CardText = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;
  font-size: 0.9rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px; 
`;
