import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import charlieseptember from './images/charlieseptember.jpg';

const September = (props) => {
  return (
    <div>
      <Card>
        <CardBody className="chumpkin">
          <CardTitle>Charles White</CardTitle>
          <CardSubtitle>September 2019</CardSubtitle>
          <CardText>6 months old</CardText>
        </CardBody>
        <img width="100%" height="350em" src={charlieseptember} />
        <CardBody>     
        </CardBody>
      </Card>
    </div>
  );
};

export default September;