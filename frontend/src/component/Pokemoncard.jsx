import React, { useContext, useEffect, useState } from "react";
import "../assets/styles/Pokemon.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { server, Context } from "../main";
import Details from "./Details";

/*
  This component represents an individual Pokemon card.
  It displays the Pokemon's image, name, and details.
  It also provides buttons for showing details, adopting (if applicable), and removing (if applicable) the Pokemon.
*/

const Pokemoncard = (props) => {
  const { pokData, setRefresh } = useContext(Context);
  const [fresh, setFresh] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${server}/api/v1/pokemon/${id}`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const adoptHandler = async (
    id,
    name,
    moves,
    hp,
    weight,
    height,
    attack,
    defense
  ) => {
    try {
      const { data } = await axios.post(
        `${server}/api/v1/pokemon/new`,
        {
          id,
          name,
          moves,
          hp,
          weight,
          height,
          attack,
          defense,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
const feedHandler=async (id,hp=150)=>{
  try{
    const { data } = await axios.put(
      `${server}/api/v1/pokemon/${id}`,
      {
        hp
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    toast.success(data.message);
    setRefresh((prev) => !prev);
  } catch (error) {
    toast.error(error.response.data.message);
  }
}
  useEffect(() => {
    // Your useEffect code here (if needed)
  }, []);

  return (
    <div className="container-card">
      <div className="card">
        <div className="imgBx">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.Pid}.svg`}
            alt="API"
          />
        </div>
        <div className="contentBx">
          <h5>{props.name}</h5>
          <div className="status">
            <h6>
              <span>Id: </span>
              <span>{props.Pid}</span>
            </h6>
            <h6>
              <span>Moves: </span>
              <span>{props.moves}</span>
            </h6>
            <h6>
              <span>Health: </span>
              <span>{props.hp}</span>
            </h6>
          </div>
          <div className="link">
            <button className="nav-link" onClick={handleClick}>
              Details
            </button>
            {showPopup && (
              <Details
                onClose={handleClose}
                id={props.Pid}
                name={props.name}
                hp={props.hp}
                moves={props.moves}
                weight={props.weight}
                height={props.height}
                attack={props.attack}
                defense={props.defense}
              />
            )}
            {!props.forhome &&
              (props.adoptlink ? (
                <button
                  onClick={() =>
                    adoptHandler(
                      props.Pid,
                      props.name,
                      props.moves,
                      props.hp,
                      props.weight,
                      props.height,
                      props.attack,
                      props.defense
                    )
                  }
                  className="nav-link"
                >
                  Adopt
                </button>
              ) : (
                <div>
                <button
                  className="nav-link mx-2"
                  onClick={() => deleteHandler(props.id)}
                >
                  Remove
                </button>
        
              <button
                  className="nav-link"
                  onClick={() => feedHandler(props.id)}
                >
                  Feed
                </button>
                </div>
                
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemoncard;
