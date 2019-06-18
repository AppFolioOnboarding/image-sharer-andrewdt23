import React from 'react';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageURL: '',
      showImage: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ imageURL: event.target.value });
  }

  handleSubmit(event) {
    document.getElementById('url-input').value = '';
    this.setState({ showImage: true });
    event.preventDefault();
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
