import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Mytoytable from './Mytoytable';

const Mytoy = () => {
const {user}=useContext(AuthContext);
const [mydata,setmydata]=useState([])
const url=`https://toy-server-lilac.vercel.app/alltoys?email=${user?.email}`;
useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        setmydata(data);
    })
},[])



//handle delete
const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
        fetch(`https://toy-server-lilac.vercel.app/alltoys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = mydata.filter(singledata => singledata._id !== id);
                    setmydata(remaining);
                }
            })
    }
}

    return (
        <div>
            <h2 className="text-5xl">My Toys: {mydata.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                   Action
                                </label>
                            </th>
                            <th>Toy Name</th>
                            <th>Toy Photo</th>
                            <th>Details</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='py-10'>
                        {
                           
                           mydata.map(singledata => <Mytoytable
                                key={singledata._id}
                                singledata={singledata}
                                handleDelete={handleDelete}
                               
                               
                            ></Mytoytable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Mytoy;