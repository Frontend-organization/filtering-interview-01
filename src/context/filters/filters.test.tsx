import { renderHook } from '@testing-library/react-hooks'

import FiltersProvider, { useFilters } from './index'

describe('filter context', () => {
  it('should return initial filters accord location', () => {
    const { result } = renderHook(useFilters, { wrapper: FiltersProvider })
    expect(result.current.filters).toHaveLength(0)

    const locationFilters = ['filter1', 'filter2']
    window.history.replaceState(
      null,
      '',
      `?filters=${locationFilters.join('+')}`
    )

    const api = renderHook(useFilters, { wrapper: FiltersProvider })
    expect(api.result.current.filters).toHaveLength(locationFilters.length)
  })
})
