import Typography from '@components/common/Typography'

import styles from './NavigationOptions.style.module.css'

const NavigationOptions = () => {
  return (
    <div className={styles.Navigation}>
      <Typography.P weight={'bold'}>SOBRE NOSOTROS</Typography.P>
      <Typography.P weight={'bold'}>
        MEDIDAS DE SEGURIDAD (COVID-19)
      </Typography.P>
      <Typography.P weight={'bold'}>CÓMO MERCAR</Typography.P>
      <Typography.P weight={'bold'}>PROVEEDORES</Typography.P>
      <Typography.P weight={'bold'}>CONTÁCTENOS</Typography.P>
      <Typography.P weight={'bold'}>ZONA DE COBERTURA</Typography.P>
    </div>
  )
}

export default NavigationOptions
