import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const previousSearch = useRef(search)

  const updateMovies = useCallback(async ({ newMovieName }) => {
    try {
      if (newMovieName === '' || newMovieName === previousSearch.current) return

      setIsLoading(true)
      previousSearch.current = newMovieName
      const newMovies = await searchMovies({ newMovieName })
      setMovies(newMovies)
    } catch (error) {
      throw new Error('error when try update movies')
    } finally {
      setIsLoading(false)
    }
  }, [])

  // se realiza el calculo si cambia el valor movies y/o sort
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return { movies: sortedMovies, isLoading, updateMovies }
}
