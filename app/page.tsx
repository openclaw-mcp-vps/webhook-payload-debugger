export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="text-center mb-24">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-mono px-3 py-1 rounded-full mb-6">
          API Monitoring Tool
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Debug Webhook Payloads<br />
          <span className="text-[#58a6ff]">in Real-Time</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Generate unique webhook URLs, capture incoming payloads instantly, and analyze them with diff detection and validation tools — all in one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Debugging — $12/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left font-mono text-sm text-[#8b949e]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#f85149] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#d29922] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950] inline-block"></span>
            <span className="ml-2 text-xs text-[#484f58]">webhook-debugger</span>
          </div>
          <p><span className="text-[#58a6ff]">POST</span> <span className="text-[#3fb950]">/hook/a3f9c2d1</span></p>
          <p className="mt-1 text-[#3fb950]">✓ Payload captured — 142 bytes</p>
          <p className="mt-1"><span className="text-[#d29922]">event</span>: <span className="text-[#a5d6ff]">&quot;payment.completed&quot;</span></p>
          <p><span className="text-[#d29922]">amount</span>: <span className="text-[#79c0ff]">4900</span></p>
          <p><span className="text-[#d29922]">currency</span>: <span className="text-[#a5d6ff]">&quot;USD&quot;</span></p>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="border border-[#58a6ff] bg-[#161b22] rounded-xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-wider mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$12<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to debug webhooks</p>
          <ul className="space-y-3 mb-8 text-sm">
            {[
              "Unlimited unique webhook URLs",
              "Real-time payload capture via WebSockets",
              "JSON diff & comparison tools",
              "Payload schema validation",
              "30-day payload history",
              "Replay & forward payloads"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does webhook capture work?",
              a: "You get a unique URL like /hook/your-id. Point any service at it and payloads appear in your dashboard instantly via WebSockets — no polling needed."
            },
            {
              q: "Can I compare two payloads?",
              a: "Yes. Select any two captured payloads and the diff tool highlights added, removed, and changed fields side-by-side in a readable format."
            },
            {
              q: "Is my data secure?",
              a: "Each webhook URL is cryptographically unique. Payloads are stored encrypted and automatically purged after 30 days. You can also delete them manually at any time."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] bg-[#161b22] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Webhook Payload Debugger. All rights reserved.
      </footer>
    </main>
  )
}
