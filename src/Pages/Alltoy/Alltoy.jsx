import React, { useEffect, useState } from 'react';
import Toytable from './Toytable';

const Alltoy = () => {

    const [toys,settoys]=useState([])
    useEffect(() => {
        fetch("https://toy-server-lilac.vercel.app/alltoys")
          .then(res => res.json())
          .then(data => {
            settoys(data);
          
          })
      }, []);
    return (
        <div>
<h2 className="text-5xl py-5 text-center mb-5 text-blue-600">All Toys </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Toy Name</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Seller Name</th>
                        </tr>
                    </thead>
                    <tbody className='overflow-x-auto w-full'>
                   {
                toys.map(toy=><Toytable
                    key={toy._id}
                                toy={toy}
                ></Toytable>)
            }
                    </tbody>

                </table>
            </div>

            
        </div>
    );
};

export default Alltoy;