import React from "react"

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="card-glass">{children}</div>
}
