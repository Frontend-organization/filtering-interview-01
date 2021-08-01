import { ComponentProps, CSSProperties } from 'react'

type Props = ComponentProps<'div'> & {
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  flexGrow?: CSSProperties['flexGrow']
  flexBasis?: CSSProperties['flexBasis']
  flexShrink?: CSSProperties['flexShrink']
  flexWrap?: CSSProperties['flexWrap']
  flexDirection?: CSSProperties['flexDirection']
}

const FlexWrapper: React.FC<Props> = ({
  children,
  justifyContent,
  alignItems,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  ...rest
}) => {
  const flexStyle: CSSProperties = {
    display: 'flex',
    alignItems,
    flexDirection,
    justifyContent,
    flexBasis,
    flexGrow,
    flexShrink,
    flexWrap
  }
  return (
    <div style={flexStyle} {...rest}>
      {children}
    </div>
  )
}

export default FlexWrapper
