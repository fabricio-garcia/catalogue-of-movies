/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchMovie, fetchMovies, setLoading } from '../../actions/searchActions';

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.props.searchMovie(event.target.value);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center bg-light">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" />
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-secondary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text,
});

SearchForm.propTypes = {
  searchMovie: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLoading: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { searchMovie, fetchMovies, setLoading })(SearchForm);
