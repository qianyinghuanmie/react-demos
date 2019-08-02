import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from 'antd';
import Myform  from '../../components/form/index';
import './register.scss'

class register  extends React.Component  {
  render() {
    return (
      <div>
        <PageHeader onBack={() => null} title="注册" subTitle="请填写个人信息" />
        <Myform/>
      </div>
    )
  }
}

//导出组件
export default register;
