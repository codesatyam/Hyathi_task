import React, { useContext, useState, useEffect } from 'react';
import "../assets/styles/Adopt.css";
import { Context } from '../main';
import PokemonAllCards from './PokemonAllCards';
import { Navigate } from 'react-router-dom';

const Adopt = () => {
  // Accessing data from the Context component
  const { pokData, mypokemons, isAuthenticated, refresh, setRefresh } = useContext(Context);
  
  // State variables
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter pokData based on mypokemons and update filteredData state
    setFilteredData(pokData.filter((item) => !mypokemons.find((p) => p.id === item.id)));
    // setFilteredData(pokData.filter((item,index)=>index===pokData.findIndex((obj) => obj.id === item.id))); // Initialize with default data
  }, [refresh]);

  const searchResult = () => {
    // Filter pokData based on search input and update filteredData state
    const updatedData = pokData.filter(item => item.id === parseInt(search) || item.name === search);
    setFilteredData(updatedData);
  };
   
  // Redirect to sign-in page if not authenticated
  if (!isAuthenticated) return <Navigate to={"/signin"} />;
  
  return (
    <div id="adopt-con">
      <header className='header-adopt'>
        <div className="search-con">
          <input
            id="search"
            className="search-input"
            type="text"
            placeholder="Enter Name or Id"
            name='searchVal'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn" onClick={searchResult}>Search</button>
        </div>
        <div className="filter-dropdown">
          <select className='filter-option'>
            <option value="all">Filter</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </header>
      <main>
        <PokemonAllCards data={filteredData} pages={8} adoptlink={true} forhome={false} forProfile={false} />
      </main>
    </div>
  );
};

export default Adopt;
