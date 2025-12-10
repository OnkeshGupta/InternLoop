import React from 'react'
import { leaderboard } from '../data/leaderboard'

export default function Leaderboard() {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-card">
      <h4 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
        <span className="text-xl">🏆</span> Top Performers
      </h4>
      <ol className="space-y-3">
        {leaderboard.map((l, i) => (
          <li key={l.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-student-500 to-company-500 flex items-center justify-center text-white text-sm font-bold">
                {i + 1}
              </div>
              <div>
                <div className="font-semibold text-slate-900">{l.name}</div>
                <div className="text-xs text-slate-500">{l.completed} projects completed</div>
              </div>
            </div>
            <div className="text-sm font-bold text-student-600 bg-student-50 px-3 py-1 rounded-full">{l.points} pts</div>
          </li>
        ))}
      </ol>
    </div>
  )
}
