import React from 'react';
import ImageForm from './ImageForm';
import Images from './Images';
import Header from './Header';
import Footer from './Footer';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <ImageForm />
        <Images />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
