import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../carousel/nextArrow';
import PrevArrow from '../../carousel/prevArrow';
import "./topBrands.css"


const brandList=[
  {
    id: 1,
    title:"38 min",
    cover:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21194010/Dominos.png",
  },
  {
    id: 2,
    title:"29 min",
    cover:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21193931/Subway.png",
  },
  {
    id: 3,
    title:"35 min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
  },
  {
    id: 4,
    title:"40 min",
    cover:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21194004/KFC.png",
  },
  {
    id: 5,
    title:"32 min",
    cover:"https://cdn.dribbble.com/users/4650/screenshots/62251/media/71485b902bda3d743ae5d7ff241c835f.jpg",
  },
  {
    id: 6,
    title:"25 min",
    cover:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21194151/Dennys.png",
  },
  {
    id: 7,
    title:"37 min",
    cover:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21194000/McDonalds.png",
  },
  {
    id: 8,
    title:"45 min",
    cover:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21194211/Burger-King.png",
  },
  {
    id: 9,
    title:"20 min",
    cover:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21194019/Panera-Bread.png",
  },
  
  {
    id: 10,
    title:"45 min",
    cover:"https://i.pinimg.com/236x/d6/fb/2d/d6fb2d35b1d108cb281b4815943cd369--starbucks-logo-starbucks-store.jpg",
  },
  
  
  
  
  



]

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow/> ,
  prevArrow: <PrevArrow/>,
};
const TopBrands=()=>{
  return <div className="top-brand max-width">
     
        <div className="collection-title">Top Brands In Your Area</div>
        <Slider {...settings}>
          {brandList.map((brand)=>{
            return <div className='top-brand-cover'>
                <img src={brand.cover} alt={brand.title} className="top-brand-cover"/>
                 <div className='brand-title'>{brand.title}</div>
            </div>
          })}
        </Slider>
    </div>;
  
};

export default TopBrands;