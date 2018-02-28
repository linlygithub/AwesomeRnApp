/**
 * Created by Administrator on 2017/7/27.
 */
'use strict';

export default (state,data) => {
  switch (state) {
    case 'start':
      return ({
        type: 'FETCH_START'
      });
      break;
    case 'error':
      return ({
        type: 'FETCH_ERROR'
      });
      break;
    case 'done':
      return ({
        type: 'FETCH_END'
      });
      break;
    default:
      return ({
        type: 'FETCH_END'
      });
  }
};




