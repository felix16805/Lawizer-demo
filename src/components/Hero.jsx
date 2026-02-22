import { useState } from "react";

const STATS = [
  { value: "12,000+", label: "Verified Lawyers" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "180+", label: "Practice Areas" },
  { value: "24/7", label: "Support Available" },
];

export default function Hero() {
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for "${area || "any"}" lawyers in "${location || "your area"}"...`);
  };

  return (
    <section id="top" style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "120px 24px 80px",
      position: "relative", overflow: "hidden",
      textAlign: "center",
    }}>
      {/* Background grid pattern */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700, height: 700,
        background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 820, width: "100%" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: 100, padding: "8px 18px", marginBottom: 32,
          fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--gold)",
          animation: "fadeUp 0.6s ease both",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
          Trusted by 50,000+ clients across the country
        </div>

        {/* Headline */}
        <h1 className="font-display" style={{
          fontSize: "clamp(2.8rem, 6vw, 5rem)",
          fontWeight: 700, lineHeight: 1.1,
          letterSpacing: "-1.5px", marginBottom: 24,
          animation: "fadeUp 0.7s 0.1s ease both", opacity: 0,
          animationFillMode: "forwards",
        }}>
          Find the Right Lawyer.<br />
          <span className="gold-text">Win Your Case.</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: "1.1rem", color: "var(--slate)",
          maxWidth: 560, margin: "0 auto 48px",
          lineHeight: 1.75, fontWeight: 300,
          animation: "fadeUp 0.7s 0.2s ease both", opacity: 0,
          animationFillMode: "forwards",
        }}>
          Connect with verified, top-rated attorneys in your area.
          Filter by practice area, location, and budget — instantly.
        </p>

        {/* Search box */}
        <form onSubmit={handleSearch} style={{
          display: "flex", flexWrap: "wrap", gap: 0,
          background: "var(--navy-2)",
          border: "1px solid var(--border)",
          borderRadius: 6, overflow: "hidden",
          maxWidth: 680, margin: "0 auto",
          animation: "fadeUp 0.7s 0.3s ease both", opacity: 0,
          animationFillMode: "forwards",
          boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
        }}>
          <select
            value={area}
            onChange={e => setArea(e.target.value)}
            className="input-field"
            style={{ flex: 1, minWidth: 180, borderRadius: 0, border: "none", borderRight: "1px solid var(--border)" }}
          >
            <option value="">Practice Area</option>
            {["Criminal Defense","Family Law","Immigration","Personal Injury","Corporate Law","Real Estate","Employment Law","Bankruptcy","Intellectual Property","Tax Law"].map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="City or ZIP code"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="input-field"
            style={{ flex: 1, minWidth: 160, borderRadius: 0, border: "none" }}
          />

          <button type="submit" className="btn-primary" style={{ borderRadius: 0, padding: "14px 28px", whiteSpace: "nowrap" }}>
            Search →
          </button>
        </form>

        <p style={{ marginTop: 16, fontSize: "0.78rem", color: "#4b5563" }}>
          Popular: <span style={{ color: "var(--slate)" }}>Criminal Defense · Family Law · Personal Injury · Immigration</span>
        </p>
      </div>

      {/* Stats bar */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexWrap: "wrap", justifyContent: "center",
        gap: 0, marginTop: 72, width: "100%", maxWidth: 800,
        borderTop: "1px solid var(--border)",
        paddingTop: 48,
        animation: "fadeUp 0.7s 0.5s ease both", opacity: 0,
        animationFillMode: "forwards",
      }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{
            flex: "1 1 150px", textAlign: "center", padding: "0 24px",
            borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            <div className="font-display" style={{
              fontSize: "2rem", fontWeight: 700, color: "var(--gold)",
              letterSpacing: "-0.5px",
            }}>{s.value}</div>
            <div style={{ fontSize: "0.82rem", color: "var(--slate)", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
