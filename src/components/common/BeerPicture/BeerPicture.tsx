import styles from './BeerPicture.style.module.css'

type Props = {
  img?: string
  alt?: string
  width?: number
  height?: number
}

const BeerPicture: React.FC<Props> = ({
  img,
  alt,
  width = 135,
  height = 135
}) => {
  return (
    <picture style={{ width, height }} className={styles.image}>
      <img src={img} alt={alt} />
    </picture>
  )
}

export default BeerPicture
