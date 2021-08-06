import { render } from '@testing-library/react'
import Picture from './Picture'

describe('<Picture />', () => {
  it('should render without crashing', () => {
    const source = 'https://via.placeholder.com/150'
    const altText = 'beer'
    const testID = 'test-picture'

    const { getByTestId } = render(
      <Picture source={source} alt={altText} data-testid={testID} />
    )
    const pictureComponent = getByTestId(testID)
    expect(pictureComponent).toBeDefined()
    expect(pictureComponent).toHaveProperty('src', source)
    expect(pictureComponent).toHaveProperty('alt', altText)
  })

  it('should render accesible component', () => {
    const toolTip = 'this is a tool-tip'
    const { getByTitle } = render(
      <Picture source="another-source" alt="text" title={toolTip} />
    )
    const picture = getByTitle(toolTip)
    expect(picture).toBeDefined()
  })
})
