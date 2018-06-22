import React from 'react';

import Hero from './Hero';
import Card from '../card/Card';
// import './Nav.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Card work={this.props.work} url={this.props} />
      </div>
    )
  }
}

export default Home;
