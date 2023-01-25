import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../carousel/nextArrow';
import PrevArrow from '../../carousel/prevArrow';
import "./deliveryCollection.css"
import DeliveryItem from './deliveryItem/deliveryItem';

const deliveryItems=[
  {
    id: 1,
    title:"Pizza",
    cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 2,
    title:"Chicken",
    cover:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
  },
  {
    id: 3,
    title:" Burger",
    cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id: 4,
    title:"Rolls",
    cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
  },
  {
    id: 5,
    title:"Thali",
    cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    
  },
  {
    id: 6,
    title:"Parantha",
    cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
  },
  {
    id: 7,
    title:"Home-style",
    cover:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
  },
  {
    id: 8,
    title:"Sandwich",
    cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
  },
  {
    id: 9,
    title:"Briyani",
    cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  
  {
    id: 10,
    title:"Momos",
    cover:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
  },
  
  
  
  
  



]

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/> ,
  prevArrow: <PrevArrow/>,
};
const DeliveryCollection=()=>{
  return <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">What Do You Like To Eat Today?</div>
        <Slider {...settings}>
          {deliveryItems.map((item)=>{
            return <DeliveryItem item={item}/>
          })}
        </Slider>
      </div>
    </div>;
  
};

export default DeliveryCollection;