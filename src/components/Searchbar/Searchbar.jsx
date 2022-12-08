import { Component } from 'react';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleChangeName = event => {
    this.setState({ imageName: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      console.log('Put name');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    // this.props.onSubmit(this.state.imageName);
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
