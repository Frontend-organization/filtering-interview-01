const apiURL = process.env.REACT_APP_DATA_ENDPOINT

export const getBeers = async () => {
  const res = await fetch(apiURL)
  const responseJson = await res.json()
  return responseJson.data
}
