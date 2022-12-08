//import axios from 'axios';
import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    imageName: '',
  };

  // async componentDidMount() {
  //   axios.defaults.baseURL = 'https://pixabay.com/api/';
  //   const KEY = '30725538-60cf17fec7c19eff2b1d4a894';
  //   const perPage = 12;
  //   const response = await axios.get(
  //     `?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  //   );
  //   this.setState({ articles: response.data.hits });
  // }

  handleGallerySubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleGallerySubmit} />

        {this.state.image}
        <ImageGallery searchName={this.state.imageName} />
        <Modal />
      </div>
    );
  }
}

export default App;
