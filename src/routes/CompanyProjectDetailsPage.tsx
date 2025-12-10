import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import { projects as allProjects } from '../data/projects'
import Badge from '../components/Badge'

const mockSubmissions = [
  { id: 's1', name: 'Aisha Khan', github: 'https://github.com/aisha/project', status: 'Submitted' },
  { id: 's2', name: 'Ravi Patel', github: 'https://github.com/ravi/solution', status: 'Shortlisted' },
  { id: 's3', name: 'Chen Li', github: 'https://github.com/chen/work', status: 'Submitted' }
]

export default function CompanyProjectDetailsPage() {
  const { id } = useParams()
  const project = allProjects.find(p => p.id === id)
  const [subs, setSubs] = useState(mockSubmissions)

  if (!project) return <Layout><div className="text-center py-12"><p className="text-slate-600">Project not found</p></div></Layout>

  function updateStatus(subId: string, status: string) {
    setSubs(s => s.map((x: any) => x.id === subId ? { ...x, status } : x))
  }

  const statusColor = {
    'Submitted': 'neutral',
    'Shortlisted': 'warn',
    'Selected': 'success',
    'Rejected': 'neutral'
  } as any

  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Project Details */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-card mb-8">
            <div className="mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{project.id}</div>
                  <h1 className="text-4xl font-bold text-slate-900">{project.title}</h1>
                </div>
              </div>
              <p className="text-lg text-slate-600">{project.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div><span className="text-slate-600">Field:</span> <span className="font-bold">{project.field}</span></div>
              <div><span className="text-slate-600">Type:</span> <span className="font-bold">{project.paid ? '💰 Paid' : '🎓 Unpaid'}</span></div>
              <div><span className="text-slate-600">Deadline:</span> <span className="font-bold">{project.deadline}</span></div>
              <div><span className="text-slate-600">Status:</span> <Badge tone="success">Open</Badge></div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-2">Rewards:</h4>
              <div className="flex flex-wrap gap-2">
                {project.rewards.map(r => <Badge key={r} tone="success">{r}</Badge>)}
              </div>
            </div>
          </div>

          {/* Submissions */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-card">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">📨 Submissions ({subs.length})</h3>
            <div className="space-y-4">
              {subs.map(s => (
                <div key={s.id} className="border border-slate-100 rounded-xl p-5 hover:shadow-card-hover transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{s.name}</h4>
                      <a href={s.github} target="_blank" rel="noopener noreferrer" className="text-student-600 text-sm hover:underline">
                        View Repository →
                      </a>
                    </div>
                    <Badge tone={statusColor[s.status]}>{s.status}</Badge>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => updateStatus(s.id, 'Shortlisted')} className="px-3 py-2 text-sm rounded-lg bg-amber-100 text-amber-700 font-semibold hover:bg-amber-200 transition">
                      ⭐ Shortlist
                    </button>
                    <button onClick={() => updateStatus(s.id, 'Selected')} className="px-3 py-2 text-sm rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition">
                      ✓ Select
                    </button>
                    <button onClick={() => updateStatus(s.id, 'Rejected')} className="px-3 py-2 text-sm rounded-lg bg-red-100 text-red-700 font-semibold hover:bg-red-200 transition">
                      ✕ Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-card">
            <h4 className="font-bold text-lg text-slate-900 mb-4">📊 Metrics</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Total Applications</span>
                <span className="font-bold text-lg">{subs.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Shortlisted</span>
                <span className="font-bold text-lg text-amber-600">{subs.filter(s => s.status === 'Shortlisted').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Selected</span>
                <span className="font-bold text-lg text-green-600">{subs.filter(s => s.status === 'Selected').length}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-company-50 to-white rounded-xl border border-company-200 p-6 shadow-card">
            <h4 className="font-bold text-lg text-slate-900 mb-3">💡 Tips</h4>
            <p className="text-sm text-slate-600">Review submissions carefully, reach out to shortlisted candidates, and communicate decisions promptly.</p>
          </div>

          <button className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-company-500 to-company-600 text-white font-bold shadow-lg hover:shadow-xl transition-all">
            Export Results
          </button>
        </aside>
      </div>
    </Layout>
  )
}
