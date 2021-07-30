import { render } from '@testing-library/react'

import Spacer from './Spacer'

describe('<Spacer />', () => {
  it('should be rendered with style space passed by props', () => {
    const { getByTestId } = render(<Spacer data-testid="spacer" x={2} y={8} />)
    const spacer = getByTestId('spacer')
    expect(spacer).toHaveStyle('width: 2px')
    expect(spacer).toHaveStyle('height: 8px')
  })

  it('should render default style', () => {
    const { getByTestId } = render(<Spacer data-testid="spacer" />)
    const spacer = getByTestId('spacer')
    expect(spacer).toHaveStyle('width: 0px')
    expect(spacer).toHaveStyle('height: 0px')
  })
})
