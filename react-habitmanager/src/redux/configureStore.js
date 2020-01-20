import { createStore } from 'redux';
import modules from './modules';

// TODO: 미들웨어 적용.
// store 생성 함수를 configureStore.js에 저장.
const configureStore = (initialState) => {
    const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    // hot-reloading를 위한 코드.
    if (module.hot) {
        module.hot.accept('./modules', () => {
            const nextRootReducer = require('./modules').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

export default configureStore;