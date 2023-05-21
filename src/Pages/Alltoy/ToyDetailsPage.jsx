import React, { useEffect, useState } from 'react';

const ToyDetailsPage = () => {
    const [details,setdetails]=useState([])
    const url=`https://toy-server-lilac.vercel.app/alltoys/${id}`;

    
    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setdetails(data);
          console.log(data);
          })
      }, []);
    

    return (
        <div>
          ?
        </div>
    );
};

export default ToyDetailsPage;