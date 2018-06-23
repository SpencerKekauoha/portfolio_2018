import React from 'react';

import './About.css';
import profileImage from '../../assets/img/profile_pic.png';

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      description: "I'm a Frontend Web Developer based in Salt Lake City, Utah.  I love the challenge of coding and figuring out best practices of development and learning new tech. If you are interested in my work, feel free to contact me.",
      linkedin: 'https://www.linkedin.com/in/spencerkekauoha/',
      email: 'mailto:spkekauoha@gmail.com'
    }
  }

  render() {

    return (
      <div className="about">
        <div className="about-card">
          <div className="about-information">
            <img src={profileImage} alt=""/>
            <div className="container">
              <h3>Hi, I'm Spencer.</h3>
              <p>{this.state.description}</p>
              <div className="contact-info">
                <h5>Contact me on <a href={this.state.linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a></h5>
                <h5>or send me an <a href={this.state.email}>email</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
