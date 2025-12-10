import React from "react"
import { leaderboard } from "../data/leaderboard"

export default function Leaderboard() {
  return (
    <div className="card-glass">
      <h4 className="card-title mb-4 flex items-center gap-3">
        <span className="text-xl"></span>
        Top Performers
      </h4>

      <ol className="space-y-3">
        {leaderboard.map((l, i) => {
          const fill = Math.min(100, Math.max(6, Math.round((l.points / leaderboard[0].points) * 100)))
          return (
            <li key={l.name} className="leader-row">
              <div className="flex items-center gap-3">
                <div className="leader-avatar" style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-highlight))" }}>
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{l.name}</div>
                  <div className="text-xs text-slate-500">{l.completed} projects completed</div>
                </div>
              </div>

              <div className="flex-1 flex items-center ml-4">
                <div className="leader-progress" role="progressbar" aria-valuenow={fill} aria-valuemin={0} aria-valuemax={100}>
                  <span style={{ width: `${fill}%`, "--leader-fill": `${fill}%` } as React.CSSProperties} />
                </div>
                <div className="ml-3 text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
                  {l.points} pts
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
