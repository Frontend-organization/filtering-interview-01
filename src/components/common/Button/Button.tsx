import { ComponentProps, ReactElement } from 'react'

import styles from './Button.style.module.css'

type Props = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary'
  renderLeft?: ReactElement
  renderRight?: ReactElement
}

const Button: React.FC<Props> = ({
  children,
  renderLeft,
  renderRight,
  type = 'button',
  variant = 'secondary',
  ...rest
}) => {
  const buttonStyles = `${styles.button} ${
    variant === 'primary' ? styles.primary : styles.secondary
  }`
  return (
    <button className={buttonStyles} type={type} {...rest}>
      {!!renderLeft && <div className={styles.leftElement}>{renderLeft}</div>}
      {children}
      {!!renderRight && (
        <div className={styles.rightElement}>{renderRight}</div>
      )}
    </button>
  )
}
export default Button
