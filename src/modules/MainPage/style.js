import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
  @media screen and (max-width: 480px) {
    height: 60vh;
  }
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
  object-fit: contain;
  @media screen and (max-width: 768px) {
    height: 50vh;
  }
  @media screen and (max-width: 480px) {
    height: 40vh;
  }
`;

export const Bg = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 0;
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
  @media screen and (max-width: 480px) {
    height: 50vh;
  }
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
  display: block;
  @media screen and (max-width: 768px) {
    font-size: 45px;
    max-width: 350px;
  }
  @media screen and (max-width: 480px) {
    font-size: 25px;
    max-width: 150px;
  }
`;

export const TextBlock = styled.div`
  margin-left: 140px;
  display: flex;
  flex-direction: column;
  width: 500px;
  @media screen and (max-width: 768px) {
    margin-left: 40px;
  }
  @media screen and (max-width: 480px) {
    
  }
`;

export const SubTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 92.6%;
  z-index: 10;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 300px;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
    width: 200px;
  }
`;

export const Man = styled.img`
  position: absolute;
  right: 40px;
  bottom: 40px;
  @media screen and (max-width: 768px) {
    width: 300px;
    top: 30vh;
    right: 0;
  }
  @media screen and (max-width: 480px) {
    width: 200px;
  }
`;
