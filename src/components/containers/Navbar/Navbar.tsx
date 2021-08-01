import IconMenu from '@assets/icons/menu.svg'
import IconLogo from '@assets/icons/logo.svg'
import Spacer from '@components/common/Spacer'
import { ComponentProps } from 'react'

import styles from './Navbar.style.module.css'

type Props = ComponentProps<'section'> & {
  logo?: boolean
  menuButton?: boolean
  navbarRight?: JSX.Element
}

const Navbar: React.FC<Props> = ({
  logo,
  menuButton,
  navbarRight,
  ...rest
}) => {
  return (
    <section className={styles.navbar} {...rest}>
      <div className={styles.navbar__left}>
        {menuButton ? (
          <IconMenu fill="#fff" width={32} height={32} data-testid="btn-menu" />
        ) : null}
        <Spacer x={10} />
        {logo ? <IconLogo fill="#fff" width={43} height={30} /> : null}
      </div>
      <div className={styles.navbar__right}>{navbarRight}</div>
    </section>
  )
}

export default Navbar
