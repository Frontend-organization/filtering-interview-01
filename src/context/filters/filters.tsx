import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

type FiltersContext = {
  filters: string[]
  setFilters: (newFilters: string[]) => void
}

const filtersContext = createContext<FiltersContext>({} as FiltersContext)

const FiltersProvider: React.FC = ({ children }) => {
  const [filters, _setFilters] = useState<string[]>([])

  const setFilters = useCallback(
    (newFilters: string[] | ((nextFilters: string[]) => string[])) => {
      if (typeof newFilters === 'function') {
        _setFilters(newFilters(filters))
        window.history.replaceState(
          null,
          '',
          `?filters=${newFilters(filters).join('+')}`
        )
      } else {
        _setFilters(newFilters)
        window.history.replaceState(
          null,
          '',
          `?filters=${newFilters.join('+')}`
        )
      }
    },
    [filters]
  )

  useEffect(() => {
    const searchFilters = new URLSearchParams(window.location.search)
    _setFilters(searchFilters.get('filters')?.split(' ') || [])
  }, [])

  return (
    <filtersContext.Provider value={{ filters, setFilters }}>
      {children}
    </filtersContext.Provider>
  )
}

export default FiltersProvider

export const useFilters = (): FiltersContext => useContext(filtersContext)
