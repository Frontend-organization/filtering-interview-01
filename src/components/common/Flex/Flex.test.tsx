import { render } from '@testing-library/react'
import Flex from './Flex'

describe('<Flex />', () => {
  it('render by props', () => {
    const { getByTestId, getByText } = render(
      <Flex data-testid="flex-box" alignItems="center" justifyContent="center">
        Child
      </Flex>
    )
    const children = getByText('Child')
    const flexElement = getByTestId('flex-box')

    expect(flexElement).toHaveStyle('align-items: center')
    expect(flexElement).toHaveStyle('justify-content: center')
    expect(children).toBeDefined()
  })
})
