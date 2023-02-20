import React from 'react';
import { setSessionObject } from '../session';


const Comic = (props) => {
    let path = props.comic.thumbnail.path + "." + props.comic.thumbnail.extension;
    const handleLikeButton = (evt, comic) => {
        evt.preventDefault();
         setSessionObject('comics', comic._id, comic)
     }
    return(        
        <li className="cards_item">
            <div className="card">
                <div className="card_image"><img src={path} alt={`photo comic`+ props.comic._id} /></div>
                <div className="card_content">
                    <h2 className="card_title">{props.comic.title}</h2>
                    <p className="card_text">{props.comic.description}</p>
                </div>
                <button className="likeButton" type="submit" onClick={(e) => {handleLikeButton(e, props.comic)}}>J'aime   <i className="fa fa-thumbs-up like" aria-hidden="true"></i></button>                
            </div>
        </li>
    )
}
export default Comic;