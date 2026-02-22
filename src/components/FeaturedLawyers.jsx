const LAWYERS = [
  {
    name: "Margaret Chen",
    title: "Senior Partner",
    firm: "Chen & Associates",
    area: "Criminal Defense",
    rating: 4.9,
    reviews: 312,
    exp: "18 yrs",
    location: "New York, NY",
    rate: "$350/hr",
    avatar: "MC",
    color: "#1a3a5c",
    badges: ["Top Rated", "Free Consult"],
  },
  {
    name: "James Okafor",
    title: "Lead Attorney",
    firm: "Okafor Law Group",
    area: "Personal Injury",
    rating: 4.8,
    reviews: 248,
    exp: "14 yrs",
    location: "Chicago, IL",
    rate: "$300/hr",
    avatar: "JO",
    color: "#1a3a2a",
    badges: ["Free Consult"],
  },
  {
    name: "Sofia Reyes",
    title: "Partner",
    firm: "Reyes Immigration Law",
    area: "Immigration",
    rating: 5.0,
    reviews: 189,
    exp: "11 yrs",
    location: "Miami, FL",
    rate: "$280/hr",
    avatar: "SR",
    color: "#3a1a3a",
    badges: ["Top Rated", "Bilingual"],
  },
];

function Stars({ rating }) {
  return (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= Math.round(rating) ? "var(--gold)" : "#374151", fontSize: "0.75rem" }}>★</span>
      ))}
    </span>
  );
}

export default function FeaturedLawyers() {
  return (
    <section id="search" style={{ padding: "100px 24px", background: "var(--navy)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label">Handpicked for you</p>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700,
            letterSpacing: "-0.8px", marginBottom: 16,
          }}>
            Top-Rated Attorneys
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--slate)", fontWeight: 300, lineHeight: 1.7 }}>
            Every lawyer is background-checked, verified, and reviewed by real clients.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
        }}>
          {LAWYERS.map((l) => (
            <div key={l.name} className="card" style={{ overflow: "hidden" }}>
              {/* Card header */}
              <div style={{
                background: l.color, padding: "28px 28px 24px",
                display: "flex", gap: 16, alignItems: "flex-start",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 6,
                  background: "rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Playfair Display', serif", fontWeight: 700,
                  fontSize: "1.1rem", color: "white", flexShrink: 0,
                }}>{l.avatar}</div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 2 }}>{l.name}</h3>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", marginBottom: 4 }}>
                    {l.title} · {l.firm}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {l.badges.map(b => (
                      <span key={b} style={{
                        fontSize: "0.68rem", fontWeight: 600,
                        background: "rgba(201,168,76,0.2)", color: "var(--gold)",
                        border: "1px solid rgba(201,168,76,0.3)",
                        padding: "2px 8px", borderRadius: 100,
                        letterSpacing: "0.04em",
                      }}>{b}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: 28 }}>
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  gap: 12, marginBottom: 20,
                }}>
                  {[
                    { label: "Practice Area", val: l.area },
                    { label: "Experience", val: l.exp },
                    { label: "Location", val: l.location },
                    { label: "Rate", val: l.rate },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontSize: "0.7rem", color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 500 }}>{item.val}</div>
                    </div>
                  ))}
                </div>

                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  paddingTop: 16, borderTop: "1px solid var(--border)",
                  marginBottom: 20,
                }}>
                  <Stars rating={l.rating} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--gold)" }}>{l.rating}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--slate)" }}>({l.reviews} reviews)</span>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <a href="#contact" className="btn-primary" style={{ flex: 1, justifyContent: "center", padding: "11px 16px", fontSize: "0.82rem" }}>
                    Book Consult
                  </a>
                  <a href="#contact" className="btn-ghost" style={{ padding: "11px 16px", fontSize: "0.82rem" }}>
                    Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#contact" className="btn-ghost">View all 12,000+ lawyers →</a>
        </div>
      </div>
    </section>
  );
}
