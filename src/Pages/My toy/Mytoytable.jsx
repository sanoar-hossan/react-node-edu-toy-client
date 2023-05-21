import React from 'react';

const Mytoytable = ({singledata,handleDelete,handleBookingConfirm }) => {

const {price,quantity,detail,name,picurl,_id}=singledata;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-warning">
                    Delete
                </button>
            </th>
            <td>
            {name}
        </td>
       
        <td>

            <div className="avatar">
                <div className="rounded w-24 h-24">
                    {picurl && <img src={picurl} alt="Avatar Tailwind CSS Component" />}
                </div>
            </div>
        </td>
        
        <td>
            {detail}
        </td>
        <td>{quantity}</td>
        <td>${price}</td>
        <td><button onClick={() => handleBookingConfirm(_id, quantity, detail)} className='btn btn-ghost btn-outline'>
        Update
    </button></td>
        
    </tr>
    );
};

export default Mytoytable;