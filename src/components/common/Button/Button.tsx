import { ComponentProps, ReactElement } from 'react'

import styles from './Button.style.module.css'

type Props = ComponentProps<'button'> & {
  rounded?: boolean
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
  renderLeft?: ReactElement
  renderRight?: ReactElement
}

const Button: React.FC<Props> = ({
  children,
  fullWidth,
  renderLeft,
  renderRight,
  rounded,
  type = 'button',
  variant = 'secondary',
  className,
  ...rest
}) => {
  const buttonStyles = `${styles.button} 
  ${rounded ? styles.rounded : ''} ${fullWidth ? styles.full : ''} ${
    variant === 'primary' ? styles.primary : styles.secondary
  } ${className || ''}`

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
