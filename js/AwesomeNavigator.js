/**
 * Created by Administrator on 2017/7/24.
 */

'use strict';

import AppStackNav from './AppNavigator';
import PropTypes from 'prop-types';
import {addNavigationHelpers} from 'react-navigation';
import { connect } from 'react-redux';


const AwesomeNavigator = ({dispatch, nav}) => {
  <AppStackNav navigation={addNavigationHelpers({dispatch,state:nav})}/>
};

AwesomeNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AwesomeNavigator);