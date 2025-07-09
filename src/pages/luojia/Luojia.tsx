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
  const guaList = [
    {"code":"qian","img":"https://one.iseeauction.eu.org/images/qian.png"},
    {"code":"kun","img":"https://one.iseeauction.eu.org/images/kun.png"},
    {"code":"dui","img":"https://one.iseeauction.eu.org/images/dui.png"},
    {"code":"gen","img":"https://one.iseeauction.eu.org/images/gen.png"},
    {"code":"zhen","img":"https://one.iseeauction.eu.org/images/zhen.png"},
    {"code":"li","img":"https://one.iseeauction.eu.org/images/li.png"},
    {"code":"xun","img":"https://one.iseeauction.eu.org/images/zhuan.png"},
    {"code":"kan","img":"https://one.iseeauction.eu.org/images/kan.png"}
  ]

  function getValueByKey(obj: any, inputKey: string): string {
    
    let jsonStr = JSON.stringify(obj);
    let jsonObj = JSON.parse(jsonStr);
 
    // 遍历JSON对象的属性
    for (let key in jsonObj) {
      if (key == inputKey) {
        return jsonObj[key];
      }
    }
  return "";
}

  //0乾 1坤 2兑 3艮 4震 5离 6馔 7坎

  const gua64 = {
    "qian_qian":"卦一,乾,乾下乾上,乾为天,02",
    "kun_kun":"卦二,坤,坤下坤上,坤为地,10",

    "zhen_kan":"卦三,屯,震下坎上,水雷屯,15",
    "kan_gen":"卦四,蒙,坎下艮上,山水蒙,17",
    "qian_kan":"卦五,需,乾下坎上,水天需,20",
    "kan_qian":"卦六,讼,坎下乾上,天水讼,22",
    "kan_kun":"卦七,师,坎下坤上,地水师,25",
    "kun_kan":"卦八,比,坤下坎上,水地比,27",
    "qian_xun":"卦九,小畜,乾下巽上,风天小畜,29",
    "dui_qian":"卦十,履,兑下乾上,天择履,31",
    "qian_kun":"卦十一,泰,乾下坤上,地天泰,33",
    "kun_qian":"卦十二,否,坤下乾上,天地否,37",
    "li_qian":"卦十三,同人,离下乾上,天火同人,38",
    "qian_li":"卦十四,大有,乾下离上,火天大有,40",
    "gen_kun":"卦十五,谦,艮下坤上,地山谦,42",
    "kun_zhen":"卦十六,豫,坤下震上,雷地豫,44",
    "zhen_dui":"卦十七,随,震下兑上,泽雷随,46",
    "xun_gen":"卦十八,蛊,巽下艮上,风山蛊,48",
    "dui_kun":"卦十九,临,兑下坤上,地泽临,51",
    "kun_xun":"卦二十,观,坤下巽上,风地观,53",
    "zhen_li":"卦二十一,噬嗑,震下离上,火雷噬嗑,55",
    "li_gen":"卦二十二,贲,离下艮上,山火贲,57",
    "kun_gen":"卦二十三,剥,坤下艮上,山地剥,59",
    "zhen_kun":"卦二十四,复,震下坤上,地雷复,61",
    "zhen_qian":"卦二十五,无妄,震下乾上,天雷无妄,63",
    "qian_gen":"卦二十六,大畜,乾下艮上,山天大畜,65",
    "zhen_gen":"卦二十七,颐,震下艮上,山雷颐,68",
    "xun_dui":"卦二十八,大过,巽下兑上,泽风大过,70",
    "kan_kan":"卦二十九,坎,坎下坎上,坎为水,72",
    "li_li":"卦三十,离,离下离上,离为火,74",
    "gen_dui":"卦三十一,咸,艮下兑上,泽山咸,78",
    "xun_zhen":"卦三十二,恒,巽下震上,雷风恒,80",
    "gen_qian":"卦三十三,豚,艮下乾上,天水豚,82",
    "qian_zhen":"卦三十四,大壮,乾下震上,雷天大壮,84",
    "kun_li":"卦三十五,晋,坤下离上,火地晋,86",
    "li_kun":"卦三十六,明夷,离下坤上,地火明夷,88",
    "li_xun":"卦三十七,家人,离下巽上,风火家人,90",
    "dui_li":"卦三十八,暌,兑下离上,火泽暌,93",
    "gen_kan":"卦三十九,蹇,艮下坤上,水山蹇,96",
    "kan_zhen":"卦四十,解,坎下震上,雷水解,98",
    "dui_gen":"卦四十一,损,兑下艮上,山泽损,100",
    "zhen_xun":"卦四十二,益,震下巽上,风雷益,102",
    "qian_dui":"卦四十三,央,乾下兑上,泽天央,105",
    "xun_qian":"卦四十四,姤,巽下兑上,风雷姤,107",
    "kun_dui":"卦四十五,萃,坤下兑上,泽地萃,109",
    "xun_kun":"卦四十六,升,巽下坤上,地风升,112",
    "kan_dui":"卦四十七,泽,坎下兑上,泽水困,114",
    "xun_kan":"卦四十八,井,巽下坎上,风水井,116",
    "li_dui":"卦四十九,革,离下兑上,泽火革,119",
    "xun_li":"卦五十,鼎,巽下离上,风火鼎,121",
    "zhen_zhen":"卦五十一,震,震下震上,震为雷,123",
    "gen_gen":"卦五十二,山,艮下艮上,艮为山,125",
    "gen_xun":"卦五十三,渐,艮下巽上,风山渐,127",
    "dui_zhen":"卦五十四,归妹,兑下震上,雷泽归妹,130",
    "li_zhen":"卦五十五,丰,离下震上,雷火丰,132",
    "gen_li":"卦五十六,旅,艮下离上,火山旅,134",
    "xun_xun":"卦五十七,巽,巽下巽上,巽为风,136",
    "dui_dui":"卦五十八,泽,兑下兑上,兑为泽,138",
    "kan_xun":"卦五十九,涣,坎下巽上,风水涣,140",
    "dui_kan":"卦六十,节,兑下坎上,水泽节,142",
    "dui_xu":"卦六十一,中孚,兑下巽上,风泽中孚,144",
    "gen_zhen":"卦六十二,小过,艮下震上,雷山小过,146",
    "li_kan":"卦六十三,既济,离下坎上,水火既济,149",
    "kan_li":"卦六十四,未济,坎下离上,水火未济,150",

  }
  const shangyao = ()=>{
    let randomNumber = Math.floor(Math.random() * 8);
    setUp(guaList[randomNumber]["img"]);
    setUpCode(guaList[randomNumber]["code"]);
    setDesc(getValueByKey(gua64,downCode+"_"+guaList[randomNumber]["code"]))
  }
  const xiayao = ()=>{
    let randomNumber = Math.floor(Math.random() * 8);
    setDown(guaList[randomNumber]["img"]);
    setDownCode(guaList[randomNumber]["code"]);
    setDesc(getValueByKey(gua64,guaList[randomNumber]["code"]+"_"+upCode))
    setYaoDesc(Math.floor(Math.random() * 6)+1+"")
  }
  const [desc,setDesc] = useState<string>("")
  const [yaoDesc,setYaoDesc] = useState<string>("")
  const [up,setUp] = useState<string>("https://one.iseeauction.eu.org/images/qian.png")
  const [down,setDown] = useState<string>("https://one.iseeauction.eu.org/images/kun.png")
  const [upCode,setUpCode] = useState<string>("qian")
  const [downCode,setDownCode] = useState<string>("kun")
  return (
    <>
       <Grid columns={2} className='container'>
        <Grid.Item key="1">
            <Image width={200} height={230} src={up}></Image>
        </Grid.Item>
      
        <Grid.Item key="2">
        <Button theme="primary" onClick={shangyao}>上卦</Button>
        </Grid.Item>
        <Grid.Item key="3">
        <Image width={200} height={230} src={down}></Image>
        </Grid.Item>
        <Grid.Item key="4">
        <Button theme="primary" onClick={xiayao}>下卦</Button>
        </Grid.Item>
        <Grid.Item key="5">
        <span>{desc}</span>
        </Grid.Item>
        <Grid.Item key="6">
        <span>第{yaoDesc}爻</span>
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

