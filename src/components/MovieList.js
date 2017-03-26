import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  render() {
  	//for now print in console
  	//will give an error as valid react element is not returned
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps)(MovieList);
