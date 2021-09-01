import { renderHook } from '@testing-library/react-hooks'
import { getBeers } from '@services/beerService'

import useBeers from '.'

jest.mock('../../services/beerService')

const mockGetBeers = getBeers as jest.Mock
const mockResults = [
  {
    name: 'Prairie Artisian',
    description: 'Ales Prairie Noir Whiskey Barrel Aged Imperial Stout 12oz.',
    price: 85300,
    img: 'https://res.cloudinary.com/snack-coder-cloud/image/upload/v1627863161/prairie-artisian_eb5c6z.png',
    filterId: 'rubia'
  }
]

describe('useBeers', () => {
  it('should return array of beers', async () => {
    mockGetBeers.mockResolvedValueOnce(mockResults)
    const { result, waitFor } = renderHook(useBeers)
    await waitFor(() =>
      expect(result.current.beers).toHaveLength(mockResults.length)
    )
  })

  it('should return error filled', async () => {
    const error = { code: 400 }
    mockGetBeers.mockRejectedValueOnce({ error })
    const { result, waitFor } = renderHook(useBeers)
    await waitFor(() => expect(result.current.error).toEqual({ error }))
  })
})
