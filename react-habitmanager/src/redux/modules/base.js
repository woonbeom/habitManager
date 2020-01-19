// base 모듈.
// 기반 화면 (헤더, 유저 메뉴 등)의 상태를 관리하는 모듈.
import { Map } from 'immutable';
import { handleActions, createActions } from 'redux-actions';

const SET_HEADER_VISIBILITY = 'base/SET_HEADER_VISIBILITY'; // 헤더 렌더링 여부 설정

export const setHeaderVisibility = createActions(SET_HEADER_VISIBILITY);

const initialState = Map({
    header: Map({
        visible: true
    })
});

export default handleActions({
    [SET_HEADER_VISIBILITY]: (state, action) => state.setIn(['header', 'visible'], action.payload)
}, initialState);