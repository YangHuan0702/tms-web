import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Avatar } from 'antd';

import { Dropdown, Space } from 'antd';
import { DownOutlined, SettingOutlined } from '@ant-design/icons';


const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
];


const Header = Layout;
function App() {
    
    return (
        <Layout style={{marginBottom:5}}>
            <Header>
                <Row style={{background: '#fff'}}>
                    <Col span={6} ></Col>
                    <Col span={6} ></Col>
                    <Col span={6} ></Col>
                    <Col span={6} > 
                        <Space wrap size={16} >
                            <Avatar shape="square" style={{marginTop:5}} size="large" icon={<UserOutlined />} />
                        </Space>
                        <Space wrap size={16} style={{marginLeft:20}}>
                            <Dropdown menu={{ items }}>
                                <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    杨欢 / HaloSky清洁工
                                    <DownOutlined />
                                </Space>
                                </a>
                            </Dropdown>
                        </Space>
                    </Col>
                </Row>
            </Header>
        </Layout>
    )
}

export default App