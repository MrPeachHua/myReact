import {Button, Grid, Icon, Image } from 'zarm';
import 'zarm/dist/zarm.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Bar from '../bar/Bar';
import { useState } from 'react';
import './Luojia.css';

const TabIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const Luojia  = () => {
  let nb = 8;
  const guaList = ["https://abc.yiduoyunfan.asia/qian.png",
    "https://abc.yiduoyunfan.asia/kun.png",
    "https://abc.yiduoyunfan.asia/dui.png",
    "https://abc.yiduoyunfan.asia/gen.png",
    "https://abc.yiduoyunfan.asia/zhen.png",
    "https://abc.yiduoyunfan.asia/li.png",
    "https://abc.yiduoyunfan.asia/zhuan.png",
    "https://abc.yiduoyunfan.asia/kan.png"
  ]
  const shangyao = ()=>{
    let randomNumber = Math.floor(Math.random() * 8);
    setUp(guaList[randomNumber])
  }
  const xiayao = ()=>{
    let randomNumber = Math.floor(Math.random() * 8);
    setDown(guaList[randomNumber])
  }
  const [up,setUp] = useState<string>("https://abc.yiduoyunfan.asia/qian.png")
  const [down,setDown] = useState<string>("https://abc.yiduoyunfan.asia/kun.png")
  return (
    <>
       <Grid columns={2} className='container'>
        <Grid.Item key="1">
            <Image width={200} height={230} src={up}></Image>
        </Grid.Item>
      
        <Grid.Item key="2">
        <Button theme="primary" onClick={shangyao}>上爻</Button>
        </Grid.Item>
        <Grid.Item key="3">
        <Image width={200} height={230} src={down}></Image>
        </Grid.Item>
        <Grid.Item key="4">
        <Button theme="primary" onClick={xiayao}>下爻</Button>
        </Grid.Item>
      </Grid>
       <Bar/>
    </>
  );
}


export default Luojia;

// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }
// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }

