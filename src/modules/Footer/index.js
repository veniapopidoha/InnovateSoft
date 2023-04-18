import {
  ColumnBlock,
  Info,
  InfoBlock,
  Logo,
  LogoConteiner,
  Text,
  Title,
  Wrap,
} from './style';
import logo from '../../images/logoW.png';

export const Footer = () => {
  return (
    <Wrap>
      <LogoConteiner>
        <Logo src={logo} />
      </LogoConteiner>
      <InfoBlock>
        <ColumnBlock>
          <Title>CONTACT INFO</Title>
          <Info>innovatesoftoffice@gmail.com</Info>
          <Info>+380993853095</Info>
        </ColumnBlock>
        <Title>OUR COMPANY</Title>
        <Title>OUR OFFER</Title>
        <Title>NEWS LETTER</Title>
      </InfoBlock>
      <Text>©2023 InnovateSoft WEB Page. All Rights Reserved</Text>
    </Wrap>
  );
};
