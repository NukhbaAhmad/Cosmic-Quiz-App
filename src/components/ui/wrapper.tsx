'use client'
export const Wrapper = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <main className="max-w-xl mx-auto p-6 space-y-8 animate-in fade-in duration-700">
    <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      {title}
    </h1>
    <div className="space-y-6">{children}</div>
  </main>
)
