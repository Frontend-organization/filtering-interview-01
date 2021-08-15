import { ComponentProps } from 'react'

import s from './Typography.module.css'

type Props = {
  weight?: 'bold' | 'semi-bold' | 'normal'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Heading: React.FC<Props & ComponentProps<'h1'>> = ({
  children,
  className,
  size = 'md',
  weight = 'normal',
  ...rest
}) => (
  <h1
    className={`${s.heading} ${s[weight]} ${s[size]} ${className || ''}`}
    {...rest}
  >
    {children}
  </h1>
)

const Paragraph: React.FC<Props & ComponentProps<'p'>> = ({
  children,
  className,
  size = 'md',
  weight = 'normal',
  ...rest
}) => (
  <p
    className={`${s.paragraph} ${s[weight]} ${s[size]} ${className || ''}`}
    {...rest}
  >
    {children}
  </p>
)

const Link: React.FC<Props & ComponentProps<'a'>> = ({
  children,
  className,
  size = 'md',
  weight = 'normal',
  ...rest
}) => (
  <a
    className={`${s.link} ${s[weight]} ${s[size]} ${className || ''}`}
    {...rest}
  >
    {children}
  </a>
)

const Typography = () => null

Typography.Heading = Heading
Typography.Link = Link
Typography.P = Paragraph

export default Typography
