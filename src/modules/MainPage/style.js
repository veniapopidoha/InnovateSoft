import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const Shapes = styled.img`
  width: 100vw;
  height: 90vh;
  margin-top: 10vh;
  position: absolute;
  top: -10vh;
  mix-blend-mode: luminosity;
  transform: scale(0.9);
  z-index: 0;
`;

export const Bg = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 0;
`;

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 92.6%;
  z-index: 10;
  color: #ffffff;
  margin: 0; 
`;

export const TextBlock = styled.div`
  margin-left: 140px;
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const SubTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 92.6%;
  z-index: 10;
  color: #ffffff;
`;

export const Man = styled.img`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;