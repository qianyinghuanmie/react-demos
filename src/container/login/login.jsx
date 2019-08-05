import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from 'antd';
import Myform  from '../../components/form/login';
import './login.scss'

class Login extends React.Component  {
  render() {
    return (
      <div>
        <PageHeader onBack={() => this.props.history.push('/')} title="登录" subTitle="请输入个人信息" />
        <Myform/>
      </div>
    )
  }
}


//导出组件
export default Login;
