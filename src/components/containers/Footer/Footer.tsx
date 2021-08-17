import NavigationOptions from '../NavigationOptions'
import Typography from '@components/common/Typography'
import IconChat from '@assets/icons/chat.svg'
import IconPhone from '@assets/icons/phone.svg'
import Button from '@components/common/Button'
import Flex from '@components/common/Flex'
import Spacer from '@components/common/Spacer'

import styles from './Footer.style.module.css'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Contact}>
        <Typography.Heading weight="bold">
          ¿Podemos ayudarle?
        </Typography.Heading>
        <Spacer y={18} />
        <Flex justifyContent="space-around">
          <div className={styles.ButtonContainer}>
            <Button
              fullWidth
              rounded
              className={styles.ButtonClick}
              style={{ padding: 22, width: 'fit-content' }}
            >
              <IconChat width={30} height={28} fill="#000" />
            </Button>
            <Typography.P weight="bold">CHAT</Typography.P>
          </div>
          <div className={styles.ButtonContainer}>
            <Button
              rounded
              className={styles.ButtonClick}
              style={{ padding: 22, width: 'fit-content' }}
            >
              <IconPhone width={30} height={28} fill="#000" />
            </Button>
            <Typography.P weight="bold">LLAMAR</Typography.P>
          </div>
        </Flex>
      </div>
      <NavigationOptions />
    </div>
  )
}

export default Footer
