/**
 * Created by Administrator on 2017/7/22.
 */
'use strict';

import React, {Component} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {AppStackNav, SignStackNav} from './AppNavigator';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';
import loadHomeScreen from './actions/home';

class AwesomeApp extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.dispatch(loadHomeScreen());
  }

  render() {
    if (!this.props.isLogined) {
      return (<SignStackNav/>)
    } else {
      return (
        <View style={styles.container}>
          <StatusBar translucent={false} backgroundColor="rgba(0, 0, 0, 0.2)" barStyle="light-content"/>
          <AppStackNav navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})}/>
        </View>
      );
    }
  };
}

const mapStateToProps = (state) => {
  console.log(state);
  return {nav: state.nav, isLogined: state.login.isLogined}
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(mapStateToProps)(AwesomeApp);
