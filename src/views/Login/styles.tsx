import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-image: url('./side.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Frame = styled.div`
  background-color: white;

  width: 400px;
  padding: 30px;
  border-radius: 10px;

  grid-column-start: 3;
  grid-column-end: 3;

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 425px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const Heading = styled.div`
  color: rgb(60, 60, 60);

  margin-bottom: 10px;

  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const Comment = styled.div`
  color: rgb(60, 60, 60);

  text-align: center;
  font-size: 20px;
`;

export const Group = styled.div`
  padding: 10px 0 0px 0;
  border-radius: 10px;

  display: flex;
  justify-content: space-evenly;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const SignIn = styled.button`
  color: white;
  background-color: rgb(211, 18, 110);

  padding: 10px 0px;
  margin-top: 20px;
  border-radius: 30px;
  border: none;

  text-align: center;
  text-decoration: none;
  font-size: 20px;

  transition: all 300ms;

  &:hover {
    background-color: rgb(139, 28, 140);
  }
  &:active {
    background-color: rgb(60, 60, 60);
  }
`;

export const Img = styled.img`
  width: 40px;
  height: auto;

  margin-bottom: 10px;

  align-self: center;
`;

export const SignUp = styled(Link)`
  color: rgb(211, 18, 110);

  text-align: center;
  text-decoration: none;
  font-size: 20px;

  transition: all 300ms;

  &:hover {
    color: dodgerblue;
  }
  &:active {
    color: rgb(60 60 60);
  }
`;
