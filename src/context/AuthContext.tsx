import React, { createContext, useContext, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

type Role = 'student' | 'company' | null

type User = {
  role: Role
  name?: string
  companyName?: string
}

type AuthContextType = {
  user: User | null
  loginAsStudent: (name: string) => void
  loginAsCompany: (companyName: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  function loginAsStudent(name: string) {
    setUser({ role: 'student', name })
    navigate('/student/dashboard')
  }

  function loginAsCompany(companyName: string) {
    setUser({ role: 'company', companyName })
    navigate('/company/dashboard')
  }

  function logout() {
    setUser(null)
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, loginAsStudent, loginAsCompany, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
