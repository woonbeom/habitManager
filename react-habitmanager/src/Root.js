import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // BrowserRouter로 라우터 구성.
import App from './App';
import { Provider } from 'react-redux';

const Root = ({store}) => { // store <- 리덕스 스토어
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={App} />
            </BrowserRouter>
        </Provider>
    );
};

export default Root;