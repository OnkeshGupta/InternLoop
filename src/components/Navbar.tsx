import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-xl flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-student-500 to-company-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
              IL
            </div>
            <span className="bg-gradient-to-r from-student-600 to-company-600 bg-clip-text text-transparent">InternLoop</span>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-slate-700 hover:text-slate-900 font-medium transition">
            Home
          </Link>
          <Link to="/student/dashboard" className="text-slate-700 hover:text-slate-900 font-medium transition">
            For Students
          </Link>
          <Link to="/company/dashboard" className="text-slate-700 hover:text-slate-900 font-medium transition">
            For Companies
          </Link>

          {!user && (
            <div className="flex gap-2 ml-4 pl-4 border-l border-slate-200">
              <Link to="/login/student" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium transition">
                Login
              </Link>
              <Link to="/signup/student" className="px-4 py-2 rounded-lg bg-gradient-to-r from-student-500 to-student-600 text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Sign up
              </Link>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-200">
              <div className="text-right">
                <div className="text-sm font-semibold text-slate-900">
                  {user.role === 'student' ? user.name : user.companyName}
                </div>
                <div className="text-xs text-slate-500 capitalize">{user.role}</div>
              </div>
              <button onClick={logout} className="px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-medium transition">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
