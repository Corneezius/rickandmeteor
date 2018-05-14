import React from 'react';

const ImageDetail = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <h4 className="media-heading">
          {props.image.name}
        </h4>
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          <img src={props.image.image} />
        </h4>
      </div>
    </li>
  );
};

export default ImageDetail;
