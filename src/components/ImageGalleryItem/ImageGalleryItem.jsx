import PropTypes from 'prop-types';
import { ImageBox, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, showModal }) => (
  <>
    {images.map(({ id, webformatURL, tags }) => (
      <ImageBox key={id}>
        <ImageItem src={webformatURL} alt={tags} onClick={showModal} />
      </ImageBox>
    ))}
  </>
);

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};
