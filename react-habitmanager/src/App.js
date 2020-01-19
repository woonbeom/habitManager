// App.js <- 루트 컴포넌트.
// 컴포넌트들을 정의.
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from 'pages';

// Component class 상속.
// Component class는 컴포넌트의 기반이 되는 클래스.
// JSX를 return.
// React <- 컴포넌트를 정의하고 통합하여 렌더링 함.
class App extends Component {
  render() {
    return (
      // 라우트 정의
      <div>
        <Route exact path="/" component={Home} /> 
        <Route path="/auth" component={Auth} />
      </div>
    );
  }
}

export default App;