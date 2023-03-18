import './styles.css'
import { useSearch } from '../../hooks/useSearch'

export function SearchForm ({ updateMovies }) {
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = async (event) => {
    // form controlled -> inputs as states
    // form uncontrolled -> inputs from DOM (event)
    event.preventDefault()
    await updateMovies(search)
  }

  const handleChange = (event) => {
    const movieName = event.target.value
    updateSearch(movieName)
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
            borderColor: error ? 'red' : '#333333'
          }}
        />

        <input
          className='form-btn'
          type='submit'
          value='🔎'
          disabled={error}
        />

      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </section>
  )
}
