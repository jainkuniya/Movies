import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  movies: MovieReducer,
  selectedMovieTitle: SelectionReducer,
});

