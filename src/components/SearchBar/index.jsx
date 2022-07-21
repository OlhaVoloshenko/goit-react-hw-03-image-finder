import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchBarStyled,
  SearchForm,
  SearchInput,
  SearchButton,
  ButtonLabel,
} from './SearchBar.styled';

export class Searchbar extends Component {
  static propTypes = {
    handleQuery: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Wow so easy !');
      return;
    }
    this.props.handleQuery(e.currentTarget.elements.query.value);
  };

  render() {
    const { query } = this.state;

    return (
      <SearchBarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <ButtonLabel />
          </SearchButton>

          <SearchInput
            name="query"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBarStyled>
    );
  }
}
