import React from 'react';
import './loginPageTemplate.css';

const loginPageTemplate = ({form, children}) => {
    return (
        <main className="login-page-template">
            <div className="title">
                로그인 페이지
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default loginPageTemplate;