import React,{useState} from 'react'
import "../assets/styles/PokemonAllCards.css"
import Pokemoncard from './Pokemoncard';
const PokemonAllCards = (props) => {
     
      const data=props.data;
      const cardsPerPage=props.pages;
      // console.log(data.length);
        const [currentPage, setCurrentPage] = useState(1);
      
        // Calculate total number of pages
        const totalPages = Math.ceil(data.length /cardsPerPage);
      
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
          <span>{props.title?props.title:"Available Pokemon"}</span>
        </div>

        {/* Home Cards */}
        <div id="home-cards">
        {currentCards.map((item)=>{
          return <Pokemoncard Pid={item.id} name={item.name} img={item.sprites.front_default} hp={item.stats[0].base_stat} moves={item.moves.length} adoptlink={props.adoptlink} forhome={props.forhome}/>
         }
         )
        }
       </div>
        <div id="card-pagination">
        <button
           className='btn-style'
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className='btn-style'
            key={index}
            onClick={() => goToPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}

        <button
          className='btn-style'
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      
    </>
  )
}

export default PokemonAllCards;