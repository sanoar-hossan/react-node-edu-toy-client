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
        <div>
          <Banner></Banner>
          <Gallery></Gallery>
          <ShopCategory></ShopCategory>
          <Faq></Faq>
          <Hero></Hero>
        </div>
    );
};

export default Home;