import React, {useContext} from 'react'
import { Context } from '../../main'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/styles/User/profile.css"
import PokemonAllCards from '../PokemonAllCards'

const Profile = () => {
    const {pokData,user} = useContext(Context);
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
               <h6>Website: <span>www.satyam.84ya.com</span></h6>
                <h6>Github: <span>satyam00011</span></h6>
                <h6>Linkin: <span>satyam00011</span></h6>
                <h6>Facebook: <span>satyam00011</span></h6>
                <h6>Instagram: <span>satyam00011</span></h6>
               </div>
            </section>
            <section id="right">
             <header>
                <span className="adopt-count">
                    <h6>Total Adopted</h6>
                    <h6>10</h6>
                </span>
                <span className="adopt-count">
                    <h6>Total Adopted</h6>
                    <h6>10</h6>
                </span>
             </header>
             <main className="avialable-pokemon-profile">
              <PokemonAllCards data={pokData}  pages={3} title={"Adopted Pokemon"}/>
             </main>
            </section>
        </main>
    </div>
  )
}

export default Profile