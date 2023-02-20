import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setSessionObject } from '../session';


const Personnage = (props) => {
    let naviguate = useNavigate()
    let path = props.perso.thumbnail.path + "." + props.perso.thumbnail.extension;
    console.log(path)
    const handleclick = (e) => {
        e.preventDefault();       
       naviguate(`/personnages/${props.perso._id}`, {state: props.perso})
    }
    const handleLikeButton = (evt, perso) => {
       evt.preventDefault();
        setSessionObject('persos', perso._id, perso)
    }
    return(        
        <li className="cards_item">
            <div className="card">
            <div className="card_image"><img src={path} alt={`photo comic`+ props.perso._id} /></div>
            <div className="card_content">
                <h2 className="card_title">{props.perso.name}</h2>
                <p className="card_text">{props.perso.description}</p>
                <button className="btn card_btn" onClick={handleclick}>Voir plus</button>
                <button className="likeButton"type="submit" onClick={(e) => {handleLikeButton(e, props.perso)}}>J'aime      <i className="fa fa-thumbs-up like" aria-hidden="true"></i></button>                
            </div>
            </div>
        </li>
    )
}

export default Personnage;