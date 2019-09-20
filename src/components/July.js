import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import charliejuly from './images/charliejuly.jpg';

const July = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Charles White</CardTitle>
          <CardSubtitle>July 2019</CardSubtitle>
          <CardText>4 months old</CardText>
        </CardBody>
        <img width="100%" src={charliejuly} />
        <CardBody>     
        </CardBody>
      </Card>
    </div>
  );
};

export default July;
