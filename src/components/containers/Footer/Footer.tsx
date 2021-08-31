import NavigationOptions from '../NavigationOptions'
import IconChat from '@assets/icons/chat.svg'
import IconPhone from '@assets/icons/phone.svg'
import IconInstagram from '@assets/icons/instagram.svg'
import Button from '@components/common/Button'
import Flex from '@components/common/Flex'
import Spacer from '@components/common/Spacer'
import Typography from '@components/common/Typography'
import { ComponentProps } from 'react'

import styles from './Footer.style.module.css'

const Footer: React.FC<ComponentProps<'footer'>> = (props) => (
  <footer className={styles.Footer} {...props}>
    <div className={styles.Contact}>
      <Typography.Heading weight="bold">¿Podemos ayudarle?</Typography.Heading>
      <Spacer y={18} />
      <Flex justifyContent="center">
        <div className={styles.BtnFooter}>
          <Button fullWidth rounded className={styles.Btn}>
            <IconChat width={30} height={28} fill="#000" />
          </Button>
          <Typography.P weight="bold">CHAT</Typography.P>
        </div>
        <Spacer x={110} />
        <div className={styles.BtnFooter}>
          <Button rounded className={styles.Btn}>
            <IconPhone width={30} height={28} fill="#000" />
          </Button>
          <Typography.P weight="bold">LLAMAR</Typography.P>
        </div>
      </Flex>
    </div>
    <NavigationOptions />
    <Spacer y={46} />
    <div className={styles.Suscribe}>
      <Button rounded variant="primary" className={styles.Btn}>
        <IconInstagram width={30} />
      </Button>
      <Spacer y={5} />
      <Typography.P size="sm" weight="bold">
        POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
      </Typography.P>
    </div>
    <Spacer y={36} />
    <div className={styles.CreditsContainer}>
      <Typography.P className={styles.Credits} size="sm" weight="bold">
        &copy; 2020 Axiacore
      </Typography.P>
    </div>
  </footer>
)

export default Footer
