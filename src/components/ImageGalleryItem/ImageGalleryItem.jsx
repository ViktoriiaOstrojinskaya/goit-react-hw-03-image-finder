import { Component } from 'react';
import { ImageBox, ImageItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { images } = this.props;

    return (
      <>
        {images.map(({ id, webformatURL, tags }) => (
          <ImageBox key={id}>
            <ImageItem src={webformatURL} alt={tags} />
          </ImageBox>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
