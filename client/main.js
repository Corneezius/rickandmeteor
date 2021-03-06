// import React
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import ImageList from "./components/image_list";



// create component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {images: [] };
  }
  componentWillMount(){
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => this.setState({images: response.data.results}));
  }
  render() {
    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

// render component
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
});
