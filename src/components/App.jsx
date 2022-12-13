//import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { MainPage } from './App.styled';
//import { ModalForImage } from './Modal/Modal';

class App extends Component {
  state = {
    imageName: '',
    currentPage: 1,
  };

  handleSearchBarSubmit = imageName => {
    this.setState({ imageName });
  };

  handlePageSubmit = currentPage => {
    this.setState({ currentPage });
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState + 1,
    }));
  };

  // selectImage = imageURL => {
  //   this.setState({ selectedImage: imageURL });
  // };

  // closeModal = () => {
  //   this.setState({ selectedImage: null });
  // };

  render() {
    return (
      <MainPage>
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        <ImageGallery
          searchName={this.state.imageName}
          currentPage={this.state.currentPage}
          onSubmit={this.handlePageSubmit}
        />
        {/* <ModalForImage /> */}
        <Button onClick={this.loadMore} currentPage={this.state.currentPage} />
        <ToastContainer autoClose={3000} />
      </MainPage>
    );
  }
}

export default App;
