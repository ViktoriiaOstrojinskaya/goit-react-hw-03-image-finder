import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarItem,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    imageName: '',
    currentPage: 1,
  };

  handleChangeName = event => {
    this.setState({
      imageName: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast.error('Please, enter a request!');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <SearchbarItem>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleChangeName}
          />
        </SearchForm>
      </SearchbarItem>
    );
  }
}

export default Searchbar;
