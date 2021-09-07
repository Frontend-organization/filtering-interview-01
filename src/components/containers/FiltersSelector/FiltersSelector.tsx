import FilterIcon from '@assets/icons/filter_filled.svg'
import Typography from '@components/common/Typography'
import Button from '@components/common/Button'
import CheckBox from '@components/common/CheckBox'
import Flex from '@components/common/Flex'
import Spacer from '@components/common/Spacer'
import { useFilters } from '@context/filters'

import s from './FiltersSelector.module.css'
import { Fragment, useCallback, useMemo, useState } from 'react'

export const filterIds = ['rubia', 'morena', 'roja']

type SelectorProps = {
  filter: string
  active: boolean
  onClick: () => void
}

const SelectorOption: React.FC<SelectorProps> = ({
  active,
  filter,
  onClick
}) => {
  return (
    <button className={s['selector-wrapper']} onClick={onClick}>
      <Typography.P>{filter}</Typography.P>
      <CheckBox active={active} />
    </button>
  )
}

type Props = {
  filterOptions?: string[]
  defaultFilters?: string[]
  onFilter?: () => void
}

const FiltersSelector: React.FC<Props> = ({
  filterOptions = filterIds,
  defaultFilters = [],
  onFilter
}) => {
  const { filters, setFilters } = useFilters()
  const [currentFilters, setCurrentFilters] = useState<string[]>(defaultFilters)

  const hasFilters = useMemo(() => currentFilters.length > 0, [currentFilters])

  const resetFilters = useCallback(() => {
    if (!!filters.length) setFilters([])
    if (!!currentFilters.length) setCurrentFilters([])
    onFilter?.()
  }, [currentFilters, filters, setFilters])

  const saveFilters = useCallback(() => {
    if (!currentFilters.length) return
    setFilters(currentFilters)
    onFilter?.()
  }, [currentFilters, setFilters])

  const toggleFilter = useCallback(
    (newFilter: string) => {
      if (!currentFilters.includes(newFilter))
        setCurrentFilters(currentFilters.concat(newFilter))
      else
        setCurrentFilters(
          currentFilters.filter((current) => current !== newFilter)
        )
    },
    [currentFilters]
  )

  return (
    <section className={s.wrapper}>
      <div className={s.content}>
        <Typography.Heading size="lg" weight="bold">
          Filtros
        </Typography.Heading>
        <div className={s.filters} data-cy="filters-selector">
          {filterOptions.map((filter, i) => (
            <SelectorOption
              active={currentFilters.includes(filter)}
              filter={filter}
              key={i}
              onClick={() => toggleFilter(filter)}
            />
          ))}
        </div>
      </div>
      <footer className={s.footer}>
        <Flex>
          <Button
            disabled={!hasFilters}
            style={{ opacity: hasFilters ? 1 : 0.5 }}
            onClick={resetFilters}
          >
            LIMPIAR
          </Button>
          <Spacer x={22} />
          <Button
            data-cy="btn-save-filters"
            variant="primary"
            onClick={saveFilters}
            renderRight={
              <Fragment>
                <FilterIcon fill="#fff" width={22} />
                {currentFilters.length > 0 ? (
                  <Typography.P className={s['filters-counter']} weight="bold">
                    {currentFilters.length}
                  </Typography.P>
                ) : null}
              </Fragment>
            }
          >
            FILTRAR
          </Button>
        </Flex>
      </footer>
    </section>
  )
}

export default FiltersSelector
