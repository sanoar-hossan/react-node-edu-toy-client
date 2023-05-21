import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Faq from '../../Faq/Faq';
import Hero from '../../Hero/Hero';
import ShopCategory from '../../ShopCategory/ShopCategory';

const Home = () => {
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