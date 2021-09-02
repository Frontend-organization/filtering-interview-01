import IconDone from '@assets/icons/done.svg'
import { ComponentProps } from 'react'

import styles from './CheckBox.styles.module.css'

type Props = ComponentProps<'div'> & {
  active?: boolean
}

const CheckBox: React.FC<Props> = ({ active, ...rest }) => {
  const checkboxStyle = `${styles.checkbox} ${
    active ? styles.active : styles.inactive
  }`
  return (
    <div className={checkboxStyle} {...rest}>
      {active && <IconDone fill="#fff" height={18} />}
    </div>
  )
}

export default CheckBox
