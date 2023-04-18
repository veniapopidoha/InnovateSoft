import { Bg, Man, Shapes, SubTitle, TextBlock, Title, Wrap } from './style';
import bg from '../../images/Vector.png';
import shapes from '../../images/shapes.png';
import man from '../../images/man.png';

export const MainPage = () => {
  return (
    <Wrap>
      <Bg src={bg}></Bg>
      <Shapes src={shapes}></Shapes>
      <TextBlock>
        <Title>
          Be More
          <br /> Attractive!
        </Title>
        <SubTitle>
          Make your customers dizzy with a better user experience and interface!
        </SubTitle>
      </TextBlock>
      <Man src={man} />
    </Wrap>
  );
};
