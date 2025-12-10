import React from "react"

export default function Modal({ open, onClose, title, children }: any) {
  if (!open) return null
  return (
    <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50 p-4">
      <div className="modal-panel max-w-lg w-full">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700 text-xl rounded-lg p-1 transition">
            
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
