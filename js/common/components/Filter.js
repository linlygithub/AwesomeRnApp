/**
 * Created by Administrator on 2017/8/4.
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, ScrollView, View,Animated, Text, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mask_opacity: new Animated.Value(1)
    }
  }

  static defaultProps = {
    filter_arr: [],
    active_index: 0,
    onFilterPress: () => {
    }
  };

  static propTypes = {
    filter_arr: PropTypes.array.isRequired,
    active_index: PropTypes.number.isRequired,
    onFilterPress: PropTypes.func.isRequired
  };

  activeWrapper() {
    const {mask_opacity} = this.state;
    return ({
      backgroundColor: '#ddd',
      opacity: mask_opacity.interpolate({inputRange: [0, 1], outputRange: [0, 1]})
    });
  }

  componentDidUpdate() {
    const {mask_opacity} = this.state;
    mask_opacity.setValue(0);
    Animated.timing(mask_opacity, {toValue: 1, during: 500}).start();
  }


  render() {
    const {filter_arr, active_index, onFilterPress} = this.props;
    return (
      <ScrollView horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.container}>
        {filter_arr.map((item, i) => (
          <TouchableWithoutFeedback
            key={i}
            onPress={() => onFilterPress(i, item.id)}
          >
            <Animated.View
              style={[styles.wrapper, active_index === i ? this.activeWrapper() : null]}>
              <Text
                style={[styles.content, active_index === i ? styles.active_content : null]}>
                {item.name}
              </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  wrapper: {
    marginVertical: 12,
    borderRadius: 16
  },
  content: {
    fontSize: 12,
    color: '#333',
    paddingVertical: 5,
    paddingHorizontal: 13.5
  },
  active_content: {
    color: '#ffab19'
  }
});


