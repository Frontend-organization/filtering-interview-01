import { render } from '@testing-library/react'

import Navbar from './Navbar'

describe('<Navbar />', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Navbar menuButton data-testid="navbar" />)
    const navbar = getByTestId('navbar')
    expect(navbar).toHaveClass('navbar')
    expect(getByTestId('btn-menu')).toBeDefined()
  })

  it('should render right content by props', () => {
    const { getByText } = render(<Navbar navbarRight={<span>Right</span>} />)
    const rightContent = getByText('Right')
    expect(rightContent).toBeDefined()
  })
})
