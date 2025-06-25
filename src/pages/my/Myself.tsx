import React, { useEffect, useState,useReducer  } from 'react';
import {TabBar, Icon,Grid, NavBar, Mask,List, Button, Picker, Radio } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import './Myself.css';
import 'zarm/dist/zarm.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Bar from '../bar/Bar';

const TabIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const SINGLE_DATA = [
  { value: '600927', label: '永安期货' },
  { value: '000002', label: '万科A' },
  { value: '002647', label: '仁东控股' },
  { value: '510500', label: '中证500ETF' }
];

const initState = {
  single: {
    visible: false,
    value: '',
    dataSource: SINGLE_DATA,
  },
};

const reducer = (state: any, action: any) => {
  const { type, key, value, fieldNames, dataSource } = action;

  switch (type) {
    case 'visible':
      return {
        ...state,
        [key]: {
          ...state[key],
          visible: !state[key].visible,
        },
      };

    case 'value':
      return {
        ...state,
        [key]: {
          ...state[key],
          value,
        },
      };

    case 'fieldNames':
      return {
        ...state,
        [key]: {
          ...state[key],
          fieldNames,
        },
      };

    case 'dataSource':
      return {
        ...state,
        [key]: {
          ...state[key],
          dataSource,
        },
      };

    default:
  }
};

const getMonth = () => {
  // 示例：假设有一个时间戳
  const startTime = new Date(); // 或者任何其他的时间戳
  const endTime = new Date();
  startTime.setDate(endTime.getDate() - 30);
  const startDate = timestampToYyyymmdd(startTime);
  const endDate = timestampToYyyymmdd(endTime);
  return {
    startDate,
    endDate,
  }
}


function timestampToYyyymmdd(timestamp:any) {
    const date = new Date(timestamp); // 将时间戳转换为Date对象
    const year = date.getFullYear(); // 获取年份
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 获取月份并补零
    const day = date.getDate().toString().padStart(2, '0'); // 获取日期并补零
    return year.toString() + month + day; // 拼接为yyyyMMdd格式
}
 

const My = () => {
  const [stockCode, setstockCode] = React.useState('');
  const [ridioValue, setRidioValue] = useState('day');
  const [liData, setLiData] = React.useState([]);
  const startDate = getMonth()['startDate'];
  const endDate = getMonth()['endDate'];
  useEffect(() => {
    fetch('https://finance.yiduoyunfan.top/quoteHistory?stockCode=000002&startDate='+startDate+'&endDate='+endDate+'&fType='+ridioValue)
     .then(response => response.json())
     .then(response => {
       setLiData(response);
       setstockCode('000002')
      });

  }, []);

  useEffect(() => {
    fetch('https://finance.yiduoyunfan.top/enumCode')
     .then(response => response.json())
     .then(response => {
      // 如果response为空
      if(response.length > 0){
        initState.single.dataSource = response.map((item: any) => ({ value: item.code, label: item.name }));
      }
      });

  }, []);

  const quoteHistory = (stockCode:any,fType:any) => {
    const startDate = getMonth()['startDate'];
    const endDate = getMonth()['endDate'];
    setToggleVisible(true);
    fetch('https://finance.yiduoyunfan.asia/quoteHistory?stockCode='+stockCode+'&startDate='+startDate+'&endDate='+endDate+'&fType='+fType)
     .then(response => response.json())
     .then(response => {
        setLiData(response);
      })
      .finally(() => {
        setToggleVisible(false);
        setstockCode(stockCode)
      });
  }

  const [activeKey, setActiveKey] = useState('me');
  const handleChange = (value: string | number) => {
    if (typeof value === 'string') {
        setActiveKey(value);
    }
  };
  const grids = ["今日行情","股票概览", "今日热门", "股票编码查询", "", ""]
  const [state, dispatch] = useReducer(reducer, initState);
  const setVisible = (key: string) => {
    dispatch({ type: 'visible', key });
  };
  const setValue = (key: any, value: any) => {
    dispatch({ type: 'value', key, value });
  };
  const [toggleVisible, setToggleVisible] = useState(false);
  const [color, setColor] = useState('black');
  const [opacity, setOpacity] = useState('normal')
  const toggle = () => setToggleVisible(!toggleVisible);

  

  const ridioOnChange = (value: any) => {
    console.log('onChange', value);
    setRidioValue(value);
    quoteHistory(stockCode,value);
  };
  return (
    <>
      <NavBar
        left={<ArrowLeft theme="primary" onClick={() => window.history.back()} />}
        title="黑神话股票"
      />

      <List>
        <List.Item
          title="选择股票"
          suffix={
            <Button size="xs" onClick={() => setVisible('single')}>
              选择
            </Button>
          }
        />
        </List>

        <Picker
        visible={state.single.visible}
        value={state.single.value}
        dataSource={state.single.dataSource}
        onConfirm={(changedValue, items) => {
          console.log('Single Picker onConfirm: ', items);
          setValue('single', changedValue);
          setVisible('single');
          toggle();
          quoteHistory(changedValue,ridioValue);
        }}
        onCancel={() => setVisible('single')}
      />


      <List>
        <List.Item>
          <Radio.Group value={ridioValue} onChange={ridioOnChange}>
            <Radio value="day">天级别</Radio>
            <Radio value="min">分钟级</Radio>
          </Radio.Group>
        </List.Item>
      </List>


        <div className='spacer'></div>
        <Table className='table'>
          <Thead>
            <Tr>
              <Th>股票名称</Th>
              <Th>股票代码</Th>
              <Th>涨跌额</Th>
              <Th>涨跌幅</Th>
              <Th>最高</Th>
              <Th>最低</Th>
              <Th>日期</Th>
              <Th>收盘</Th>
              <Th>换手率</Th>
              <Th>振幅</Th>
              <Th>成交额</Th>
              <Th>成交量</Th>
              <Th>开盘</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              liData.map((item, index) => (
                <Tr key={index}>
                  <Td>{item['股票名称']}</Td>
                  <Td>{item['股票代码']}</Td>
                  <Td>{item['涨跌额']}</Td>
                  <Td><span style={{color: String(item['涨跌幅']).indexOf('-') >= 0 ? 'green' :'red'}}>{item['涨跌幅']}</span></Td>
                  <Td>{item['最高']}</Td>
                  <Td>{item['最低']}</Td>
                  <Td>{item['日期']}</Td>
                  <Td>{item['收盘']}</Td>
                  <Td>{item['换手率']}</Td>
                  <Td>{item['振幅']}</Td>
                  <Td>{item['成交额']}</Td>
                  <Td>{item['成交量']}</Td>
                  <Td>{item['开盘']}</Td>
                </Tr>
              ))
            }
            
          </Tbody>
        </Table>
        <Mask visible={toggleVisible}  onClick={toggle}>
      
      </Mask>



       <Bar />
    </>
  );
}


export default My;

// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }
// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }

