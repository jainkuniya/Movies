export const selectMovie = (movieTitle) => {
  return {
    type: 'select_movie',
    payload: movieTitle
  };
};
