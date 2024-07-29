import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
function MovieSearch() {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const searchMovies = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=`);
            console.log(response.data)
            setMovies(response.data.Search)
        } catch(error) {
            console.error(error);
        }
    }
    return(
        <>
        <h1>Pesquisar filmes</h1>
        <input value={query} placeholder='Digite um filme' onChange={(event)=> {setQuery(event.target.value)}} type="text" />
        <button onClick={searchMovies}>Pesquisar</button>      
        {movies && movies.map((movie) => {
            console.log(movie);
        })}
        </>
        
    );
}
export default MovieSearch;