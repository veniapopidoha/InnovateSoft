import { Logo, Wrap } from './style';
import logo from '../../images/logoW.png'

export const Header = () => {
  return (
    <Wrap>
      <Logo src={logo}/>
    </Wrap>
  );
};
