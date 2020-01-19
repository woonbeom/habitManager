import { combineReducers } from 'redux';
import base from './base';

// combineReducers를 통해 모듈 안의 리듀서들을 하나로 합친다.
export default combineReducers({
    base
});