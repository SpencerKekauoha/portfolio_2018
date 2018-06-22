import React from 'react';
import { Link } from "react-router-dom";

import './Card.css';

function Card(props) {

  let cards = props.work.map((card, key) => {
    const backgroundImageStyle = {
      backgroundImage: `url(${card.featuredImage})`
    };

    let techList = card.tech.map((tech, techKey) => <div className="tag" key={techKey}><h5>{tech}</h5></div>)

    return  <Link className="link" key={key} to={`/work/${card.id}`}>
              <div className="card" >
                <div className="card-top">
                  <h3>{card.projectName}</h3>
                  { props.url.match.path !== '/work' ? <h4>{card.projectType}</h4> : null }
                </div>
                <div className="card-image" style={backgroundImageStyle}></div>
                <div className="card-bottom">
                  { props.url.match.path !== '/work' ? <div className="description">
                    <p>{card.projectDescription}</p>
                  </div> : null }
                  <div className="tags">
                    {techList}
                  </div>
                </div>
              </div>
            </Link>
  });

  return (
      <div className="card-container">
        {cards}
      </div>
  )
}

export default Card;
