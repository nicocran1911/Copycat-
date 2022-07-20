//Presentational Component Class
import React from 'react';
import {styles} from '../styles';
//Importing PropTypes
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

//Exporting CopyCat
export class CopyCat extends React.Component {

  
  render() {
    //Grabbing methods from the props
    const {copying, toggleTape, value, handleChange, name} = this.props;
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: '80px'}}>Copy Cat {name || "Tom"}</h1>

        <input
          type='text'
          value={value}
          onChange={handleChange}
        />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={styles.imgstyles}
        />
        <p>{copying && value}</p>
      </div>
    );
  };
}

//Declaring propTypes property
CopyCat.propTypes ={
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string
}

