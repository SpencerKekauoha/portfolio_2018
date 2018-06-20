import React from 'react';

import './Card.css';

function Card(props) {

  let cards = props.work.map((card, key) => {
    console.log(card);
    const backgroundImageStyle = {
      backgroundImage: `url(${card.featuredImage})`
    };

    let techList = card.tech.map((tech, techKey) => <span key={techKey}>{tech}</span>)

    return  <div className="card" key={key}>
              <div className="card-top">
                <h3>{card.projectName}</h3>
                <h4>{card.projectType}</h4>
              </div>
              <div className="card-image" style={backgroundImageStyle}></div>
              <div className="card-bottom">
                <div className="description">
                  <p>{card.projectDescription}</p>
                </div>
                <div className="tags">
                  {techList}
                </div>
              </div>
            </div>
  });

  return (
      <div className="card-container">
        {cards}
      </div>
  )
}

export default Card;
