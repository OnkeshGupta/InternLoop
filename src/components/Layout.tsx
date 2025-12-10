import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  const isStudent = location.pathname.startsWith('/student') || location.pathname.includes('/login/student') || location.pathname.includes('/signup/student')
  const isCompany = location.pathname.startsWith('/company') || location.pathname.includes('/login/company') || location.pathname.includes('/signup/company')

  const themeClass = isStudent ? 'theme-student' : isCompany ? 'theme-company' : ''

  return (
    <div className={`${themeClass} min-h-screen flex flex-col`}>
      <Navbar />
      <main className="flex-1 mx-auto max-w-6xl px-6 py-8">{children}</main>
      <Footer />
    </div>
  )
}
