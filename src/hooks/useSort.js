import { useState } from 'react'

export function useSort () {
  const [sort, setSort] = useState(false)

  const updateSort = (newValue) => {
    setSort(newValue)
  }

  return { sort, updateSort }
}
