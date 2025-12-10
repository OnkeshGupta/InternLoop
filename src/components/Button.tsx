import React from 'react'
import { Link } from 'react-router-dom'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string
  variant?: 'primary' | 'ghost'
}

export default function Button({ to, variant = 'primary', children, ...rest }: Props) {
  const base = 'px-4 py-2 rounded-md font-medium transition'
  const styles =
    variant === 'primary'
      ? 'bg-accent text-white hover:opacity-90 shadow'
      : 'bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50'

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles}`} {...(rest as any)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={`${base} ${styles}`} {...rest}>
      {children}
    </button>
  )
}
