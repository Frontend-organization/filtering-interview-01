import NavigationOptions from '@components/containers/NavigationOptions'
import { render } from '@testing-library/react'

import { navigation } from './data.json'

const testOptions = Array.from({ length: 100 }).map((_, i) => ({
  text: `option-${i}`,
  href: `href-${i}`
}))

describe('<NavigationOptions />', () => {
  it('should render options correctly', () => {
    const [{ text: firstOptionText, href }] = testOptions
    const { getByText } = render(<NavigationOptions options={testOptions} />)
    const firstOption = getByText(firstOptionText)
    expect(firstOption).toHaveAttribute('href', href)
  })

  it('should render default values', () => {
    const { getByText } = render(<NavigationOptions />)
    const [{ text }] = navigation
    const firstOption = getByText(text)
    expect(firstOption).toBeInTheDocument()
  })
})
