import { useState  } from 'react';
import {TabBar, Icon } from 'zarm';
import 'zarm/dist/zarm.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Link } from 'react-router-dom';

const TabIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const Bar = () => {
  const [activeKey, setActiveKey] = useState('me');
  const handleChange = (value: string | number) => {
    if (typeof value === 'string') {
        setActiveKey(value);
    }
  };
  return (
    <>
       
       <TabBar activeKey={activeKey} onChange={handleChange}  className='fixed-bottom-left-right'>
        <TabBar.Item itemKey="home" title={<Link to="/home">九天</Link>} icon={<TabIcon type="home" />} />
        <TabBar.Item
          itemKey="found"
          title={<Link to="/lj">落伽</Link>}
          icon={<TabIcon type="menu" />}
          // badge={{ shape: 'circle', text: '3' }}
        />
        {/* 跳转到my页面 */}
        <TabBar.Item
          itemKey="me"
          title={<Link to="/my">六六村</Link>}
          icon={<TabIcon type="user" />}
          // badge={{ shape: 'dot' }}
        />
      </TabBar>
    </>
  );
}


export default Bar;

// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }
// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }

