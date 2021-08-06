import { ComponentProps } from 'react'

import styles from './Picture.style.module.css'

type Props = Omit<ComponentProps<'img'>, 'src'> & {
  source?: string
  alt?: string
  containerProps?: ComponentProps<'picture'>
}

const Picture: React.FC<Props> = ({
  source,
  alt,
  containerProps = {},
  ...rest
}) => (
  <picture className={styles.image} {...containerProps}>
    <img src={source} alt={alt} {...rest} />
  </picture>
)

export default Picture
