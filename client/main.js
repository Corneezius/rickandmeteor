// import React
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import ImageList from "./components/image_list";



// create component
class App extends Component {
  render() {
    return (
      <div>
        <ImageList />
      </div>
    );
  }
};

// render component
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
  axios.get("https://rickandmortyapi.com/api/episode/")
    .then(response => console.log(response));
});
