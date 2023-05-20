import React, { useEffect, useState } from 'react';
import Toytable from './Toytable';

const Alltoy = () => {

    const [toys,settoys]=useState([])
    useEffect(() => {
        fetch("http://localhost:5000/alltoys")
          .then(res => res.json())
          .then(data => {
            settoys(data);
          })
      }, []);
    return (
        <div>
            {
                toys.map(toy=><Toytable
                    key={toy._id}
                                toy={toy}
                ></Toytable>)
            }
        </div>
    );
};

export default Alltoy;