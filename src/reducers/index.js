import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';

export default combineReducers({
  movies: MovieReducer
});

