import { useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies () {
  const [movies, setMovies] = useState([])

  const updateMovies = async (newMovieName) => {
    if (newMovieName === '') return

    const newMovies = await searchMovies({ newMovieName })
    setMovies(newMovies)
  }

  return { movies, updateMovies }
}
