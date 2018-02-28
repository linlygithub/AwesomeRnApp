/**
 * Created by Administrator on 2017/7/22.
 */

import React, {Component} from 'react';
import {Text, View,Button, StatusBar, StyleSheet,Image} from 'react-native';


class MineScreen extends Component {

  constructor(props) {
    super(props);
  }

  // static navigationOptions = {
  //   drawerLabel: '我的',
  //   drawerIcon:({tintColor}) => (
  //     <Image
  //       source={require()}
  //       style={[styles.icon, {tintColor: tintColor}]}/>
  //   ),
  // };

  componentDidMount() {
    console.log('MineScreen+componentDidMount');
  }

  render() {
    return (
      <Button
        onPress={()=>{}}
        title="Go to Home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default MineScreen;