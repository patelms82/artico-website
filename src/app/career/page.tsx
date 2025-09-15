"use client";

export default function Career() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Career
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Creative Team</h2>
            <p className="text-lg text-gray-700">Career opportunities coming soon. Stay tuned for exciting positions!</p>
          </div>
        </div>
      </main>
    </div>
  );
}