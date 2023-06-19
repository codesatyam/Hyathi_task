import React from 'react'
import "../assets/styles/Pokemon.css"
import { NavLink } from 'react-router-dom'


/* Pokemon card to  show individual pokemon */
const Pokemoncard = (props) => {
  // console.log(props);
  return (
    // outer most container of card
    <div class="container-card">
  <div class="card">
  {/* image of card */}
    <div class="imgBx">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.Pid}.svg`} alt="API"/>
    </div>
    {/* details of individual pokemon */}
    <div class="contentBx">
      <h5>{props.name}</h5>
      <div class="status">
         
        <h6><span>Id:-</span>
        <span> {props.Pid}</span>
        </h6>
        <h6><span>Moves:-</span>
        <span>{props.moves}</span>
        </h6>
        <h6><span>Health:-</span>
        <span>{props.hp}</span>
        </h6>
      </div>
      <div className="link">
      <NavLink className="nav-link" to="#">View details</NavLink>{!props.forhome && ( props.adoptlink?<NavLink  className="nav-link" to="#">Adopt</NavLink>:
      <NavLink   className="nav-link" to="#">Remove</NavLink>)
     }

      </div>
      
    </div>
  </div>
</div>
  )
}

export default Pokemoncard