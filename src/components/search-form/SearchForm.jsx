import { useEffect, useState } from 'react'
import { searchMovies } from '../../services/searchMovies'
import './styles.css'

export function SearchForm ({ updateMovies }) {
  const [inputs, setInputs] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    if (!isSubmit) return

    searchMovies(inputs)
      .then(data => {
        const movies = data.Search
        updateMovies(movies)
        setIsSubmit(false)
      })
  }, [isSubmit])

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmit(true)
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
