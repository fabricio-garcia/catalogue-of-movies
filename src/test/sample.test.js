/* eslint-disable import/no-named-as-default */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Landing from '../components/home/Landing';
import Movie from '../components/home/Movie';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Landing and Movie Components connected to store', () => {
  it('Landing should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Landing />
        </Provider>,
      ).exists(Landing),
    ).toBe(true);
  });
  it('Movie should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Movie />
        </Provider>,
      ).exists(Movie),
    ).toBe(true);
  });
});
