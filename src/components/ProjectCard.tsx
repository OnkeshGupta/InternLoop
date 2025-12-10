import React from 'react'
import { Project } from '../data/projects'
import { Link } from 'react-router-dom'
import Badge from './Badge'

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-100 p-5 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 hover:-translate-y-1">
      {/* Gradient accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-student-500/5 to-company-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{p.id}</div>
            <div className="w-2 h-2 rounded-full bg-student-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-student-600 transition mb-2">{p.title}</h3>
          <div className="text-sm text-slate-600 mb-3 line-clamp-2">{p.description}</div>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge tone={p.paid ? 'success' : 'warn'}>{p.paid ? '💰 Paid' : '🎓 Unpaid'}</Badge>
            <div className="text-xs text-slate-500">📅 {p.deadline}</div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="text-sm font-medium text-slate-700 text-right">{p.company}</div>
          <Link to={`/student/projects/${p.id}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-student-500 to-student-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap">
            View Details →
          </Link>
        </div>
      </div>
    </div>
  )
}
