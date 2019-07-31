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
      <div class="glow"><Link to="/login">登录</Link></div>
      <div class="letterpress"><h1>图表</h1></div>
      <div class="stroke">Text Stroke</div>
      <div class="gradient"><h2>Gradient</h2></div>
      <div class="dimension">3D Text</div>
      <div class="embossed">Embossed</div>
      <div class="knock"><h4>Knockout</h4></div>
      <div class="striped"><h3>STRIPED</h3></div>
    </div>
      <ul>
        <li>
          <Link to="/login">登录</Link>
        </li>
        <li>
          <Link to="/echarts">图表</Link>
        </li>
      </ul>
    </div>);
  }
}

App.propTypes = {};
