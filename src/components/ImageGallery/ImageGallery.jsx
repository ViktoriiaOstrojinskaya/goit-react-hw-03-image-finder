import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryBox } from './ImageGallery.styled';

export const ImageGallery = ({ images, searchName, showModal }) => (
  <>
    <ImageGalleryBox searchName={searchName}>
      {images && <ImageGalleryItem images={images} onClick={showModal} />}
    </ImageGalleryBox>
  </>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  searchName: PropTypes.string.isRequired,
};
