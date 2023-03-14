import './styles.css'

import { Header } from './components/header/Header'
import { SearchForm } from './components/search-form/SearchForm'
import { useState } from 'react'

function App () {
  const [movies, setMovies] = useState([])

  const updateMovies = (newMovies) => {
    setMovies(newMovies)
  }

  return (
    <main>
      <Header />

      <SearchForm updateMovies={updateMovies} />

      <section className='movies-section' />
      {movies.length > 0 &&
        <p style={{ width: '100vw' }}>{JSON.stringify(movies)}</p>}
    </main>
  )
}

export default App
