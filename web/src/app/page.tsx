export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-10">
      <div className="relative isolate aspect-[3/4] w-full max-w-[720px] overflow-hidden rounded-[3rem] border border-slate-100/10 bg-[#050c20] shadow-[0_40px_120px_-50px_rgba(15,23,42,0.85)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.22),transparent_45%),radial-gradient(circle_at_20%_75%,rgba(56,189,248,0.14),transparent_58%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-screen [background-image:linear-gradient(125deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.0)_32%),linear-gradient(0deg,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:auto,120px_120px,120px_120px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(255,255,255,0.14),rgba(255,255,255,0)_70%)] opacity-70 mix-blend-soft-light" />
        <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute left-0 right-0 top-12 flex justify-center">
          <span className="rounded-full border border-slate-100/20 bg-white/5 px-6 py-2 text-[11px] uppercase tracking-[0.45em] text-slate-100/80 backdrop-blur-sm">
            Clinical Pharmacology Edition
          </span>
        </div>

        <div className="relative flex h-full flex-col justify-between px-10 pb-14 pt-24 sm:px-14 sm:pt-28">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <span className="h-0.5 w-12 bg-gradient-to-r from-cyan-300/0 via-cyan-300/80 to-cyan-300/0" />
              <span className="text-xs uppercase tracking-[0.4em] text-slate-300/80">
                Compendium
              </span>
            </div>

            <h1 className="cover-title text-[clamp(2.8rem,4vw+1.5rem,4.6rem)] leading-tight text-white drop-shadow-[0_15px_35px_rgba(15,23,42,0.55)]">
              Pharmacology Chronicles
            </h1>
            <p className="cover-subtitle mt-7 max-w-xl text-lg leading-relaxed text-slate-100/85 sm:text-xl">
              MBBS Clinical & Molecular Reference with In-Depth Knowledge
            </p>
          </div>

          <div className="space-y-6">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/40 to-transparent" />
            <div className="grid gap-4 text-xs text-slate-200/70 sm:grid-cols-3">
              <div className="space-y-1">
                <p className="uppercase tracking-[0.35em] text-slate-200/60">
                  Key Domains
                </p>
                <p className="font-medium text-slate-100/85">
                  Neuropharmacology · Immunomodulation · Precision Dosing
                </p>
              </div>
              <div className="space-y-1">
                <p className="uppercase tracking-[0.35em] text-slate-200/60">
                  Audience
                </p>
                <p className="font-medium text-slate-100/85">
                  MBBS Scholars · Clinical Practitioners · Bench Researchers
                </p>
              </div>
              <div className="space-y-1">
                <p className="uppercase tracking-[0.35em] text-slate-200/60">
                  Edition
                </p>
                <p className="font-medium text-slate-100/85">
                  Comprehensive Therapeutics & Translational Insights, Vol. IV
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-[-6%] top-[32%] h-72 w-72 opacity-80">
          <svg viewBox="0 0 220 220" className="h-full w-full fill-none stroke-slate-100/30">
            <circle cx="110" cy="110" r="90" strokeWidth="0.6" strokeDasharray="2 6" />
            <circle cx="110" cy="110" r="56" strokeWidth="0.8" strokeDasharray="5 9" stroke="rgba(148,163,184,0.4)" />
            <g strokeWidth="1.5" stroke="rgba(148,163,184,0.65)">
              <line x1="60" y1="70" x2="150" y2="40" />
              <line x1="150" y1="40" x2="188" y2="132" />
              <line x1="188" y1="132" x2="92" y2="178" />
              <line x1="92" y1="178" x2="60" y2="70" />
            </g>
            <g fill="rgba(250,250,250,0.85)">
              <circle cx="60" cy="70" r="5.5" />
              <circle cx="150" cy="40" r="4" />
              <circle cx="188" cy="132" r="5" />
              <circle cx="92" cy="178" r="4.5" />
              <circle cx="124" cy="122" r="3.5" fill="rgba(251,191,36,0.85)" />
              <circle cx="110" cy="88" r="3" fill="rgba(56,189,248,0.9)" />
            </g>
          </svg>
        </div>

        <div className="pointer-events-none absolute right-[-12%] top-[20%] h-[350px] w-[260px] opacity-90">
          <svg viewBox="0 0 240 340" className="h-full w-full">
            <defs>
              <linearGradient id="dna-gradient" x1="0%" x2="100%">
                <stop offset="0%" stopColor="rgba(191,219,254,0.6)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0.7)" />
              </linearGradient>
            </defs>
            <path
              d="M60 0 C130 60 110 160 180 220 M180 0 C110 60 130 160 60 220"
              stroke="url(#dna-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <g stroke="rgba(226,232,240,0.55)" strokeWidth="2">
              {[...Array(7)].map((_, index) => {
                const y = 30 + index * 42;
                return (
                  <line
                    key={`dna-rung-${y}`}
                    x1="74"
                    y1={y}
                    x2="166"
                    y2={y + 12}
                    strokeLinecap="round"
                  />
                );
              })}
            </g>
            <g fill="rgba(251,191,36,0.45)">
              {[...Array(6)].map((_, index) => {
                const y = 48 + index * 45;
                return <circle key={`dna-left-${y}`} cx="60" cy={y} r="5" />;
              })}
            </g>
            <g fill="rgba(96,165,250,0.75)">
              {[...Array(6)].map((_, index) => {
                const y = 72 + index * 48;
                return <circle key={`dna-right-${y}`} cx="180" cy={y} r="4" />;
              })}
            </g>
          </svg>
        </div>

        <div className="pointer-events-none absolute left-12 top-24 hidden h-24 w-48 rotate-[-12deg] items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl sm:flex">
          <div className="flex flex-col text-[10px] uppercase tracking-[0.35em] text-slate-100/70">
            <span>Clinical</span>
            <span>Interface</span>
          </div>
          <div className="relative flex h-10 w-20 items-center justify-center">
            <div className="absolute h-4 w-4 rounded-full border border-slate-200/40" />
            <div className="h-2 w-16 rounded-full bg-gradient-to-r from-slate-100/20 via-slate-100/80 to-slate-100/20" />
          </div>
        </div>

        <div className="pointer-events-none absolute left-[18%] top-[62%] hidden h-14 w-36 -rotate-3 items-center justify-between rounded-full border border-slate-100/15 bg-slate-900/70 px-5 text-[11px] tracking-[0.25em] text-slate-100/70 backdrop-blur-md sm:flex">
          <span>Pharma</span>
          <span>Node</span>
        </div>

        <div className="pointer-events-none absolute right-12 bottom-24 flex h-28 w-36 flex-col items-center justify-center gap-2 rounded-[1.5rem] border border-slate-100/15 bg-slate-900/70 p-4 text-[11px] uppercase tracking-[0.3em] text-slate-200/70 backdrop-blur-lg">
          <span>Capsule Kinetics</span>
          <div className="relative h-10 w-12">
            <span className="absolute left-0 top-3 block h-3 w-12 rounded-full bg-gradient-to-r from-sky-300/80 to-slate-200/40 shadow-[0_0_25px_rgba(56,189,248,0.5)]" />
            <span className="absolute left-[2px] top-[14px] block h-1.5 w-[46px] rounded-full bg-white/20" />
            <span className="absolute right-[2px] top-1 block h-3 w-8 rounded-full bg-gradient-to-r from-amber-200/70 to-amber-400/50 blur-[1px]" />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-12 left-0 right-0 flex items-center justify-between px-12 text-[10px] uppercase tracking-[0.4em] text-slate-200/55">
          <span>Institutional – Academic Press</span>
          <span>2025 Reference Volume</span>
        </div>
      </div>
    </main>
  );
}
