import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../Providers/AuthProvider';

import Swal from 'sweetalert2'
import { Link, useParams } from 'react-router-dom';
const ShopCategory = () => {
  
  const [engineerToys, setEngineerToys] = useState([]);
  const [mathToys, setMathToys] = useState([]);
  const [scienceToys, setScienceToys] = useState([]);
  const{_id}=useParams();
  
const {user}=useContext(AuthContext)
  useEffect(() => {
    fetch('https://toy-server-lilac.vercel.app/alltoy/engeneertoy')
      .then((res) => res.json())
      .then((data) => {
        setEngineerToys(data);
      });

    fetch('https://toy-server-lilac.vercel.app/alltoy/mathtoy')
      .then((res) => res.json())
      .then((data) => {
        setMathToys(data);
      });

    fetch('https://toy-server-lilac.vercel.app/alltoy/sciencetoy')
      .then((res) => res.json())
      .then((data) => {
        setScienceToys(data);
      });
  }, []);

  const renderToys = (toys) => {
    return toys.map((toy) => (
      
      <div key={toy.id} className="bg-white rounded-lg p-4 shadow flex flex-row">
        <div className="flex-shrink-0">
          <img src={toy.picurl} alt={toy.name} className="w-32 h-32 rounded-lg" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">{toy.name}</h3>
          <p className="text-gray-600">Price: {toy.price}</p>
          <p className="text-gray-600">Rating: {toy.rating}</p>
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            onClick={() => {
              if (!user) {
                // Display notification and redirect to login page
               
                Swal.fire({
                  title: 'alert!',
                  text: "You have to log in first to view details",
                  icon: 'wrong',
                  confirmButtonText: 'ok'
                })
                history.push('/login'); // Replace '/login' with your login page route
              } 
              else <Link to={`/alltoy/${_id}`}></Link>
            }}
          >
            View Details
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Tabs>
        <TabList className="flex">
          <Tab className="mr-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
            Engineer Toy
          </Tab>
          <Tab className="mr-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
            Math Toy
          </Tab>
          <Tab className="mr-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
            Science Toy
          </Tab>
        </TabList>

        <TabPanel>
          <div className="mt-4">
            {engineerToys.length >= 2 ? (
              <div className="flex flex-row space-x-4">{renderToys(engineerToys)}</div>
            ) : (
              <p>No engineer toys available.</p>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-4">
            {mathToys.length >= 2 ? (
              <div className="flex flex-row space-x-4">{renderToys(mathToys)}</div>
            ) : (
              <p>No math toys available.</p>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-4">
            {scienceToys.length >= 2 ? (
              <div className="flex flex-row space-x-4">{renderToys(scienceToys)}</div>
            ) : (
              <p>No science toys available.</p>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
