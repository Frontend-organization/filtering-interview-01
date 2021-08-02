import styles from './BeerPicture.style.module.css'

type Props = {
  img?: string
  alt?: string
}

const BeerPicture: React.FC<Props> = ({ img, alt }) => {
  return (
    <picture className={styles.image}>
      <img src={img} alt={alt} />
    </picture>
  )
}

export default BeerPicture
