import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const Personnage = () => {
const { state } = useLocation()
const [comics, setComics] = useState([])
useEffect(() => {
    loadComicsInfo(state._id).then(data => setComics(data))
})
    return(
        <div className="row">
            <div className="column">
                <img src={state.thumbnail.path + '.' + state.thumbnail.extension} alt={state.name}/>
            </div>
            <div className="column">
                <h2>Liste des comics associés</h2>
                <ul>
                    {comics.map((c, index)=> <li key={index}>
                        <div className>
                            <img className="related-comics"src={c.thumbnail.path + '.' + c.thumbnail.extension} alt={c.title} />
                            <span>{c.title}</span>
                        </div>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

const loadComicsInfo = async (id) => {
    const response = await fetch(`http://localhost:3001/related-comics?characterID=${id}`)
    const data = await response.json()
    const comics = data.comics
    return comics
}

export default Personnage;