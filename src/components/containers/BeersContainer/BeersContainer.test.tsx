import BeersContainer from '@components/containers/BeersContainer'
import { render } from '@testing-library/react'
import { Beer } from '@services/beerService'

const beers: Beer[] = Array.from({ length: 10 }).map((_, i) => ({
  description: `description-${i}`,
  filterId: `filter-${i}`,
  img: `img-${i}`,
  name: `name-${i}`,
  price: 100
}))

describe('<BeersContainer />', () => {
  it('should render without crashing', () => {
    const [firstBeer] = beers
    const { getByText } = render(<BeersContainer beers={beers} />)
    expect(getByText(firstBeer.description)).toBeInTheDocument()
  })

  it('render empty component', () => {
    const emptyText = 'Empty results'
    const { getByText } = render(
      <BeersContainer beers={[]} renderEmptyComponent={<p>{emptyText}</p>} />
    )
    expect(getByText(emptyText)).toBeInTheDocument()
  })
})
