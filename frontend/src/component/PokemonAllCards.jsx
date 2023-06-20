import React, { useState, useContext } from "react";
import "../assets/styles/PokemonAllCards.css";
import Pokemoncard from "./Pokemoncard";
import { Context, server } from "../main";

/*
  This component represents a collection of Pokemon cards.
  It displays a subset of Pokemon cards based on the current page.
  It also provides pagination buttons for navigating between pages.
*/
const PokemonAllCards = (props) => {
  const { pokData, setRefresh } = useContext(Context);

  const data = props.data;
  const cardsPerPage = props.pages;
  // console.log(data.length);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / cardsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Get the subset of data to display on the current page
  const currentCards = data.slice(startIndex, endIndex);

  // Handle page navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="text-center" id="pokemon-header">
        <span>{props.title ? props.title : "Available Pokemon"}</span>
      </div>

      <div id="home-cards">
        {currentCards.map((item) => {
          return props.forProfile ? (
            <Pokemoncard
              Pid={item.id}
              name={item.name}
              hp={item.hp}
              moves={item.moves}
              height={item.height}
              weight={item.weight}
              defense={item.defense}
              attack={item.attack}
              adoptlink={props.adoptlink}
              forhome={props.forhome}
              id={item._id}
              key={item._id}
            />
          ) : (
            <Pokemoncard
              Pid={item.id}
              name={item.name}
              weight={item.weight}
              height={item.height}
              hp={item.stats[0].base_stat}
              attack={item.stats[1].base_stat}
              defense={item.stats[2].base_stat}
              moves={item.moves.length}
              adoptlink={props.adoptlink}
              forhome={props.forhome}
            />
          );
        })}
      </div>
      <div id="card-pagination">
        <button
          className="btn-style arrow"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          &#8592;
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className="btn-style"
            key={index}
            onClick={() => goToPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="btn-style arrow"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          &#8594;
        </button>
      </div>
    </>
  );
};

export default PokemonAllCards;
