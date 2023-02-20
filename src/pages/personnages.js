import React, { useEffect, useState } from 'react';
import Personnage from '../components/personnage.js';

const Personnages = () => {
    const [persos, setPersos] = useState([]);
    const [loading, setLoading] = useState(null);
    
    useEffect(() => {
        setLoading(true)
        loadPersos().then(p => setPersos(p))
        setLoading(false)
    },[])
    return (
        <div className="main">
            <h1>Liste des personnages comics ({persos.length}) au total</h1>
            <ul className="cards">
                {loading && <Loader />}
                {persos.map((perso) => <Personnage key={perso._id} perso={perso} />)}          
            </ul>
        </div>
  
      
    )
}

const Loader = () => {
    return(<div className="loader">Chargement en cour...</div>)
}
const loadPersos = async () => {
    const response = await fetch("http://localhost:3001/characters")
    const data = await response.json()
    return data.results
} 
export default Personnages;