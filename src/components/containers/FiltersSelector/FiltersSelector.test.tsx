import { useFilters } from '@context/filters'
import { act, fireEvent, render } from '@testing-library/react'

import FiltersSelector from './FiltersSelector'
import Widget from './Widget'

const testFilters = ['test-filter-1', 'test-filter-2']

const mockSetFilters = jest.fn()
jest.mock('@context/filters')

const mockUseFilters = useFilters as jest.Mock

beforeEach(() => {
  mockUseFilters.mockReturnValue({
    filters: [testFilters[0]],
    setFilters: mockSetFilters
  })
})

describe('<FitersSelector />', () => {
  it('should render filters', () => {
    const { getByText } = render(
      <FiltersSelector filterOptions={testFilters} />
    )
    expect(getByText(testFilters[0])).toBeInTheDocument()
  })

  it('should call setFilters & callback on edit filters', () => {
    const onSetFilters = jest.fn()
    const { getByText } = render(
      <FiltersSelector filterOptions={testFilters} onFilter={onSetFilters} />
    )
    const toggleOption = getByText(testFilters[0])
    const saveButton = getByText('FILTRAR')
    act(() => {
      fireEvent.click(toggleOption)
    })
    act(() => {
      fireEvent.click(saveButton)
    })
    expect(mockSetFilters).toHaveBeenLastCalledWith([testFilters[0]])
    expect(onSetFilters).toHaveBeenCalled()
  })

  it('should clear all filters when button-clear is available', () => {
    const { getByText } = render(
      <FiltersSelector filterOptions={testFilters} />
    )
    const toggleButton = getByText(testFilters[0])
    const clearButton = getByText('LIMPIAR')
    const saveButton = getByText('FILTRAR')

    expect(clearButton).toHaveProperty('disabled')
    act(() => {
      fireEvent.click(toggleButton)
    })
    act(() => {
      fireEvent.click(saveButton)
    })
    expect(clearButton).not.toHaveAttribute('disabled')
    act(() => {
      fireEvent.click(clearButton)
    })
    expect(mockSetFilters).toHaveBeenLastCalledWith([])
  })

  describe('<Widget />', () => {
    it('render without crashing', () => {
      mockUseFilters.mockReturnValueOnce({ filters: testFilters })
      const { getByText } = render(<Widget />)
      expect(getByText(`${testFilters.length}`)).toBeInTheDocument()
    })
  })
})
