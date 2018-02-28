import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import MovieCastItem from '../components/MovieCastItem';
import PropTypes from 'prop-types';


const MovieCasts = ({casts, onPress, customTitleStyle, customWrapperStyle}) => {
  return (
    <View style={[styles.wrapper, customWrapperStyle]}>
      <Text style={[styles.title, customTitleStyle]}>演员表</Text>
      <View style={styles.castsWrapper}>
        {casts.map((item, index) => (
          <MovieCastItem name={item.name} image={item.avatars.medium} onPress={() => {
          }}></MovieCastItem>
        ))}
      </View>
    </View>);
};

MovieCasts.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  title: {
    color: '#999', fontSize: 18
  },
  wrapper: {
    flex: 1,
    marginVertical:10
  },
  castsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const mapStateToProps = (state) => {
  const {subject} = state.movie.movie_detail;
  return ({
    casts: subject.casts,
  });
}
export default connect(mapStateToProps)(MovieCasts);
