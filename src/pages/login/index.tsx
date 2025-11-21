import { login } from '@/service/api/user';
import { Button, Form, Input, Col, Row } from 'antd';
import React from 'react';

const Index: React.FC = () => {
  const onFinish = (values: any) => {
    login(values).then((response: any) => {
      console.log('response',response)
    }).catch(error => {
      console.log('error:',error)
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row>
      <Col span={8}></Col>
      <Col span={8} style={{marginTop:'200px'}}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登 录
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={8}></Col>
    </Row>
    
  );
};

export default Index;
