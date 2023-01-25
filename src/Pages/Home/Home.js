import React, { useState } from 'react'
import Delivery from '../../Components/Common/Delivery/delivery';
import DiningOut from '../../Components/Common/diningOut/diningOut';
import Footer from '../../Components/Common/footer/footer';
import Header from '../../Components/Common/header/header';
import Nightlife from '../../Components/Common/nightlife/nightlife';
import TabOptions from '../../Components/Common/tabOptions/tabOptions';

const Homepage=()=>{
    const [activeTab , setActiveTab]=useState("Delivery")
  return (
    <div>
        <Header/>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
       <Footer/>
    </div>
  );

};
const getCorrectScreen=(tab)=>{
    switch(tab){
        case 'Delivery': 
          return <Delivery/>
        case 'Dining Out': 
          return <DiningOut/>
        case 'Nightlife': 
          return <Nightlife/>
        default:
          return <Delivery/>
    }
}

export default Homepage;
