import React from 'react';

import Card from '../card/Card';
import './work.css';

class Work extends React.Component {

  render() {
    console.log(this.props, 'work');

    return (
      <div className="work-gallery">
        <h2>All Works</h2>
        <Card work={this.props.works} url={this.props} />
      </div>
    )
  }
}

export default Work;
