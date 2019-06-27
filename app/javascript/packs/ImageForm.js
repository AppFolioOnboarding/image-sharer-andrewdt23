import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageURL: '',
      showImage: false,
      showModal: false,
      showError: false,
      tags: []
    };
  }

  handleDelete = (i) => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  };

  handleAddition = (tag) => {
    const { tags } = this.state;
    this.setState({ tags: [...tags, tag] });
  };

  handleUrlChange = (event) => {
    this.setState({ imageURL: event.target.value, showError: false });
  };

  handleDrag = (tag, currPos, newPos) => {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    this.setState({ tags: newTags });
  };

  validURL = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(url);
  };

  handleSubmit = (event) => {
    document.getElementById('url-input').value = '';

    if (this.validURL(this.state.imageURL) && this.state.imageURL.match(/\.(jpeg|jpg|gif|png)/) != null) {
      this.setState({ showImage: true });

      const request = new XMLHttpRequest();

      const tags = this.state.tags.map(tag => tag.id);
      const tagList = tags.join(', ');

      let payload = { imageUrl: { url: this.state.imageURL, tag_list: tagList } };
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
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  renderModal = () => {
    const { tags } = this.state;
    return (
      <div>
        <div className='url-button-container'>
          <Button className='url-button' color="primary" onClick={this.showModal}>Add New Image URL</Button>
        </div>
        <Modal isOpen={this.state.showModal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>Add/Edit an Image URL</ModalHeader>
            <ModalBody>
              <label>
                Image URL:
                <input className='url-input' id='url-input' type="text" onChange={this.handleUrlChange} />
                {this.state.showError ? <span className='error'>Invalid URL Submission</span> : null}
                <div className='tags'>
                  <ReactTags
                    tags={tags}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters}
                  />
                </div>
              </label>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit" value="Submit">Save</Button>
              <Button color="secondary" onClick={this.hideModal}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }

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
