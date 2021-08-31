import Footer from '@components/containers/Footer'
import { render } from '@testing-library/react'
import s from './Footer.style.module.css'

describe('<Footer />', () => {
  it('should render without crashing', () => {
    const textCredits = 'Axiacore'
    const { getByText, getByTestId } = render(
      <Footer data-testid="test-footer" />
    )
    const credits = getByText(textCredits, { exact: false })
    expect(credits).toBeInTheDocument()
    expect(getByTestId('test-footer')).toHaveClass(s.Footer)
  })
})
