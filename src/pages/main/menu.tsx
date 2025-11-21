import React, { lazy } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
  {
    type: 'divider',
  },
  {
    key: 'account',
    label: '账户',
    icon: <SettingOutlined />,
    children: [
      { key: 'account_info', label: <Link to="/account/info">账户信息</Link> , },
      { key: 'xxxxx1', label: '余额信息' },
      { key: 'xxxxx2', label: '明细信息' },
      { key: 'xxxxx3', label: '风险检查' },
      { key: 'xxxxx4', label: '实物信息' },
      { key: 'xxxxx5', label: '业务交易' },
      { key: 'xxxxx6', label: '统计查询' },
    ],
  },
];

function App () {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const navigate = useNavigate();

  return (
    <div>
        <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        />
    </div>
  );
};

export default App;