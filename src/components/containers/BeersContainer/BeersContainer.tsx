import Card from '../Card'
import ArrowRight from '@assets/icons/arrow-right.svg'
import { Beer } from '@services/beerService'
import Button from '@components/common/Button'
import Spacer from '@components/common/Spacer'
import Typography from '@components/common/Typography'

import styles from './BeersContainer.style.module.css'

type Props = {
  products: Beer[]
  renderEmptyComponent?: JSX.Element
}
const doNothing = (name) => {
  return () => {
    console.log(`The product is ${name}`)
  }
}

const BeersContainer: React.FC<Props> = ({
  products,
  renderEmptyComponent
}) => {
  return (
    <div className={styles.BeersContainer}>
      {products.length === 0 ? (
        renderEmptyComponent
      ) : (
        <>
          <div className={styles.BeersCards}>
            {products.map((beer, index) => {
              return (
                <Card
                  key={index}
                  addProduct={doNothing(beer.name)}
                  product={{
                    title: beer.name,
                    description: beer.description,
                    filterId: beer.filterId,
                    image: beer.img,
                    price: beer.price
                  }}
                />
              )
            })}
          </div>
          <Spacer y={16} />
          <Button className={styles.BtnMoreMeers}>
            <Typography.P className={styles.Text1} size="sm">
              Sigue mercando
            </Typography.P>
            <Typography.P className={styles.Text2} weight="bold" size="lg">
              Vinos
            </Typography.P>
            <span className={styles.Icon}>
              <ArrowRight width={15} height={15} />
            </span>
          </Button>
        </>
      )}
    </div>
  )
}

export default BeersContainer
