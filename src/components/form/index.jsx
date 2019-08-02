import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button } from 'antd';
import './index.scss'

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class HorizontalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
        console.log(this);
        console.log('注册加载')
    }
    handleSubmit(e) {
        console.log(this);
        e.preventDefault();

        
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            } else {
                console.log(注册成功);
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit} className='loginForm'>
                <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入你的用户名!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入账号"
                        />,
                    )}
                </Form.Item>
                <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入你的密码' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="请输入密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        注册
          </Button>
                </Form.Item>
            </Form>
        );
    }
}

const Myform = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);


//导出组件
export default Myform;
