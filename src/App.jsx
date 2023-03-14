import { useState } from 'react'
import './styles.css'

import { Header } from './components/header/Header'
import { SearchForm } from './components/search-form/SearchForm'
import { Movies } from './components/movies/Movies'

function App () {
  const [movies, setMovies] = useState([])

  const updateMovies = (newMovies) => {
    setMovies(newMovies)
  }

  return (
    <div className='page'>
      <Header />

      <SearchForm updateMovies={updateMovies} />

      <Movies movies={movies} />
    </div>
  )
}

export default App
