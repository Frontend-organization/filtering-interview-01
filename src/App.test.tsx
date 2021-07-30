import { render } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render correctly by snapshot', () => {
    const { getByAltText } = render(<App />)
    expect(<App />).toMatchSnapshot()
    expect(getByAltText('initial-build')).toBeInTheDocument()
  })
})
