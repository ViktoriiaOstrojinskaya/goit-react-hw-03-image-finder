import { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    margin: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  render() {
    const { images } = this.props;
    const { isOpenModal } = this.state;

    return (
      <>
        {images.map(({ id, webformatURL, tags }) => (
          <li key={id}>
            <img src={webformatURL} alt={tags} onClick={this.toggleModal} />
          </li>
        ))}
        <Modal
          isOpen={isOpenModal}
          onRequestClose={this.toggleModal}
          style={customStyles}
        >
          <img src="" alt="big size" />
        </Modal>
      </>
    );
  }
}

export default ImageGalleryItem;
