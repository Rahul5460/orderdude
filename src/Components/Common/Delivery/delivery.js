import React from 'react'
import {restaurants } from '../../../data/restaurants';
import ExploreSection from '../explore section/exploreSection';
import Filters from '../filters/filter';
import "./Delivery.css"
import DeliveryCollection from './deliveryCollections/deliveryCollection';
import TopBrands from './topBrands/topBrands';

const deliveryFilters=[
  {
    id:1,
    title: "Filters" ,
  },
  {
    id:2,
    title: "Rating: 4.0+",
  },
  {
    id:3,
    title: "Safe and Hygienic",
  },
  {
    id:4,
    title: "Pure-Veg",
  },
  {
    id:5,
    icon: <i class="fa-light fa-arrow-down-arrow-up absolute-center"></i>,
    title: "Delivery Time",
  },
   {
    id:6,
    icon: <i className=''></i>,
    title: "Great Offers",
  }
]
const restaurantList= restaurants;
const Delivery=()=>{
  return <div>
        <div className='max-width'>
          <Filters filterList={deliveryFilters}/>
        </div>
        <DeliveryCollection/>
        <TopBrands/>
        <ExploreSection list={restaurantList} collectionName='Delivery Restaurants In Mohali' />
  </div>;
  
};

export default Delivery;
