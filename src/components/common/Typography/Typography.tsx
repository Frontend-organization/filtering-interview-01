import { ComponentProps } from 'react'

import s from './Typography.module.css'

type Props = ComponentProps<'h1'> & {
  weight?: 'bold' | 'semi-bold' | 'normal'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Heading: React.FC<Props> = ({
  children,
  size = 'md',
  weight = 'normal',
  ...rest
}) => (
  <h1 className={`${s.heading} ${s[weight]} ${s[size]}`} {...rest}>
    {children}
  </h1>
)

const Paragraph: React.FC<Props> = ({
  children,
  size = 'md',
  weight = 'normal',
  ...rest
}) => (
  <p className={`${s.paragraph} ${s[weight]} ${s[size]}`} {...rest}>
    {children}
  </p>
)

const Typography = () => null

Typography.Heading = Heading
Typography.P = Paragraph

export default Typography
