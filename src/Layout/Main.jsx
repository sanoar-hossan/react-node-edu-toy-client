import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='py-7'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;