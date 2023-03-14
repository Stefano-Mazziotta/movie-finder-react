import { useState } from 'react'
import './styles.css'

export function SearchForm(){
    const [movieName, setMovieName] = useState('')

    const searchMovie = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const dataKeyValue = [...formData.entries()]
    }

    return (
        <section className="search-section">
        <form onSubmit={searchMovie}>
          <input className='form-input' type="text" placeholder='movie name' name='movieName'/>
          <input className='form-btn' type="submit" value="🔎" />
        </form>
      </section>
    )
}