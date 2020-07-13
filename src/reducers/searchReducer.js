import { SEARCH_MOVIE } from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action,
        loading: false,
      };
    default:
      return state;
  }
}
