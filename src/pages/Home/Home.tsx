import CloseIcon from '@assets/icons/close.svg'
import SearchIcon from '@assets/icons/search.svg'
import ShopCartIcon from '@assets/icons/shopping.svg'

import Button from '@components/common/Button'
import Flex from '@components/common/Flex'
import Modal, { ModalRef } from '@components/common/Modal'
import Spacer from '@components/common/Spacer'
import Typography from '@components/common/Typography'
import BeersContainer from '@components/containers/BeersContainer'
import * as FiltersSelector from '@components/containers/FiltersSelector'
import Footer from '@components/containers/Footer'
import Navbar from '@components/containers/Navbar'
import { useFilters } from '@context/filters'
import useBeers from '@hooks/useBeers'
import { Beer } from '@services/beerService'
import { Fragment, useCallback, useMemo, useRef } from 'react'

import s from './Home.module.css'

const { Heading } = Typography
const { FilterSelectorWidget, default: Selector } = FiltersSelector

const Home: React.FC = () => {
  const { filters } = useFilters()
  const { isLoading, beers, error } = useBeers()
  const modalRef = useRef<ModalRef>(null)

  const filteredBeers: Beer[] = useMemo(() => {
    if (filters.length === 0) return beers
    return beers.filter(({ filterId }) => filters.includes(filterId))
  }, [filters, beers])

  const renderContent = useCallback(() => {
    if (isLoading)
      return (
        <div className={s.fallback}>
          <Heading>Cargando...</Heading>
        </div>
      )
    if (error)
      return (
        <div className={s.fallback}>
          <Heading>Ocurrió un error inesperado</Heading>
        </div>
      )
    return (
      <main>
        <BeersContainer beers={filteredBeers} />
      </main>
    )
  }, [error, isLoading, filteredBeers])

  return (
    <section className={s.container}>
      <header className={s['navbar-wrapper']}>
        <Navbar
          logo
          menuButton
          navbarRight={
            <Fragment>
              <SearchIcon width={24} fill="#fff" />
              <Spacer x={16} />
              <ShopCartIcon width={24} fill="#fff" />
            </Fragment>
          }
        />
      </header>
      <Spacer y={80} />
      <Flex justifyContent="center">
        <Heading size="xl" weight="bold">
          Cervezas
        </Heading>
      </Flex>
      {renderContent()}
      <Spacer y={22} />
      <Footer />
      <div className={s['filter-btn']}>
        <FilterSelectorWidget onClick={() => modalRef.current?.show()}>
          Filtrar
        </FilterSelectorWidget>
      </div>
      <Modal ref={modalRef}>
        {({ visible }) => (
          <div
            className={`${s['bottom-selector']} ${
              visible ? s['modal-visible'] : ''
            }`}
          >
            <div className={s['btn-close-selector-wrapper']}>
              <Button
                className={s['btn-close-selector']}
                onClick={() => modalRef.current?.hide()}
              >
                <CloseIcon width={22} />
              </Button>
            </div>
            {visible ? (
              <Selector
                onFilter={() => modalRef.current?.hide()}
                defaultFilters={filters}
              />
            ) : null}
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Home
