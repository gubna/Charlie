import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import charliemarch from './images/charliemarch.jpg';

const March = (props) => {
  return (
    <div>
      <Card>
        <CardBody className="chumpkin">
          <CardTitle>Charles White</CardTitle>
          <CardSubtitle>March 8th 2019</CardSubtitle>
          <CardText>newborn</CardText>
        </CardBody>
        <img width="100%" height="420em" src={charliemarch} />
      </Card>
    </div>
  );
};

export default March;