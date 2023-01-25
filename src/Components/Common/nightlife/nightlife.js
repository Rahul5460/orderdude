import React from 'react'
import { nightlife } from '../../../data/nightlife';
import Collection from '../collection/colection';
import ExploreSection from '../explore section/exploreSection';
import "./nightlife.css"

const collectionList=[
  {
    id:1,
    title:"Candlelight Dinner",
    cover:"https://b.zmtcdn.com/data/pictures/3/123363/67bcadbc6d42e9194a8447d660b99bdc.jpg",
    places:"6"
  },
  {
    id:2,
    title:"Party-On",
    cover:"https://www.fabhotels.com/blog/wp-content/uploads/2018/11/1000x650-72.jpg",
    places:"11",
  },
  {
    id:3,
    title:"Bars & Pubs",
    cover:"https://b.zmtcdn.com/data/pictures/3/18658523/f89ec98a00e553abd01865cbb8b37ca8.jpg",
    places:"17"
  },
  {
    id:4,
    title:"Late-Night",
    cover:"https://www.posist.com/restaurant-times/wp-content/uploads/2016/03/restaurant-826738_1920-800x532.jpg",
    places:"4"
  },
  {
    id:5,
    title:"Trending This Week",
    cover:"https://b.zmtcdn.com/data/pictures/9/18677579/9c7b5c4507f889dcec8b7a00192969d2.jpg",
    places:"13"
  },
  {
    id:6,
    title:"Sweets Tooth",
    cover:"https://b.zmtcdn.com/data/reviews_photos/a96/fc5d8b9d6861d8497a94bc98089eba96_1604491419.jpg",
    places:"19",
  },
  {
    id:7,
    title:"Veggie Friendly ",
    cover:"https://b.zmtcdn.com/data/reviews_photos/115/4c46f079a75fe27d56f48e22f2d11115_1611595880.jpg",
    places:"11"
  }
]
const nightlist=nightlife;
const Nightlife=()=>{
  return <div>
    <Collection list={collectionList} />
    <ExploreSection list={nightlist} collectionName='Nightlife Restaurants in Mohali' />
  </div>;
  
};

export default Nightlife;
