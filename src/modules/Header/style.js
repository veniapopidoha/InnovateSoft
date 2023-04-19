import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
`;

export const Logo = styled.img`
  width: 250px;
  margin: 50px 120px;
  @media screen and (max-width: 768px) {
    margin: 50px;
  }
  @media screen and (max-width: 480px) {
    width: 150px;
  }
`;
