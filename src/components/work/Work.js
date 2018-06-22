import React from 'react';

import Card from '../card/Card';
import './work.css';

class Work extends React.Component {

  render() {
    return (
      <div className="work-gallery">
        <h2>All Work</h2>
        <Card work={this.props.works} url={this.props} />
      </div>
    )
  }
}

export default Work;
