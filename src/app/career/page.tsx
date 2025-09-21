"use client";

export default function Career() {
  return (
    <div className="bg-gray-900 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-700 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-800 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
            Career
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full"></div>
          
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Creative Team</h2>
            <p className="text-lg text-gray-300">Career opportunities coming soon. Stay tuned for exciting positions!</p>
          </div>
        </div>
      </main>
    </div>
  );
}