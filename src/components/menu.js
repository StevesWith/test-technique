import React from 'react';


const Menu = () => {

    return (
       <ul className="menu">
           <li><a href={`/`}>Personnages</a></li>
           <li><a href={`/comics`}>Comics</a></li>
           <li><a href={`/favoris`}>Favoris</a></li>
       </ul>
    )
}


export default Menu;