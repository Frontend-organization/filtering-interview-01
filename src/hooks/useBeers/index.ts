import { useEffect, useState } from 'react'
import { getBeers } from '../../services/beerService'

const useBeers = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [beers, setBeers] = useState([])

  useEffect(() => {
    setIsLoading(true)
    getBeers()
      .then((data) => {
        setBeers(data)
        console.log(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        console.log(err)
      })
  }, [])

  return { isLoading, beers, error }
}

export default useBeers
