//main.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import zhCN from 'antd/es/locale-provider/zh_CN';
import 'antd/dist/antd.css';

import Component1 from './Component1.jsx';
import Echarts from './Echarts.jsx';
import App from './App.jsx';
import routes from './routes.js';



class Index extends Component {
    render() {
        return (
          <div className="main">
            <Router basename="/dist">
              <Switch>
                {routes.map(route => (
                  <Route
                    key={route.path}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                ))}
                <Route render={() => <div>No thing was found</div>} />
              </Switch>
            </Router>
          </div>
        );
    }
}


ReactDOM.render(<Index />, document.getElementById('content'));
