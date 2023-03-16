import './styles.css'

import { Header } from './components/header/Header'
import { SearchForm } from './components/search-form/SearchForm'
import { Movies } from './components/movies/Movies'

import { useMovies } from './hooks/useMovies'

function App () {
  const { movies, updateMovies } = useMovies()
  return (
    <div className='page'>
      <Header />

      <SearchForm updateMovies={updateMovies} />

      <Movies movies={movies} />
    </div>
  )
}

export default App
