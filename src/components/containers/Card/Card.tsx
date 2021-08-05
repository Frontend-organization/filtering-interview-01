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

const prueba = () => console.log('me hiciste click')

const Card: React.FC<Props> = ({
  product: { title, description, price, image }
}) => {
  return (
    <div className={styles.card}>
      <Flex flexDirection="column">
        <div className={styles.cardBeer}>
          <Flex flexDirection="column">
            <BeerPicture img={image} alt={'cerveza'} />
            <p className={styles.beerTitle}>{title}</p>
            <p className={styles.beerDescription}>{description}</p>
            <p className={styles.beerPrice}>{`$${(price / 1000).toFixed(
              3
            )}`}</p>
          </Flex>
        </div>
        <Button
          onClick={prueba}
          style={{
            borderColor: 'transparent',
            backgroundColor: '#f4f4f4',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
          }}
        >
          <span className={styles.cardButtonText}>AGREGAR</span>
        </Button>
      </Flex>
    </div>
  )
}

export default Card
