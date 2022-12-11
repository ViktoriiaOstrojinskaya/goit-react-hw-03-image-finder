//import axios from 'axios';
import { ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
//import { createGallery } from './services/api';

class App extends Component {
  state = {
    imageName: '',
  };

  handleSearchBarSubmit = imageName => {
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
        <Searchbar onSubmit={this.handleSearchBarSubmit} />

        <ImageGallery searchName={this.state.imageName} />
        <Modal />
        <button type="button">Load more</button>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
