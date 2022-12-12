//import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { Button } from './Button/Button';

class App extends Component {
  state = {
    imageName: '',
  };

  handleSearchBarSubmit = imageName => {
    this.setState({ imageName });
  };

  // loadMore = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // };

  render() {
    return (
      <div
        style={{
          height: '100vh',
        }}
      >
        <Searchbar onSubmit={this.handleSearchBarSubmit} />

        <ImageGallery searchName={this.state.imageName} />

        <Button />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
