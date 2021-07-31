import IconMenu from '@assets/icons/menu.svg'
import IconLogo from '@assets/icons/logo.svg'
import IconSearch from '@assets/icons/search.svg'
import IconShopping from '@assets/icons/shopping.svg'

import Spacer from '@components/common/Spacer'

import styles from './Navbar.style.module.css'

const Navbar: React.FC = () => {
  return (
    <section className={styles.navbar}>
      <div className={styles.navbar__left}>
        <IconMenu fill="#fff" width={32} height={32} />
        <Spacer x={10} />
        <IconLogo fill="#fff" width={43} height={30} />
      </div>

      <div className={styles.navbar__right}>
        <IconSearch fill="#fff" width={32} height={32} />
        <Spacer x={10} />
        <IconShopping fill="#fff" width={32} height={32} />
      </div>
    </section>
  )
}

export default Navbar
