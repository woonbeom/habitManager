import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // BrowserRouter로 라우터 구성.
import App from './App';

const Root = ({store}) => { // store <- 리덕스 스토어
    return (
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    );
};

export default Root;