'use strict';

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const MovieSummary = ({title, summary, wrapperStyle, customTitleStyle, customSummaryStyle}) => {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Text style={[styles.title, customTitleStyle]}>{title}</Text>
      <Text style={[styles.summary, customSummaryStyle]}>{summary}</Text>
    </View>
  );
};

MovieSummary.propTypes = {
  summary: PropTypes.string.isRequired,
};

MovieSummary.defaultProps = {
  title: '剧情介绍',
  summary: '',
  wrapperStyle: {flex: 1},
  customTitleStyle: {},
  customSummaryStyle: {}
}

const styles = StyleSheet.create({
  wrapper: {flex: 1,marginVertical:10},
  title: {
    color: '#999',
    fontSize: 18
  },
  summary: {
    padding:6,
    color: '#666'
  }
});

const mapStateToProps = (state) => ({
    summary: state.movie.movie_detail.subject.summary,
  }
)
export default connect(mapStateToProps)(MovieSummary);