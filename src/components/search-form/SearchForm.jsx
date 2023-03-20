import './styles.css'

export function SearchForm ({ updateMovies, search, updateSearch, errorSearch, sort, updateSort }) {
  const handleSubmit = async (event) => {
    // form controlled -> inputs as states
    // form uncontrolled -> inputs from DOM (event)
    event.preventDefault()
    await updateMovies({ search })
  }

  const handleChange = (event) => {
    const movieName = event.target.value
    updateSearch(movieName)
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
