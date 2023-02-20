import React from 'react';
import { getSessionObject } from '../session';
import Personnage from '../components/personnage';
import Comic from '../components/comic';
const Favoris = () => {
const favoris = getSessionObject('favoris')
const persosFav = favoris.persos
const comicsFav = favoris.comics
    return (
        <div>
            <h1>Mes Favoris</h1>
            <hr />
            <h2>Mes personnages préférés</h2>
            <ul className="cards">
                {persosFav.map((perso) => <Personnage key={perso._id} perso={perso} />)}          
            </ul>

            <hr />
            <h2>Mes personnages préférés</h2>

            <ul className="cards">
                {comicsFav.map((comic) => <Comic key={comic._id} comic={comic} />)}          
            </ul>

        </div>
    )
}


export default Favoris;