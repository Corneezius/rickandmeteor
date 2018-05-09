// import React
import React from 'react';
import ReactDOM from "react-dom";

// create component
const App = () => {
  return (
    <div>
      React App #2
    </div>
  );
};

// render component
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
});
