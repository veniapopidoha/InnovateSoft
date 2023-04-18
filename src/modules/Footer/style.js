import styled from 'styled-components';
import bg from '../../images/footerBg.png';

export const Wrap = styled.div`
  width: 100vw;
  height: 60vh;
  background: url('${bg}');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 156.1%;
  color: #ffffff;
  text-align: center;
  position: relative;
  top: 13vh;
`;

export const Logo = styled.img`
  width: 250px;
`;

export const LogoConteiner = styled.div`
  margin-top: 20vh;
  position: absolute;
  left: 10vw;
  width: 80vw;
  border-bottom: 2px solid #fff;
`;

export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 92.6%;
  color: #ffffff;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 27vh;
  width: 80vw;
  justify-content: space-between;
`;

export const ColumnBlock = styled.div``;

export const Info = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 156.1%;
  margin: 0;
  color: #ffffff;
`;
