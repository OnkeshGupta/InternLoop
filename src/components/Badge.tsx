import React from 'react'

export default function Badge({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'success' | 'warn' }) {
  const cls =
    tone === 'success'
      ? 'bg-green-100 text-green-700 border border-green-200'
      : tone === 'warn'
      ? 'bg-amber-100 text-amber-700 border border-amber-200'
      : 'bg-slate-100 text-slate-700 border border-slate-200'

  return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cls}`}>{children}</span>
}
