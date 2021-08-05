import styles from './Picture.style.module.css'

type Props = {
  img?: string
  alt?: string
}

const Picture: React.FC<Props> = ({ img, alt }) => {
  return (
    <picture className={styles.image}>
      <img src={img} alt={alt} />
    </picture>
  )
}

export default Picture
