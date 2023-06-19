import React, { useContext, useState, useEffect } from 'react';
import "../assets/styles/Adopt.css";
import { Context } from '../main';
import PokemonAllCards from './PokemonAllCards';

const MyPokemon = () => {
  const { pokData } = useContext(Context);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(pokData); // Initialize with default data
  }, [pokData]);

  const searchResult = () => {
    const updatedData = pokData.filter(item => item.id === parseInt(search) || item.name === search);
    setFilteredData(updatedData);
  };

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
        <PokemonAllCards data={filteredData} pages={8} title={"Adopted Pokemon"} adoptLink={false} forhome={false}/>
        </main>
    </div>
  )
}

export default MyPokemon;