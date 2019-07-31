import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import { Carousel } from 'antd';

import './App.scss'


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className='container'>
      <Post url="/api/weatherApi" params={{ city: '上海' }}>
        {(error, response, isLoading, onReload) => {
          if (error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
          }
          else if (isLoading) {
            return (<div>Loading...</div>)
          }
          else if (response !== null) {
            console.log(response)
            let data = response.data.data
            return (<div  className='weather'><p>上海温度:{data.wendu}°</p>{data.ganmao}</div>)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Post>
      <div id="container">
      <div className="glow"><Link to="/register">注册</Link></div>
      <div className="letterpress"><h1><Link to="/login">登录</Link></h1></div>
      <div className="stroke"><Link to="/echarts">图表</Link></div>
      <div className="gradient"><h2>Gradient</h2></div>
      <div className="dimension">3D Text</div>
      <div className="embossed">Embossed</div>
      <div className="knock"><h4>Knockout</h4></div>
      <div className="striped"><h3>STRIPED</h3></div>
    </div>
    </div>);
  }
}

App.propTypes = {};
