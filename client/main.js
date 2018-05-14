// import React
import React from 'react';
import ReactDOM from "react-dom";
import ImageList from "./components/image_list";

// create component
const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  );
};

// render component
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
});
