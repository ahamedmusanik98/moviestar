import React, { useEffect,useState } from 'react'
import Search from './components/Search'
import { use } from 'react';


const API_BASE_URL='https://api.themoviedb.org/3';

const API_KEY=import.meta.env.VITE_TMDB_API_KEY;

//API -Apllication Programming Interface -a set of rules that  allows one software application to talk to another 

const API_OPTIONS ={
  method:'GET',
  headers: {
    accepet :'application/json',
    Authorization :`Bearer ${API_KEY}`
  }
}

const App = () => {

  const[searchTerm,setserachTerm] =useState('');

  const[errorMessage,setErrorMessage]=useState('');

  
  const fetchMovies = async () => {

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
  
      const response = await fetchMovies(endpoint, API_OPTIONS);  

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      console.log(data);
  
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching Movies. Try again later.');
    }
  }
  

  useEffect(()=>{
    fetchMovies();
  },[]);

  return (
    <main> 
   <div className='pattern'/>

<div  className='wrapper'>
  <header>
  <img src='./hero.png'  alt='Hero Banner' />
<h1>

Find <span className='text-gradient'>Movies </span>You'll Enjoy Without the Hassle
</h1>
<Search searchTerm={searchTerm} setserachTerm={setserachTerm}/>
  </header>
  
 <section className ="all-movies">
<h2>All Movies</h2>
{errorMessage && <p className="text-red-500">{errorMessage}</p>}
 </section>

</div>


  </main>
  )
}

export default App