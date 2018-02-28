/**
 * Created by Administrator on 2017/7/22.
 *@flow
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import HomeCarousel from '../../common/containers/HomeCarousel';
import HomeMenuGroup from '../../common/containers/HomeMenuGroup';
import {connect} from 'react-redux';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {

  }

  render() {
    return (
      <View style={{backgroundColor: '#f2f2f2'}}>
        <View>
          <HomeCarousel/>
        </View>
        <View style={[styles.divider]}>
          <HomeMenuGroup/>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({

  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd'
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;
