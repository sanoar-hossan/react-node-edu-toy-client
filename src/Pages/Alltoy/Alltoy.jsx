import React, { useEffect, useState } from 'react';
import Toytable from './Toytable';
import { useParams } from 'react-router-dom';

const Alltoy = () => {
  const { searchText } = useParams();
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("https://toy-server-lilac.vercel.app/alltoys")
      .then(res => res.json())
      .then(data => {
        setToys(data);
      })
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const performSearch = () => {
    fetch(`https://toy-server-lilac.vercel.app/alltoysearch/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  const resetSearch = () => {
    fetch('https://toy-server-lilac.vercel.app/alltoys')
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setSearchTerm('');
      });
  };

  return (
    <div>
    <h2 className="text-5xl py-5 text-center mb-5 text-blue-600">All Toys</h2>
    <div className="flex items-center mb-4 py-8 justify-center">
      <input
        type="text"
        className="border border-gray-300 rounded-l-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-md py-2 px-4 ml-1"
        onClick={performSearch}
      >
        Search
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white rounded-r-md py-2 px-4 ml-1"
        onClick={resetSearch}
      >
        Reset
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4  py-2 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Toy Name
            </th>
            <th className="px-4  py-2 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Subcategory
            </th>
            <th className="px-4 py-2 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Price
            </th>
            <th className="px-4 py-2 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-4 py-2 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Seller Name
            </th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <Toytable key={toy._id} toy={toy} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default Alltoy;