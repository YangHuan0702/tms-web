
import { Layout } from 'antd';
import React, { Component, useState,Suspense  } from 'react';
import './index.less'; 
import TmsHeader from './header'
import Menu from './menu'
import { Outlet, Route, Routes } from 'react-router-dom';
import {routes} from '@/router/index'


const layoutStyle = {
  
};

const { Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={layoutStyle}>
        <TmsHeader />
        <Layout>
          <Sider width={256} theme='light'>
                <Menu></Menu>
          </Sider>
          <Content style={contentStyle}>
            <Outlet />
          </Content>
        </Layout>
    </Layout>
  );
};

export default App;
