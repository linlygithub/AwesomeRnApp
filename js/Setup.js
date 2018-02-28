/**
 * Created by Administrator on 2017/7/22.
 */

import React, {Component}from 'react';
import AwesomeApp from './AwesomeApp';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import AppReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';


function setup() {
  console.disableYellowBox = true;//关闭黄屏警告
  const store = createStore(AppReducer,applyMiddleware(thunkMiddleware));
  class Root extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        store:store
      };

    }
    render() {
      //带有navigation根节点
      return (
        <Provider store={this.state.store}>
          <AwesomeApp/>
        </Provider>
      );
    }
  }

  return Root;
}


export default setup;