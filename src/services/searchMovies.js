import { MOVIES_API_WITH_TOKEN } from '../constants/API'

export async function searchMovies ({ movieName }) {
  try {
    if (!movieName) return []

    const serverQuery = `${MOVIES_API_WITH_TOKEN}&s=${movieName}`

    const response = await fetch(serverQuery)
    if (!response.ok) throw new Error('error fetching search movies')

    const data = await response.json()

    if (!data) return []

    return data
  } catch (error) {
    console.log(error)
  }
}
