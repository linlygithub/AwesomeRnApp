'use strict';

import React from 'react';
import {View, StyleSheet, Text, Image, TouchableWithoutFeedback, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;
export const imageWidth = width/3-2;
export const imageHeight = imageWidth/5*7;
export const itemHeight = imageHeight+40;
const MovieItem = ({image, title, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        <Image style={styles.img} source={{uri: image}}></Image>
        <Text style={{textAlign:'center',color:'black'}}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>);
};

MovieItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress:PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  img:{
    resizeMode:'cover',
    width:imageWidth,
    height:imageHeight
  },
  wrapper:{
    width:imageWidth,
    height:itemHeight,
    alignSelf:'center'
  }
});

export default MovieItem;
