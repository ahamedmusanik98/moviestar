import React from 'react'

const MovieCard = ({movie:{title,vote_average,poster_path,release_date,original_lanuguage_}
}) => {
  return (
    <div className='movie-card'>
      <img  src={poster_path ?}/>
    </div>
  )
}

export default MovieCard