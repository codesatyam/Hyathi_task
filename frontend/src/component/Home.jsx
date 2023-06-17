import React from 'react'
import "../assets/styles/Home.css"
import Pokemoncard from './Pokemoncard'

/* Home  page*/
const Home = () => {
  return (
    <section className='home'>
      {/* Video */}
      <video autoplay loop muted controls>
        <source src="https://storage.googleapis.com/pgoblog/HiddenGems/PGO_S11_LaunchTrailer_16x9_en.mp4" type="video/mp4" />
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
        <div className="text-center" id="pokemon-header">
          <span>Available Pokemon</span>
        </div>

        {/* Home Cards */}
        <div id="home-cards">
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
          <Pokemoncard />
        </div>
      </div>
    </section>
  )
}

export default Home;
