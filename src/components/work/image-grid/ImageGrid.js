import React from 'react';

import './ImageGrid.css';

function ImageGrid(props) {

  let images = props.images.map((img, key) => {
    const backgroundImageStyle = {
      backgroundImage: `url(${img})`
    };
    return <div className="image-grid-card" key={key} style={backgroundImageStyle}></div>
  });



  return (
    <div className="image-grid">
      {images}
    </div>
  )
}

export default ImageGrid;
