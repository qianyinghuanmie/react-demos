import React, {PropTypes} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import {Carousel} from 'antd';

import './App.scss'


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
      <Get url="/api/getImages">
        {(error, response, isLoading, onReload) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            let imgList = response.data.result


          var   imgListStr = imgList.map((item, index) => {
                return <div key={index}><img  src={item.img} style={{width:"200px"}}></img></div>
            })
            return (<div> <Carousel effect="fade">
              {imgListStr}
  </Carousel></div>)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>
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
