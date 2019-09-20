import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import charlieaugust from './images/charlieaugust.jpg';

const August = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Charles White</CardTitle>
          <CardSubtitle>August 2019</CardSubtitle>
          <CardText>5 months old</CardText>
        </CardBody>
        <img width="100%" src={charlieaugust} />
        <CardBody>     
        </CardBody>
      </Card>
    </div>
  );
};

export default August;