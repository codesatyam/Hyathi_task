import React, {useContext,useEffect, useState} from 'react'
import { Context,server } from '../../main'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/styles/User/profile.css"
import PokemonAllCards from '../PokemonAllCards'

const Profile = () => {
  const {user,isAuthenticated,pokData,mypokemons,setMyPokemons,cardprofile,Setcardprofile,refresh} = useContext(Context);
  
  
  useEffect(() => {
    axios
      .get(`${server}/api/v1/pokemon/my`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyPokemons(res.data.Pokemons);
        console.log(mypokemons,"profile");
        // Setcardprofile(true);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }, [refresh]);
  if (!isAuthenticated) return <Navigate to={"/signin"} />;
  return (
    <div id="profile-con">
        <header className='text-center d-flex justify-content-center' >
          <div className='dashboard'>Dashboard</div>
        </header>
        <main>
            <section id="left">
               <div id="pic">
               <FontAwesomeIcon icon={faUser} size="7x" />
               </div>
               <div id="personal-details">
                <h6>Name: <span> {user?.name}</span></h6>
                <h6>Email: <span> {user?.email}</span></h6>
                <h6>Phone: <span> 7905562832</span></h6>
               </div>
               <div id="personal-details">
               <h4>Links</h4>
               <h6>Website: <span><a href=""></a></span></h6>
                <h6>Github: <span> <a href=""></a></span></h6>
                <h6>Linkin: <span><a href=""></a> </span></h6>
                <h6>Facebook: <span><a href=""></a> </span></h6>
                <h6>Instagram: <span><a href=""></a> </span></h6>
               </div>
            </section>
            <section id="right">
             <header>
                <span className="adopt-count">
                    <h6>Total Adopted</h6>
                    <h6>{mypokemons.length}</h6>
                </span>
                <span className="adopt-count">
                    <h6>Remaining</h6>
                    <h6>{pokData.length-mypokemons.length}</h6>
                </span>
             </header>
             <main className="avialable-pokemon-profile">
             { mypokemons.length?
              <PokemonAllCards data={mypokemons} pages={3} title={"Adopted Pokemon"} adoptLink={false} forhome={false} forProfile={true}/>:""
             }
             </main>
            </section>
        </main>
    </div>
  )
}

export default Profile