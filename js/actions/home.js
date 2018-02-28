/**
 * Created by Administrator on 2017/7/26.
 */

// import fetch from 'isomorphic-fetch';
import ConfigApi from '../api/config';
import fetchState from './fetchState';


const fetchHomeTabs = () => {
  return fetch(ConfigApi.home_tab);
};

const fetchHomeBanners = () => {
  return fetch(ConfigApi.home_banner);
};

const loadHomeScreen = () => {
  return dispatch => {
    return (Promise.all([fetchHomeTabs(), fetchHomeBanners()]).then(([menuPromise, carouselPromise]) => Promise.all([menuPromise.json(), carouselPromise.json()])).then(([menuJson, carouselJson]) => {
      dispatch(fetchSuccessAction('carousel',carouselJson));
      dispatch(fetchSuccessAction('menu',menuJson));
    }).catch(dispatch(fetchState('error'))).done(fetchState('done')));
  };
};

const fetchSuccessAction = (type, data) => {
  switch (type) {
    case 'carousel':
      return ({
        type: 'FETCHED_HOME_CAROUSEL',
        payload: data
      });
      break;
    case 'menu':
      return ({
        type: 'FETCHED_HOME_MENU',
        payload: data
      });
  }
};


export default loadHomeScreen;
