import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}


const columns: TableProps<DataType>['columns'] = [
  {
    title: '单位名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '账号',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '户名',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '助记名',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '金融机构',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '开户机构',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '归集主体',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '联网方式',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '币种',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '会计科目',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '直连业务',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '余额',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '银行可用余额',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '折人民币余额',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '业务冻结余额',
    dataIndex: 'address',
    key: 'address',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];


const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const App: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default App;