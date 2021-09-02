import { act, fireEvent, render } from '@testing-library/react'

import Card, { Product } from './Card'

const testProduct: Product = {
  description: 'some description very large for testing purposses',
  image: 'https://www.whatever-uri.com',
  price: 50000,
  title: 'Test title',
  filterId: 'morena'
}

describe('<Card />', () => {
  it('should render without crashing', () => {
    const { getByText, getByAltText } = render(
      <Card product={testProduct} addProduct={jest.fn()} />
    )
    expect(getByText(testProduct.title)).toBeDefined()
    expect(getByAltText(testProduct.title.toLowerCase())).toBeInTheDocument()
    expect(getByText(testProduct.description)).toBeDefined()
    expect(getByText('AGREGAR')).toBeDefined()
  })

  it('should call addFunction with product when tap "ADD" button', () => {
    const addProduct = jest.fn()
    const { getByText } = render(
      <Card product={testProduct} addProduct={addProduct} />
    )
    const addButton = getByText('AGREGAR')
    act(() => {
      fireEvent.click(addButton)
    })
    expect(addProduct).toHaveBeenCalledWith(testProduct)
  })
})
