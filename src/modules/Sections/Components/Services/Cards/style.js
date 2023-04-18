import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 35px;
`;

export const Image = styled.img`
  width: 330px;
  height: 220px;
  background-size: cover;
  object-fit: contain;
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
`;
