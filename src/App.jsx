import React, { useEffect,useState } from 'react'
import Search from './components/Search'


const API_BASE_URL='https://api.themoviedb.org/3';

const API_KEY=import.meta.env.VITE_TMDB_API_KEY;

//API -Apllication Programming Interface -a set of rules that  allows one software application to talk to another 

const API_OPTIONS ={
  method:'GET',
  headers: {
    accepet :'application/json',
    Authorization :'Bearer ${API_KEY}'
  }
}

const App = () => {

  const[searchTerm,setserachTerm] =useState('');


  useEffect(()=>{

  },[])

  return (
    <main> 
   <div className='pattern'/>

<div  className='wrapper'>
  <header>
  <img src='./hero.png'  alt='Hero Banner' />
<h1>

Find <span className='text-gradient'>Movies </span>You'll Enjoy Without the Hassle
</h1>

  </header>
  <Search searchTerm={searchTerm} setserachTerm={setserachTerm}/>
  <h1 className='text-white'>{searchTerm}</h1>

</div>


  </main>
  )
}

export default App