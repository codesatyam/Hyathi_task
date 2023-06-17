import React from 'react'
import "../assets/styles/Pokemon.css"


/* Pokemon card to  show individual pokemon */
const Pokemoncard = () => {
  return (
    // outer most container of card
    <div class="container-card">
  <div class="card">
  {/* image of card */}
    <div class="imgBx">
      {/* <img src=""/> */}
    </div>
    {/* details of individual pokemon */}
    <div class="contentBx">
      <h4>Name pokemon</h4>
      <div class="status">
        <h6><span>Breed:-</span>
        <span>Pokemon</span>
        </h6>
        <h6><span>Age:-</span>
        <span>Pokemon</span>
        </h6>
        <h6><span>Health:-</span>
        <span>Pokemon</span>
        </h6>
      </div>
      <a href="#">View details</a>
    </div>
  </div>
</div>
  )
}

export default Pokemoncard