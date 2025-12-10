import React from "react"
import { Project } from "../data/projects"
import { Link } from "react-router-dom"
import Badge from "./Badge"

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group relative overflow-hidden card-glass">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(90deg, rgba(125,10,10,0.04), rgba(16,24,32,0.03))" }} />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="project-badge">{p.id}</div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
          </div>
          <h3 className="card-title mb-2">{p.title}</h3>
          <div className="card-subtitle text-sm mb-3 line-clamp-2">{p.description}</div>
          <div className="flex items-center gap-3 flex-wrap">
            <Badge tone={p.paid ? "success" : "warn"}>{p.paid ? " Paid" : " Unpaid"}</Badge>
            <div className="text-xs text-slate-500"> {p.deadline}</div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3 mt-4 md:mt-0">
          <div className="text-sm font-medium text-slate-700 text-right">{p.company}</div>
          <Link to={`/student/projects/${p.id}`} className="btn-premium text-sm whitespace-nowrap">
            View Details 
          </Link>
        </div>
      </div>
    </div>
  )
}
