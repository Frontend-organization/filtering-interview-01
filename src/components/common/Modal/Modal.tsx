import {
  ComponentProps,
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
  useCallback
} from 'react'
import { createPortal } from 'react-dom'

import s from './Modal.module.css'

export type ModalRef = {
  show: () => void
  hide: () => void
}

type Props = ComponentProps<'div'> & {
  backgroundDismiss?: boolean
  children?: ({ visible: boolean }) => JSX.Element | null
  visible?: boolean
  dismiss?: () => void
}

const ModalContent: React.FC<Props> = ({
  backgroundDismiss,
  dismiss,
  className,
  visible,
  children,
  ...rest
}) => (
  <div
    className={`${s.wrapper} ${visible ? s.visible : ''} ${className || ''}`}
    onClick={() => backgroundDismiss && dismiss()}
    role="button"
    {...rest}
  >
    <div className={s.content} onClick={(e) => e.stopPropagation()}>
      {children({ visible })}
    </div>
  </div>
)

const Modal = forwardRef<ModalRef, Omit<Props, 'visible' | 'dismiss'>>(
  ({ children, ...rest }, ref) => {
    const [isActive, setIsActive] = useState(false)

    useImperativeHandle(ref, () => ({
      show: () => setIsActive(true),
      hide: () => setIsActive(false)
    }))

    useEffect(() => {
      if (isActive) document.body.style.overflow = 'hidden'
      else document.body.style.overflow = ''
    }, [isActive])

    const handleDismissModal = useCallback(() => {
      setIsActive((prevActive) => !prevActive)
    }, [])

    return createPortal(
      <ModalContent visible={isActive} dismiss={handleDismissModal} {...rest}>
        {children}
      </ModalContent>,
      document.querySelector('#modal-container') ||
        document.createElement('div')
    )
  }
)

export default Modal
