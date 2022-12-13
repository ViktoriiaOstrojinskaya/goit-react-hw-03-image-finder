import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { MainPage } from './App.styled';
//import { ModalForImage } from './Modal/Modal';

axios.defaults.baseURL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    imageName: '',
    images: [],
    loading: false,
    error: null,
    page: 1,
    totalImages: 0,
  };

  handleSearchBarSubmit = imageName => {
    this.setState({
      imageName,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ loading: true, images: [] });
      console.log(prevName);
      console.log(nextName);

      const response = await this.APIname();

      if (response.data.hits.length === 0) {
        return toast.error('We did not find anything fo your request');
      }

      this.setState({
        images: response.data.hits,
        totalImages: response.data.totalHits,
      });
    }

    if (prevPage !== nextPage) {
      this.setState({ loading: true });
      console.log(prevPage);
      console.log(nextPage);

      const response = await this.APIpage();
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...response.data.hits],
        };
      });
    }
  }

  APIname = async () => {
    try {
      const responseNewName = await axios.get('', {
        params: {
          key: '30725538-60cf17fec7c19eff2b1d4a894',
          q: this.state.imageName,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: '12',
          page: 1,
        },
      });

      return responseNewName;
    } catch (error) {
      console.log('error', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  APIpage = async () => {
    try {
      const responseNewPage = await axios.get('', {
        params: {
          key: '30725538-60cf17fec7c19eff2b1d4a894',
          q: this.state.imageName,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: '12',
          page: this.state.page,
        },
      });
      return responseNewPage;
    } catch (error) {
      console.log('error', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const maxPage = Math.ceil(this.state.totalImages / 12);
    const showButton =
      this.state.images.length > 0 && this.state.page < maxPage;

    return (
      <MainPage>
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        <ImageGallery
          searchName={this.state.imageName}
          images={this.state.images}
        />
        {this.state.loading && <Loader />}
        {showButton && <Button onClick={this.loadMore} />}
        <ToastContainer autoClose={3000} />
      </MainPage>
    );
  }
}

export default App;
