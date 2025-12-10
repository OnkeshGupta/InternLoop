import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export default function StudentLoginPage() {
  const { loginAsStudent } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    loginAsStudent('Mock Student')
  }

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 animate-slide-up">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-student-500 to-student-600 rounded-xl flex items-center justify-center text-3xl font-bold text-white">
                👨‍🎓
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Student Login</h2>
              <p className="text-slate-600 mt-2">Access your dashboard and find amazing projects</p>
            </div>

            {error && (
              <div className="mb-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input 
                  className="w-full border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-student-500 focus:border-transparent bg-slate-50" 
                  placeholder="your@email.com" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                <input 
                  className="w-full border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-student-500 focus:border-transparent bg-slate-50" 
                  placeholder="••••••••" 
                  type="password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                />
              </div>
              <button className="w-full bg-gradient-to-r from-student-500 to-student-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all mt-6">
                Login to Dashboard
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-200 text-center text-slate-600">
              Don't have an account? <Link to="/signup/student" className="text-student-600 font-semibold hover:underline">Create one now</Link>
            </div>

            {/* Demo hint */}
            <div className="mt-6 p-4 rounded-lg bg-student-50 border border-student-200">
              <p className="text-xs text-slate-600">💡 <strong>Demo Mode:</strong> Use any email and password to login.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
