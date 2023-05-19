import React from 'react';
import '../Gallery/Gallery.css'
const toys = [
    { id: 1, name: 'Toy 1', image: 'https://media.istockphoto.com/id/1017309510/photo/box-of-toys-on-the-floor-teddy-bear-in-box-vintage-tone-charitable-contribution-donation.jpg?s=612x612&w=0&k=20&c=PS2qfHXOkWTXNpWz4DN6snecYWa-EXqexW7j2VkxGAw=' },
    { id: 2, name: 'Toy 2', image: 'https://media.istockphoto.com/id/1322274556/photo/collection-of-different-toys-on-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=xgakHJwSN4-QD8cnzEfYyiy2AFpyJ7zywWA8a1lf3Xw=' },
    { id: 3, name: 'Toy 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPXFnOCQEBaZZiKF3KAGj6uKQ9rF6uol8VZ3Ntx8kR&s' },
    // Add more toy objects with unique IDs and image URLs
    { id: 4, name: 'Toy 4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-yStRebC8JWXe4JqTfnPXf4mhMgyMw0PI3Q5d9V-oA&s' },
  ];
const Gallery = () => {
    
    return (
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
    );
};

export default Gallery;