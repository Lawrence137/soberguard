
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-bold tracking-tight">
          Sober<span className="text-emerald-400">Guard</span>
        </div>

        <a
          href="#how-it-works"
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
        >
          How it works
        </a>
      </nav>

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center">
        <div className="mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
          Your digital decisions, protected.
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Don't let tonight's
          <span className="text-emerald-400"> decisions</span>
          become tomorrow's regrets.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          SoberGuard helps you pause before sending messages,
          making calls, or posting things you might regret.
          Enjoy your night. Protect your tomorrow.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:hello@soberguard.app"
            className="rounded-xl bg-emerald-400 px-7 py-4 font-semibold text-slate-950 hover:bg-emerald-300"
          >
            Get early access
          </a>

          <a
            href="#how-it-works"
            className="rounded-xl border border-slate-700 px-7 py-4 font-semibold hover:bg-slate-800"
          >
            Learn more
          </a>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3"
      >
        {[
          {
            number: "01",
            title: "Activate protection",
            description:
              "Choose when you want SoberGuard to help protect your digital decisions.",
          },
          {
            number: "02",
            title: "Pause before acting",
            description:
              "Build in a moment to reconsider messages, calls, and social posts.",
          },
          {
            number: "03",
            title: "Wake up confident",
            description:
              "Enjoy your social life without unnecessary digital regrets.",
          },
        ].map((item) => (
          <div
            key={item.number}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
          >
            <div className="mb-6 text-sm font-semibold text-emerald-400">
              {item.number}
            </div>
            <h2 className="mb-3 text-xl font-semibold">{item.title}</h2>
            <p className="leading-7 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SoberGuard. Protect your tomorrow.
      </footer>
    </main>
  );
}
