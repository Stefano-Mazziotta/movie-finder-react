import { MOVIES_API_WITH_TOKEN } from '../constants/API'

export async function searchMovies ({ newMovieName }) {
  try {
    if (!newMovieName) return []

    const serverQuery = `${MOVIES_API_WITH_TOKEN}&s=${newMovieName}`

    const response = await fetch(serverQuery)
    if (!response.ok) throw new Error('error fetching search movies')

    const data = await response.json()

    if (!data) return []

    const movies = data.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (error) {
    console.log(error)
  }
}
