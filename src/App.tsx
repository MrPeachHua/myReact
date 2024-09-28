import React, { useEffect, useState } from 'react';
import {TabBar, Icon,Grid, NavBar  } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import './App.css';
import 'zarm/dist/zarm.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TabIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const App = () => {
  const [data, setData] = React.useState('');
  const [liData, setLiData] = React.useState([]);
  useEffect(() => {
    fetch('https://finance.yiduoyunfan.asia/about')
     .then(response => response.text())
     .then(response => {
       setData(response);
      });

  }, [data]);

  useEffect(() => {
    fetch('https://finance.yiduoyunfan.asia/allCode')
     .then(response => response.json())
     .then(response => {
       setLiData(response);
      });

  }, [data]);
  const [activeKey, setActiveKey] = useState('home');
  const handleChange = (value: string | number) => {
    if (typeof value === 'string') {
        setActiveKey(value);
    }
  };
  const grids = ["今日行情","股票概览", "今日热门", "股票编码查询", "", ""]
  return (
    <>
      <NavBar
        left={<ArrowLeft theme="primary" onClick={() => window.history.back()} />}
        title="黑神话股票"
      />

        <Grid square>
          {Array.from(grids).map((v, i) => (
            <Grid.Item key={i} className="container">
              <div  className='container'><span>{v}</span></div>
            </Grid.Item>
          ))}
        </Grid>
        <div className='spacer'></div>
        <Table className='table'>
          <Thead>
            <Tr>
              <Th>股票名称</Th>
              <Th>股票代码</Th>
              <Th><span style={{color:'red'}}>涨跌幅</span></Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              liData.map((item, index) => (
                <Tr key={index}>
                  <Td>{item['股票名称']}</Td>
                  <Td>{item['股票代码']}</Td>
                  <Td><span style={{color:'red'}}>{item['涨跌幅']}</span></Td>
                </Tr>
              ))
            }
            
          </Tbody>
        </Table>



        <TabBar activeKey={activeKey} onChange={handleChange}  className='fixed-bottom-left-right'>
        <TabBar.Item itemKey="home" title="首页" icon={<TabIcon type="home" />} />
        <TabBar.Item
          itemKey="found"
          title="项目"
          icon={<TabIcon type="menu" />}
          // badge={{ shape: 'circle', text: '3' }}
        />
        <TabBar.Item
          itemKey="me"
          title="我的"
          icon={<TabIcon type="user" />}
          // badge={{ shape: 'dot' }}
        />
      </TabBar>
    </>
  );
}


export default App;

// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }
// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }

