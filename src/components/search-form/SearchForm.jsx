import './styles.css'

export function SearchForm ({ updateMovies }) {
  // update movies when inputs change
  // useEffect(() => {
  //   const { movieName } = inputs
  //   updateMovies(movieName)
  // }, [inputs])

  const handleSubmit = async (event) => {
    // form controlled -> inputs as states
    // this code is a form uncontrolled
    event.preventDefault()

    const { movieName } = Object.fromEntries(
      new window.FormData(event.target)
    )

    await updateMovies(movieName)
  }

  return (
    <section className='search-section'>
      <form onSubmit={handleSubmit}>

        <input
          className='form-input'
          type='text'
          placeholder='Batman, Harry Potter, Avatar...'
          name='movieName'
        />

        <input
          className='form-btn'
          type='submit'
          value='🔎'
        />

      </form>
    </section>
  )
}
