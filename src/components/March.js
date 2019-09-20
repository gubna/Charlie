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
        <CardBody>
          <CardTitle>Charles White</CardTitle>
          <CardSubtitle>March 8th 2019</CardSubtitle>
          <CardText>newborn</CardText>
        </CardBody>
        <img width="100%" src={charliemarch} />
        <CardBody>     
        </CardBody>
      </Card>
    </div>
  );
};

export default March;