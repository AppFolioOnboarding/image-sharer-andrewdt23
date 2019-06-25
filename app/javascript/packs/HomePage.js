import React from 'react';
import ImageForm from './ImageForm';
import Images from './Images';
import Header from './Header';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <ImageForm />
        <Images />
      </div>
    );
  }
}

export default HomePage;
