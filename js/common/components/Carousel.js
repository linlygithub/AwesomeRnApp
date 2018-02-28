/**
 * Created by Administrator on 2017/7/24.
 */

'use strict';
import React, {Component} from 'react';
import {Text, View, Button, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';


const {width} = Dimensions.get('window');
const itemPaddingHorizontal = 0;
const itemWidth = width * 95 / 100 + itemPaddingHorizontal * 2;

const ImageCarousel = ({carousel}) => {
  let subCarousel = carousel.concat(carousel);
  return (
    <Carousel
      sliderWidth={width}
      itemWidth={itemWidth}
      firstItem={0}
      inactiveSlideScale={0.97}
      inactiveSlideOpacity={0.6}
      autoplay={false}
      swipeThreshold={30}
      scrollEndDragDebounceValue={3}
      carouselHorizontalPadding={9}
      autoplayDelay={2000}
      autoplayInterval={2500}
      snapOnAndroid={true}
      containerCustomStyle={styles.slide}
      removeClippedSubviews={false}
    >
      {
        subCarousel.map((item, i) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              key={'carousel_${item.id}'}
              style={styles.slideInnerContainer}>
              <View key={i} style={styles.imageContainer}>
                <Image source={{uri:item.img_url}} style={styles.img}/>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </Carousel>

  );
};

ImageCarousel.protoTypes = {
  banners: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  img: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius:8
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8
  },
  slide: {
    marginBottom:6,
    height:152
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  slideInnerContainer: {
    width: itemWidth,
    height: 160,
    paddingHorizontal: itemPaddingHorizontal,
    paddingBottom: 10 // needed for shadow
  },
  pagination: {
    bottom: 8
  }
});

export default ImageCarousel;