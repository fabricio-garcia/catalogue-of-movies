import axios from 'axios';

import { SEARCH_MOVIE, FETCH_MOVIES } from './types';
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
