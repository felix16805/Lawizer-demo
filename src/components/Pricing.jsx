const PLANS = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    desc: "For individuals exploring their legal options.",
    features: [
      "Browse all lawyer profiles",
      "Read verified reviews",
      "3 lawyer contact requests/mo",
      "Basic search filters",
      "Email support",
    ],
    missing: ["Priority matching", "Unlimited contacts", "Dedicated advisor", "Document storage"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    desc: "For individuals with active or upcoming legal needs.",
    features: [
      "Everything in Basic",
      "Unlimited contact requests",
      "Priority lawyer matching",
      "Advanced filters & sorting",
      "5GB document storage",
      "Live chat support",
    ],
    missing: ["Dedicated legal advisor", "Business entity support"],
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    desc: "For businesses and teams with ongoing legal needs.",
    features: [
      "Everything in Professional",
      "Dedicated legal advisor",
      "Multi-user team access",
      "Business entity support",
      "Unlimited document storage",
      "API access",
      "SLA & priority support",
    ],
    missing: [],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{
      padding: "100px 24px",
      background: "var(--navy)",
      position: "relative",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label">Simple pricing</p>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700,
            letterSpacing: "-0.8px", marginBottom: 16,
          }}>
            Transparent. No Surprises.
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--slate)", fontWeight: 300, lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
            Our platform fees are separate from attorney fees.
            Cancel any plan anytime.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
          alignItems: "stretch",
        }}>
          {PLANS.map((plan) => (
            <div key={plan.name} style={{
              background: plan.highlight ? "var(--navy-2)" : "var(--navy-3)",
              border: plan.highlight ? "1px solid rgba(201,168,76,0.4)" : "1px solid var(--border)",
              borderRadius: 8,
              padding: 36,
              position: "relative",
              display: "flex", flexDirection: "column",
              boxShadow: plan.highlight ? "0 0 48px rgba(201,168,76,0.08)" : "none",
            }}>
              {/* Popular badge */}
              {plan.badge && (
                <div style={{
                  position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                  background: "var(--gold)", color: "var(--navy)",
                  fontSize: "0.72rem", fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  padding: "4px 16px", borderRadius: 100,
                  whiteSpace: "nowrap",
                }}>{plan.badge}</div>
              )}

              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--slate)", marginBottom: 12 }}>
                  {plan.name}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 10 }}>
                  <span className="font-display" style={{ fontSize: "2.8rem", fontWeight: 700, letterSpacing: "-1px", color: plan.highlight ? "var(--gold)" : "var(--white)" }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "var(--slate)" }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--slate)", lineHeight: 1.6, fontWeight: 300 }}>{plan.desc}</p>
              </div>

              <div style={{ flex: 1 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <span style={{ color: "var(--gold)", fontSize: "0.82rem", marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: "0.85rem", color: "var(--white)", fontWeight: 400 }}>{f}</span>
                  </div>
                ))}
                {plan.missing.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <span style={{ color: "#374151", fontSize: "0.82rem", marginTop: 1, flexShrink: 0 }}>✗</span>
                    <span style={{ fontSize: "0.85rem", color: "#4b5563" }}>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 32 }}>
                <a
                  href="#contact"
                  className={plan.highlight ? "btn-primary" : "btn-ghost"}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 32, fontSize: "0.8rem", color: "#4b5563" }}>
          All plans include a 14-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  );
}
