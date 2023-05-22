import React, { useContext, useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopCategory = () => {
   
const [categorys,setcategorys]=useState([])
const url=`https://toy-server-lilac.vercel.app/alltoy/engeneertoy`;

useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        setcategorys(data);
        console.log(data);
    })
},[])


    return (
        <div>
          <Tabs>
    <TabList>
      <Tab>Engeneer Toy</Tab>
      <Tab>Tit</Tab>
    </TabList>

    <TabPanel>
      {/* <h2>categorys.filter(item=>item.category).map(card=>toy)</h2> */}
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ShopCategory;
