import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {user,loading}=useContext(AuthContext)
const location=useLocation()
if (loading) {
    return <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  </div>
}
if (user) {
    return children;
}

    return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default PrivateRoute;