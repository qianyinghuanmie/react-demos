//main.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from "react-router-dom";

import zhCN from 'antd/es/locale-provider/zh_CN';
import 'antd/dist/antd.css';

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
