/**
 * Created by Administrator on 2017/8/4.
 */

'use strict';
import initialMovieDetailData from '../common/utils/data';


const occupation_filter = (state = {occupation: [], active_index: 0}, action) => {
  switch (action.type) {
    case 'FETCHED_PVP_OCCUPATION':
      return {...state, ...{occupation: action.payload}};
      break;
    case 'CHANGE_ACTIVE_INDEX':
      return {...state, ...action.payload};
      break;
    default:
      return state;
  }
};


const movie_detail = (state = initialMovieDetailData, action) => {
  switch (action.type) {
    case 'FETCHED_MOVIE':
      return {...state, ...{movie: action.payload}};
      break;
    case 'FETCHED_MOVIE_SUBJECT':
      return {...state, ...{subject: action.payload}};
      break;
    default:
      return state;
  }
}

const movies = (state = {}, action) => {
  switch (action.type) {
    case 'FETCHED_IN_THEATERS_MOVIE':
      return {...state, ...action.payload};
      break;
    case 'FETCHED_COMING_SOON_MOVIE':
      return {...state, ...action.payload};
      break;
    case 'FETCHED_TOP250_MOVIE':
      return {...state, ...action.payload};
      break;
    case 'FETCHED_US_BOX_MOVIE':
      return {...state, ...action.payload};
      break;
    default:
      return state;
  }
};


export default {occupation_filter, movies, movie_detail};