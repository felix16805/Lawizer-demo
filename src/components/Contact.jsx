import { useState } from "react";

const CONTACT_INFO = [
  { icon: "📧", label: "Email", value: "hello@lawizer.com" },
  { icon: "📞", label: "Phone", value: "+1 (800) 529-4937" },
  { icon: "📍", label: "Address", value: "350 5th Avenue, New York, NY 10118" },
  { icon: "🕐", label: "Hours", value: "Mon–Fri, 8am–8pm EST" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" style={{
      padding: "100px 24px",
      background: "var(--navy)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label">Get in touch</p>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700,
            letterSpacing: "-0.8px", marginBottom: 16,
          }}>
            We're Here to Help
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--slate)", fontWeight: 300, lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
            Have a question about our platform, or need help finding the right attorney? Reach out anytime.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.4fr",
          gap: 48, alignItems: "start",
        }} className="contact-grid">

          {/* Left: info */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 48 }}>
              {CONTACT_INFO.map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 6,
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.1rem", flexShrink: 0,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--slate)", marginBottom: 4 }}>
                      {c.label}
                    </div>
                    <div style={{ fontSize: "0.92rem", color: "var(--white)" }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Are you a lawyer? CTA */}
            <div style={{
              background: "var(--navy-2)", border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: 8, padding: 28,
            }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>
                Are you an attorney?
              </div>
              <h3 className="font-display" style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 10 }}>
                Join Lawizer's Network
              </h3>
              <p style={{ fontSize: "0.83rem", color: "var(--slate)", lineHeight: 1.65, marginBottom: 20, fontWeight: 300 }}>
                Get discovered by thousands of clients actively seeking legal help in your practice area.
              </p>
              <a href="#" className="btn-primary" style={{ fontSize: "0.82rem", padding: "11px 22px" }}>
                Apply as a Lawyer →
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div style={{
            background: "var(--navy-2)", border: "1px solid var(--border)",
            borderRadius: 8, padding: 40,
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>✓</div>
                <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: 12 }}>
                  Message Sent
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--slate)", lineHeight: 1.7 }}>
                  Thank you for reaching out. Our team will respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { label: "Full Name", field: "name", placeholder: "Enter your name", type: "text" },
                    { label: "Email Address", field: "email", placeholder: "example@example.com", type: "email" },
                  ].map(f => (
                    <div key={f.field}>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--slate)", marginBottom: 8 }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type} required
                        placeholder={f.placeholder}
                        value={form[f.field]}
                        onChange={update(f.field)}
                        className="input-field"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--slate)", marginBottom: 8 }}>
                    Subject
                  </label>
                  <select value={form.subject} onChange={update("subject")} className="input-field" required>
                    <option value="">Select a topic...</option>
                    {["Find a lawyer","Lawyer application","Billing & plans","Technical support","Press inquiry","Other"].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--slate)", marginBottom: 8 }}>
                    Message
                  </label>
                  <textarea
                    required
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={update("message")}
                    className="input-field"
                    style={{ resize: "vertical", minHeight: 130 }}
                  />
                </div>

                <button type="submit" className="btn-primary" disabled={sending} style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem" }}>
                  {sending ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
