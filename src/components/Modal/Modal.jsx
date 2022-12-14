import { Component } from 'react';
import { Overlay, ModalImage } from './Modal.styled';

class Modal extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <Overlay>
        <ModalImage>
          <p>Hello, I am modal window</p>
          <img src="" alt="" onClick={onClick} />
        </ModalImage>
      </Overlay>
    );
  }
}

export default Modal;
