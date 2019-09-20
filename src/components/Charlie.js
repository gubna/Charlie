import React, { Component } from 'react';
import charliejune from './images/charliejune.jpg';
import charliejuly from './images/charliejuly.jpg';
import charlieaugust from './images/charlieaugust.jpg';
import charlieseptember from './images/charlieseptember.jpg';

class Charlie extends React.Component {
  render() {
    return (
      <div>
      <img src={charliejuly} />
      <img src={charliejune} />
      <img src={charlieaugust} />
      <img src={charlieseptember} />
      </div>
    );
  }
}

export default Charlie;