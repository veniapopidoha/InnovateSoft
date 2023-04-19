import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 35px;
  @media screen and (max-width: 480px) {
    margin: 0;
  }
`;

export const Image = styled.img`
  width: 330px;
  background-size: cover;
  object-fit: contain;
  @media screen and (max-width: 480px) {
    width: 200px;
  }
`;

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 92.6%;
  text-align: center;
  max-width: 300px;

  color: #767676;
  @media screen and (max-width: 480px) {
    font-size: 20px;
    margin-top: 0;
  }
  @media screen and (max-width: 380px) {
    font-size: 15px;
  }
`;
