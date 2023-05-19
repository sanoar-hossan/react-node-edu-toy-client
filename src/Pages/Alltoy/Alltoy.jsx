import React, { useEffect, useState } from 'react';

const Alltoy = () => {

    const [toys,settoys]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/alltoys")
        .then(res=>res.json)
        .then(data=>{
            settoys(data);
        })
    },[])
    return (
        <div>
            useeff
        </div>
    );
};

export default Alltoy;