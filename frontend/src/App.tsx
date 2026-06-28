function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-lg font-bold">
            YT
          </span>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              YouTube Automation Dashboard
            </h1>
            <p className="text-sm text-slate-400">
              Shorts Automation Pipeline
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-2xl font-semibold">Welcome</h2>
          <p className="mt-2 max-w-2xl text-slate-400">
            The infrastructure is ready. This React + Vite frontend talks to the
            Spring Boot backend via the <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">/api</code>{' '}
            proxy on port 8080.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
