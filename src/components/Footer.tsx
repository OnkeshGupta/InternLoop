import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 text-white mt-16">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-bold text-lg mb-2">InternLoop</div>
            <p className="text-slate-400 text-sm">Break the loop. Build your experience.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">For Students</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Browse Projects</a></li>
              <li><a href="#" className="hover:text-white transition">My Applications</a></li>
              <li><a href="#" className="hover:text-white transition">Leaderboard</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">For Companies</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Post Project</a></li>
              <li><a href="#" className="hover:text-white transition">Manage Projects</a></li>
              <li><a href="#" className="hover:text-white transition">Submissions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Email Support</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 flex justify-between items-center text-sm text-slate-400">
          <div>© {new Date().getFullYear()} InternLoop. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
