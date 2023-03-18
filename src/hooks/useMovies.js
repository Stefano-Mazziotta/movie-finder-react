import { useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies () {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const updateMovies = async (newMovieName) => {
    try {
      if (newMovieName === '') return

      setIsLoading(true)

      const newMovies = await searchMovies({ newMovieName })
      setMovies(newMovies)
    } catch (error) {
      throw new Error('error when try update movies')
    } finally {
      setIsLoading(false)
    }
  }

  return { movies, isLoading, updateMovies }
}
