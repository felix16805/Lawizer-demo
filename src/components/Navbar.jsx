import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Find a Lawyer", href: "#search" },
  { label: "Practice Areas", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(10,15,30,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          transition: "all 0.3s ease",
          padding: scrolled ? "14px 40px" : "22px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#top" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34, height: 34, background: "var(--gold)",
            borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "1rem", color: "var(--navy)",
          }}>L</div>
          <span style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "1.25rem", color: "var(--white)", letterSpacing: "-0.3px"
          }}>
            Lawizer
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", alignItems: "center", gap: 36, listStyle: "none", margin: 0, padding: 0 }}
          className="nav-desktop">
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              <a href={l.href} style={{
                textDecoration: "none", fontSize: "0.85rem", fontWeight: 500,
                color: "var(--slate)", letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = "var(--white)"}
                onMouseLeave={e => e.target.style.color = "var(--slate)"}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="nav-desktop">
          <a href="#contact" className="btn-ghost" style={{ padding: "10px 22px" }}>Contact</a>
          <a href="#search" className="btn-primary" style={{ padding: "10px 22px" }}>Find a Lawyer</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: 24, height: 2,
              background: "var(--white)", borderRadius: 2,
              marginBottom: i < 2 ? 5 : 0,
              transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px,5px)"
                : i === 1 ? "scaleX(0)"
                : "rotate(-45deg) translate(5px,-5px)"
                : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 61, left: 0, right: 0, zIndex: 99,
          background: "var(--navy-2)", borderBottom: "1px solid var(--border)",
          padding: "16px 24px 24px",
          display: "flex", flexDirection: "column", gap: 0,
          animation: "fadeIn 0.2s ease",
        }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              padding: "14px 0", textDecoration: "none", fontSize: "0.95rem",
              fontWeight: 500, color: "var(--white)",
              borderBottom: "1px solid var(--border)",
            }}>{l.label}</a>
          ))}
          <a href="#search" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: 16 }}>
            Find a Lawyer
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
