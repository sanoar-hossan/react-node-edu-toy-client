import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Faq from '../../Faq/Faq';
import Hero from '../../Hero/Hero';
import ShopCategory from '../../ShopCategory/ShopCategory';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
        <div className='space-y-5'>
          <div className='py-10'><Banner></Banner></div>
          <div className='py-10'><Gallery></Gallery></div>
          <div className='py-10'>
            <div className='my-10'><h1 className='text-5xl text-center font-bold'>SHOP CATEGORY</h1></div>
            <div className='flex justify-center my-10'><ShopCategory></ShopCategory></div>
          </div>
          <div className='py-10'><Faq></Faq></div>
          <div className='py-10'> <Hero></Hero></div>
          
          
          
         
        </div>
    );
};

export default Home;