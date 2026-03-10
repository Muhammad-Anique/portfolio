"use client";
import { useState, useEffect } from "react";

const css = `
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Segoe UI',system-ui,sans-serif;background:#f1f5f9;color:#1e293b;line-height:1.65;}

#login-screen{
  position:fixed;inset:0;z-index:9999;
  display:flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,#0a0f1e 0%,#0d1b3e 50%,#0a1628 100%);
  overflow:hidden;
  transition:opacity .5s ease;
}
#login-screen::before{
  content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse at 20% 50%,rgba(59,130,246,.15) 0%,transparent 60%),
             radial-gradient(ellipse at 80% 20%,rgba(16,185,129,.1) 0%,transparent 50%);
  animation:bgPulse 8s ease-in-out infinite alternate;
}
@keyframes bgPulse{0%{opacity:.6;}100%{opacity:1;}}
.login-card{
  position:relative;z-index:1;
  width:100%;max-width:420px;margin:20px;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.1);
  border-radius:20px;
  padding:48px 40px 40px;
  backdrop-filter:blur(24px);
  box-shadow:0 32px 80px rgba(0,0,0,.5);
}
.login-logo{
  width:52px;height:52px;border-radius:14px;
  background:linear-gradient(135deg,#1d4ed8,#0ea5e9);
  display:flex;align-items:center;justify-content:center;
  font-size:24px;margin:0 auto 24px;
  box-shadow:0 8px 24px rgba(14,165,233,.4);
}
.login-card h1{text-align:center;color:#f8fafc;font-size:22px;font-weight:700;margin-bottom:6px;}
.login-card .subtitle{text-align:center;color:rgba(255,255,255,.45);font-size:13px;margin-bottom:32px;}
.field{margin-bottom:18px;}
.field label{display:block;font-size:12px;font-weight:600;letter-spacing:.06em;color:rgba(255,255,255,.5);margin-bottom:8px;text-transform:uppercase;}
.field input{
  width:100%;padding:13px 16px;
  background:rgba(255,255,255,.07);
  border:1px solid rgba(255,255,255,.12);
  border-radius:10px;color:#f1f5f9;font-size:14.5px;outline:none;
  transition:border-color .2s,background .2s;
}
.field input:focus{border-color:rgba(59,130,246,.6);background:rgba(255,255,255,.1);}
.field input::placeholder{color:rgba(255,255,255,.25);}
.login-btn{
  width:100%;padding:14px;margin-top:6px;
  background:linear-gradient(135deg,#1d4ed8,#0ea5e9);
  border:none;border-radius:10px;color:#fff;
  font-size:15px;font-weight:700;cursor:pointer;
  letter-spacing:.03em;
  transition:opacity .2s,transform .1s;
  box-shadow:0 6px 20px rgba(14,165,233,.35);
}
.login-btn:hover{opacity:.92;transform:translateY(-1px);}
.login-btn:active{transform:translateY(0);}
.login-error{
  display:none;text-align:center;color:#f87171;font-size:13px;
  margin-top:14px;padding:10px;background:rgba(248,113,113,.1);
  border-radius:8px;border:1px solid rgba(248,113,113,.2);
}
.login-footer{text-align:center;margin-top:28px;color:rgba(255,255,255,.25);font-size:12px;}
.shake{animation:shake .3s ease;}
@keyframes shake{0%,100%{transform:translateX(0);}25%{transform:translateX(-8px);}75%{transform:translateX(8px);}50%{transform:translateX(-5px);}87%{transform:translateX(5px);}}

.proposal-wrap{opacity:0;transition:opacity .6s ease;}
.proposal-wrap.visible{opacity:1;}

.nav{
  position:sticky;top:0;z-index:100;
  background:rgba(10,15,30,.95);backdrop-filter:blur(12px);
  border-bottom:1px solid rgba(255,255,255,.08);
  padding:0 40px;display:flex;align-items:center;
  justify-content:space-between;height:58px;
}
.nav-brand{color:#f8fafc;font-weight:700;font-size:15px;display:flex;align-items:center;gap:10px;}
.nav-dot{width:8px;height:8px;border-radius:50%;background:#10b981;}
.nav-links{display:flex;gap:6px;}
.nav-links a{color:rgba(255,255,255,.55);font-size:13px;padding:6px 12px;border-radius:6px;text-decoration:none;transition:color .2s,background .2s;}
.nav-links a:hover{color:#fff;background:rgba(255,255,255,.08);}

.hero{background:linear-gradient(135deg,#0a0f1e 0%,#0d1b3e 60%,#0f2452 100%);padding:72px 48px 60px;color:#fff;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;top:-40%;right:-10%;width:600px;height:600px;background:radial-gradient(circle,rgba(59,130,246,.12) 0%,transparent 70%);}
.hero::after{content:'';position:absolute;bottom:-30%;left:5%;width:400px;height:400px;background:radial-gradient(circle,rgba(16,185,129,.08) 0%,transparent 70%);}
.hero-inner{position:relative;z-index:1;max-width:900px;margin:0 auto;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(59,130,246,.15);border:1px solid rgba(59,130,246,.3);color:#93c5fd;padding:6px 14px;border-radius:99px;font-size:12px;font-weight:600;letter-spacing:.05em;margin-bottom:24px;}
.hero h1{font-size:34px;font-weight:800;line-height:1.25;margin-bottom:16px;}
.hero h1 span{background:linear-gradient(90deg,#60a5fa,#34d399);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-meta{display:flex;flex-wrap:wrap;gap:20px;margin-top:28px;padding-top:24px;border-top:1px solid rgba(255,255,255,.1);}
.meta-item{font-size:13px;color:rgba(255,255,255,.55);}
.meta-item strong{color:rgba(255,255,255,.9);display:block;font-size:14px;margin-bottom:2px;}

.content{max-width:960px;margin:0 auto;padding:48px 28px 80px;}
.section{margin-bottom:60px;}
.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#0ea5e9;margin-bottom:6px;}
h2{font-size:22px;font-weight:800;color:#0a0f1e;margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid #e2e8f0;}

.alert{border-left:4px solid #3b82f6;background:#eff6ff;padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:20px;font-size:14px;color:#1e3a8a;}
.alert.green{border-color:#10b981;background:#f0fdf4;color:#14532d;}
.alert.orange{border-color:#f59e0b;background:#fffbeb;color:#78350f;}
.alert strong{display:block;margin-bottom:3px;font-size:14.5px;}

.gap-grid{display:grid;gap:12px;margin-bottom:24px;}
.gap-item{display:grid;grid-template-columns:28px 1fr auto;align-items:start;gap:12px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;}
.gap-num{width:28px;height:28px;border-radius:50%;background:#0a0f1e;color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;}
.gap-text h4{font-size:14px;font-weight:700;color:#0a0f1e;margin-bottom:3px;}
.gap-text p{font-size:13px;color:#64748b;margin:0;}
.gap-badge{white-space:nowrap;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:700;}
.gb-green{background:#dcfce7;color:#15803d;}
.gb-blue{background:#dbeafe;color:#1d4ed8;}
.gb-purple{background:#f3e8ff;color:#7e22ce;}

.qa{margin-bottom:12px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;}
.qa-q{background:#f8fafc;padding:12px 18px;font-weight:700;font-size:14px;color:#0a0f1e;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;gap:10px;}
.qa-num{width:24px;height:24px;border-radius:50%;background:#1d4ed8;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.qa-a{padding:12px 18px;font-size:14px;color:#475569;}

.phase-header{background:linear-gradient(135deg,#0a0f1e,#1e3a8a);color:#fff;padding:16px 22px;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;align-items:center;margin-top:28px;}
.phase-header h3{font-size:15px;font-weight:700;}
.phase-header span{font-size:13px;opacity:.7;}
.phase-header.p2{background:linear-gradient(135deg,#1e1b4b,#4338ca);}
.ms-table{width:100%;border-collapse:collapse;background:#fff;border-radius:0 0 12px 12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.07);}
.ms-table thead tr{background:#1e293b;color:#fff;}
.ms-table thead th{padding:11px 14px;text-align:left;font-size:12px;font-weight:600;letter-spacing:.04em;}
.ms-table tbody tr{border-bottom:1px solid #f1f5f9;transition:background .15s;}
.ms-table tbody tr:hover{background:#f8fafc;}
.ms-table td{padding:13px 14px;vertical-align:top;font-size:13.5px;}
.ms-num{font-weight:800;color:#1d4ed8;white-space:nowrap;font-size:14px;}
.ms-num.p2c{color:#7c3aed;}
.ms-name{font-weight:700;color:#0a0f1e;}
.ms-name small{display:block;font-weight:400;color:#94a3b8;font-size:12px;margin-top:2px;}
.ms-price{font-weight:800;color:#059669;text-align:right;white-space:nowrap;font-size:14px;}
.ms-price.p2c{color:#7c3aed;}
.ms-price.cond{color:#d97706;}
.deliverables{color:#475569;font-size:13px;line-height:1.55;list-style:none;padding:0;}
.deliverables li{margin-bottom:3px;padding-left:14px;position:relative;}
.deliverables li::before{content:'·';position:absolute;left:2px;color:#94a3b8;}
.total-row td{background:#f0fdf4;font-weight:700;border-top:3px solid #0a0f1e;}
.total-row .ms-price{font-size:16px;}
.total-row.p2t td{background:#f5f3ff;}
.total-row.p2t .ms-price{color:#7c3aed;}
.grand-row td{background:#0a0f1e;color:#fff;font-weight:800;}
.grand-row .ms-price{color:#34d399;font-size:18px;}
.phase2-row td{background:#eff6ff;}
.badge{display:inline-block;padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700;}
.bd-blue{background:#dbeafe;color:#1d4ed8;}
.bd-green{background:#dcfce7;color:#15803d;}
.bd-orange{background:#fef3c7;color:#b45309;}
.bd-purple{background:#f3e8ff;color:#7e22ce;}

.q-list{list-style:none;padding:0;}
.q-list li{padding:11px 14px 11px 42px;position:relative;background:#fff;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:8px;font-size:14px;color:#334155;}
.q-list li .qn{position:absolute;left:12px;top:11px;background:#1d4ed8;color:#fff;width:22px;height:22px;border-radius:50%;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;}

.footer{background:linear-gradient(135deg,#0a0f1e,#0d1b3e);color:rgba(255,255,255,.55);text-align:center;padding:36px 20px;font-size:13px;}
.footer strong{color:#fff;}
.footer-grid{display:flex;justify-content:center;flex-wrap:wrap;gap:32px;margin-bottom:24px;}
.footer-item strong{color:#93c5fd;display:block;font-size:12px;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;}
.footer-item span{color:#e2e8f0;font-size:15px;font-weight:600;}

@media(max-width:640px){
  .hero{padding:48px 20px 40px;}.hero h1{font-size:24px;}
  .content{padding:32px 16px 60px;}.nav{padding:0 16px;}
  .ms-table{font-size:12px;}.ms-table td,.ms-table th{padding:9px 10px;}
  .phase-header{flex-direction:column;gap:6px;}
  .gap-item{grid-template-columns:28px 1fr;}.gap-badge{display:none;}
}
`;

export default function AntonioProposal() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      setTimeout(() => setVisible(true), 50);
    }
  }, [loggedIn]);

  function doLogin() {
    if (username === "antolio" && password === "djalma123456") {
      setLoggedIn(true);
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {!loggedIn && (
        <div id="login-screen">
          <div className={`login-card${shake ? " shake" : ""}`}>
            <div className="login-logo">📋</div>
            <h1>Proposal Portal</h1>
            <p className="subtitle">Djalma Diagnósticos · Restricted Access</p>
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && doLogin()}
                autoComplete="off"
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && doLogin()}
                autoComplete="off"
              />
            </div>
            <button className="login-btn" onClick={doLogin}>
              Access Proposal →
            </button>
            {error && (
              <div className="login-error" style={{ display: "block" }}>
                Incorrect credentials. Please try again.
              </div>
            )}
            <p className="login-footer">
              Confidential — For authorized recipients only
            </p>
          </div>
        </div>
      )}

      {loggedIn && (
        <div className={`proposal-wrap${visible ? " visible" : ""}`}>
          {/* NAV */}
          <nav className="nav">
            <div className="nav-brand">
              <span className="nav-dot" />
              Muhammad Anique — Technical Proposal
            </div>
            <div className="nav-links">
              <a href="#scope">Scope</a>
              <a href="#milestones">Milestones</a>
              <a href="#questions">Questions</a>
            </div>
          </nav>

          {/* HERO */}
          <div className="hero">
            <div className="hero-inner">
              <div className="hero-badge">⚡ Updated Proposal — Full Scope Revision</div>
              <h1>
                Zoho CRM + n8n + WhatsApp
                <br />
                <span>Full Stack Clinical Automation</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,.65)", fontSize: 15, maxWidth: 580 }}>
                Revised to cover 100% of briefing scope including Sofia AI core,
                dashboards, complementary modules, and all 17 patches.
                Fixed-price · Milestone-based · Phases 1 & 2.
              </p>
              <div className="hero-meta">
                {[
                  ["Client", "Dr. Antonio Djalma · NOVVA Medical"],
                  ["Briefing", "v5.5-F2 · 09 Mar 2026"],
                  ["Scope", "Phase 1 + Phase 2 (Full)"],
                  ["Contract", "Fixed-price milestones only"],
                  ["Availability", "Start within 3 business days"],
                ].map(([k, v]) => (
                  <div className="meta-item" key={k}>
                    <strong>{k}</strong>
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="content">
            {/* GAP RESPONSE */}
            <div className="section" id="scope">
              <div className="section-label">Scope Gap Response</div>
              <h2>Addressing Your 5 Missing Items</h2>
              <div className="alert orange">
                <strong>Dr. Antonio — thank you for the detailed gap analysis.</strong>
                You are correct. My original proposal was Phase 1 only and did not
                cover the AI agent core, dashboards, complementary modules, or patches.
                Below is exactly where each item lives in the revised milestone structure.
              </div>
              <div className="gap-grid">
                {[
                  {
                    n: 1,
                    title: "AI Conversational Agent Core (Sofia)",
                    desc: "1,560-line prompt · LLM Router 3-tier with circuit breaker · 5 governance gates pre-LLM · post-LLM guardrails · 4 confidence zones · 15 intents · 5 memory types · fallback to templates",
                    badge: "→ M11 Phase 2",
                    bc: "gb-purple",
                  },
                  {
                    n: 2,
                    title: "Dashboards",
                    desc: "6 SQL views · Executive Dashboard D9 · Operational Dashboard D10 · Financial Dashboards F1–F5 · 22 KPIs · automated alerts",
                    badge: "→ M12 Phase 2",
                    bc: "gb-blue",
                  },
                  {
                    n: 3,
                    title: "Complementary Modules (13.4–13.11)",
                    desc: "Longitudinal Engine (D-15/D-7) · 13 Clinical Playbooks · Cross-sell Engine · Operational Presence (L1–L4 modes) · Voucher Engine (7 anti-fraud patterns) · Anatomopathology subflow",
                    badge: "→ M8 Phase 1",
                    bc: "gb-green",
                  },
                  {
                    n: 4,
                    title: "17 Patches",
                    desc: "Callback (43K) · On-call (66K) · Messaging infrastructure (46K) · Refund · Off-hours · 12 additional patches distributed across scope",
                    badge: "→ M9 Phase 1",
                    bc: "gb-green",
                  },
                  {
                    n: 5,
                    title: "Role-Based Walkthrough Videos",
                    desc: "Screen-recorded walkthroughs for L1 (Physician), L2 (Coordinator), L3 (Secretary), L4 (Sofia) — each showing the system from their role's perspective",
                    badge: "→ M10 Phase 1",
                    bc: "gb-green",
                  },
                ].map((g) => (
                  <div className="gap-item" key={g.n}>
                    <div className="gap-num">{g.n}</div>
                    <div className="gap-text">
                      <h4>{g.title}</h4>
                      <p>{g.desc}</p>
                    </div>
                    <div>
                      <span className={`gap-badge ${g.bc}`}>{g.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7 ANSWERS */}
            <div className="section">
              <div className="section-label">Application Requirements</div>
              <h2>7 Required Points — Confirmed</h2>
              {[
                ["Zoho CRM Experience", "Built implementations with 140+ custom fields, multi-stage Blueprints, Deluge validation rules, 8+ scheduled functions, and 4 custom modules — directly matching your pipeline, data model, and automation requirements."],
                ["n8n Self-Hosted", "20+ workflows on self-hosted n8n. Built multi-channel webhook routers with OAuth2 CRM write-back, retry/DLQ logic, mTLS banking auth, and structured correlation_id logging — matching your 5-workflow modular architecture."],
                ["WhatsApp / Messaging", "Delivered integrations on Evolution API (Baileys engine — your exact gateway). Handled templates, 3-tone conversational profiles, anti-loop escalation, quiet hours, LGPD consent, and human handoff flows."],
                ["Financial / Payment API", "Integrated banking REST APIs with webhook confirmation, TXID matching, anti-duplication, and CRM auto-update. Configured mTLS certificates for banking APIs — directly applicable to Banco Inter."],
                ["Milestone Structure", "10 milestones for Phase 1 + 4 milestones for Phase 2 = 14 total. See the full table below."],
                ["Fixed Price", "Confirmed. Fixed-price only. No hourly, no retainer. Payment on triple evidence: screenshot + config export + real log with correlation_id. No exceptions."],
                ["Availability", "Start within 3 business days. 35–40 hours/week. Portuguese (BR) literate — for your 100+ canonical documents and clinic team communication."],
              ].map(([q, a], i) => (
                <div className="qa" key={i}>
                  <div className="qa-q">
                    <div className="qa-num">{i + 1}</div>
                    {q}
                  </div>
                  <div className="qa-a">{a}</div>
                </div>
              ))}
            </div>

            {/* MILESTONES */}
            <div className="section" id="milestones">
              <div className="section-label">Pricing</div>
              <h2>Full Scope — Fixed-Price Milestones</h2>
              <div className="alert">
                <strong>All scope gaps are now included.</strong>
                Sofia AI core (M11), Dashboards (M12), Complementary Modules (M8),
                17 Patches (M9), and role-based walkthrough videos (M10) are all
                explicitly scoped and priced below.
              </div>

              {/* PHASE 1 */}
              <div className="phase-header">
                <h3>⚙️ Phase 1 — CRM Operational MVP</h3>
                <span>Milestones M1 – M10</span>
              </div>
              <table className="ms-table">
                <thead>
                  <tr>
                    <th style={{ width: 46 }}>#</th>
                    <th style={{ width: 160 }}>Milestone</th>
                    <th>Key Deliverables</th>
                    <th style={{ width: 72 }}>Days</th>
                    <th style={{ width: 96 }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      num: "M1", name: "CRM Foundation", badge: "bd-blue", badgeText: "Pipeline + Fields", days: 10, price: "$2,000",
                      items: ["Pipeline E1–E6 with exact stage names", "~80 core Deal + 35 Contact fields (ENT-01)", "Blueprints — all 5 stage transition guards", "Validation Rules VR-01–VR-04 (Deluge, Portuguese errors)", "3 profiles: NOVO / CLIENTE / INDESEJADO", "Stage ↔ sofia_state bijection via Deluge", "Sofia_Config module (kill switches, singleton)"],
                    },
                    {
                      num: "M2", name: "CRM Data Model", badge: "bd-blue", badgeText: "Modules + DNA", days: 10, price: "$2,200",
                      items: ["Remaining 100+ fields (Hook Pack, clinical, financial)", "5 Custom Modules: Achados (21 fields), Transações Bancárias, LOG_DECISOES (23 fields), EXCEPTIONS, Sofia_Config", "DNA Score formula in Deluge (6 aggravating + 4 mitigating factors)", "7 operational flags with activation rules", "Blacklist policy: TEMPORARIO auto-expire + PERMANENTE (L1 only)", "Products module: exam catalog with prices"],
                    },
                    {
                      num: "M3", name: "CRM Automation", badge: "bd-blue", badgeText: "11 Functions", days: 8, price: "$1,500",
                      items: ["11 Deluge Scheduled Functions (daily/hourly/weekly)", "Timeout enforcement: E2→E1 (24h standard / 2h urgent)", "E4 medical timeout → Task + regression to E1", "No-show detection, slot expiry, DNA recalculation", "Voucher expiry, SEM_RESPOSTA auto-flag at 48h", "LOG_DECISOES auto-populated (SHA-256 hash per event)"],
                    },
                    {
                      num: "M4", name: "n8n Architecture", badge: "bd-blue", badgeText: "5 Workflows", days: 10, price: "$1,800",
                      items: ["WF_INGEST: webhook receiver, payload validation, message_id dedup + 2s debounce", "WF_CLASSIFY: intent detection, CRM context load, conversation state", "WF_DECIDE: deterministic business-rules engine (n8n decides, never LLM)", "WF_RESPOND: response composition + WhatsApp dispatch", "WF_ERROR: DLQ, Zoho Cliq alerts, fallback responses", "All 5 credentials configured · correlation_id propagation · Health cron 15min · Retry 3x + DLQ"],
                    },
                    {
                      num: "M5", name: "WhatsApp Engine", badge: "bd-blue", badgeText: "13+ Templates", days: 10, price: "$2,000",
                      items: ["Evolution API (Baileys) integration, [SOFIA_AI] tag on all automated messages", "13+ templates: greeting, exam prep (by exam type), QR delivery, confirmation, D-1 reminder, NPS, no-show, voucher, retention, handoff, quiet hours, callback", "3 conversational tones (NOVO / CLIENTE / INDESEJADO)", "Anti-loop: 3 unrecognized → escalate. Handoff: 4h → coordinator Task", "Quiet hours 20:00–07:00 Recife (UTC−3) · LGPD consent flow"],
                    },
                    {
                      num: "M6", name: "Banco Inter PIX", badge: "bd-blue", badgeText: "P1–P8 Hierarchy", days: 10, price: "$2,000",
                      items: ["mTLS certificate setup on VPS (OAuth2 + .CRT + .KEY)", "PIX QR code generation (TXID = Deal_ID, CNPJ chave)", "Webhook receiver for pix.recebido events", "3-level matching: L1 exact TXID → L2 fuzzy → L3 manual queue", "Signal hierarchy P1–P8 fully implemented", "Anti-duplication · Daily reconciliation cron 03:00 Recife"],
                    },
                    {
                      num: "M7", name: "Sisclinic Integration", badge: "bd-orange", badgeText: "CONDITIONAL", days: 8, price: "$1,500", cond: true,
                      items: ["JWT token auth (POST /auth/gera-token-paciente)", "Patient lookup by CPF with dashes · New patient registration", "Slot availability search · Slot lock + appointment creation", "D+0 constraint: auto-try D+1, notify patient, urgent Task", "Cancel + rebook flow · Polling cron for exam/report status", "Double-booking prevention + sisclinic_handle write-back"],
                    },
                    {
                      num: "M8", name: "Complementary Modules", badge: "bd-purple", badgeText: "13.4–13.11", days: 14, price: "$2,800",
                      items: ["13.4 Longitudinal Engine: D-15/D-7 follow-up, Achados lifecycle, Regras_Followup table", "13.5 Clinical Playbooks: 13 canonical playbooks, periodicity tables by clinical classification", "13.6 Cross-sell Engine: suggestion logic based on findings, single-suggest rule", "13.7 Operational Presence: secretary status, autonomous vs assisted mode per L1–L4", "13.10 Voucher Engine: generation, 7 anti-fraud patterns, 1:1 consumption, 180-day validity", "13.11 Anatomopathology Subflow: biopsy tracking, AP result workflow, critical finding relay"],
                    },
                    {
                      num: "M9", name: "17 Patches", badge: "bd-purple", badgeText: "500K+ scope", days: 12, price: "$2,200",
                      items: ["Callback patch (43K): callback scheduling, retry logic, Sofia callback flow", "On-call patch (66K): sobreaviso rules, emergency scheduling, on-call payment rules", "Messaging infra patch (46K): template versioning, delivery tracking, read receipts", "Refund patch: PIX reversal flow, Credit Note in Books, Deal status update", "Off-hours patch: extended quiet hours logic, emergency override, morning queue", "12 additional patches distributed per specification document"],
                    },
                    {
                      num: "M10", name: "Hardening + UAT", badge: "bd-green", badgeText: "Final Phase 1", days: 8, price: "$1,800",
                      items: ["58+ E2E test scenarios executed (full pipeline lead → closure)", "Edge cases: timeout, no-show, double-booking, payment failure, D+0", "Permission hardening — 4 roles (L1 / L2 / L3 / L4 Sofia)", "Kill switch verification — each component disabled independently", "Rollback validation <2 min per deployment", "Role walkthrough videos: L1, L2, L3, L4 — each narrated, full lifecycle", "Architecture documentation package delivered"],
                    },
                  ].map((m) => (
                    <tr key={m.num}>
                      <td className="ms-num">{m.num}</td>
                      <td>
                        <span className="ms-name">
                          {m.name}
                          <small>
                            <span className={`badge ${m.badge}`}>{m.badgeText}</span>
                          </small>
                        </span>
                      </td>
                      <td>
                        <ul className="deliverables">
                          {m.items.map((it, j) => <li key={j}>{it}</li>)}
                        </ul>
                      </td>
                      <td>{m.days}</td>
                      <td className={`ms-price${m.cond ? " cond" : ""}`}>{m.price}</td>
                    </tr>
                  ))}
                  <tr className="total-row">
                    <td colSpan={3} style={{ textAlign: "right", paddingRight: 16, color: "#065f46" }}>Phase 1 Total — without M7</td>
                    <td><strong>~92 days</strong></td>
                    <td className="ms-price">$18,300</td>
                  </tr>
                  <tr className="total-row">
                    <td colSpan={3} style={{ textAlign: "right", paddingRight: 16, color: "#065f46" }}>Phase 1 Total — with M7 (if Sisclinic validates)</td>
                    <td><strong>~100 days</strong></td>
                    <td className="ms-price">$19,800</td>
                  </tr>
                </tbody>
              </table>

              {/* PHASE 2 */}
              <div className="phase-header p2" style={{ marginTop: 32 }}>
                <h3>🤖 Phase 2 — Intelligence Layer</h3>
                <span>Milestones M11 – M14</span>
              </div>
              <table className="ms-table">
                <thead>
                  <tr>
                    <th style={{ width: 46 }}>#</th>
                    <th style={{ width: 160 }}>Milestone</th>
                    <th>Key Deliverables</th>
                    <th style={{ width: 72 }}>Days</th>
                    <th style={{ width: 96 }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      num: "M11", name: "Sofia AI Core", badgeText: "Heaviest Milestone", days: 18, price: "$3,800",
                      items: ["1,560-line production prompt deployed as AI Agent node in n8n", "LLM Router 3-tier with circuit breaker: DeepSeek (5s) → OpenAI (8s) → Claude → template fallback (never silence)", "5 governance gates pre-LLM: intent blocker, clinical guard, profanity filter, CPF/phone masking, prompt injection blocker", "Post-LLM guardrails: tone compliance check + hallucinated medical advice detection", "4 confidence zones: HIGH (auto-respond) / MEDIUM (respond + flag) / LOW (template fallback) / CRITICAL (immediate human escalation)", "15 intents fully classified and routed", "5 memory types: short context (2000 chars), long context (3000 chars), rotating trace, session state, deal state", "Context JSON builder: profile + stage + DNA Score + last 5 turns + pending actions + active flags", "LLM NEVER writes to CRM, NEVER advances pipeline, NEVER makes autonomous decisions"],
                    },
                    {
                      num: "M12", name: "Dashboards", badgeText: "D9, D10, F1–F5", days: 10, price: "$2,000",
                      items: ["6 SQL views in Zoho Analytics", "Executive Dashboard D9: revenue, pipeline performance, conversion rates, retention KPIs", "Operational Dashboard D10: scheduling efficiency, no-show rates, DNA Score distribution, Sofia performance", "Financial Dashboards F1–F5: revenue by source/period/exam type, expense tracking, cash flow projection, DRE auto-generated", "22 KPIs + 5 automated alerts · Requires 30+ days of Phase 1 operational data"],
                    },
                    {
                      num: "M13", name: "Zoho Books Automation", badgeText: "Financial Engine", days: 14, price: "$2,800",
                      items: ["F1 Foundation: 33-account chart of accounts, 60-item service catalog, 5 payer sources, 3 bank accounts, 48 expense categories, 5 cost centers", "F2 PIX → Books Bridge: extend PIX webhook to register in Books; anti-duplication across 3 layers; <30s target", "F3 CRM ↔ Books Sync: Deal reaches E3 → Invoice draft auto-created; daily reconciliation; Credit Notes for reversals", "F4 Sofia-Fin: AI-assisted expense classification, anomaly detection, WhatsApp revenue summary for physician", "8 anti-double-billing rules between CRM scope (Area 1) and Books scope (Area 2)"],
                    },
                    {
                      num: "M14", name: "Phase 2 Consolidation", badgeText: "Final UAT", days: 8, price: "$1,500",
                      items: ["Full regression across Phases 1 + 2", "Performance optimization — SLA <30s verification end-to-end", "Phase 2 role walkthrough videos (Sofia LLM flows, Books reconciliation)", "Operational readiness checklist · Complete documentation package"],
                    },
                  ].map((m) => (
                    <tr className="phase2-row" key={m.num}>
                      <td className="ms-num p2c">{m.num}</td>
                      <td>
                        <span className="ms-name">
                          {m.name}
                          <small><span className="badge bd-purple">{m.badgeText}</span></small>
                        </span>
                      </td>
                      <td>
                        <ul className="deliverables">
                          {m.items.map((it, j) => <li key={j}>{it}</li>)}
                        </ul>
                      </td>
                      <td>{m.days}</td>
                      <td className="ms-price p2c">{m.price}</td>
                    </tr>
                  ))}
                  <tr className="total-row p2t">
                    <td colSpan={3} style={{ textAlign: "right", paddingRight: 16 }}>Phase 2 Total</td>
                    <td><strong>~50 days</strong></td>
                    <td className="ms-price" style={{ color: "#7c3aed" }}>$10,100</td>
                  </tr>
                  <tr className="grand-row">
                    <td colSpan={3} style={{ textAlign: "right", paddingRight: 16 }}>Grand Total — Phase 1 + Phase 2 (without Sisclinic)</td>
                    <td><strong style={{ color: "#fff" }}>~142 days</strong></td>
                    <td className="ms-price">$28,400</td>
                  </tr>
                  <tr className="grand-row">
                    <td colSpan={3} style={{ textAlign: "right", paddingRight: 16 }}>Grand Total — Phase 1 + Phase 2 (with Sisclinic M7)</td>
                    <td><strong style={{ color: "#fff" }}>~150 days</strong></td>
                    <td className="ms-price">$29,900</td>
                  </tr>
                </tbody>
              </table>

              <div className="alert green" style={{ marginTop: 20 }}>
                <strong>Payment Terms</strong>
                Milestone-based release via Upwork. No payment before acceptance criteria are met.
                Triple evidence required: screenshot + config export + real log with correlation_id.
                Rollback procedure documented and tested (&lt;2 min) before every production deployment.
              </div>
            </div>

            {/* QUESTIONS */}
            <div className="section" id="questions">
              <div className="section-label">Due Diligence</div>
              <h2>6 Questions Before Contract</h2>
              <ol className="q-list">
                {[
                  ["Sisclinic scope status:", "Briefing v5.5-F2 marks it \"REFERENCIA FUTURA — fora do escopo atual\" but your Upwork message says the API is now documented and working. Which is current — is M7 active scope for Phase 1, or does it remain conditional?"],
                  ["Staging environment:", "Is there a dedicated Zoho CRM sandbox/developer org, or will staging be a test pipeline within the production org?"],
                  ["Banco Inter certificates:", "Are the mTLS certificates (.CRT + .KEY) already issued by the bank? This can take 3–10 business days and should not fall inside M6 scope."],
                  ["Evolution API version:", "Which version is installed on the VPS? V1 and V2 have different webhook payload formats — affects WF_INGEST design in M4."],
                  ["17 patches document:", "Can I receive the patch specifications file before signing M9? I want to confirm total scope and that there are no hidden integrations that would change M9 pricing."],
                  ["Milestone review SLA:", "After I submit a milestone with triple evidence, how many business days for your approval or revision request? I plan around 5 business days per cycle."],
                ].map(([q, a], i) => (
                  <li key={i}>
                    <span className="qn">{i + 1}</span>
                    <strong>{q}</strong> {a}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* FOOTER */}
          <div className="footer">
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div className="footer-grid">
                {[
                  ["Developer", "Muhammad Anique"],
                  ["Phase 1 Total", "$18,300 – $19,800"],
                  ["Phase 2 Total", "$10,100"],
                  ["Grand Total", "$28,400 – $29,900"],
                  ["Timeline", "~9 months"],
                ].map(([k, v]) => (
                  <div className="footer-item" key={k}>
                    <strong>{k}</strong>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
              <p style={{ opacity: 0.45, fontSize: 12 }}>
                Confidential · Briefing ref: BRIEFING_CRM_v5_5_F2_PT · MNGS-77 Manager Systems · March 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
