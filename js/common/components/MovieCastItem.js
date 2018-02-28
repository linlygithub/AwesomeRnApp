'use strict';

import React from 'react';
import {View, StyleSheet, Text, Image, TouchableWithoutFeedback, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;
const imageWidth = width / 4 - 3;
const itemHeight = imageWidth + 40;

const MovieCastItem = ({image, name, customImageStyle, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        <Image style={[styles.img,customImageStyle]} source={{uri: image}}></Image>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>);
};

MovieCastItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
    width: imageWidth,
    height: imageWidth
  },
  wrapper: {
    width: imageWidth,
    height: itemHeight,
    alignSelf: 'center'
  },
  name:{
    textAlign: 'center',
    color: 'black'
  }
});

export default MovieCastItem;
