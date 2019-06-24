import React from 'react';
import ImageForm from './ImageForm';
import Images from './Images';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <ImageForm />
        <Images />
      </div>
    );
  }
}

export default HomePage;
