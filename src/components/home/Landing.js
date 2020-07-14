/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../Spinner/Spinner';

// eslint-disable-next-line react/prefer-stateless-function
export class Landing extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);
