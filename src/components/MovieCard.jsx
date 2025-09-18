import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({photoPath}) => {
  return (
    <div className="w-48 m-2">
        <img alt="movie card" src={IMAGE_CDN_URL+photoPath}></img>
    </div>
  )
}

export default MovieCard