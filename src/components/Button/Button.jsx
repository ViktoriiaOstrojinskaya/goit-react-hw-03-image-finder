import { Component } from 'react';
import { ButtonEl } from './Button.styled';

class Button extends Component {
  state = {
    page: 1,
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.props.loadMore(this.state.page);
  };

  render() {
    return (
      <ButtonEl type="button" onClick={this.loadMore}>
        Load more
      </ButtonEl>
    );
  }
}

export default Button;
