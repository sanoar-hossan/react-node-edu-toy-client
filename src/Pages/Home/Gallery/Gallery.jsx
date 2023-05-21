import React from 'react';
import '../Gallery/Gallery.css'
const toys = [
    { id: 1, name: 'Toy 1', image: 'https://media.istockphoto.com/id/1017309510/photo/box-of-toys-on-the-floor-teddy-bear-in-box-vintage-tone-charitable-contribution-donation.jpg?s=612x612&w=0&k=20&c=PS2qfHXOkWTXNpWz4DN6snecYWa-EXqexW7j2VkxGAw=' },
    { id: 2, name: 'Toy 2', image: 'https://media.istockphoto.com/id/1322274556/photo/collection-of-different-toys-on-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=xgakHJwSN4-QD8cnzEfYyiy2AFpyJ7zywWA8a1lf3Xw=' },
    { id: 3, name: 'Toy 3', image: 'https://images.unsplash.com/photo-1676910975882-87687592810a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NpZW5jZSUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    // Add more toy objects with unique IDs and image URLs
    { id: 4, name: 'Toy 4', image: 'https://images.unsplash.com/photo-1678225867994-e7a5b071ebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaWVuY2UlMjB0b3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    // Add more toy objects with unique IDs and image URLs
    { id: 5, name: 'Toy 5', image: 'https://images.unsplash.com/photo-1479740030693-66ad10f3a7b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW5nZW5uZXIlMjB0b3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    // Add more toy objects with unique IDs and image URLs
    { id: 6, name: 'Toy 6', image: 'https://images.unsplash.com/photo-1595624871930-6e8537998592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVuZ2VubmVyJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
  ];
const Gallery = () => {
    
    return (
        <div>

<div className='text-center text-black font-bold text-4xl py-5 my-4'><h1>Our Toys Gallery </h1></div>
          <div className="gallery">
          
          {toys.map((toy) => (
            <div key={toy.id} className="gallery-item">
              <img src={toy.image} alt={toy.name} className="gallery-image" />
              <div className="gallery-overlay">
                <h3 className="gallery-title">{toy.name}</h3>
              </div>
            </div>
          ))}
        </div>
        </div>
    );
};

export default Gallery;