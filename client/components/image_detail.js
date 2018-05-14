import React from 'react';

const ImageDetail = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.image} />
      </div>
      <div className="media-body">
        <h3 className="media-heading">
          {props.image.name}
        </h3>
        <h4> status:{props.image.status}</h4>
      </div>
    </li>
  );
};

export default ImageDetail;
