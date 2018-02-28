/**
 * Created by Administrator on 2017/7/25.
 */

import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const {width} = Dimensions.get('window');
const contentHorizantalPadding = (width-202)/8;

const MenuButton = ({title, img_url, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
        <Image source={{uri: img_url}} style={styles.image}/>
  <Text>
    {title}
  </Text>
</TouchableOpacity>
)
  ;
};

MenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingHorizontal:contentHorizantalPadding,
    paddingVertical:8
  },
  image: {
    width: 46,
    height: 46,
  },
  label: {
    color: '#666'
  }
});
export default MenuButton;