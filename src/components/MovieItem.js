//Import libraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const moreStyles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

//create class component
export default class MovieItem extends Component {
  render() {

  	const { titleStyle } = moreStyles;
  	const { Title } = this.props.movie;

  	return (
  		<CardSection>
	        <Text style={titleStyle}>
	          {Title}
	        </Text>
	    </CardSection>
  	);
  }
}

