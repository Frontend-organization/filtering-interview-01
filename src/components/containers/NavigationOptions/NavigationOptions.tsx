import Typography from '@components/common/Typography'

import styles from './NavigationOptions.style.module.css'

const NavigationOptions = () => {
  return (
    <div className={styles.Navigation}>
      <Typography.Link className={styles.Link} size="md" weight={'bold'}>
        SOBRE NOSOTROS
      </Typography.Link>
      <Typography.Link className={styles.Link} size="md" weight={'bold'}>
        MEDIDAS DE SEGURIDAD (COVID-19)
      </Typography.Link>
      <Typography.Link className={styles.Link} size="md" weight={'bold'}>
        CÓMO MERCAR
      </Typography.Link>
      <Typography.Link className={styles.Link} size="md" weight={'bold'}>
        PROVEEDORES
      </Typography.Link>
      <Typography.Link className={styles.Link} size="md" weight={'bold'}>
        CONTÁCTENOS
      </Typography.Link>
      <Typography.Link className={styles.Link} size="md" weight={'bold'}>
        ZONA DE COBERTURA
      </Typography.Link>
    </div>
  )
}

export default NavigationOptions
