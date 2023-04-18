import { Image, Title, Wrap } from './style'


export const Card = (props) => {
  return <Wrap>
    <Image src={props.img}/>
    <Title>{props.title}</Title>
  </Wrap>
}