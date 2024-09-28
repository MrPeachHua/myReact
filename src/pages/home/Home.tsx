import React, { useEffect, useState } from 'react';
import {TabBar, Icon,Grid, NavBar  } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import './Home.css';
import 'zarm/dist/zarm.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Link } from 'react-router-dom';
import Bar from '../bar/Bar';

const TabIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const Home = () => {
  const [data, setData] = React.useState('');
  const [liData, setLiData] = React.useState([]);

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
              <Th><span>涨跌幅</span></Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              liData.map((item, index) => (
                <Tr key={index}>
                  <Td>{item['股票名称']}</Td>
                  <Td>{item['股票代码']}</Td>
                  <Td><span style={{color: String(item['涨跌幅']).indexOf('-') >= 0 ? 'green' :'red'}}>{item['涨跌幅']}</span></Td>
                </Tr>
              ))
            }
            
          </Tbody>
        </Table>



        <Bar />
    </>
  );
}


export default Home;

// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }
// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }

