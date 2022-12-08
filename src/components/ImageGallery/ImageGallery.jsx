import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    materials: [],
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps.searchName !== this.props.searchName) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchName}&page=1&key=30725538-60cf17fec7c19eff2b1d4a894`
      )
        .then(response => response.json())
        .then(materials => this.setState({ materials: materials.hits }));
    }
  }

  render() {
    return (
      <>
        <ul>
          {this.state.materials && (
            <ImageGalleryItem searchName={this.state.materials} />
          )}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
