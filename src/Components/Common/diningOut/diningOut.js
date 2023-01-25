import React from 'react'
import { diningOut } from '../../../data/diningout';
import Collection from '../collection/colection';
import ExploreSection from '../explore section/exploreSection';
import './diningOut.css'
const collectionList=[
  {
    id:1,
    title:"Best Rooftop Restaurants",
    cover:"https://b.zmtcdn.com/data/pictures/2/18862282/ca4bef7d952c65cc20ae48a497a10594.jpg",
    places:"11"
  },
  {
    id:2,
    title:"Bars & Pubs",
    cover:"https://b.zmtcdn.com/data/pictures/3/18658523/f89ec98a00e553abd01865cbb8b37ca8.jpg",
    places:"26"
  },
  {
    id:3,
    title:"Family Friendly",
    cover:"https://b.zmtcdn.com/data/pictures/3/123153/c5a9de1e4ba803d9d27a5ea1b89f57fe.jpg",
    places:"32",
  },
  {
    id:4,
    title:"Trending This Week",
    cover:"https://b.zmtcdn.com/data/pictures/9/18677579/9c7b5c4507f889dcec8b7a00192969d2.jpg",
    places:"17"
  },
  {
    id:5,
    title:"Sweets Tooth",
    cover:"https://b.zmtcdn.com/data/reviews_photos/a96/fc5d8b9d6861d8497a94bc98089eba96_1604491419.jpg",
    places:"19",
  },
  {
    id:6,
    title:"Late-Night",
    cover:"https://www.posist.com/restaurant-times/wp-content/uploads/2016/03/restaurant-826738_1920-800x532.jpg",
    places:"8"
  },
  {
    id:7,
    title:"Veggie Friendly ",
    cover:"https://b.zmtcdn.com/data/reviews_photos/115/4c46f079a75fe27d56f48e22f2d11115_1611595880.jpg",
    places:"11"
  }
]

const diningList=diningOut;
const DiningOut=()=>{
  return <div>
    <Collection list={collectionList}/>
    <ExploreSection list={diningList} collectionName='Dine-Out Restaurants in Mohali' />
  </div>; 
  
};

export default DiningOut;
