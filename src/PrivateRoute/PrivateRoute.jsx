import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {user,loading}=useContext(AuthContext)
if (loading) {
    return <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  </div>
}
if (user) {
    return children;
}

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;