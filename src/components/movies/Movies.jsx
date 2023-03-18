import { useRef } from 'react'
import './styles.css'

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  const isFirstTime = useRef(true)

  if (hasMovies) isFirstTime.current = false

  return (
    <section className='movies-section'>
      {
        (hasMovies) && <MoviesResult movies={movies} />
      }
      {
        (!hasMovies && !isFirstTime.current) && <MoviesNotFound />
      }
    </section>
  )
}

function MoviesResult ({ movies }) {
  return (

    <div className='grid'>
      {
        movies.map(movie => (

          <ul className='items-wrap' key={movie.id}>
            <div className='img-container'>
              <img src={movie.image} alt={movie.title} />
            </div>
            <li>{movie.title}</li>
            <li>{movie.year}</li>
          </ul>

        ))
      }
    </div>

  )
}

function MoviesNotFound () {
  return (
    <p>No hay películas para visualizar</p>
  )
}
