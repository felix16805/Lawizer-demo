const AREAS = [
  { icon: "⚖️", title: "Criminal Defense", desc: "DUI, assault, drug charges, white-collar crime, and all federal and state criminal matters.", count: "1,240 lawyers" },
  { icon: "👨‍👩‍👧", title: "Family Law", desc: "Divorce, child custody, adoption, alimony, and domestic relations cases handled with care.", count: "980 lawyers" },
  { icon: "🌍", title: "Immigration", desc: "Visas, green cards, deportation defense, citizenship, and asylum applications.", count: "640 lawyers" },
  { icon: "🏥", title: "Personal Injury", desc: "Car accidents, medical malpractice, slip and fall, wrongful death, and product liability.", count: "1,540 lawyers" },
  { icon: "🏢", title: "Corporate Law", desc: "Business formation, M&A, contracts, compliance, and corporate governance.", count: "820 lawyers" },
  { icon: "🏠", title: "Real Estate", desc: "Property transactions, landlord-tenant disputes, title issues, and zoning matters.", count: "710 lawyers" },
  { icon: "💼", title: "Employment Law", desc: "Wrongful termination, discrimination, harassment, wage disputes, and EEOC claims.", count: "590 lawyers" },
  { icon: "💡", title: "Intellectual Property", desc: "Patents, trademarks, copyrights, trade secrets, and IP litigation.", count: "430 lawyers" },
];

export default function Services() {
  return (
    <section id="services" style={{
      padding: "100px 24px",
      background: "var(--navy-2)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Top border accent */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 120, height: 1, background: "var(--gold)",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label">What we cover</p>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700,
            letterSpacing: "-0.8px", lineHeight: 1.2, marginBottom: 16,
          }}>
            180+ Practice Areas,<br />One Platform.
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--slate)", maxWidth: 480, margin: "0 auto", fontWeight: 300, lineHeight: 1.7 }}>
            Whether it's a traffic ticket or a complex merger, we have verified specialists ready to help.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 20,
        }}>
          {AREAS.map((a) => (
            <div key={a.title} className="card" style={{ padding: 28, cursor: "pointer" }}>
              <div style={{ fontSize: "2rem", marginBottom: 16 }}>{a.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 8, letterSpacing: "-0.2px" }}>
                {a.title}
              </h3>
              <p style={{ fontSize: "0.83rem", color: "var(--slate)", lineHeight: 1.65, marginBottom: 16, fontWeight: 300 }}>
                {a.desc}
              </p>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingTop: 16, borderTop: "1px solid var(--border)",
              }}>
                <span style={{ fontSize: "0.75rem", color: "var(--gold)", fontWeight: 500 }}>{a.count}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--slate)" }}>Browse →</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#search" className="btn-ghost">View all 180+ areas →</a>
        </div>
      </div>
    </section>
  );
}
