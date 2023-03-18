import { useEffect, useState, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [errorSearch, setErrorSearch] = useState(null)
  const isFirstTime = useRef(true)

  const updateSearch = (movieName) => {
    isFirstTime.current = false
    setSearch(movieName)
  }

  useEffect(() => {
    if (isFirstTime.current) return

    if (search === '') {
      setErrorSearch('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setErrorSearch('No se puede buscar una película con número')
      return
    }

    if (search.length < 3) {
      setErrorSearch('La búsqueda debe tener más de 3 caracteres')
      return
    }

    setErrorSearch(null)
  }, [search])

  return { search, updateSearch, errorSearch }
}
