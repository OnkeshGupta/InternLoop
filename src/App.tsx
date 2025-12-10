import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import StudentLoginPage from './routes/StudentLoginPage'
import CompanyLoginPage from './routes/CompanyLoginPage'
import StudentSignupPage from './routes/StudentSignupPage'
import CompanySignupPage from './routes/CompanySignupPage'
import StudentDashboardPage from './routes/StudentDashboardPage'
import StudentProjectDetailsPage from './routes/StudentProjectDetailsPage'
import CompanyDashboardPage from './routes/CompanyDashboardPage'
import CompanyProjectDetailsPage from './routes/CompanyProjectDetailsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login/student" element={<StudentLoginPage />} />
      <Route path="/login/company" element={<CompanyLoginPage />} />
      <Route path="/signup/student" element={<StudentSignupPage />} />
      <Route path="/signup/company" element={<CompanySignupPage />} />
      <Route path="/student/dashboard" element={<StudentDashboardPage />} />
      <Route path="/student/projects/:id" element={<StudentProjectDetailsPage />} />
      <Route path="/company/dashboard" element={<CompanyDashboardPage />} />
      <Route path="/company/projects/:id" element={<CompanyProjectDetailsPage />} />
    </Routes>
  )
}
