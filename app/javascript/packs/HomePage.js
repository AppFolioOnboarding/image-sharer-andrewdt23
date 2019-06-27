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
        <div className='body-container'>
          <h1 className='title'>Rails/React ImageShare</h1>
          <ImageForm />
          <Images />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
