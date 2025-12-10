import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center py-12 md:py-20">
        <div className="animate-fade-in">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-student-50 text-student-600 text-sm font-semibold border border-student-200">✨ Break the Loop</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-student-600 via-student-500 to-company-500 bg-clip-text text-transparent">InternLoop</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            The platform connecting ambitious students with real-world projects. Build experience, showcase skills, and get rewarded.
          </p>
          <div className="flex gap-4 mb-8">
            <Link to="/login/student" className="px-6 py-3 rounded-lg bg-gradient-to-r from-student-500 to-student-600 text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
              👨‍🎓 I'm a Student
            </Link>
            <Link to="/login/company" className="px-6 py-3 rounded-lg bg-white border-2 border-company-500 text-company-600 font-bold hover:bg-company-50 transition-all flex items-center gap-2">
              🏢 I'm a Company
            </Link>
          </div>
          <div className="flex gap-6 text-sm">
            <div><span className="font-bold text-lg text-student-600">500+</span> Projects</div>
            <div><span className="font-bold text-lg text-student-600">2K+</span> Students</div>
            <div><span className="font-bold text-lg text-company-600">100+</span> Companies</div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-student-500 to-company-500 rounded-3xl blur-3xl opacity-20" />
          <div className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl">
            <h3 className="font-bold text-xl mb-4 text-slate-900">How It Works</h3>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-student-500 to-student-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div><p className="font-semibold text-slate-900">Companies post real projects</p><p className="text-sm text-slate-600">With clear goals and rewards</p></div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-student-500 to-student-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div><p className="font-semibold text-slate-900">Students apply & solve</p><p className="text-sm text-slate-600">Solo or team-based challenges</p></div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-company-500 to-company-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div><p className="font-semibold text-slate-900">Get recognized & rewarded</p><p className="text-sm text-slate-600">Certificates, PPOs, or internships</p></div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why InternLoop?</h2>
          <p className="text-lg text-slate-600">The platform built for both students and companies.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Benefits */}
          <div className="group bg-gradient-to-br from-student-50 to-white border border-student-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all">
            <div className="text-5xl mb-4">👨‍💻</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">For Students</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="text-student-500 font-bold">✓</span> Real portfolio projects</li>
              <li className="flex gap-3"><span className="text-student-500 font-bold">✓</span> Certificates & achievements</li>
              <li className="flex gap-3"><span className="text-student-500 font-bold">✓</span> PPO/PPI offers from companies</li>
              <li className="flex gap-3"><span className="text-student-500 font-bold">✓</span> Network with professionals</li>
              <li className="flex gap-3"><span className="text-student-500 font-bold">✓</span> Paid & unpaid opportunities</li>
            </ul>
          </div>

          {/* Company Benefits */}
          <div className="group bg-gradient-to-br from-company-50 to-white border border-company-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">For Companies</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="text-company-500 font-bold">✓</span> Scout proven talent</li>
              <li className="flex gap-3"><span className="text-company-500 font-bold">✓</span> Get projects completed</li>
              <li className="flex gap-3"><span className="text-company-500 font-bold">✓</span> Reduce hiring risk</li>
              <li className="flex gap-3"><span className="text-company-500 font-bold">✓</span> Access to fresh perspectives</li>
              <li className="flex gap-3"><span className="text-company-500 font-bold">✓</span> Build university relationships</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-card">
            <h4 className="font-bold text-slate-900 mb-2">Is InternLoop free?</h4>
            <p className="text-slate-600 text-sm">For students, yes! Companies have flexible pricing options.</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-card">
            <h4 className="font-bold text-slate-900 mb-2">Can I work solo or in teams?</h4>
            <p className="text-slate-600 text-sm">Both! Choose to apply solo or form/join a team.</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-card">
            <h4 className="font-bold text-slate-900 mb-2">What kind of projects are posted?</h4>
            <p className="text-slate-600 text-sm">Web dev, ML, AI, cybersecurity, cloud, and more.</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-card">
            <h4 className="font-bold text-slate-900 mb-2">How do rewards work?</h4>
            <p className="text-slate-600 text-sm">Certificates, office visits, merch, PPO/PPI offers.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-student-600 to-company-600 rounded-3xl text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to break the loop?</h2>
        <p className="text-lg mb-8 opacity-90">Join thousands of students and companies already building real experience.</p>
        <div className="flex gap-4 justify-center">
          <Link to="/login/student" className="px-6 py-3 rounded-lg bg-white text-student-600 font-bold hover:bg-slate-100 transition-all">
            Start as a Student
          </Link>
          <Link to="/login/company" className="px-6 py-3 rounded-lg border-2 border-white text-white font-bold hover:bg-white/10 transition-all">
            Start as a Company
          </Link>
        </div>
      </section>
    </Layout>
  )
}
