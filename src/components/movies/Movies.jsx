import './styles.css'

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    <section className='movies-section'>
      {hasMovies &&
          movies.map(movie => (
            <ul className='items-wrap' key={movie.imdbID}>
              <div className='img-container'>
                <img src={movie.Poster} alt={movie.Title} />
              </div>
              <li>{movie.Title}</li>
              <li>{movie.Year}</li>
            </ul>
          ))}
    </section>
  )
}
