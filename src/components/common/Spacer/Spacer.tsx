import { ComponentProps } from 'react'

type Props = ComponentProps<'div'> & {
  x?: number
  y?: number
}

const Spacer: React.FC<Props> = ({ x = 0, y = 0, ...rest }) => (
  <div style={{ height: y, width: x }} {...rest} />
)

export default Spacer
