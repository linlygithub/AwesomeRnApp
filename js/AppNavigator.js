/**
 * Created by Administrator on 2017/7/22.
 */

import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import HomeScene from './scene/home/HomeScene';
import MineScene from './scene/mine/MineScene';
import MovieScene from './scene/movie/MovieScene';
import SigninScene from './scene/login/SigninScene';
import SignupScene from './scene/login/SignupScene';
import MovieDetailScene from './scene/movie/MovieDetailScene';

//
export const TabNavigation = TabNavigator(
  {
    HomeTab: {
      screen: HomeScene,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('./common/img/ic_index.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      }
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      activeBackgroundColor: '#ccc',
      activeTintColor: '#2fbcb9',
      inactiveTintColor: '#888',
      scrollEnabled: false,
      indicatorStyle: {
        height: 0
      },
      style: {
        padding: 0,
        backgroundColor: '#fff',
      },
      labelStyle: {
        fontSize: 12,
        lineHeight: 12
      },
      tabStyle: {
        padding: 0,
        paddingTop: 0,
      }
    }
  });

//
export const AppStackNav = StackNavigator({
  index: {
    screen: TabNavigation,
    navigationOptions: {
      title: '首页',
      headerStyle: {
        elevation: 0
      }
    }
  },
  mine: {
    screen: MineScene,
    navigationOptions: {
      title: '我的',
    }
  },
  movie: {
    screen: MovieScene,
    navigationOptions: {
      title: '电影',
      headerStyle: {
        elevation: 0
      }
    }
  },
  movie_detail: {
    screen: MovieDetailScene,
  }
}, {
  initialRouteName: 'index'
});

//
export const SignStackNav = StackNavigator({
  SignIn: {
    screen: SigninScene,
    navigationOptions: {
      title: '首页',
    }
  },
  SignUp: {
    screen: SignupScene,
    navigationOptions: {
      title: '我的',
    }
  },
}, {
  headerMode: 'none'
});


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default AppStackNav;
