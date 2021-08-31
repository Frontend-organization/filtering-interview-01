import Typography from '@components/common/Typography'
import { navigation } from './data.json'

import styles from './NavigationOptions.style.module.css'

type Option = {
  text: string
  href: string
}

type Props = {
  options?: Option[]
}

const NavigationOptions: React.FC<Props> = ({ options = navigation }) => (
  <div className={styles.Navigation}>
    {options.map(({ href, text }, i) => (
      <Typography.Link
        className={styles.Link}
        size="md"
        weight="bold"
        key={i}
        href={href}
      >
        {text}
      </Typography.Link>
    ))}
  </div>
)

export default NavigationOptions
