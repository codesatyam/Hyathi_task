import React from 'react'
import "../assets/styles/Pokemon.css"


/* Pokemon card to  show individual pokemon */
const Pokemoncard = (props) => {
  return (
    // outer most container of card
    <div class="container-card">
  <div class="card">
  {/* image of card */}
    <div class="imgBx">
      <img src={props.img}/>
    </div>
    {/* details of individual pokemon */}
    <div class="contentBx">
      <h5>{props.name}</h5>
      <div class="status">
        <h6><span>Breed:-</span>
        <span>Pokemon</span>
        </h6>
        <h6><span>Id:-</span>
        <span> {props.Pid}</span>
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