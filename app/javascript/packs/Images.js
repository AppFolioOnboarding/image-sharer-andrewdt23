import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

class Images extends React.Component {
  constructor() {
    super();
    this.state = {
      images: null
    };
  }

  componentDidMount() {
    const request = new XMLHttpRequest();

    const url = '/api/image_url.json';
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
          if (entry.url && entry.tag_list) {
            images.push({
              url: entry.url,
              tagList: entry.tag_list
            });
          }
        });

        this.setState({ images });
      } else {
        console.log('error in fetching images');
      }
    };
    request.send();
  }

  renderTags = (tags) => {
    return tags.map((tag, index) => (
      <span className='tag' key={index}>{tag}</span>
    ));
  };

  renderCards = () => {
    return this.state.images.map((image, index) => (
      <div className='image-cards' key={index}>
        <Card style={{ backgroundColor: '#343A40'}}>
          <CardImg src={image.url} alt="Card image cap" />
          <CardBody>
            <CardTitle className='url'><a className='link' href={image.url} target="_blank" rel="noopener noreferrer">{image.url}</a></CardTitle>
            {this.renderTags(image.tagList)}
          </CardBody>
        </Card>
      </div>
    ));
  };

  render() {
    return (
      <div>
        {this.state.images ? this.renderCards() : null}
      </div>
    );
  }
}

export default Images;
