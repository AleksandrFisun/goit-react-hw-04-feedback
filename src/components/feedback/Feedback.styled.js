import styled from 'styled-components';

export const FeedbackButton = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 220px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #2ee59d;
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;
