'use strict';

import React from 'react';
import {Image, View, Text, Dimensions, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');
const imgWidth = width / 5 * 2;
const imgHeight = imgWidth * 7 / 5;

const MoviePosterAndRating = ({uri, rating, wrapperStyle}) => {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Image source={{uri: uri}}
             style={styles.img}></Image>
      <View style={styles.imgWrapper}>
        <Text style={styles.ratingText}>
          {rating}
        </Text>
        <View style={styles.ratingSymbolWrapper}>
          <Text style={styles.ratingSymbolText}>
            豆瓣评分
          </Text>
        </View>
      </View>
    </View>
  );
};

MoviePosterAndRating.propTypes = {
  uri: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  wrapperStyle: PropTypes.object.isRequired,
};

MoviePosterAndRating.defaultProps = {
  uri: '',
  rating: 0,
  wrapperStyle: {flex: 2, elevation: 5},
}

const styles = StyleSheet.create({
  wrapper: {
  },
  img: {
    width: imgWidth,
    height: imgHeight,
    resizeMode: 'cover',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 3
  },
  imgWrapper: {
    backgroundColor: 'rgba(0,0,0,0.85)',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 0,
  },
  ratingText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  ratingSymbolWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  ratingSymbolText: {
    fontSize: 8,
    color: '#51d125'
  }
});

const mapStateToProps = (state) => ({
    uri: state.movie.movie_detail.subject.images.large,
    rating: state.movie.movie_detail.subject.rating.average,
  }
)
export default connect(mapStateToProps)(MoviePosterAndRating);