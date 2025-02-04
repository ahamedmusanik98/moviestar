import React from 'react'

const Search = ({searchTerm,setserachTerm}) => {
  return (
    <div className='search'> 
    <div>
<img src='search.svg' alt='search'/>

<input
type="text"
placeholder="Search thousands of  Moives"
value={searchTerm}
onChange={(e)=>setserachTerm(e.target.value)}

/>

    </div>
    
       </div>
  )
}

export default Search