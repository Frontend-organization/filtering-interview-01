import { act, fireEvent, render } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Button>Test</Button>)
    expect(getByText('Test')).toBeDefined()
  })

  it('should render button with style variants', () => {
    const { getByText } = render(
      <Button variant="primary">Primary Button</Button>
    )
    const primaryButton = getByText('Primary Button')
    expect(primaryButton).toHaveClass('primary')

    const api = render(<Button>Secondary</Button>)
    const secondaryButton = api.getByText('Secondary')
    expect(secondaryButton).toHaveClass('secondary')
    expect(secondaryButton).toHaveClass('button')
  })

  it('should exec passed prop-function when tap button', () => {
    const pressFunction = jest.fn()
    const { getByText } = render(
      <Button onClick={pressFunction}>button</Button>
    )
    const button = getByText('button')
    act(() => {
      fireEvent.click(button)
    })
    expect(pressFunction).toHaveBeenCalled()
  })

  it('should render a button with left component', () => {
    const { getByText } = render(
      <Button renderLeft={<span>left</span>}>Button</Button>
    )
    expect(getByText('left')).toBeInTheDocument()
  })
})
