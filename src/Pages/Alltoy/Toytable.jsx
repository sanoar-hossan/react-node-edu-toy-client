import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Toytable = ({toy}) => {
const {_id,sellername,name,price,quantity,subcategory}=toy;

    return (
        <div>
            


                    <tr>
            
            <td>
            {sellername}
            </td>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
            <Link to={`/alltoy/${toy._id}`}>
  <button className='btn btn-outline hover:border'>View Details</button>
</Link>
                </td>
            
        </tr>
                    


        </div>
    );
};

export default Toytable;