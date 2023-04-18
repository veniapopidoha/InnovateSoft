import styled from 'styled-components';
import shapes from '../../../images/shapes2.png';

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 92.6%;
  background: linear-gradient(93.76deg, #9f59da 0.07%, #c75dec 148.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('${shapes}');
  height: 100vh;
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
