import React from 'react';
import { Hero } from '../../components/hero'
// import { CategorySlide } from '../../components/categorySlide'
import { FeaturedProduct } from '../../components/featuredProduct'
import { Banner } from '../../components/banner';
import { Blog } from '../../components/blog';


export const Home = () => {
  return (
    <div>
        <Hero />
        {/* <CategorySlide /> */}
        
        <FeaturedProduct />
        <Banner />
        <Blog />
    </div>
  )
}
