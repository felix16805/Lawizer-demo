const FOOTER_LINKS = {
  "For Clients": ["Find a Lawyer", "Browse Practice Areas", "How It Works", "Client Reviews", "Legal Resources"],
  "For Lawyers": ["Join the Network", "Lawyer Login", "Pricing for Lawyers", "Success Stories", "Partner Program"],
  "Company": ["About Us", "Careers", "Press", "Blog", "Contact"],
  "Legal": ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--navy-2)", borderTop: "1px solid var(--border)", padding: "80px 40px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Top: brand + links */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
          gap: 40, marginBottom: 64,
        }} className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 34, height: 34, background: "var(--gold)", borderRadius: 4,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", color: "var(--navy)",
              }}>L</div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.25rem" }}>Lawizer</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--slate)", lineHeight: 1.75, fontWeight: 300, maxWidth: 240, marginBottom: 28 }}>
              Connecting people with verified legal professionals since 2020.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {["𝕏", "in", "f", "▶"].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: 6,
                  background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.8rem", color: "var(--slate)", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.color = "var(--gold)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--slate)"; }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 18 }}>
                {heading}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(l => (
                  <li key={l}>
                    <a href="#" style={{
                      fontSize: "0.85rem", color: "var(--slate)", textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                      onMouseEnter={e => e.target.style.color = "var(--white)"}
                      onMouseLeave={e => e.target.style.color = "var(--slate)"}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--border)", paddingTop: 28,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
        }}>
          <p style={{ fontSize: "0.78rem", color: "#4b5563" }}>
            © {year} Lawizer, Inc. All rights reserved. Lawizer is not a law firm and does not provide legal advice.
          </p>
          <div style={{ display: "flex", gap: 4 }}>
            {["🇺🇸 United States", "🌐 English"].map(item => (
              <span key={item} style={{
                fontSize: "0.75rem", color: "#4b5563",
                background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                padding: "4px 10px", borderRadius: 4,
              }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
