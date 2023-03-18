import { useEffect, useState, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstTime = useRef(true)

  const updateSearch = (movieName) => {
    isFirstTime.current = false
    setSearch(movieName)
  }

  useEffect(() => {
    if (isFirstTime.current) return

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener más de 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
