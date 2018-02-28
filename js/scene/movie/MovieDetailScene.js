'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text, Image, Dimensions, StyleSheet, WebView} from 'react-native';
import {connect} from 'react-redux';
import {fetchMovieDetail} from '../../actions/movie';
import MoviePosterAndRating from '../../common/containers/MoviePosterAndRating';
import MovieSubject from '../../common/containers/MovieSubject';
import MovieSummary from '../../common/containers/MovieSummary';
import MovieCasts from "../../common/containers/MovieCasts";

const {width, height} = Dimensions.get('window');

class MovieDetailScene extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: '电影详情',
    headerStyle: {
      elevation: 0

    }
  };

  componentDidMount() {
    this.props.dispatch(fetchMovieDetail(this.props.navigation.state.params.movie_id));
  }

  render() {
    const {subject} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={{height: 40, padding: 4, backgroundColor: 'rgba(0,0,0,0.85)'}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', color: 'white', fontSize: 20}}>{subject.title}</Text>
        </View>
        <ScrollView style={{flex: 1, backgroundColor: 'white', paddingTop: 6}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <MoviePosterAndRating/>
            <MovieSubject/>
          </View>
          <MovieSummary/>
          <MovieCasts/>
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    marginHorizontal: 6,
    color: '#999'
  },
  content: {
    color: '#333'
  }
});


const mapStateToProps = (state) => {
  return ({subject: state.movie.movie_detail.subject});
}

export default connect(mapStateToProps)(MovieDetailScene);
