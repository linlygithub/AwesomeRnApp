'use strict';

import React from 'react';
import {Image, View, Text, Dimensions, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const MovieSubject = ({directors, casts, countries, writers, year, movie_duration, genres, languages, wrapperStyle}) => {
  let director;
  let cast;
  let country;
  let writer;
  let genre;
  let language;
  director= directors.join('/');
  cast = casts.isNaN?('N/A'):(casts[0].name + '/' + casts[1].name + '/' + casts[2].name + '/' + casts[3].name);
  country = countries[0];
  writer = writers.isNaN?'N/A':writers.join('/');
  genre = genres.join('/');
  language = languages.join('/');

  return (
    <View style={wrapperStyle}>
      <Text style={styles.label}>导演:<Text style={styles.content}>{director}</Text></Text>
      <Text style={styles.label} numberOfLines={2}>编剧:<Text style={styles.content}>{writer}</Text></Text>
      <Text numberOfLines={2} style={styles.label}>主演:<Text style={styles.content}>{cast}</Text></Text>
      <Text style={styles.label}>类型:<Text style={styles.content}>{genre}</Text></Text>
      <Text style={styles.label}>制片国家/地区:<Text style={styles.content}>{country}</Text></Text>
      <Text style={styles.label}>语言: <Text style={styles.content}>{language}</Text></Text>
      <Text style={styles.label}>年代: <Text style={styles.content}>{year}</Text></Text>
      <Text style={styles.label}>片长: <Text style={styles.content}>{movie_duration}</Text></Text>
    </View>);
};

MovieSubject.defaultProps = {
  wrapperStyle: {
    flex: 3,
  },
  writers:[],
  casts:[],
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    marginHorizontal: 10,
    color: '#999'
  },
  content: {
    color: '#333'
  }
});

const mapStateToProps = (state) => {
  const {movie, subject} = state.movie.movie_detail;
  return ({
    directors: movie.attrs.director,
    casts: subject.casts,
    countries: subject.countries,
    writers: movie.attrs.writer,
    year: subject.year,
    movie_duration: movie.attrs.movie_duration,
    genres: subject.genres,
    languages: movie.attrs.language,
  });
};

export default connect(mapStateToProps)(MovieSubject);
