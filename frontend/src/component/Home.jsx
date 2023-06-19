import React, {useContext } from 'react'
import "../assets/styles/Home.css"
import Pokemoncard from './Pokemoncard'
import axios from 'axios'
import { Context } from '../main'
import PokemonAllCards from './PokemonAllCards'
/* Home  page*/
const Home = () => {
  const {pokData} = useContext(Context);

  return (
    <section className='home'>
      {/* Video */}
      <video autoPlay loop muted >
        <source src="https://storage.googleapis.com/pgoblog/HiddenGems/PGO_S11_LaunchTrailer_16x9_en.mp4" type="video/mp4" alt="loading" />
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ullam cum atque asperiores earum dolorem nesciunt culpa numquam distinctio accusamus, nulla soluta quia quas quam quod inventore ratione?
            Corrupti dolorum deserunt quo Cum qui iusto ipsa earum pariatur officiis necessitatibus maiores.</p>
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
        <PokemonAllCards data={pokData} pages={8} adoptlink={true} forhome={true} />
      </div>
    </section>
  )
}

export default Home;
