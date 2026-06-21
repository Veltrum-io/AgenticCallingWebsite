import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Converz",
};

/* ── Shared primitive components ─────────────────────────────────────────── */

function SectionNum({ n }: { n: string }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 650,
        letterSpacing: ".1em",
        textTransform: "uppercase",
        color: "#EBC9BC",
        marginBottom: 10,
      }}
    >
      {n}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 22,
        fontWeight: 650,
        letterSpacing: "-.02em",
        color: "#111827",
        marginBottom: 18,
        paddingBottom: 14,
        borderBottom: "1px solid rgba(17,24,39,.07)",
      }}
    >
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 15.5,
        lineHeight: 1.78,
        color: "#4B5563",
        marginBottom: 16,
      }}
    >
      {children}
    </p>
  );
}

function BulletList({ children }: { children: React.ReactNode }) {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        margin: "16px 0",
        listStyle: "none",
        padding: 0,
      }}
    >
      {children}
    </ul>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, lineHeight: 1.65, color: "#4B5563" }}>
      <span
        style={{
          display: "inline-flex",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#D9B3A3",
          flexShrink: 0,
          marginTop: 9,
        }}
      />
      <span>{children}</span>
    </li>
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "linear-gradient(145deg,rgba(243,218,209,.45),rgba(245,241,238,.6))",
        border: "1px solid rgba(217,179,163,.3)",
        borderRadius: 16,
        padding: "22px 24px",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 650,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "#C9603A",
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.72, color: "#374151" }}>{children}</p>
    </div>
  );
}

/* ── Data table ───────────────────────────────────────────────────────────── */

function DataTable({ headers, rows }: { headers: string[]; rows: (React.ReactNode[])[] }) {
  return (
    <div style={{ overflowX: "auto", margin: "20px 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid rgba(17,24,39,.08)",
        }}
      >
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                style={{
                  background: "#F3EDE9",
                  fontSize: 11,
                  fontWeight: 650,
                  letterSpacing: ".07em",
                  textTransform: "uppercase",
                  color: "#4B5563",
                  padding: "12px 16px",
                  textAlign: "left",
                  borderBottom: "1px solid rgba(17,24,39,.08)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    fontSize: 14,
                    color: "#4B5563",
                    padding: "12px 16px",
                    borderBottom: ri < rows.length - 1 ? "1px solid rgba(17,24,39,.05)" : "none",
                    lineHeight: 1.55,
                    verticalAlign: "top",
                    background: ri % 2 === 1 ? "rgba(243,218,209,.1)" : "transparent",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Compliance badges ────────────────────────────────────────────────────── */

function ComplianceBadge({
  icon,
  name,
  sub,
}: {
  icon: React.ReactNode;
  name: string;
  sub: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "#fff",
        border: "1px solid rgba(17,24,39,.08)",
        borderRadius: 12,
        padding: "11px 16px",
        boxShadow: "0 1px 3px rgba(17,24,39,.04)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          width: 32,
          height: 32,
          borderRadius: 9,
          background: "linear-gradient(145deg,#1b1b1f,#2d2d33)",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 650, color: "#111827", letterSpacing: "-.01em" }}>
          {name}
        </div>
        <div style={{ fontSize: 11, color: "#6B7280", marginTop: 1 }}>{sub}</div>
      </div>
    </div>
  );
}

/* ── Contact card ─────────────────────────────────────────────────────────── */

function ContactCard({
  email,
  label,
  desc,
}: {
  email: string;
  label: string;
  desc: string;
}) {
  return (
    <a
      href={`mailto:${email}`}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 18,
        background: "#fff",
        border: "1px solid rgba(17,24,39,.08)",
        borderRadius: 20,
        padding: 28,
        boxShadow: "0 1px 3px rgba(17,24,39,.04),0 4px 14px -4px rgba(17,24,39,.07)",
        marginTop: 16,
        textDecoration: "none",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          width: 48,
          height: 48,
          borderRadius: 14,
          background: "linear-gradient(145deg,#F3DAD1,#FAF7F5)",
          border: "1px solid rgba(17,24,39,.06)",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9603A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 650, letterSpacing: ".08em", textTransform: "uppercase", color: "#D9B3A3", marginBottom: 5 }}>
          {label}
        </div>
        <div style={{ fontSize: 16, fontWeight: 550, color: "#111827" }}>{email}</div>
        <div style={{ fontSize: 13.5, color: "#6B7280", marginTop: 4, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </a>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function PrivacyPage() {
  return (
    <div style={{ background: "#F5F1EE", minHeight: "100vh" }}>
      <Navbar />

      {/* PAGE HEADER */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "148px 32px 108px",
          textAlign: "center",
          overflow: "hidden",
          background: "linear-gradient(120deg, #dedad6 0%, #e8cec3 45%, #dfb9a8 100%)",
        }}
      >
        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(48px,6.5vw,76px)",
              lineHeight: 1.02,
              letterSpacing: "-.04em",
              fontWeight: 700,
              background: "linear-gradient(90deg, #111827 0%, #C9603A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: 0,
            }}
          >
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* BODY */}
      <div
        className="legal-grid"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 32px 120px",
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        {/* TABLE OF CONTENTS */}
        <aside className="legal-toc" aria-label="Table of contents" style={{ position: "sticky", top: 104 }}>
          <div
            style={{
              fontSize: 10.5,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              fontWeight: 650,
              color: "#D9B3A3",
              marginBottom: 16,
            }}
          >
            On this page
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { href: "#overview", label: "Overview" },
              { href: "#data-collect", label: "What We Collect" },
              { href: "#data-use", label: "How We Use It" },
              { href: "#retention", label: "Data Retention" },
              { href: "#user-rights", label: "Your Rights" },
              { href: "#third-parties", label: "Third Parties" },
              { href: "#security", label: "Security" },
              { href: "#updates", label: "Policy Updates" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                style={{
                  display: "block",
                  fontSize: 13.5,
                  color: "#6B7280",
                  fontWeight: 450,
                  padding: "7px 12px",
                  borderRadius: 8,
                  borderLeft: "2px solid transparent",
                  textDecoration: "none",
                  lineHeight: 1.4,
                  transition: "color .2s,background .2s,border-color .2s",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* SECTIONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

          {/* 01 — OVERVIEW */}
          <section id="overview" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="01" />
            <SectionHeading>Overview</SectionHeading>
            <Prose>
              At Converz, privacy is built into the foundation of how we operate — not added as an afterthought. We build AI voice infrastructure for businesses, and we understand that the conversations passing through our platform can be sensitive, commercially significant, or personally identifiable.
            </Prose>
            <Prose>
              This Privacy Policy describes what information we collect, how it is used, how long it is retained, and what rights you have over your data. It applies to all users of the Converz platform, website, and API services.
            </Prose>
            <Callout title="Our core commitment">
              Converz operates a <strong>default zero data retention policy</strong>. We do not store your call data, voice recordings, or conversation content beyond what is strictly necessary for real-time service operation, unless you explicitly enable optional retention features.
            </Callout>
          </section>

          {/* 02 — WHAT WE COLLECT */}
          <section id="data-collect" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="02" />
            <SectionHeading>What We Collect</SectionHeading>
            <Prose>
              We collect only the minimum data required to operate our services reliably and securely. The categories below describe what we collect and why.
            </Prose>
            <DataTable
              headers={["Data Type", "Description", "Basis"]}
              rows={[
                [
                  <strong key="k">Service Logs</strong>,
                  "Connection events, API request metadata, error traces, and system health signals. No call content is included.",
                  "Operational necessity",
                ],
                [
                  <strong key="k">Billing Information</strong>,
                  "Payment processing is handled by Stripe. Converz does not store card numbers, CVVs, or bank details directly.",
                  "Contractual obligation",
                ],
                [
                  <strong key="k">Account Information</strong>,
                  "Name, email address, and company details you provide at registration or during onboarding.",
                  "Contract performance",
                ],
                [
                  <strong key="k">Usage Metrics</strong>,
                  "Aggregated call volumes, latency measurements, and feature utilization — used to improve platform performance. Not linked to individual conversations.",
                  "Legitimate interest",
                ],
                [
                  <strong key="k">Voice QA Samples</strong>,
                  <span key="v">Decontextualized audio snippets for pronunciation and voice quality assurance. <em>Opt-in only.</em> Not enabled by default.</span>,
                  "Explicit consent",
                ],
              ]}
            />
            <Prose>
              We do not collect biometric identifiers, sensitive personal categories, or any data beyond what is described above without your explicit consent.
            </Prose>
          </section>

          {/* 03 — HOW WE USE IT */}
          <section id="data-use" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="03" />
            <SectionHeading>How We Use Your Information</SectionHeading>
            <BulletList>
              <BulletItem><strong>Service operation</strong> — to route calls, process API requests, and maintain the availability and reliability of our voice infrastructure.</BulletItem>
              <BulletItem><strong>Billing and payments</strong> — to process invoices, manage subscriptions, and comply with financial regulations.</BulletItem>
              <BulletItem><strong>Security monitoring</strong> — to detect and respond to abuse, unauthorized access attempts, and service anomalies.</BulletItem>
              <BulletItem><strong>Platform improvement</strong> — to analyze aggregated, non-identifiable usage patterns and improve voice quality, latency, and reliability.</BulletItem>
              <BulletItem><strong>Support and onboarding</strong> — to respond to your inquiries, troubleshoot issues, and ensure successful platform adoption.</BulletItem>
            </BulletList>
            <Callout title="AI training policy">
              Converz does <strong>not</strong> use your call data, conversation content, or audio for training AI or voice models — absent explicit written authorization from you. This is a firm default, not a buried opt-out.
            </Callout>
          </section>

          {/* 04 — DATA RETENTION */}
          <section id="retention" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="04" />
            <SectionHeading>Data Retention</SectionHeading>
            <Prose>
              We retain data for the shortest period necessary for each purpose. The table below summarizes our retention schedule by data category.
            </Prose>
            <DataTable
              headers={["Data Category", "Retention Period"]}
              rows={[
                [<strong key="k">Service &amp; connection logs</strong>, "90 days, then automatically purged"],
                [
                  <strong key="k">Call content &amp; transcripts</strong>,
                  "Not retained by default (real-time processing only). Enterprise customers may enable configurable retention via their dashboard.",
                ],
                [
                  <strong key="k">Voice QA samples</strong>,
                  "Retained only while the feature is enabled. Deleted upon opt-out or account closure.",
                ],
                [
                  <strong key="k">Billing &amp; financial records</strong>,
                  "Per applicable financial regulations (typically 7 years)",
                ],
                [
                  <strong key="k">Account information</strong>,
                  "Duration of account, plus 30 days after closure to allow for recovery requests",
                ],
              ]}
            />
          </section>

          {/* 05 — YOUR RIGHTS */}
          <section id="user-rights" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="05" />
            <SectionHeading>Your Rights &amp; Control</SectionHeading>
            <Prose>
              You have meaningful control over your data. The following rights apply to all users of the Converz platform, regardless of where they are located.
            </Prose>
            <BulletList>
              <BulletItem><strong>Access</strong> — you may request a summary of what data we hold about you at any time.</BulletItem>
              <BulletItem><strong>Deletion</strong> — you may request deletion of your account and associated data. Requests are processed within <strong>72 hours</strong> of receipt.</BulletItem>
              <BulletItem><strong>Correction</strong> — you may update or correct inaccurate account information through your dashboard or by contacting us.</BulletItem>
              <BulletItem><strong>Portability</strong> — you may request an export of your account data in a machine-readable format.</BulletItem>
              <BulletItem><strong>Opt-out</strong> — any feature that involves extended data collection (e.g. Voice QA, call logging) requires your active opt-in and can be disabled at any time from your dashboard.</BulletItem>
            </BulletList>
            <Prose>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:privacy@converz.ai" style={{ color: "#C9603A", fontWeight: 500, textDecoration: "none" }}>
                privacy@converz.ai
              </a>
              . We will acknowledge your request within 24 hours and complete it within 72 hours.
            </Prose>
          </section>

          {/* 06 — THIRD PARTIES */}
          <section id="third-parties" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="06" />
            <SectionHeading>Third Parties</SectionHeading>
            <Prose>
              Converz works with a limited set of third-party service providers to operate the platform. We do not sell, rent, or trade your personal data to any third party.
            </Prose>
            <BulletList>
              <BulletItem>
                <strong>Stripe</strong> — payment processing. Stripe&apos;s own{" "}
                <a href="https://stripe.com/privacy" style={{ color: "#C9603A", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: 3 }} target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>{" "}
                governs their data handling. Converz does not receive or store your raw payment card data.
              </BulletItem>
              <BulletItem>
                <strong>Cloud infrastructure providers</strong> — compute and network infrastructure operating under data processing agreements (DPAs) with Converz. These providers have no independent access to your call content.
              </BulletItem>
              <BulletItem>
                <strong>Analytics tools</strong> — aggregated, anonymized platform usage data only. No personally identifiable information is shared.
              </BulletItem>
            </BulletList>
            <Prose>
              Any third party with access to any form of customer data is bound by a Data Processing Agreement (DPA) with Converz, and is prohibited from using that data for their own purposes.
            </Prose>
          </section>

          {/* 07 — SECURITY */}
          <section id="security" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="07" />
            <SectionHeading>Security</SectionHeading>
            <Prose>
              We take the security of your data seriously and implement technical and organizational measures appropriate to the sensitivity of the information we handle.
            </Prose>
            <BulletList>
              <BulletItem>Encryption in transit (TLS 1.2+) and at rest (AES-256)</BulletItem>
              <BulletItem>Strict role-based access controls with least-privilege enforcement</BulletItem>
              <BulletItem>Continuous security monitoring, intrusion detection, and audit logging</BulletItem>
              <BulletItem>Regular penetration testing and vulnerability assessments</BulletItem>
              <BulletItem>Incident response procedures with defined notification timelines</BulletItem>
            </BulletList>

            {/* Compliance badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20 }}>
              <ComplianceBadge
                name="SOC 2 Type II"
                sub="Certified"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EBC9BC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                }
              />
              <ComplianceBadge
                name="HIPAA"
                sub="Compliant"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EBC9BC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                }
              />
              <ComplianceBadge
                name="GDPR"
                sub="Ready"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EBC9BC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                }
              />
            </div>

            <Prose>
              <span style={{ display: "block", marginTop: 20 }}>
                For enterprise customers, Converz is prepared to execute Business Associate Agreements (BAA), Data Processing Agreements (DPA), Non-Disclosure Agreements (NDA), and Service Level Agreements (SLA) as required by your compliance program. Contact{" "}
                <a href="mailto:privacy@converz.ai" style={{ color: "#C9603A", fontWeight: 500, textDecoration: "none" }}>
                  privacy@converz.ai
                </a>{" "}
                to request these documents.
              </span>
            </Prose>
          </section>

          {/* 08 — POLICY UPDATES */}
          <section id="updates" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="08" />
            <SectionHeading>Policy Updates</SectionHeading>
            <Prose>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. When we make material changes, we will:
            </Prose>
            <BulletList>
              <BulletItem>Post the updated policy on this page with a new effective date</BulletItem>
              <BulletItem>Send a notification to the email address associated with your account</BulletItem>
              <BulletItem>Display a prominent notice within the Converz dashboard for at least 14 days after the change</BulletItem>
            </BulletList>
            <Prose>
              Your continued use of the Converz platform after the effective date of a revised policy constitutes your acceptance of the updated terms. If you disagree with any changes, you may close your account and request deletion of your data.
            </Prose>
          </section>

          {/* 09 — CONTACT */}
          <section id="contact" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="09" />
            <SectionHeading>Contact</SectionHeading>
            <Prose>
              If you have questions about this Privacy Policy, want to exercise your data rights, or need to request compliance documentation, please reach out to us directly.
            </Prose>
            <ContactCard
              email="privacy@converz.ai"
              label="Privacy &amp; Compliance"
              desc="We respond within 24 hours. Data deletion requests are completed within 72 hours."
            />
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
