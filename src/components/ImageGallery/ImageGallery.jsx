//import { toast } from 'react-toastify';
import { Vortex } from 'react-loader-spinner';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
//import fetchImages from '../services/api';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    error: null,
  };

  componentDidUpdate(prevProps, _) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;
    if (prevName !== nextName) {
      this.setState({ loading: true, images: [] });
      const baseURL = 'https://pixabay.com/api/';
      const KEY = '30725538-60cf17fec7c19eff2b1d4a894';
      const perPage = 12;

      return fetch(
        `${baseURL}?q=${nextName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`We cannot find the images by your request`)
          );
        })
        .then(images => this.setState({ images: images.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading, error } = this.state;

    return (
      <>
        {error && <p>{error.message}</p>}
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
