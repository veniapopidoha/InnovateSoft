import { CardDiv, Title } from '../style';
import { Card } from './Cards';
import design from '../../../../images/design.png';
import develope from '../../../../images/develope.png';
import admin from '../../../../images/admin.png';

export const Services = () => {
  return (
    <>
      <Title>Our Services</Title>
      <CardDiv>
        <Card img={design} title='WEB / MOBILE UI/UX Design ' />
        <Card img={develope} title='WEB / MOBILE Development ' />
        <Card img={admin} title='Website administration' />
      </CardDiv>
    </>
  );
};
