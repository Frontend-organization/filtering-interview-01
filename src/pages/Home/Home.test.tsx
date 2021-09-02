import { useFilters } from '@context/filters'
import useBeers from '@hooks/useBeers'
import { Beer } from '@services/beerService'
import { render } from '@testing-library/react'

import Home from '.'

jest.mock('@context/filters')
jest.mock('@hooks/useBeers')

const MockUseFilters = useFilters as jest.Mock
const MockUseBeers = useBeers as jest.Mock

MockUseFilters.mockReturnValue({ filters: [] })
MockUseBeers.mockReturnValue({ beers: [], isLoading: false })

const beers: Beer[] = Array.from({ length: 30 }).map((_, i) => ({
  description: `description-${i}`,
  filterId: `filter-${i}`,
  img: `img-${i}`,
  name: `name-${i}`,
  price: 200
}))

describe('<Home />', () => {
  it('should render without crashing', () => {
    const rendered = render(<Home />)
    expect(rendered).toMatchSnapshot()
  })

  it('should render results', () => {
    const [firstBeer] = beers
    MockUseBeers.mockReturnValueOnce({ beers, isLoading: false })
    const { getByText } = render(<Home />)
    expect(getByText(firstBeer.description)).toBeInTheDocument()
  })

  it('should render loading state', () => {
    MockUseBeers.mockReturnValueOnce({ beers: [], isLoading: true })
    const { getByText } = render(<Home />)
    expect(getByText('Cargando', { exact: false })).toBeInTheDocument()
  })

  it('should render error state', () => {
    MockUseBeers.mockReturnValueOnce({
      beers: [],
      isLoading: false,
      error: 'some-error'
    })
    const { getByText } = render(<Home />)
    expect(getByText('Ocurrió un error', { exact: false })).toBeInTheDocument()
  })
})
