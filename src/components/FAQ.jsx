import { useState } from "react";

const FAQS = [
  {
    q: "How does Lawizer verify its lawyers?",
    a: "Every attorney listed on Lawizer undergoes a multi-step verification process: we confirm active bar membership, check for disciplinary actions, verify malpractice insurance, and collect authenticated client reviews. We re-verify all credentials annually.",
  },
  {
    q: "Is the initial consultation really free?",
    a: "Many attorneys on our platform offer a free initial consultation — these are clearly marked with a 'Free Consult' badge. The duration and scope of free consultations vary by attorney, typically ranging from 15 to 30 minutes.",
  },
  {
    q: "How do attorney fees work on Lawizer?",
    a: "Attorneys set their own rates. You'll see hourly rates, flat fees, or contingency arrangements clearly displayed on each profile before you book. Lawizer's platform fee is separate and covers our matching and communication services.",
  },
  {
    q: "Can I switch lawyers after starting a case?",
    a: "Yes. You are always free to change attorneys. Lawizer can help you find a new match. Note that your original attorney may be entitled to fees for work already completed — this depends on your agreement with them.",
  },
  {
    q: "How quickly can I get connected with a lawyer?",
    a: "Most clients receive responses from attorneys within 2–24 hours. For urgent matters, you can filter for attorneys who offer same-day consultations. Our average time from search to first contact is under 3 hours.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. All communications through Lawizer are encrypted end-to-end. Attorney-client privilege applies to your conversations. We never sell or share your personal data with third parties outside of the service.",
  },
  {
    q: "What if I'm not satisfied with my attorney?",
    a: "We offer a Satisfaction Guarantee on our first consultation. If your first booked consultation doesn't meet expectations, we'll match you with another attorney at no additional platform cost. Leaving a review also helps the community.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div style={{
      borderBottom: "1px solid var(--border)",
      overflow: "hidden",
    }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", textAlign: "left",
          background: "none", border: "none", cursor: "pointer",
          padding: "24px 0",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 16,
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        <span style={{ fontSize: "0.98rem", fontWeight: 500, color: "var(--white)", lineHeight: 1.4 }}>
          {faq.q}
        </span>
        <span style={{
          width: 28, height: 28, borderRadius: 4,
          background: isOpen ? "var(--gold)" : "rgba(255,255,255,0.06)",
          border: `1px solid ${isOpen ? "var(--gold)" : "var(--border)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, fontSize: "1.1rem", color: isOpen ? "var(--navy)" : "var(--slate)",
          transition: "all 0.2s",
          transform: isOpen ? "rotate(45deg)" : "none",
        }}>+</span>
      </button>

      <div style={{
        maxHeight: isOpen ? 300 : 0,
        overflow: "hidden",
        transition: "max-height 0.35s ease",
      }}>
        <p style={{
          fontSize: "0.9rem", color: "var(--slate)",
          lineHeight: 1.8, fontWeight: 300,
          paddingBottom: 24,
        }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" style={{
      padding: "100px 24px",
      background: "var(--navy-2)",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label">FAQ</p>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700,
            letterSpacing: "-0.8px", marginBottom: 16,
          }}>
            Common Questions
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--slate)", fontWeight: 300, lineHeight: 1.7 }}>
            Everything you need to know before getting started.
          </p>
        </div>

        <div>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p style={{ fontSize: "0.9rem", color: "var(--slate)", marginBottom: 20 }}>
            Still have questions?
          </p>
          <a href="#contact" className="btn-primary">Talk to our team →</a>
        </div>
      </div>
    </section>
  );
}
