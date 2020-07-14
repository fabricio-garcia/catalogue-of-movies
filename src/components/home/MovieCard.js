/* eslint-disable react/prop-types */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.Title}
            {' '}
            -
            {movie.Year}
          </h5>
          <a className="btn btn-primary" href="/#">
            Movie Details
            <i className="fas fa-chevron-right" />
          </a>
        </div>
      </div>
    );
  }
}

export default MovieCard;
