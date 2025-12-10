import React, { useState } from "react"
import Layout from "../components/Layout"
import { useAuth } from "../context/AuthContext"
import { projects as initialProjects, Project } from "../data/projects"
import { Link } from "react-router-dom"
import Modal from "../components/Modal"

export default function CompanyDashboardPage() {
  const { user } = useAuth()
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ title: "", field: "Web Dev", paid: "false", deadline: "", rewards: "", description: "" })

  function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    const id = `INT-${Math.floor(100 + Math.random() * 900)}`
    const newP: Project = {
      id,
      title: form.title,
      company: user?.companyName || "Company",
      field: form.field as any,
      paid: form.paid === "true",
      deadline: form.deadline,
      rewards: form.rewards.split(",").map((r: string) => r.trim()),
      description: form.description,
      status: "Open"
    }
    setProjects(p => [newP, ...p])
    setForm({ title: "", field: "Web Dev", paid: "false", deadline: "", rewards: "", description: "" })
    setOpen(false)
  }

  return (
    <Layout>
      <div className="theme-company">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Welcome, <span className="bg-gradient-to-r from-company-500 to-company-600 bg-clip-text text-transparent">{user?.companyName || "Company"}</span></h2>
              <p className="text-slate-600 mt-2">Manage your projects and review submissions</p>
            </div>
            <button onClick={() => setOpen(true)} className="btn-premium">
              + Post New Project
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="card-glass">
              <div className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>{projects.length}</div>
              <div className="text-sm text-slate-600">Projects Posted</div>
            </div>
            <div className="card-glass">
              <div className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>24</div>
              <div className="text-sm text-slate-600">Applications</div>
            </div>
            <div className="card-glass">
              <div className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>7</div>
              <div className="text-sm text-slate-600">Shortlisted</div>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((p, i) => (
            <div key={p.id} className="card-glass animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{p.id}</div>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Open</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-600 mb-3">{p.description.slice(0, 150)}...</p>
                  <div className="flex gap-4 flex-wrap text-sm">
                    <div><span className="text-slate-600">Field:</span> <span className="font-semibold">{p.field}</span></div>
                    <div><span className="text-slate-600">Type:</span> <span className="font-semibold">{p.paid ? " Paid" : " Unpaid"}</span></div>
                    <div><span className="text-slate-600">Deadline:</span> <span className="font-semibold">{p.deadline}</span></div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>8</div>
                    <div className="text-xs text-slate-600">Applications</div>
                  </div>
                  <Link to={`/company/projects/${p.id}`} className="btn-premium">
                    View & Manage 
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create Project Modal */}
        <Modal open={open} onClose={() => setOpen(false)} title="Post New Project">
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Project Title</label>
              <input placeholder="E.g., Build a mobile app dashboard" className="input-field" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Field</label>
                <select className="input-field" value={form.field} onChange={e => setForm({ ...form, field: e.target.value })}>
                  <option>Web Dev</option>
                  <option>ML</option>
                  <option>AI</option>
                  <option>Cybersecurity</option>
                  <option>Cloud</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Type</label>
                <select className="input-field" value={form.paid} onChange={e => setForm({ ...form, paid: e.target.value })}>
                  <option value="false">Unpaid</option>
                  <option value="true">Paid</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Deadline</label>
              <input type="date" className="input-field" value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Rewards (comma separated)</label>
              <input placeholder="Certificate, PPO, Office Visit" className="input-field" value={form.rewards} onChange={e => setForm({ ...form, rewards: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Project Description</label>
              <textarea placeholder="Describe the project details and requirements..." className="input-field h-24" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <button type="button" onClick={() => setOpen(false)} className="btn-outline">
                Cancel
              </button>
              <button type="submit" className="btn-premium">
                Post Project
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </Layout>
  )
}
