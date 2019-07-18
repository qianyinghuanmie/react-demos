import React, {PropTypes} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h1>App</h1>
      {/* 把 <a> 变成 <Link> */}
      <ul>
        <li>
          <Link to="/login">登录</Link>
        </li>
        <li>
          <Link to="/echarts">图表</Link>
        </li>
      </ul>

      {/*
            接着用 `this.props.children` 替换 `<Child>`
            router 会帮我们找到这个 children
          */
      }
      {this.props.children}
    </div>);
  }
}

App.propTypes = {};
