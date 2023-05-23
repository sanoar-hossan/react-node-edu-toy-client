import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetailsPage = () => {
    const [details,setdetails]=useState([])
    const {id} = useParams();
    const url=`https://toy-server-lilac.vercel.app/alltoys/${id}`;
    
    const {_id,picurl,price,quantity,detail,name,rating,email}=details;
    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setdetails(data);
          console.log(data);
          })
      }, []);
    

    return (
      <div className="card">
      <img src={picurl} alt={name} className="w-full h-40 object-cover mb-4 rounded-md" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{detail}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="card-text font-semibold">Price: {price}</p>
            <p className="card-text font-semibold">Quantity: {quantity}</p>
          </div>
          <div>
            <p className="card-text font-semibold">Rating: {rating}</p>
            <p className="card-text">Email: {email}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ToyDetailsPage;