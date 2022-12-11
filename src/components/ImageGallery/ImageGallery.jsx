import { Vortex } from 'react-loader-spinner';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
//import { fetchImages } from 'components/services/api';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, _) {
    const baseURL = 'https://pixabay.com/api/';
    const KEY = '30725538-60cf17fec7c19eff2b1d4a894';
    const perPage = 12;
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ loading: true });
      fetch(
        `${baseURL}?q=${this.props.searchName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      )
        .then(response => response.json())
        .then(images => this.setState({ images: images.hits }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  // componentDidUpdate(prevProps, _) {
  //   if (prevProps.searchName !== this.props.searchName) {
  //     this.setState({ loading: true });
  //     const response = fetchImages()
  //       .then(images => this.setState({ images: images.hits }))
  //       .then(() => this.setState({ loading: false }));
  //   }
  // }

  render() {
    const { images, loading } = this.state;
    return (
      <>
        {loading && (
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['yellow', 'blue', 'yellow', 'blue', 'yellow', 'blue']}
          />
        )}
        <ul>{images && <ImageGalleryItem images={images} />}</ul>
      </>
    );
  }
}

export default ImageGallery;
