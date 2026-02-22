const STEPS = [
  {
    num: "01",
    title: "Search Your Need",
    desc: "Enter your legal issue and location. Our smart filters help you find specialists relevant to your exact situation.",
  },
  {
    num: "02",
    title: "Compare Profiles",
    desc: "Review verified credentials, read real client reviews, compare rates, and check availability — all in one place.",
  },
  {
    num: "03",
    title: "Book a Consultation",
    desc: "Schedule a free or paid consultation directly through Lawizer. No cold calls, no waiting rooms.",
  },
  {
    num: "04",
    title: "Get Legal Help",
    desc: "Work with your chosen attorney with full transparency on fees, timelines, and case progress.",
  },
];

const TRUST = [
  { icon: "✓", label: "Background Verified" },
  { icon: "✓", label: "Bar Association Checked" },
  { icon: "✓", label: "Real Client Reviews" },
  { icon: "✓", label: "Secure Payments" },
];

export default function About() {
  return (
    <section id="about" style={{
      padding: "100px 24px",
      background: "var(--navy-2)",
      position: "relative",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* How it works */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label">How it works</p>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700,
            letterSpacing: "-0.8px", marginBottom: 16,
          }}>
            Legal Help in 4 Simple Steps
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 24, marginBottom: 100,
        }}>
          {STEPS.map((s, i) => (
            <div key={s.num} style={{ position: "relative" }}>
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position: "absolute", top: 28, left: "calc(100% - 12px)",
                  width: 24, height: 1,
                  background: "linear-gradient(to right, var(--gold), transparent)",
                  display: "none",
                }} className="step-connector" />
              )}
              <div style={{
                fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em",
                color: "var(--gold)", marginBottom: 16,
                fontFamily: "'Playfair Display', serif",
              }}>{s.num}</div>
              <div style={{
                width: 40, height: 1,
                background: "var(--gold)", marginBottom: 20,
              }} />
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--slate)", lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* About / trust section */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 64, alignItems: "center",
        }} className="about-grid">

          {/* Left */}
          <div>
            <p className="section-label">Why Lawizer</p>
            <h2 className="font-display" style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700,
              letterSpacing: "-0.8px", lineHeight: 1.2, marginBottom: 20,
            }}>
              We Don't Just List Lawyers.<br />
              <span className="gold-text">We Vet Them.</span>
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--slate)", lineHeight: 1.8, fontWeight: 300, marginBottom: 24 }}>
              Every attorney on Lawizer undergoes a rigorous verification process.
              We check bar memberships, review disciplinary records, and collect
              authentic client feedback — so you never have to guess.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--slate)", lineHeight: 1.8, fontWeight: 300, marginBottom: 36 }}>
              Founded by legal professionals who believed finding a good lawyer
              shouldn't be harder than the legal problem itself.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {TRUST.map(t => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: 4,
                    background: "rgba(201,168,76,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.8rem", color: "var(--gold)", fontWeight: 700, flexShrink: 0,
                  }}>{t.icon}</div>
                  <span style={{ fontSize: "0.88rem", fontWeight: 500 }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual card stack */}
          <div style={{ position: "relative", height: 420 }}>
            {/* Back card */}
            <div style={{
              position: "absolute", top: 24, left: 24, right: 0, bottom: 0,
              background: "var(--navy-3)", border: "1px solid var(--border)",
              borderRadius: 12,
            }} />
            {/* Front card */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 24, bottom: 24,
              background: "var(--navy)", border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: 12, padding: 36,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <div>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
                  Verified Attorney
                </div>
                <div style={{
                  width: 64, height: 64, borderRadius: 8,
                  background: "linear-gradient(135deg, var(--navy-3), var(--navy-2))",
                  border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Playfair Display', serif", fontWeight: 700,
                  fontSize: "1.3rem", color: "var(--gold)", marginBottom: 20,
                }}>A</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 4 }}>Alexandra Moore</div>
                <div style={{ fontSize: "0.82rem", color: "var(--slate)", marginBottom: 20 }}>Corporate Law · 16 years exp.</div>
                <div style={{ display: "flex", gap: 4 }}>
                  {[1,2,3,4,5].map(i => <span key={i} style={{ color: "var(--gold)" }}>★</span>)}
                  <span style={{ fontSize: "0.82rem", color: "var(--slate)", marginLeft: 6 }}>5.0 · 421 reviews</span>
                </div>
              </div>
              <div>
                <div style={{ height: 1, background: "var(--border)", marginBottom: 24 }} />
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: 100, padding: "8px 16px",
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                  <span style={{ fontSize: "0.78rem", color: "var(--gold)", fontWeight: 600 }}>Available for consultations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
