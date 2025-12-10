import React, { useMemo, useState } from 'react'
import Layout from '../components/Layout'
import { projects as allProjects, Project } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Leaderboard from '../components/Leaderboard'
import Badge from '../components/Badge'
import { useAuth } from '../context/AuthContext'

export default function StudentDashboardPage() {
  const { user } = useAuth()
  const [field, setField] = useState<string>('All')
  const [paidOnly, setPaidOnly] = useState<string>('All')

  const projects = useMemo(() => {
    return allProjects.filter(p => (field === 'All' ? true : p.field === field) && (paidOnly === 'All' ? true : (paidOnly === 'Paid' ? p.paid : !p.paid)))
  }, [field, paidOnly])

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Welcome back, <span className="bg-gradient-to-r from-student-500 to-student-600 bg-clip-text text-transparent">{user?.name || 'Student'}</span></h2>
            <p className="text-slate-600 mt-2">Explore real-world projects and build your experience</p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
            <div className="text-2xl font-bold text-student-600">12</div>
            <div className="text-sm text-slate-600">Projects Applied</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
            <div className="text-2xl font-bold text-student-600">3</div>
            <div className="text-sm text-slate-600">In Progress</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
            <div className="text-2xl font-bold text-student-600">850</div>
            <div className="text-sm text-slate-600">Points Earned</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Filters */}
          <div className="bg-white rounded-xl border border-slate-100 p-4 mb-6 shadow-sm">
            <div className="flex gap-4 items-center flex-wrap">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Field</label>
                <select value={field} onChange={e => setField(e.target.value)} className="border border-slate-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-student-500">
                  <option>All</option>
                  <option>Web Dev</option>
                  <option>ML</option>
                  <option>AI</option>
                  <option>Cybersecurity</option>
                  <option>Cloud</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Type</label>
                <select value={paidOnly} onChange={e => setPaidOnly(e.target.value)} className="border border-slate-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-student-500">
                  <option>All</option>
                  <option>Paid</option>
                  <option>Unpaid</option>
                </select>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-4">
            {projects.length > 0 ? (
              projects.map((p, i) => (
                <div key={p.id} className="animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <ProjectCard p={p} />
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-100">
                <div className="text-4xl mb-2">🔍</div>
                <p className="text-slate-600">No projects found matching your filters.</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <Leaderboard />
          
          <div className="bg-gradient-to-br from-student-50 to-white border border-student-100 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg text-slate-900 mb-4">📊 Your Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Total Projects</span>
                <span className="font-semibold text-slate-900">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Completed</span>
                <span className="font-semibold text-slate-900">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Certificates</span>
                <span className="font-semibold text-slate-900">2</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-company-50 to-white border border-company-100 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg text-slate-900 mb-3">💡 Pro Tip</h4>
            <p className="text-sm text-slate-600">Complete projects on time and get featured on the leaderboard. Companies notice top performers!</p>
          </div>
        </aside>
      </div>
    </Layout>
  )
}
