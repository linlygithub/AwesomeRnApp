'use strict';

import React, {PureComponent} from 'react';
import {View, Text, FlatList, Animated} from 'react-native';
import MovieItem, {itemHeight} from '../components/MovieItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {fetchMovieDetail} from '../../actions/movie';
import PropTypes from 'prop-types';


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // data:[]
    }
  }

  static defaultProps = {
    movies: {}
  };

  //ref
  _movieList;
  _ref = (ref) => {
    this._movieList = ref;
  }

  _renderHeader = (title) => {
    return (
      <View style={{flexDirection: 'row', paddingVertical: 10}}>
        <Icon name='fire' color="red" size={18}></Icon>
        <Text style={{color: 'black', marginHorizontal: 5}}>
          {title}
        </Text>
      </View>
    );
  }

  _renderFooter = () => {
    return (
      <View style={{marginBottom: 50}}>
        <Text>
          {'footer'}
        </Text>
      </View>
    );
  }

  //emptyContent
  _renderListEmptyComponent = () => {
    return (
      <Text>
        {'empty'}
      </Text>
    );
  }

  //data item
  _renderItem = (item) => {
    const {onMovieItemPress} = this.props;
    return (
      <MovieItem image={item.item.images.large}
                 title={item.item.title}
                 onPress={() => onMovieItemPress(item.item.id)}/>
    );
  }

  _renderItem_us_box = (item) => {
    // console.log(item);
    return (
      <MovieItem image={item.item.subject.images.large}
                 title={item.item.subject.title}
                 onPress={() => {
                 }}/>
    );
  }

  _getItemLayout = (data, index) => ({
    length: itemHeight,
    offset: itemHeight * index,
    index
  })

  _keyExtractor = (item, index) => {
    return item.id
  }

  _keyExtractor_us_box = (item, index) => {
    return item.subject.id;
  }

  render() {
    const {subjects, title} = this.props.movies;
    if ('豆瓣电影北美票房榜' === title) {
      return (
        <View>
          <AnimatedFlatList
            ref={this._ref}
            ListEmptyComponent={this._renderListEmptyComponent}
            ListHeaderComponent={this._renderHeader(title)}
            ListFooterComponent={this._renderFooter}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            getItemLayout={this._getItemLayout}
            initialNumToRender={9}
            keyExtractor={this._keyExtractor_us_box}
            data={subjects}
            legacyImplementation={false}
            numColumns={3}
            refreshing={false}
            extraData={title}
            renderItem={this._renderItem_us_box}
          />
        </View>)
    } else {
      return (
        <View>
          <AnimatedFlatList
            ref={this._ref}
            ListEmptyComponent={this._renderListEmptyComponent}
            ListHeaderComponent={this._renderHeader(title)}
            ListFooterComponent={this._renderFooter}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            getItemLayout={this._getItemLayout}
            initialNumToRender={9}
            keyExtractor={this._keyExtractor}
            data={subjects}
            legacyImplementation={false}
            numColumns={3}
            refreshing={false}
            extraData={title}
            renderItem={this._renderItem}
          />
        </View>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return ({
    movies: state.movie.movies,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    onMovieItemPress: (id) => {
      dispatch({type: 'NAV_TO_MINE_SCENE',payload:{
        movie_id:id
      }});
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);