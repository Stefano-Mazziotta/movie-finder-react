import { MOVIES_API_WITH_TOKEN } from '../constants/API'

export async function searchMovies ({ newMovieName }) {
  try {
    if (!newMovieName) return []

    const serverQuery = `${MOVIES_API_WITH_TOKEN}&s=${newMovieName}`

    const response = await fetch(serverQuery)
    if (!response.ok) throw new Error('error fetching search movies')

    const data = await response.json()

    if (!data) return []
    return data.Search
  } catch (error) {
    console.log(error)
  }
}
