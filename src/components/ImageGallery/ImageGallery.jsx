//import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, _) {
    const baseURL = 'https://pixabay.com/api/';
    const KEY = '30725538-60cf17fec7c19eff2b1d4a894';
    const perPage = 12;
    if (prevProps.searchName !== this.props.searchName) {
      fetch(
        `${baseURL}?q=${this.props.searchName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      )
        .then(response => response.json())
        .then(images => this.setState({ images: images.hits }));
    }
  }

  render() {
    return (
      <>
        <ul>
          {/* {this.props.materials && (
            <ImageGalleryItem searchName={this.props.materials} />
          )} */}
          {/* <ImageGalleryItem images={this.state.images} /> */}

          {this.state.images.map(element => (
            <li key={element.id}>
              <img src={element.webformatURL} alt={element.tags} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
