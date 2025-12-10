import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import { projects as allProjects } from '../data/projects'
import Modal from '../components/Modal'
import Badge from '../components/Badge'

export default function StudentProjectDetailsPage() {
  const { id } = useParams()
  const project = allProjects.find(p => p.id === id)
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  if (!project) return <Layout><div className="text-center py-12"><p className="text-slate-600">Project not found</p></div></Layout>

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSuccess(true)
    setOpen(false)
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <Layout>
      {success && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 flex items-center gap-2">
          ✓ Submission received! We'll review it shortly.
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-card">
            {/* Header */}
            <div className="mb-8 pb-8 border-b border-slate-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{project.id}</div>
                  <h1 className="text-4xl font-bold text-slate-900">{project.title}</h1>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-600">Posted by</div>
                  <div className="font-bold text-lg text-slate-900">{project.company}</div>
                </div>
              </div>
              <p className="text-lg text-slate-600">{project.description}</p>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-sm text-slate-600 mb-1">Field</div>
                <div className="text-lg font-semibold text-slate-900">{project.field}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-sm text-slate-600 mb-1">Type</div>
                <div className="text-lg font-semibold text-slate-900">{project.paid ? '💰 Paid Project' : '🎓 Unpaid/Certificate'}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-sm text-slate-600 mb-1">Deadline</div>
                <div className="text-lg font-semibold text-slate-900">{project.deadline}</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-sm text-slate-600 mb-1">Status</div>
                <Badge tone="success">Open for Applications</Badge>
              </div>
            </div>

            {/* Rewards */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">🎁 Rewards</h3>
              <div className="flex flex-wrap gap-3">
                {project.rewards.map(r => (
                  <Badge key={r} tone="success">{r}</Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-slate-100">
              <button className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-student-500 to-student-600 text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                ✓ Apply Solo
              </button>
              <button className="flex-1 px-6 py-3 rounded-lg border-2 border-student-500 text-student-600 font-bold hover:bg-student-50 transition-all">
                👥 Form/Join Team
              </button>
              <button onClick={() => setOpen(true)} className="flex-1 px-6 py-3 rounded-lg bg-slate-800 text-white font-bold hover:bg-slate-900 transition-all">
                📤 Submit Solution
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Company Info */}
          <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-card">
            <h4 className="font-bold text-lg text-slate-900 mb-4">About {project.company}</h4>
            <p className="text-slate-600 text-sm mb-4">Leading company looking for talented students to work on real projects.</p>
            <button className="w-full px-4 py-2 rounded-lg border border-company-500 text-company-600 font-semibold hover:bg-company-50 transition">
              View Company Profile
            </button>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-card">
            <h4 className="font-bold text-lg text-slate-900 mb-4">📋 Requirements</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><span className="text-student-600">✓</span> {project.field} experience</li>
              <li className="flex gap-2"><span className="text-student-600">✓</span> GitHub profile link</li>
              <li className="flex gap-2"><span className="text-student-600">✓</span> Project documentation</li>
            </ul>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-student-50 to-white rounded-xl border border-student-200 p-6 shadow-card">
            <h4 className="font-bold text-lg text-slate-900 mb-4">📊 Quick Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Applications</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Positions</span>
                <span className="font-bold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Avg. Duration</span>
                <span className="font-bold">4 weeks</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Submit Modal */}
      <Modal open={open} onClose={() => setOpen(false)} title="Submit Your Solution">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">GitHub Repository Link</label>
            <input placeholder="https://github.com/yourname/project" className="w-full border border-slate-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-student-500" required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Project Notes (Optional)</label>
            <textarea placeholder="Describe your approach, challenges faced, and key learnings..." className="w-full border border-slate-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-student-500 h-24" />
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-700">💡 Tip: Make sure your GitHub repo is public and includes a clear README!</p>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 rounded-lg bg-gradient-to-r from-student-500 to-student-600 text-white font-semibold hover:shadow-lg transition">
              Submit Solution
            </button>
          </div>
        </form>
      </Modal>
    </Layout>
  )
}
