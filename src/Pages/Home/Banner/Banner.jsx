import React from 'react';
import img1 from '../../../../src/assets/images/img1.jpg';
import '../Banner/Banner.css'
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-item">
        <img src={img1} alt="Banner" className="banner-image" />
        <div className="banner-overlay space-y-3">
          <div className="banner-content py-5">
            <h4 className="banner-title ">Best Toy All Over The World</h4>
            <p className="banner-description">This is an awesome EduToy All over the World.</p>
            <button className="btn btn-success space-y-3">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
