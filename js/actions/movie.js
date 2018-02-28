/**
 * Created by Administrator on 2017/8/4.
 */

'use strict';

import MovieApi from '../api/movie';
import fetchState from './fetchState';

export const changeMovies = (index) => {
  return dispatch => {
    switch (index) {
      case 0:
        dispatch(fetchIntheatersMovie());
        break;
      case 1:
        dispatch(fetchComingSoonMovie());
        break;
      case 2:
        dispatch(fetchTop250Movie());
        break;
      case 3:
        dispatch(fetchUsboxMovie());
        break;
      default:
        break;
    }
  }
}

export const changeFilterActiveIndex = (index) => {
  return ({
    type: 'CHANGE_ACTIVE_INDEX',
    payload: {
      active_index: index
    }
  });
}

const fetchPvpOccupation = () => {
  return fetch(MovieApi.occupation);
};

export const fetchUsboxMovie = () => {
  return dispatch => {
    fetch(MovieApi.us_box
    ).then(res => res.json())
      .then(json => {
        dispatch(fetchSuccessAction('us_box_movie', json))
      })
      .catch(dispatch(fetchState('error')))
      .done(fetchState('done'))
  }
}

export const fetchIntheatersMovie = () => {
  return dispatch => {
    fetch(MovieApi.in_theaters_movie
    ).then(res => res.json())
      .then(json => {
        dispatch(fetchSuccessAction('in_theaters_movie', json))
      })
      .catch(dispatch(fetchState('error')))
      .done(fetchState('done'))
  }
}

export const fetchTop250Movie = () => {
  return dispatch => {
    fetch(MovieApi.top250
    ).then(res => res.json())
      .then(json => {
        dispatch(fetchSuccessAction('top250_movie', json))
      })
      .catch(dispatch(fetchState('error')))
      .done(fetchState('done'))
  }
}


export const fetchComingSoonMovie = () => {
  return dispatch => {
    fetch(MovieApi.coming_soon
    ).then(res => res.json())
      .then(json => {
        dispatch(fetchSuccessAction('coming_soon', json))
      })
      .catch(dispatch(fetchState('error')))
      .done(fetchState('done'))
  }
}

export const fetchMovieDetail = (id) => {
  return dispatch => {
    return Promise.all([fetch(MovieApi.movie + id), fetch(MovieApi.subject + id)]).then(([moviePromise, subjectPromise]) => Promise.all([moviePromise.json(), subjectPromise.json()])).then(([movieJson, subjectJson]) => {
      dispatch(fetchSuccessAction('movie', movieJson));
      dispatch(fetchSuccessAction('subject', subjectJson));
    }).catch(dispatch(fetchState('error'))).done(fetchState('done'));
  }
}

const loadMovieScreen = (index) => {
  return dispatch => {
    return (Promise.all([fetchPvpOccupation()]).then(([occupation_filter_promise]) => Promise.all([occupation_filter_promise.json()])).then(([occupation_filter_json]) => {
      dispatch(fetchSuccessAction('occupation_filter', occupation_filter_json));
      dispatch(changeMovies(index));
    }).catch(dispatch(fetchState('error'))).done(fetchState('done')));
  };
};


const fetchSuccessAction = (type, data) => {
  switch (type) {
    case 'occupation_filter':
      return ({
        type: 'FETCHED_PVP_OCCUPATION',
        payload: data
      });
      break;
    case 'in_theaters_movie':
      return ({
        type: 'FETCHED_IN_THEATERS_MOVIE',
        payload: data
      });
      break;
    case 'coming_soon':
      return ({
        type: 'FETCHED_COMING_SOON_MOVIE',
        payload: data
      });
      break;
    case 'top250_movie':
      return ({
        type: 'FETCHED_TOP250_MOVIE',
        payload: data
      });
      break;
    case 'us_box_movie':
      return ({
        type: 'FETCHED_US_BOX_MOVIE',
        payload: data
      });
      break;
    case 'movie':
      return ({
        type: 'FETCHED_MOVIE',
        payload: data
      });
      break;
    case 'subject':
      return ({
        type: 'FETCHED_MOVIE_SUBJECT',
        payload: data
      });
      break;
  }
};

export default loadMovieScreen;