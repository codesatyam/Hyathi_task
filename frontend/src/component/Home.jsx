import React, {useContext } from 'react'
import "../assets/styles/Home.css"
import Pokemoncard from './Pokemoncard'
import axios from 'axios'
import { Context } from '../main'
import PokemonAllCards from './PokemonAllCards'
import video1 from "../video1.mp4"
/* Home  page*/
const Home = () => {
  const {pokData} = useContext(Context);

  return (
    <section className='home'>
      {/* Video */}
      <video autoPlay loop muted >
        <source src={video1} type="video/mp4" alt="loading" />
        Your browser does not support the video tag.
      </video>

      {/* Home Intro */}
      <section id="home-intro">
        <header>
          {/* About Pokemon Header */}
          <div className="about-pokemon-header text-center">
            <span>About Pokemon</span>
          </div>

          {/* About Pokemon Paragraph */}
          <div className="about-para">
            <p>Welcome to our Pokémon website! Discover the captivating world of Pokémon, where trainers embark on adventures, catch and train unique creatures, and strive to become Pokémon Masters.</p>
          </div>
        </header>
      </section>

      {/* Available Pokemon */}
      <div className="avialable-pokemon">
        {/* Available Pokemon Header */}
        {/* <div className="text-center" id="pokemon-header">
          <span>Available Pokemon</span>
        </div>
 
        <div id="home-cards">
        { pokData.map((item)=>{
          return <Pokemoncard Pid={item.id} name={item.name} img={item.sprites.front_default} hp={item.stats[0].base_stat} moves={item.moves.length}/>
         }
         )
        }
        </div> */}
        <PokemonAllCards data={pokData} pages={8} adoptlink={true} forhome={true} forProfile={false} />
      </div>
    </section>
  )
}

export default Home;
