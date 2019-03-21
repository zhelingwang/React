import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/About"
//使用容器组件,展示组件的形式
//refer:https://www.redux.org.cn/docs/basics/UsageWithReact.html
import Love from "./components/lovePage/LoveContainer"

ReactDOM.render(
    <Router>
        <Route path="/" exact component={App}></Route>
        <Route path="/about/" component={About}></Route>
        <Route path="/love/:name" component={Love}></Route>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();
