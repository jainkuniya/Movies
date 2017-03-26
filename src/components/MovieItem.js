//Import libraries
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const moreStyles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

//create class component
class MovieItem extends Component {

  renderDetails() {
    const { movie, expanded } = this.props;

    if (expanded) {
      return (
        <Text>{movie.Title}</Text>
      );
    }
  }


  render() {

  	const { titleStyle } = moreStyles;
  	const { Title } = this.props.movie;

  	return (
  		<TouchableWithoutFeedback
        onPress={() => this.props.selectMovie(Title)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {Title}
            </Text>
          </CardSection>
          {this.renderDetails()}
        </View>
      </TouchableWithoutFeedback>
  	);
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedMovieTitle === ownProps.movie.Title;

  return { expanded };
};

export default connect(mapStateToProps, actions)(MovieItem);
