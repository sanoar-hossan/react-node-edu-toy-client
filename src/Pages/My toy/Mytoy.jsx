import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

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

    return (
        <div>
            <h1>my toy :{mydata.length}</h1>
        </div>
    );
};

export default Mytoy;