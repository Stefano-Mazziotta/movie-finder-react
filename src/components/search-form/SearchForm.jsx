import './styles.css'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

export function SearchForm ({ updateMovies, search, updateSearch, errorSearch, sort, updateSort }) {
  const debouncedUpdateMovies = useCallback(
    debounce(newMovieName => {
      console.log('search', newMovieName)
      updateMovies({ newMovieName })
    }, 300)
    , [updateMovies])

  const handleSubmit = (event) => {
    // form controlled -> inputs as states
    // form uncontrolled -> inputs from DOM (event)
    event.preventDefault()
    updateMovies({ newMovieName: search })
  }

  const handleChange = (event) => {
    const newMovieName = event.target.value
    updateSearch({ newMovieName })
    debouncedUpdateMovies(newMovieName)
  }

  const handleSort = () => {
    updateSort(!sort)
  }

  return (
    <section className='search-section'>
      <form onSubmit={handleSubmit}>

        <input
          className='form-input'
          type='text'
          placeholder='Batman, Harry Potter, Avatar...'
          name='movieName'
          value={search}
          onChange={handleChange}
          style={{
            border: '1px solid transparent',
            borderColor: errorSearch ? 'red' : '#333333'
          }}
        />

        <input
          className='form-btn'
          type='submit'
          value='🔎'
          disabled={errorSearch}
        />

      </form>
      {errorSearch && <p style={{ color: 'red' }}>{errorSearch}</p>}
      <div className='checkbox-wrap'>
        <label>Sort alphabetically movies</label>
        <input type='checkbox' name='sortMovies' value={sort} onChange={handleSort} />
      </div>
    </section>
  )
}
