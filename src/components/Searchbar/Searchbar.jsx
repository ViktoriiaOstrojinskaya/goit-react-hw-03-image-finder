import { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    imageName: '',
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
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleChangeName}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
