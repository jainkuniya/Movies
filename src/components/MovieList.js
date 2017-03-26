import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class MovieList extends Component {
	componentWillMount() {
	    const ds = new ListView.DataSource({
	      rowHasChanged: (r1, r2) => r1 !== r2
	    });

	    this.dataSource = ds.cloneWithRows(this.props.movies);
	}

	renderRow() {
		//as nothing is returned it will throw error
	}

	render() {
	    return (
	      <ListView
	        dataSource={this.dataSource}
	        renderRow={this.renderRow}
	      />
	    );
	}
}

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps)(MovieList);
