import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Toytable = ({toy}) => {
const {_id,sellername,name,price,quantity,category}=toy;

    return (
        <tr>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{sellername}</td>
        <td className='py-2'>
          <Link to={`/alltoy/${_id}`}>
            <button className="btn btn-outline hover:border">View Details</button>
          </Link>
        </td>
      </tr>
    );
};

export default Toytable;