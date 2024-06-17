import React from 'react'
import MovieCard from '../components/MovieCard'

const MovieDetails = ({props}) => {
  const {poster} = props;
  return (
    <div>
      <MovieCard posterPath={poster}/>
        
    </div>
  )
}

export default MovieDetails;
