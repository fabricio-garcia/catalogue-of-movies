import axios from 'axios';

import {
  SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING,
} from './types';
import { OMDbAPIKey } from '../OMDbAPIKey';

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = text => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${OMDbAPIKey}&s=${text}`)
    .then(response => dispatch({
      type: FETCH_MOVIES,
      payload: response.data.Search,
    }))
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));
};

export const fetchMovie = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${OMDbAPIKey}&i=${id}`)
    .then(response => dispatch({
      type: FETCH_MOVIE,
      payload: response.data,
    }))
    // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};

export const setLoading = () => ({
  type: LOADING,
});
