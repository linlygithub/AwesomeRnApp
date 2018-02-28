/**
 * Created by Administrator on 2017/7/26.
 */

import {connect} from 'react-redux';
import MenuGroup from '../components/MenuGroup';


const mapStateToProps = (state) => {
  return {
    menu: state.home_scene.menu
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMenuPress: () => {
    dispatch({type: 'NAV_TO_MOVIE_SCENE'})
  }
});


const HomeMenuGroup = connect(mapStateToProps, mapDispatchToProps)(MenuGroup);

export default HomeMenuGroup;