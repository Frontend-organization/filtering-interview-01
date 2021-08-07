import { getBeers } from '../beerService'

const dataBeers = [
  {
    name: 'Cassels Milk Stou',
    description: 'Cassels & Sons Brewing. Cerveza porter y stout.',
    price: 75000,
    img: 'https://res.cloudinary.com/snack-coder-cloud/image/upload/v1627863161/cassels_hityhj.png',
    filterId: 'rubia'
  },
  {
    name: 'Camba Pale Ale',
    description: 'La Souche Franc-Bois d’hiver. Cerveza pale.',
    price: 85300,
    img: 'https://res.cloudinary.com/snack-coder-cloud/image/upload/v1627863161/camba_bgyigt.png',
    filterId: 'morena'
  }
]

beforeAll(() => {
  window.fetch = jest.fn()
})

describe('beerService', () => {
  it('should return an array of beers', async () => {
    const mockFetch = window.fetch as jest.Mock
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ data: dataBeers })
    })
    const beers = await getBeers()
    expect(beers).toHaveLength(dataBeers.length)
  })

  it('should throw by rejection', async () => {
    const errorCode = 400
    const mockFetch = window.fetch as jest.Mock
    mockFetch.mockRejectedValueOnce(new Error(`${errorCode}`))
    try {
      await getBeers()
    } catch (error) {
      expect(error.message.includes(errorCode)).toBe(true)
    }
  })
})
