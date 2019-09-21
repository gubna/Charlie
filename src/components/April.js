import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import charlieapril from './images/charlieapril.jpg';

const April = (props) => {
  return (
    <div>
      <Card>
        <CardBody className="chumpkin">
          <CardTitle>Charles White</CardTitle>
          <CardSubtitle>April 2019</CardSubtitle>
          <CardText>1 month old</CardText>
        </CardBody>
        <img width="100%" height="420em" src={charlieapril} />
        <CardBody>     
        </CardBody>
      </Card>
    </div>
  );
};

export default April;