import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageURL: '',
      showImage: false,
      showModal: false
    };
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

  showModal = () => {
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  renderModal = () => (
    <div>
      <div className='url-button'>
        <Button color="primary" className='test' onClick={this.showModal} >Add New Image URL</Button>
      </div>
      <Modal isOpen={this.state.showModal} >
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Add/Edit an Image URL</ModalHeader>
          <ModalBody>
              <label>
                Image URL:
                <input className='url-input' id='url-input' type="text" onChange={this.handleChange} />
              </label>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" value="Submit" onClick={this.hideModal}>Save</Button>
            <Button color="secondary" onClick={this.hideModal}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  )

  render() {
    return (
      <div>
        {this.renderModal()}
        {this.state.showImage ? <img src={this.state.imageURL} alt='img' /> : null}
      </div>
    );
  }
}

export default ImageForm;
