import Button from '@components/common/Button'
import Picture from '@components/common/Picture'
import Flex from '@components/common/Flex'

import styles from './Card.style.module.css'

export type Product = {
  title: string
  description: string
  price: number
  image: string
  filterId: string
}

type Props = {
  product?: Product
  addProduct: (product: Product) => void
}

const Card: React.FC<Props> = ({ product, addProduct }) => {
  const { description, image, price, title } = product
  const priceFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
  })

  const handleAddProduct = () => {
    addProduct(product)
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardBeer}>
        <Flex flexDirection="column">
          <Picture source={image} alt={title.toLowerCase()} />
          <h1 className={styles.beerTitle}>{title}</h1>
          <p className={styles.beerDescription}>{description}</p>
          <p className={styles.beerPrice}>{priceFormatter.format(price)}</p>
        </Flex>
      </div>
      <Button
        onClick={handleAddProduct}
        style={{
          borderColor: 'transparent',
          backgroundColor: '#f4f4f4',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        }}
      >
        <span className={styles.cardButtonText}>AGREGAR</span>
      </Button>
    </div>
  )
}

export default Card
