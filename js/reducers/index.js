/**
 * Created by Administrator on 2017/7/24.
 */
'use strict';

import {combineReducers} from 'redux';
import navigation from './navigation';
import HomeReducer from './home';
import LonginReducer from './login';
import MovieReducer from './movie';

const AppReducer = combineReducers({
  nav: navigation,
  home_scene: combineReducers({
    carousel: HomeReducer.carousel,
    menu: HomeReducer.menu
  }),
  login: combineReducers({
    isLogined: LonginReducer.isLogined
  }),
  movie: combineReducers({
    occupation_filter: MovieReducer.occupation_filter,
    movies: MovieReducer.movies,
    movie_detail: MovieReducer.movie_detail,
  })
});

export default AppReducer;