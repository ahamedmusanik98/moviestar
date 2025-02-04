import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {

  const[searchTerm,setserachTerm] =useState('I AM BATMAN');

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
</div>

<Search searchTerm={searchTerm} setserachTerm={searchTerm}/>

  </main>
  )
}

export default App