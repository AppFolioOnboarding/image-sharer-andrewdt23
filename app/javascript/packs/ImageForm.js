import React from 'react';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageURL: '',
      showImage: false };
  }

  handleChange = (event) => {
    this.setState({ imageURL: event.target.value });
  }

  validURL = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(url);
  }

  handleSubmit = () => {
    document.getElementById('url-input').value = '';

    if (this.validURL(this.state.imageURL) && this.state.imageURL.match(/\.(jpeg|jpg|gif|png)/) != null) {
      this.setState({ showImage: true });

      const request = new XMLHttpRequest();
      let payload = { imageUrl: { url: this.state.imageURL } };
      payload = JSON.stringify(payload);
      const url = 'http://localhost:3000/api/image_url';
      request.open('POST', url, true);
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      request.send(payload);
    } else {
      alert('Invalid URL Submission.');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Image URL:
            <input id='url-input' type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.showImage ? <img src={this.state.imageURL} alt='img' /> : null}
      </div>
    );
  }
}

export default ImageForm;
