/**
 * Created by Administrator on 2017/7/28.
 */

'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, Dimensions, WebView} from 'react-native';
import {connect} from 'react-redux';
import PvpFilterGroup from '../../common/containers/PvpFilterGroup';
import loadMovieScene from '../../actions/movie';
import MovieList from '../../common/containers/MovieList';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

const {width, height} = Dimensions.get('window');

class MovieScene extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {movie_filter_active_index} = this.props;
    this.props.dispatch(loadMovieScene(movie_filter_active_index));
  }


  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
        <ScrollableTabView style={{flex: 1}} initialPage={0}
                           renderTabBar={() => <ScrollableTabBar
                             style={{height: 40}}
                             renderTab={this.renderTab}
                             underlineStyle={{backgroundColor: '#ffab19', height: 2}}
                             activeTextColor={'#ffab19'}/>}>
          <View tabLabel='榜单' style={{flex: 1}}>
            <View style={styles.section}>
              <PvpFilterGroup/>
            </View>
            <View style={styles.section}>
              <MovieList/>
            </View>
          </View>
          <View tabLabel='搜索'>
            <View style={{height: 600, width: 360}}>
              <WebView
                automaticallyAdjustContentInsets={false}
                style={{height: 600, width: 360}}
                source={{uri: 'https://movie.douban.com/subject/26363254/mobile'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                startInLoadingState={true}
                scalesPageToFit={true}
              />
            </View>
          </View>
        </ScrollableTabView>
      </View>
    );
  }

  renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    return (
      <TouchableHighlight
        key={`${name}_${page}`}
        onPress={() => onPressHandler(page)}
        onLayout={onLayoutHandler}
        style={{width: width / 4, height: 40, justifyContent: 'center'}}
        underlayColor="#aaa">
        <Text style={[{
          textAlign: 'center',
          color: 'black',
          fontSize: 18
        }, isTabActive ? {color: '#ffab19'} : null,]}>{name}</Text>
      </TouchableHighlight>);
  }

}

const styles = StyleSheet.create({
  section: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd'
  }
});

const mapStateToProps = (state) => {
  return ({
    movie_filter_active_index: state.movie.occupation_filter.active_index
  })
};


export default connect(mapStateToProps)(MovieScene);
