import React from 'react'

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300">
      {children}
    </div>
  )
}
