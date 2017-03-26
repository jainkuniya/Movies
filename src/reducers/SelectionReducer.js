export default (state = null, action) => {
  switch (action.type) {
    case 'select_movie':
      return action.payload;
    default:
      return state;
  }
};
