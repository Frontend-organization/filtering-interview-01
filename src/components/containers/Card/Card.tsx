import Button from '@components/common/Button'
import BeerPicture from '@components/common/BeerPicture'

import Flex from '@components/common/Flex'

import styles from './Card.style.module.css'

type Props = {
  product?: {
    title?: string
    description?: string
    price?: number
    image?: string
  }
}

const Card: React.FC<Props> = ({
  product: { title, description, price, image }
}) => {
  return (
    <div className={styles.card}>
      <Flex flexDirection="column">
        <div className={styles.cardBeer}>
          <Flex flexDirection="column">
            <BeerPicture img={image} alt={'cerveza'} />
            <h3 className={styles.beerTitle}>{title}</h3>
            <p className={styles.beerDescription}>{description}</p>
            <p className={styles.beerPrice}>{`$${price / 1000}00`}</p>
          </Flex>
        </div>
        <Button style={{ backgroundColor: '#E6E6E6' }}>
          <span className={styles.cardButtonText}>AGREGAR</span>
        </Button>
      </Flex>
    </div>
  )
}

export default Card
