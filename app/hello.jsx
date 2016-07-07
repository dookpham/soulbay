import React from 'react';
import World from './world.jsx';
 
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <World />
      </div>
    );
  }
}

module.exports = Hello;