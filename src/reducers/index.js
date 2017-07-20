/**
 * @author Thang Kieu
 *
 * combine all reducers of app
 */

import { combineReducers } from 'redux';

import topic from './topic';

const reducer = combineReducers({
  topic
});

export default reducer;
