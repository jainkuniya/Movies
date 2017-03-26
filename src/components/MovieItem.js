//Import libraries
import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Image,
} from 'react-native';import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const moreStyles = {
  containerStyle: {
    margin: 2,
  },
  topViewStyle: {
    flexDirection: 'row',
  },
  moviePosterStyle: {
    height: 80,
    width: 80,
    margin: 4,
  },
  titleStyle: {
    fontSize: 16,
    color: 'black',
  },
  plotStyle: {
    marginLeft: 4,
  },
  detailedTextStyle: {
    color: 'brown',
    fontSize: 14,
  },
  yearStyle: {
    marginTop: 2,
    marginLeft: 8,
  },
  topLineStyle: {
    flexDirection: 'row',
  },
  imageRightStuff: {
    flexDirection: 'column',
    marginLeft: 8,
    flex: 1,
  },
  detailedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  detailedValueStyle: {
    
  },
};

//create class component
class MovieItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDetails() {
    const { movie, expanded } = this.props;

    if (expanded) {
      const { 
        plotStyle, 
        detailedTextStyle, 
        detailedRow, 
        detailedValueStyle,
      } = moreStyles;

      return (
        <View>
          <Text style={detailedTextStyle}>Plot</Text>
          <Text style={plotStyle}>{movie.Plot}</Text>
        </View>
      );
    }
  }


  render() {

  	const { 
      containerStyle, 
      titleStyle, 
      moviePosterStyle,
      topViewStyle, 
      yearStyle,
      topLineStyle,
      imageRightStuff,
      detailedRow,
      detailedValueStyle,
      detailedTextStyle,
    } = moreStyles;

  	const { 
      Title,
      Year,
      Released,
      Genre,
      Runtime,
      Poster 
    } = this.props.movie;

  	return (
  		<TouchableWithoutFeedback
        onPress={() => this.props.selectMovie(Title)}
      >
        <View style={containerStyle}>
          <CardSection>
            <View style={topViewStyle}>
              <Image
                style={moviePosterStyle}
                source={{ uri: Poster }}
              />
              <View style={imageRightStuff}>
                <View style={topLineStyle}>
                  <Text style={titleStyle}>
                    {Title}
                  </Text>
                  <Text style={yearStyle}>
                    {Year}
                  </Text>
                </View>
                <View style={detailedRow}>
                  <Text style={detailedTextStyle}>Released -> </Text>
                  <Text style={detailedValueStyle}>{Released}</Text>
                </View>
                <View style={detailedRow}>
                  <Text style={detailedTextStyle} >Genre -></Text>
                  <Text style={detailedValueStyle}>{Genre}</Text>
                </View>
                <View style={detailedRow}>
                  <Text style={detailedTextStyle}>Duration -> </Text>
                  <Text style={detailedValueStyle}>{Runtime}</Text>
                </View>
              </View>
            </View>
            {this.renderDetails()}
          </CardSection>
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
