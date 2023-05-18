import React from 'react';
import img1 from '../../../../src/assets/images/img1.jpg'
import img2 from '../../../../src/assets/images/img2.jpg'
import img3 from '../../../../src/assets/images/img3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-lg" />
    <div className="absolute h-full left-0 top-0 rounded-lg   bg-gradient-to-r from-black-400 to-white-200">
      <div className='text-black space-y-7 w-1/3 pl-4 '>
      <h4 className='text-black font-bold text-6xl'> Best Toy All Over The World</h4>
      <p className='text-black '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptate sequi, modi consequatur excepturi iste sint culpa! Placeat, impedit dolorem?</p>
      <button className="btn btn-success">Success</button>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full rounded-lg" />
    <div className="absolute rounded-lg h-full left-0 top-0   bg-gradient-to-r from-black-400 to-white-200">
      <div className='text-black space-y-7 w-1/3 pl-4'>
      <h4 className='text-black font-bold text-6xl'> Best Toy All Over The World</h4>
      <p className='text-black '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptate sequi, modi consequatur excepturi iste sint culpa! Placeat, impedit dolorem?</p>
      <button className="btn btn-success">Success</button>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full rounded-lg" />
    <div className="absolute rounded-lg h-full left-0 top-0   bg-gradient-to-r from-black-400 to-white-200">
      <div className='text-black space-y-7 w-1/3 pl-4'>
      <h3 className='text-black font-bold text-6xl'> Best Toy All Over The World</h3>
      <p className='text-black '>pararafgaaha lorem20</p>
      <button className="btn btn-success">Success</button>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
    );
};

export default Banner;