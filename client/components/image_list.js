// Import React
import React from "react";
import ImageDetail from "./image_detail";



// Create component
const ImageList = (props) => {
 const RenderedImages = props.images.map(image =>
 <ImageDetail key={image.name} image={image}/>
 );

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

// Export Component
export default ImageList;
