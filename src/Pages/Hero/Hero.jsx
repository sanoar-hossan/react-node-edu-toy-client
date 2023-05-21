import React from 'react';
import img4 from '../../assets/images/img4.jpg'
const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="container mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover the Joy of Learning</h1>
            <p className="text-lg md:text-xl text-white mb-6">Unlock your child's potential with our educational toys.</p>
            <button className="bg-white text-purple-500 rounded-full py-3 px-8 font-semibold shadow-lg hover:bg-purple-100">Shop Now</button>
          </div>
          <div className="flex justify-center">
            <img src={img4} alt="Hero" className="rounded-lg w-full max-w-md" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Hero;