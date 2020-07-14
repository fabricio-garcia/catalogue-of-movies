/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import MovieCard from './MovieCard';

// eslint-disable-next-line react/prefer-stateless-function
export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';

    // eslint-disable-next-line operator-linebreak
    content =
      movies.length > 0
        ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
