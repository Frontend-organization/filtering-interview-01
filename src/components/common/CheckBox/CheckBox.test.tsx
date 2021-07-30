import { render } from '@testing-library/react'
import CheckBox from './CheckBox'

describe('<Checkbox />', () => {
  it('should render checkbox by active prop', () => {
    const { getByTestId } = render(<CheckBox active data-testid="checkbox" />)
    const checkbox = getByTestId('checkbox')
    expect(checkbox.childNodes).toHaveLength(1)

    const api = render(<CheckBox data-testid="check-inactive" />)
    const inactiveCheckbox = api.getByTestId('check-inactive')
    expect(inactiveCheckbox.childNodes).toHaveLength(0)
  })
})
