import App from './App'

describe('<App />', () => {
  it('should render correctly by snapshot', () => {
    expect(<App />).toMatchSnapshot()
  })
})
