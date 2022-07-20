import React from 'react';
import ReactDOM from 'react-dom';
//Importing CopyCat
import { CopyCat } from '../components/CopyCat';
const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    //Binding handleChange
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

//Creating event handler function, this will update the state with <input>'s value whenever it changes
  handleChange(e) {
    this.setState({input: e.target.value})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape
    const value = this.state.input;
    const handleChange = this.handleChange;
  //Passing methods as props to <CopyCat/>
    return (
      <CopyCat 
      copying={copying} 
      toggleTape={toggleTape}
      value={value}
      handleChange={handleChange}
      name={"Bob"}
      />
      );
  };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));