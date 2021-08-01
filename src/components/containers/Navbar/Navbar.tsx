import IconMenu from '@assets/icons/menu.svg'
import IconLogo from '@assets/icons/logo.svg'
import Spacer from '@components/common/Spacer'

import styles from './Navbar.style.module.css'

type Props = {
  logo?: boolean
  menuButton?: boolean
  navbarRight?: JSX.Element
}

const Navbar: React.FC<Props> = ({ logo, menuButton, navbarRight }) => {
  return (
    <section className={styles.navbar}>
      <div className={styles.navbar__left}>
        {menuButton ? <IconMenu fill="#fff" width={32} height={32} /> : null}
        <Spacer x={10} />
        {logo ? <IconLogo fill="#fff" width={43} height={30} /> : null}
      </div>
      <div className={styles.navbar__right}>{navbarRight}</div>
    </section>
  )
}

export default Navbar
