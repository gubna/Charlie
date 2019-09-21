import React from 'react';
import July from './components/July';
import June from './components/June';
import August from './components/August';
import September from './components/September';
import May from './components/May';
import April from './components/April';
import March from './components/March';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <March />,
      <April />,
      <May />,
      <June />,
      <July />,
      <August />,
      <September />  
    </div>
  );
}

export default App;
