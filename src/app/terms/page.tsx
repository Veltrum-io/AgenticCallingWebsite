import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Converz",
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

function Prose({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p
      style={{
        fontSize: 15.5,
        lineHeight: 1.78,
        color: "#4B5563",
        marginBottom: 16,
        ...style,
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

function BulletItem({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "red";
}) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        fontSize: 15,
        lineHeight: 1.65,
        color: "#4B5563",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: variant === "red" ? "#E57373" : "#D9B3A3",
          flexShrink: 0,
          marginTop: 9,
        }}
      />
      <span>{children}</span>
    </li>
  );
}

function Callout({
  title,
  children,
  variant = "default",
}: {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "warn";
}) {
  const isWarn = variant === "warn";
  return (
    <div
      style={{
        background: isWarn
          ? "linear-gradient(145deg,rgba(235,201,188,.35),rgba(245,241,238,.5))"
          : "linear-gradient(145deg,rgba(243,218,209,.45),rgba(245,241,238,.6))",
        border: isWarn
          ? "1px solid rgba(201,96,58,.2)"
          : "1px solid rgba(217,179,163,.3)",
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
          color: isWarn ? "#9a4a2c" : "#C9603A",
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.72, color: "#374151" }}>{children}</p>
    </div>
  );
}

/* ── Contact card ─────────────────────────────────────────────────────────── */

function ContactCard({
  email,
  label,
  desc,
  icon,
  style,
}: {
  email: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  style?: React.CSSProperties;
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
        ...style,
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
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 650,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "#D9B3A3",
            marginBottom: 5,
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: 16, fontWeight: 550, color: "#111827" }}>{email}</div>
        <div style={{ fontSize: 13.5, color: "#6B7280", marginTop: 4, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </a>
  );
}

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9603A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const HelpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9603A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
  </svg>
);

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function TermsPage() {
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
            Terms of Service
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
              { href: "#scope", label: "Scope" },
              { href: "#license", label: "License Grant" },
              { href: "#prohibited", label: "Prohibited Uses" },
              { href: "#modifications", label: "Modifications" },
              { href: "#ip", label: "Intellectual Property" },
              { href: "#copyright", label: "Copyright Policy" },
              { href: "#disclaimer", label: "Disclaimers" },
              { href: "#liability", label: "Limitation of Liability" },
              { href: "#governing-law", label: "Governing Law" },
              { href: "#arbitration", label: "Arbitration" },
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

          {/* 01 — SCOPE */}
          <section id="scope" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="01" />
            <SectionHeading>Scope</SectionHeading>
            <Prose>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Converz website located at converz.ai (the &ldquo;Website&rdquo;). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, you must not use the Website.
            </Prose>
            <Callout title="Website Terms vs. Services Agreement">
              These Terms apply to Website access only. If you are a Converz platform customer — using our API, voice infrastructure, or any product offering — your use is governed by a separate <strong>Services Agreement</strong> entered into at the time of account creation. In the event of a conflict, the Services Agreement takes precedence for platform customers.
            </Callout>
            <Prose>
              Converz is operated by Converz, Inc. (&ldquo;Converz,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms constitute a legally binding agreement between you (&ldquo;user,&rdquo; &ldquo;you&rdquo;) and Converz.
            </Prose>
          </section>

          {/* 02 — LICENSE GRANT */}
          <section id="license" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="02" />
            <SectionHeading>License Grant</SectionHeading>
            <Prose>
              Subject to your compliance with these Terms, Converz grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Website for your personal, non-commercial viewing purposes only.
            </Prose>
            <Prose>This license does not include:</Prose>
            <BulletList>
              <BulletItem>Any right to resell or commercially exploit the Website or its content</BulletItem>
              <BulletItem>Any right to collect or use product listings, descriptions, or pricing for any commercial purpose</BulletItem>
              <BulletItem>Any right to make derivative uses of the Website or its content</BulletItem>
              <BulletItem>Any right to download or copy account information for the benefit of another merchant or service provider</BulletItem>
              <BulletItem>Any right to use data mining, robots, scraping, or similar data gathering tools</BulletItem>
            </BulletList>
            <Prose>Any unauthorized use of the Website terminates this license immediately and without notice.</Prose>
          </section>

          {/* 03 — PROHIBITED USES */}
          <section id="prohibited" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="03" />
            <SectionHeading>Prohibited Uses</SectionHeading>
            <Prose>You agree not to use the Website in any way that:</Prose>
            <BulletList>
              <BulletItem variant="red">Violates any applicable local, national, or international law or regulation</BulletItem>
              <BulletItem variant="red">Infringes or violates the intellectual property rights or any other rights of anyone else</BulletItem>
              <BulletItem variant="red">Transmits any unsolicited or unauthorized advertising, promotional material, or spam</BulletItem>
              <BulletItem variant="red">Introduces viruses, trojans, worms, logic bombs, or other malicious or technologically harmful material</BulletItem>
              <BulletItem variant="red">Attempts to gain unauthorized access to any part of the Website, the server on which it is stored, or any server, computer, or database connected to the Website</BulletItem>
              <BulletItem variant="red">Attacks or interferes with the Website via a denial-of-service attack or distributed denial-of-service attack</BulletItem>
              <BulletItem variant="red">Scrapes, crawls, or extracts data from the Website using automated means without express prior written consent</BulletItem>
              <BulletItem variant="red">Reverse engineers, decompiles, or disassembles any software component of the Website</BulletItem>
              <BulletItem variant="red">Misrepresents your identity, affiliation, or impersonates any person or organization</BulletItem>
              <BulletItem variant="red">Circumvents, disables, or otherwise interferes with security features of the Website</BulletItem>
            </BulletList>
            <Prose>
              We reserve the right to restrict or terminate your access to the Website at any time, without notice or liability, if we determine that you have violated any of these prohibitions.
            </Prose>
          </section>

          {/* 04 — MODIFICATIONS */}
          <section id="modifications" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="04" />
            <SectionHeading>Modifications</SectionHeading>
            <Prose>
              Converz reserves the right to revise these Terms at any time and at our sole discretion. When we make changes, we will update the &ldquo;Effective Date&rdquo; at the top of this page.
            </Prose>
            <Prose>
              Your continued use of the Website after any modification to these Terms constitutes your acceptance of the revised Terms. If you do not agree with the revised Terms, your sole remedy is to stop using the Website.
            </Prose>
            <Prose>
              We may also modify, suspend, or discontinue any aspect of the Website at any time, including the availability of any feature, database, or content. Converz will not be liable to you or to any third party for any modification, suspension, or discontinuance of the Website.
            </Prose>
          </section>

          {/* 05 — INTELLECTUAL PROPERTY */}
          <section id="ip" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="05" />
            <SectionHeading>Intellectual Property</SectionHeading>
            <Prose>
              The Website and all of its content — including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software — are the property of Converz or its content suppliers and are protected by applicable intellectual property laws, including copyright, trademark, and trade secret laws.
            </Prose>
            <Prose>
              The Converz name, the Converz logo, and all related product and service names, design marks, and slogans are trademarks of Converz, Inc. You are not permitted to use these marks without the prior written consent of Converz.
            </Prose>
            <BulletList>
              <BulletItem>You may not copy, reproduce, republish, upload, post, transmit, or distribute Website content without express prior written permission from Converz</BulletItem>
              <BulletItem>You may not modify or create derivative works based on Website content</BulletItem>
              <BulletItem>You may not use Website content for any commercial purpose or for any public display, whether commercial or non-commercial</BulletItem>
              <BulletItem>Data mining, scraping, or extraction of Website content for training AI models or machine learning systems is expressly prohibited</BulletItem>
            </BulletList>
            <Prose>
              Any feedback, comments, or suggestions you provide regarding the Website may be used by Converz without any obligation to compensate you and without restriction.
            </Prose>
          </section>

          {/* 06 — COPYRIGHT POLICY */}
          <section id="copyright" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="06" />
            <SectionHeading>Copyright Policy</SectionHeading>
            <Prose>
              Converz respects the intellectual property rights of others and expects users of the Website to do the same. We respond to properly submitted notices of alleged copyright infringement that comply with applicable law.
            </Prose>
            <Prose>
              If you believe that any content on the Website infringes your copyright, please submit a notice to our designated copyright agent containing the following information:
            </Prose>
            <BulletList>
              <BulletItem>A physical or electronic signature of the copyright owner or an authorized representative</BulletItem>
              <BulletItem>Identification of the copyrighted work claimed to have been infringed</BulletItem>
              <BulletItem>Identification of the material that is claimed to be infringing, with sufficient detail for Converz to locate it on the Website</BulletItem>
              <BulletItem>Your contact information, including name, address, telephone number, and email address</BulletItem>
              <BulletItem>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner, its agent, or the law</BulletItem>
              <BulletItem>A statement that the information in the notice is accurate, and under penalty of perjury, that you are the copyright owner or authorized to act on their behalf</BulletItem>
            </BulletList>
            <Prose>
              Copyright infringement notices should be submitted to{" "}
              <a href="mailto:legal@converz.ai" style={{ color: "#C9603A", fontWeight: 500, textDecoration: "none" }}>
                legal@converz.ai
              </a>
              . We may share your notice with the party alleged to have infringed your copyright.
            </Prose>
          </section>

          {/* 07 — DISCLAIMERS */}
          <section id="disclaimer" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="07" />
            <SectionHeading>Disclaimers</SectionHeading>
            <Callout title="As-Is Disclaimer" variant="warn">
              THE WEBSITE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW.
            </Callout>
            <Prose>
              Converz expressly disclaims all warranties, whether express, implied, statutory, or otherwise, including without limitation any implied warranties of:
            </Prose>
            <BulletList>
              <BulletItem><strong>Merchantability</strong> — we make no warranty that the Website will meet your requirements</BulletItem>
              <BulletItem><strong>Fitness for a particular purpose</strong> — we make no warranty that the Website will be suitable for any specific use case</BulletItem>
              <BulletItem><strong>Accuracy or reliability</strong> — we make no warranty that information on the Website is accurate, complete, or current</BulletItem>
              <BulletItem><strong>Uninterrupted access</strong> — we make no warranty that the Website will be available at all times or free from errors, bugs, or security vulnerabilities</BulletItem>
              <BulletItem><strong>Non-infringement</strong> — we make no warranty that use of the Website will not infringe the rights of third parties</BulletItem>
            </BulletList>
            <Prose>
              No advice or information, whether oral or written, obtained from Converz or through the Website shall create any warranty not expressly stated in these Terms.
            </Prose>
          </section>

          {/* 08 — LIMITATION OF LIABILITY */}
          <section id="liability" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="08" />
            <SectionHeading>Limitation of Liability</SectionHeading>
            <Prose>
              To the fullest extent permitted by applicable law, Converz, its affiliates, officers, directors, employees, agents, suppliers, and licensors shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages — including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses — arising out of or in connection with your use of, or inability to use, the Website.
            </Prose>
            <Callout title="Liability cap" variant="warn">
              To the extent that any liability is found despite the above limitations, Converz&apos;s total cumulative liability to you for all claims arising out of or relating to your use of the Website shall not exceed <strong>$100 USD</strong>.
            </Callout>
            <Prose>
              Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitation may not apply to you in full. In such jurisdictions, our liability shall be limited to the maximum extent permitted by law.
            </Prose>
          </section>

          {/* 09 — GOVERNING LAW */}
          <section id="governing-law" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="09" />
            <SectionHeading>Governing Law</SectionHeading>
            <Prose>
              These Terms and any dispute or claim arising out of or in connection with them (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict-of-laws principles.
            </Prose>
            <Prose>
              Subject to the arbitration clause below, you agree to submit to the exclusive personal jurisdiction of the state and federal courts located in San Francisco County, California for the resolution of any disputes not subject to arbitration.
            </Prose>
            <Prose>
              The United Nations Convention on Contracts for the International Sale of Goods does not apply to these Terms.
            </Prose>
          </section>

          {/* 10 — ARBITRATION */}
          <section id="arbitration" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="10" />
            <SectionHeading>Arbitration &amp; Class Action Waiver</SectionHeading>
            <Prose>
              Please read this section carefully. It affects your legal rights by requiring individual arbitration of disputes and waiving your right to a jury trial or class action.
            </Prose>
            <Prose>
              <strong>Agreement to Arbitrate.</strong> You and Converz agree that any dispute, claim, or controversy arising out of or relating to these Terms or the use of the Website — excluding claims for injunctive or other equitable relief — will be settled by binding individual arbitration administered by National Arbitration and Mediation (NAM) in accordance with its rules, rather than in court.
            </Prose>
            <BulletList>
              <BulletItem>Arbitration shall be conducted on an individual basis; class, consolidated, or representative proceedings are not permitted</BulletItem>
              <BulletItem>The arbitrator&apos;s decision shall be final and binding, and judgment may be entered in any court of competent jurisdiction</BulletItem>
              <BulletItem>Arbitration fees and costs will be governed by the NAM rules</BulletItem>
              <BulletItem>You waive your right to a trial by jury and your right to participate in any class action</BulletItem>
            </BulletList>
            <Callout title="Opt-out right">
              You have the right to opt out of this arbitration agreement. To do so, you must notify us in writing within <strong>30 days</strong> of first accepting these Terms by emailing{" "}
              <a href="mailto:legal@converz.ai" style={{ color: "#C9603A", fontWeight: 500, textDecoration: "none" }}>
                legal@converz.ai
              </a>{" "}
              with the subject line &ldquo;Arbitration Opt-Out&rdquo; and stating your name and your intent to opt out. If you opt out, all other Terms still apply.
            </Callout>
            <Prose>
              Nothing in this section prevents either party from seeking emergency injunctive relief from a court of competent jurisdiction to prevent irreparable harm pending arbitration.
            </Prose>
          </section>

          {/* 11 — CONTACT */}
          <section id="contact" style={{ scrollMarginTop: 104 }}>
            <SectionNum n="11" />
            <SectionHeading>Contact</SectionHeading>
            <Prose>
              If you have any questions about these Terms of Service or need to submit a legal notice, please contact us at the addresses below.
            </Prose>
            <ContactCard
              email="legal@converz.ai"
              label="Legal Inquiries"
              desc="For copyright notices, arbitration opt-outs, and legal correspondence."
              icon={<EmailIcon />}
            />
            <ContactCard
              email="help@converz.ai"
              label="General Support"
              desc="For general questions about the Website or our services."
              icon={<HelpIcon />}
              style={{ marginTop: 12 }}
            />
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
