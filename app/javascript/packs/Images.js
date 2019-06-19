import React from 'react';

class Images extends React.Component {
  constructor() {
    super();
    this.state = {
      images: null
    };

    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount() {
    const request = new XMLHttpRequest();

    const url = 'http://localhost:3000/api/image_url.json';
    request.open('GET', url, true);
    request.onload = () => {
      // Begin accessing JSON data here
      let data = null;
      try {
        data = JSON.parse(request.response);
      } catch (error) {
        console.log(error);
      }

      if (request.status === 200) {
        const images = [];
        data.forEach((entry) => {
          if (entry.url) {
            images.push(entry.url);
          }
        });

        this.setState({ images });
      } else {
        console.log('error in fetching images');
      }
    };
    request.send();
  }

  renderImages() {
    return this.state.images.map((item, index) => (<div key={index}> <img alt='img' key={index} src={item} /> </div>));
  }

  render() {
    return (
      <div>
        {this.state.images ? this.renderImages() : null}
      </div>
    );
  }
}

export default Images;
