import { useRef, useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const previousSearch = useRef(search)

  const updateMovies = async ({ search }) => {
    try {
      if (search === '' || search === previousSearch.current) return

      setIsLoading(true)
      previousSearch.current = search
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
