//import { toast } from 'react-toastify';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryBox } from './ImageGallery.styled';
//import API from '../services/api';

class ImageGallery extends Component {
  render() {
    const { images, searchName } = this.props;

    return (
      <>
        <ImageGalleryBox searchName={searchName}>
          {images && <ImageGalleryItem images={images} />}
        </ImageGalleryBox>
      </>
    );
  }
}

export default ImageGallery;
