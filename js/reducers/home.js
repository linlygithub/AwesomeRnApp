/**
 * Created by Administrator on 2017/7/26.
 */

'use strict';


const menu = (state = [], action) => {
  switch (action.type) {
    case 'FETCHED_HOME_MENU':
      let payload = action.payload;
      return [...state,...payload];
      break;
    default:
      return state;
  }
};

const carousel = (state = [], action) => {
  switch (action.type) {
    case 'FETCHED_HOME_CAROUSEL':
      let payload = action.payload;
      return [...state,...payload];
      break;
    default:
      return state;
  }
};


export default {
  carousel,menu
};