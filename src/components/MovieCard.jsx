import React from 'react'

const MovieCard = ({movie:{title,vote_average,poster_path,release_date,original_lanuguage}
}) => {
  return (
    <div className='movie-card'>
      <img  src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
      alt={title}
      />
<div className='mt-4'>
<h3> {title}  </h3>

<div className='content'>
<div className='rating'>
<img src='star.svg' alt='Star Icon'/>
<p>{vote_average ? vote_average.toFixed(1):'N/A'}</p>
</div>

<span>•</span>
<p className='lang'>{original_lanuguage}</p>

<span>•</span>
<p className='year'></p>
{release_date ? release_date.split('-'): 'N/A'}
</div>
</div>
    </div>
  )
}

export default MovieCard