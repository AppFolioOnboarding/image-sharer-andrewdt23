import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageURL: '',
      showImage: false,
      showModal: false,
      showError: false
    };
  }

  handleChange = (event) => {
    this.setState({ imageURL: event.target.value, showError: false });
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

  handleSubmit = (event) => {
    document.getElementById('url-input').value = '';

    if (this.validURL(this.state.imageURL) && this.state.imageURL.match(/\.(jpeg|jpg|gif|png)/) != null) {
      this.setState({ showImage: true });

      const request = new XMLHttpRequest();
      let payload = { imageUrl: { url: this.state.imageURL } };
      payload = JSON.stringify(payload);
      const url = '/api/image_url';
      request.open('POST', url, true);
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      request.send(payload);
      this.setState({ showModal: false });
    } else {
      event.preventDefault();
      this.setState({ showError: true, showModal: true });
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
      <div className='url-button-container'>
        <Button className='url-button' color="primary" onClick={this.showModal} >Add New Image URL</Button>
      </div>
      <Modal isOpen={this.state.showModal} >
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Add/Edit an Image URL</ModalHeader>
          <ModalBody>
              <label>
                Image URL:
                <input className='url-input' id='url-input' type="text" onChange={this.handleChange} />
                {this.state.showError ? <span className='error'>Invalid URL Submission</span> : null}
              </label>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" value="Submit">Save</Button>
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
