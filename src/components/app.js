import React, { Component } from 'react';

import Header from './navbarheader/header';
import Navbar from './navbarheader/navbar';

class App extends Component {
  render() {
    return (
      <div className='app'>
        ART
        {this.props.children}
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default App;