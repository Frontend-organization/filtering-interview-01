import FilterIcon from '@assets/icons/filter_filled.svg'
import Button from '@components/common/Button'
import Typography from '@components/common/Typography'
import { useFilters } from '@context/filters'
import { ComponentProps, Fragment } from 'react'

import s from './FiltersSelector.module.css'

const Widget: React.FC<ComponentProps<'button'>> = (props) => {
  const { filters } = useFilters()
  return (
    <div className={s.widget} data-cy="btn-filters">
      <Button
        variant="primary"
        renderRight={
          <Fragment>
            <FilterIcon fill="#fff" width={22} />
            {filters.length ? (
              <Typography.P className={s['filters-counter']} weight="bold">
                {filters.length}
              </Typography.P>
            ) : null}
          </Fragment>
        }
        {...props}
      >
        FILTRAR
      </Button>
    </div>
  )
}

export default Widget
