import Typography from '@components/common/Typography'
import { navigation } from './data.json'

import styles from './NavigationOptions.style.module.css'

type Props = {
  options?: string[]
}

const NavigationOptions: React.FC<Props> = ({ options = navigation }) => (
  <div className={styles.Navigation}>
    {options.map((text, i) => (
      <Typography.Link className={styles.Link} size="md" weight="bold" key={i}>
        {text}
      </Typography.Link>
    ))}
  </div>
)

export default NavigationOptions
