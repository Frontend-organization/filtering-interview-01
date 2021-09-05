import Card from '@components/containers/Card'
import ArrowRight from '@assets/icons/arrow-right.svg'
import { Beer } from '@services/beerService'
import Button from '@components/common/Button'
import Spacer from '@components/common/Spacer'
import Typography from '@components/common/Typography'

import styles from './BeersContainer.style.module.css'
import Flex from '../../common/Flex'

type Props = {
  beers: Beer[]
  renderEmptyComponent?: JSX.Element
}
const doNothing = (name) => {
  return () => {
    console.log(`The beer is: ${name}`)
  }
}

const BeersContainer: React.FC<Props> = ({ beers, renderEmptyComponent }) => {
  return (
    <div className={styles.beersContainer}>
      {beers.length === 0 ? (
        renderEmptyComponent
      ) : (
        <>
          <div className={styles.beersCards} data-cy="beers-container">
            {beers.map(({ img: image, price, ...rest }, index) => {
              const { description, filterId, name } = rest
              return (
                <Card
                  key={index}
                  addProduct={doNothing(name)}
                  product={{
                    title: name,
                    description,
                    filterId,
                    image,
                    price
                  }}
                />
              )
            })}
          </div>
          <Spacer y={16} />
          <Button
            className={styles.btnMoreBeers}
            renderRight={<ArrowRight width={15} height={15} />}
          >
            <Flex flexDirection="column">
              <Typography.P size="sm">Sigue mercando</Typography.P>
              <Typography.P weight="bold" size="lg">
                Vinos
              </Typography.P>
            </Flex>
          </Button>
        </>
      )}
    </div>
  )
}

export default BeersContainer
