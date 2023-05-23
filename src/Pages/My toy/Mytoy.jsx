import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Mytoytable from './Mytoytable';
import Swal from 'sweetalert2'
const Mytoy = () => {
const {user}=useContext(AuthContext);
const [sortOrder, setSortOrder] = useState('asc');
const [mydata,setmydata]=useState([])
const url=`https://toy-server-lilac.vercel.app/alltoys?email=${user?.email}`;
useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        setmydata(data);

        //sorting 
        
    })
},[user])

useEffect(() => {
    fetch(`https://toy-server-lilac.vercel.app/alltoys?sortBy=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        setmydata(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sortOrder]);

//handle update
const handleUpdate = (updatedToy) => {
    fetch(`https://toy-server-lilac.vercel.app/alltoys/${updatedToy._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedToy)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
            title: 'Success!',
            text: 'Update Toy Successfully',
            icon: 'success',
            confirmButtonText: 'ok'
          })
        // update state
        const remaining = mydata.filter(singledata => singledata._id !== id);
        const updated = mydata.find(singledata => singledata._id === id);
        updated.status = 'confirm';
        const newdata = [updated, ...remaining];
        setmydata(newdata);
      }
    })
  }


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

const handleSortOrderChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };
    return (
        <div>
      <h2 className="text-5xl">My Toys: {mydata.length}</h2>
      {/* Sorting buttons */}
      <div className="my-4">
        <button className="btn btn-primary" onClick={() => handleSortOrderChange('asc')}>
          Sort Ascending
        </button>
        <button className="btn btn-primary ml-2" onClick={() => handleSortOrderChange('desc')}>
          Sort Descending
        </button>
      </div>
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
                                handleUpdate={handleUpdate}
                               
                            ></Mytoytable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Mytoy;