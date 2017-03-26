//Import libraries
import React, { Component } from 'react';
import { Text } from 'react-native';
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
  render() {

  	const { titleStyle } = moreStyles;
  	const { Title } = this.props.movie;
    //for now log in console
    console.log(this.props);

  	return (
  		<CardSection>
	        <Text style={titleStyle}>
	          {Title}
	        </Text>
	    </CardSection>
  	);
  }
}

export default connect(null, actions)(MovieItem);
