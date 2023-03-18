import { useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const updateMovies = async ({ search }) => {
    try {
      if (search === '') return

      setIsLoading(true)

      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      throw new Error('error when try update movies')
    } finally {
      setIsLoading(false)
    }
  }

  return { movies, isLoading, updateMovies }
}
