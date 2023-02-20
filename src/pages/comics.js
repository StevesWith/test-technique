import React, { useEffect, useState } from 'react';
import Comic from '../components/comic';

const Personnages = () => {
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(null);
    
    useEffect(() => {
        setLoading(true)
        loadComics().then(c => setComics(c))
        setLoading(false)
    },[])
    return (
        <div className="main">
            <h1>Liste des comics ({comics.length}) au total</h1>
            <div className="input-group">
                <div class="wrap">
                    <div class="search">
                        <input type="text" className="searchTerm" placeholder="recherchez votre comic"/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="suggestion">
                    
                </div>
            </div>
            
            <ul className="cards">
                {loading && <Loader />}
                {comics.map((comic) => <Comic key={comic._id} comic={comic} />)}          
            </ul>
        </div>
  
      
    )
}

const Loader = () => {
    return(<div className="loader">Chargement en cour...</div>)
}
const loadComics = async () => {
    const response = await fetch("http://localhost:3001/comics")
    const data = await response.json()
    return data.results
} 
export default Personnages;