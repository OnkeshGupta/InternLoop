import React from "react"
import { Link } from "react-router-dom"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string
  variant?: "primary" | "ghost" | "outline"
}

export default function Button({ to, variant = "primary", children, ...rest }: Props) {
  const base = "inline-flex items-center justify-center gap-2 font-medium transition"
  const styles =
    variant === "primary" ? "btn-premium" : variant === "outline" ? "btn-outline" : "btn-ghost"

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
