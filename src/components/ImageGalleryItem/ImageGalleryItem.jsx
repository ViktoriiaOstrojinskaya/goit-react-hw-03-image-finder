import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li>
        <p>{this.props.searchName}</p>
        <img src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
