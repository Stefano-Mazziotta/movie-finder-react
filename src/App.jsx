import './styles.css'

import { Header } from './components/header/Header'
import { SearchForm } from './components/search-form/SearchForm'
import { Loader } from './components/loader/Loader'
import { Movies } from './components/movies/Movies'

import { useSort } from './hooks/useSort'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'

function App () {
  const { sort, updateSort } = useSort()
  const { search, updateSearch, errorSearch } = useSearch()
  const { movies, updateMovies, isLoading } = useMovies({ search, sort })

  return (
    <div className='page'>
      <Header />

      <SearchForm
        updateMovies={updateMovies}
        search={search}
        updateSearch={updateSearch}
        errorSearch={errorSearch}
        sort={sort}
        updateSort={updateSort}
      />
      {
        isLoading && <Loader />
      }

      <Movies movies={movies} />
    </div>
  )
}

export default App
