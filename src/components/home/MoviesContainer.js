/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import MovieCard from './MovieCard';

// eslint-disable-next-line react/prefer-stateless-function
export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';

    content = movies.Response === 'True'
      ? movies.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))
      : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

MoviesContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(MoviesContainer);
