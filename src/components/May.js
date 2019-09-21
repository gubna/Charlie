import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import charliemay from './images/charliemay.jpg';

const May = (props) => {
  return (
    <div>
      <Card>
        <CardBody className="chumpkin">
          <CardTitle>Charles White</CardTitle>
          <CardSubtitle>May 2019</CardSubtitle>
          <CardText>2 months old</CardText>
        </CardBody>
        <img width="100%" height="420em" src={charliemay} />
        <CardBody>     
        </CardBody>
      </Card>
    </div>
  );
};

export default May;