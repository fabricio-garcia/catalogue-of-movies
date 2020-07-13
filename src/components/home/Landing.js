import React, { Component } from 'react';

import SearchForm from './SearchForm';

export class Landing extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm />
      </div>
    );
  }
}

export default Landing;
