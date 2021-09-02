import Modal from '@components/common/Modal'
import { act, render } from '@testing-library/react'
import { createRef } from 'react'
import ReactDOM from 'react-dom'
import { ModalRef } from './Modal'

const mockCreatePortal = (elem, _) => elem

beforeAll(() => {
  ;(ReactDOM.createPortal as any) = mockCreatePortal
})

describe('<Modal />', () => {
  it('should render a hidden modal', () => {
    const text = 'test'
    const { getByTestId, getByText } = render(
      <Modal data-testid="test-modal">
        {({ visible }) => (!visible ? <p>{text}</p> : null)}
      </Modal>
    )
    expect(getByText(text)).toBeDefined()
    expect(getByTestId('test-modal')).not.toHaveClass('visible')
  })

  it('should toggle modal styles', () => {
    const modalRef = createRef<ModalRef>()
    const { getByTestId } = render(
      <Modal data-testid="test-modal" ref={modalRef}>
        {() => <p>content</p>}
      </Modal>
    )
    expect(getByTestId('test-modal')).not.toHaveClass('visible')
    act(() => {
      modalRef.current.show()
    })
    expect(getByTestId('test-modal')).toHaveClass('visible')
  })

  it('should update status for modal-childrens', () => {
    const modalRef = createRef<ModalRef>()
    const { getByText } = render(
      <Modal ref={modalRef}>
        {({ visible }) => <p>{`visible: ${visible}`}</p>}
      </Modal>
    )
    expect(getByText('visible: false')).toBeDefined()
    act(() => {
      modalRef.current.show()
    })
    expect(getByText('visible: true')).toBeDefined()
  })
})
