const apiURL = process.env.REACT_APP_DATA_ENDPOINT

export type Beer = {
  name: string
  description: string
  price: number
  img: string
  filterId: string
}

export const getBeers = async (): Promise<Beer[]> => {
  const res = await fetch(apiURL)
  const responseJson = await res.json()
  return responseJson.data
}
