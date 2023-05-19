import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavBar = () => {
  const {user,updateProfilePhoto}=useContext(AuthContext);
    const navItems= <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/alltoys'>All Toys</Link></li>
    <li><Link to='/mytoys'>My Toys</Link></li>
    <li><Link to='/blog'>Blogs</Link></li>
    <li><Link>{user ? <img src={user.photoURL} className='w-11 h-10 rounded hover:bg-red-500'  /> : <Link to='/login'>Login</Link>}</Link></li>
    <li> { user && user.email}</li>
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {
            navItems
        }
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">EduToy</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navItems
      }
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/addtoy'><button className="btn btn-success">Add A Toy</button></Link>
  </div>
</div>
    );
};

export default NavBar;