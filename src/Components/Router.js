import React from "react";
// import { HashRouter as Router, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

// Router는 하나의 child만 가질 수 있으므로, 처음엔 fragment tag <></>로 라우팅들을 감쌌다
// composition : 두개 이상의 Route를 동시에 렌더링하는 방식
// (ex) /tv, /tv/popular를 Router 태그에 동시에 거치
// 이 경우 기본 경로보다 하위에 있는 /tv/popular는 component 속성이 아닌 render 속성으로 구현한다
// 이때 기본 경로에 exact 속성을 넣는다면, 하위 경로인 /tv/popular에는 /tv의 내용은 렌더링되지 않는다
// Switch는 한번에 오직 하나의 Route만 렌더링하게 한다
// 이 말의 의미는, Redirect를 사용하여 사용자가 잘못된 경로로 이동을 시도할 경우에만 "/"로 보내고,
// 그 외에 정상적으로 path 속성에 맞춰서 경로 이동을 시도할 경우 그에 맞는 페이지 렌더링을 해준다는 의미이다.
export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/tv" exact component={TV} />
      <Route path="/tv/popular" render={() => <h1>Popular TV programs</h1>} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
