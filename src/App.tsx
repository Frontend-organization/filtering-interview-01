import FiltersProvider from '@context/filters'
import { hot } from 'react-hot-loader/root'

import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <FiltersProvider>
      <Home />
    </FiltersProvider>
  )
}

export default hot(App)
