import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import charliejune from './images/charliejune.jpg';

const June = (props) => {
  return (
    <div>
      <Card>
        <CardBody className="chumpkin">
          <CardTitle>Charles White</CardTitle>
          <CardSubtitle>June 2019</CardSubtitle>
          <CardText>3 months old</CardText>
        </CardBody>
        <img width="100%" height="420em" src={charliejune} />
        <CardBody>     
        </CardBody>
      </Card>
    </div>
  );
};

export default June;