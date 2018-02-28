/**
 * Created by Administrator on 2017/7/24.
 */
import {AppStackNav,TabNavigation} from '../AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialState = AppStackNav.router.getStateForAction(TabNavigation.router.getActionForPathAndParams('HomeTab'));

const nav = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case 'NAV_TO_MOVIE_SCENE':
      nextState = AppStackNav.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'movie' }),
        state
      );
      break;
    case 'NAV_TO_MINE_SCENE':
      nextState = AppStackNav.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'movie_detail',params:action.payload}),
        state
      );
      break;
    default:
      nextState = AppStackNav.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

export default nav;
