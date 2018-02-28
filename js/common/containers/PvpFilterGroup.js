/**
 * Created by Administrator on 2017/8/6.
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Filter from '../components/Filter';
import {
  changeMovies,
  changeFilterActiveIndex,
} from '../../actions/movie';


class FilterGroup extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    occupation_filter: {},
    onOccupationFilterPress: () => {
    }
  }

  render() {
    const {occupation_filter, onOccupationFilterPress} = this.props;
    return (
      <View>
        <View style={styles.content}>
          <Filter filter_arr={occupation_filter.occupation} active_index={occupation_filter.active_index}
                  onFilterPress={(index) => {
                    if (index === occupation_filter.active_index){
                      return;
                    }else{
                      return onOccupationFilterPress(index);
                    }
                  }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    height: 50
  }
});

const mapStateToProps = (state) => {
  return ({
    occupation_filter: state.movie.occupation_filter
  })
};
const mapDispatchToProps = (dispatch) => {
  return ({
      onOccupationFilterPress: (index) => {
        dispatch(changeMovies(index));
        dispatch(changeFilterActiveIndex(index));
      }
    }
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterGroup);
