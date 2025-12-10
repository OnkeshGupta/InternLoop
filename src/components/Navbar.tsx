import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="w-full border-b border-transparent bg-white/80 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-semibold text-lg flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))", color: "#fff", fontWeight: 700 }}>
              IL
            </div>
            <span style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-highlight))", WebkitBackgroundClip: "text", color: "transparent", fontWeight: 700 }}>
              InternLoop
            </span>
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
              <Link to="/login/student" className="btn-outline">
                Login
              </Link>
              <Link to="/signup/student" className="btn-premium">
                Sign up
              </Link>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-200">
              <div className="text-right">
                <div className="text-sm font-semibold text-slate-900">
                  {user.role === "student" ? user.name : user.companyName}
                </div>
                <div className="text-xs text-slate-500 capitalize">{user.role}</div>
              </div>
              <button onClick={logout} className="btn-outline">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
