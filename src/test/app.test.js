/* eslint-disable import/no-named-as-default */
import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import NavBar from '../components/NavBar/NavBar';
import Landing from '../components/home/Landing';
import Movie from '../components/home/Movie';
import Footer from '../components/Footer/Footer';

describe('main page renders correctly', () => {
  const wrapper = shallow(<App />);

  it('renders the App component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders the NavBar component', () => {
    expect(wrapper.find(NavBar));
  });

  it('Renders the Landing component', () => {
    expect(wrapper.find(Landing));
  });

  it('Renders the Movie component', () => {
    expect(wrapper.find(Movie));
  });

  it('Renders the Footer component', () => {
    expect(wrapper.find(Footer));
  });
});
