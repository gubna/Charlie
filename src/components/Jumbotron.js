import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid  className="color">
        <Container fluid>
          <h1 className="display-3">Charles White</h1>
          <p className="lead">Born a Piceses at Rock Cottage in the wee hours of March 8th. Keep an eye on this young fella.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
