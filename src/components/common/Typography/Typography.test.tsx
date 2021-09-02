import Typography from '@components/common/Typography'
import { render } from '@testing-library/react'

describe('<Typography />', () => {
  it('should render null as Compound Component', () => {
    const { queryByText } = render(<Typography />)
    expect(queryByText('whatever text')).toBe(null)
  })

  it('should render a text bold with size large', () => {
    const textToRender = 'Whatever text'
    const { getByText } = render(
      <Typography.P weight="bold" size="lg">
        {textToRender}
      </Typography.P>
    )
    const component = getByText(textToRender)
    expect(component).toHaveClass('lg bold')
  })

  it('should render a heading with size extra-large and weight 400', () => {
    const heading = 'This is the heading'
    const { getByText } = render(
      <Typography.Heading size="xl">{heading}</Typography.Heading>
    )
    const component = getByText(heading)
    expect(component).toHaveClass('xl normal')
  })

  it('should render a link', () => {
    const { getByText } = render(
      <Typography.Link size="md" className="custom-class">
        Link
      </Typography.Link>
    )
    const link = getByText('Link')
    expect(link).toHaveClass('custom-class')
    expect(link).toHaveClass('md')
  })
})
