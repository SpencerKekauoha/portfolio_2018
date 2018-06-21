import React from 'react';

import './single-work.css';

class SingleWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      work: []
    }
  }

  componentDidMount() {
    let work = this.props.works.filter(work => work.id === Number(this.props.match.params.id));
    this.setState({ work: work});
  }

  render() {
    let project = this.state.work[0];
    let backgroundImageStyle;
    let techList;

    if (project) {
      backgroundImageStyle = {
        backgroundImage: `url(${project.featuredImage})`
      };

      techList = project.tech.map((tech, techKey) => <div className="tag" key={techKey}><h5>{tech}</h5></div>);
    }


    return (
        project ?
        <div className="single-project">
          <div className="project-card">
            <div className="gradient-bar"></div>
            <div className="project-card-top">
              <h3>{project.projectName}</h3>
              <h4>{project.projectType}</h4>
            </div>
            <div className="project-card-bottom" style={backgroundImageStyle}></div>
          </div>

          <div className="description-card">
            <div className="description-left">
              <a href={project.projectLink} target="_blank">Visit Site</a>
              {project.projectDescription}
            </div>
            <div className="tags">
              {techList}
            </div>
          </div>
        </div>
         : 'Loading'
    )
  }
}

export default SingleWork;
