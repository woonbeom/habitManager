import { createStore } from 'redux';
import modules from './modules';

// store 생성 함수를 configureStore.js에 저장.
const configureStore = (initialState) => {
    const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

export default configureStore;