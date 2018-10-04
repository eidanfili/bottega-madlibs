import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header("Bottega MadLibs", "Fill out the fields below and click the generate button to see your Mad Lib!") }
        <Card />
      </div>
    );
  }
}
//number labels

export default Home;