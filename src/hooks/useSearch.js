import { useEffect, useState, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [errorSearch, setErrorSearch] = useState(null)
  const isFirstInput = useRef(true)

  const updateSearch = (movieName) => {
    setSearch(movieName)
  }

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

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
