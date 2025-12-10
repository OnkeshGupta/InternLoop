import React from 'react'

export default function Modal({ open, onClose, title, children }: any) {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-slideUp">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700 text-xl hover:bg-slate-100 rounded-lg p-1 transition">
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
