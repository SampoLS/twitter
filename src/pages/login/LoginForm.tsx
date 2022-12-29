import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';

import { useGetUserQuery } from "../../service/postsApi";

import 'antd/dist/antd.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // get user data from server
  const { data } = useGetUserQuery('');

  const handleLoggin = () => {
    // check the loggin user is exists
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === username && data[i].password === password) {
        navigate('/home')
        localStorage.setItem('isLoggined', data[i].isLoggined);
      } else {
        alert('check your username or password')
      }
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input value={username} onChange={(e: any) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password value={password} onChange={(e: any) => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={handleLoggin}>
          Log in
        </Button>
        <Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
