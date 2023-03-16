import { useState } from 'react'

import './styles.css'

export function SearchForm ({ updateMovies }) {
  const [inputs, setInputs] = useState({})

  // update movies when inputs change
  // useEffect(() => {
  //   const { movieName } = inputs
  //   updateMovies(movieName)
  // }, [inputs])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { movieName } = inputs
    await updateMovies(movieName)
  }

  const handleChange = (event) => {
    const input = event.target

    const name = input.name
    const value = input.value

    setInputs(values => ({ ...values, [name]: value }))
  }

  return (
    <section className='search-section'>
      <form onSubmit={handleSubmit}>

        <input
          className='form-input'
          type='text'
          placeholder='Batman, Harry Potter, Avatar...'
          name='movieName'
          value={inputs.movieName || ''}
          onChange={handleChange}
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
