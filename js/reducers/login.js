/**
 * Created by Administrator on 2017/7/29.
 */
'use strict';


const isLogined = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SIGN_IN':
      return action.payload.isLogined;
      break;
    default:
      return state;
  }
};



export default {
  isLogined
};