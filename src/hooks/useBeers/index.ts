import { useEffect, useState } from 'react'
import { getBeers, Beer } from '../../services/beerService'

type BeersState = {
  isLoading: boolean
  beers: Beer[]
  error: Error | null
}

const useBeers = (): BeersState => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [beers, setBeers] = useState<Beer[]>([])

  useEffect(() => {
    setIsLoading(true)
    getBeers()
      .then((data) => {
        setBeers(data)
        setIsLoading(false)
      })
      .catch(setError)
  }, [])

  return { isLoading, beers, error }
}

export default useBeers
