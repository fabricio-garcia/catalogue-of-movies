import React, { Component } from 'react';

export class Searchform extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center bg-light">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" />
            {' '}
            Search for a movie ,TV series ..
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

export default Searchform;
