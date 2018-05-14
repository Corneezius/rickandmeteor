// Import React
import React from "react";
import ImageDetail from "./image_detail";


const IMAGES = [
  {title: "One", link:"https://dummyimage.com/600x400/000/fff&text=Hello"},
  {title: "Two", link:"https://dummyimage.com/600x400/000/fff&text=Hello"},
  {title: "Three",link:"https://dummyimage.com/600x400/000/fff&text=Hello"},
]

// Create component
const ImageList = () => {
 const RenderedImages = IMAGES.map(function(image) {
   return <ImageDetail image={image}/>
 });

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

// Export Component
export default ImageList;
