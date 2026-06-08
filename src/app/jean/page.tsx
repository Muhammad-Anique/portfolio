"use client";
import { useState } from "react";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Manrope','Segoe UI',system-ui,sans-serif;background:#f1f5f9;color:#1e293b;line-height:1.65;}

/* ── LOGIN ── */
#login-screen{
  position:fixed;inset:0;z-index:9999;
  display:flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,#0a0f1e 0%,#0d1b3e 50%,#0a1628 100%);
  overflow:hidden;
}
#login-screen::before{
  content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse at 20% 50%,rgba(59,130,246,.15) 0%,transparent 60%),
             radial-gradient(ellipse at 80% 20%,rgba(16,185,129,.1) 0%,transparent 50%);
  animation:bgPulse 8s ease-in-out infinite alternate;
}
@keyframes bgPulse{0%{opacity:.6;}100%{opacity:1;}}
.login-card{
  position:relative;z-index:1;width:100%;max-width:420px;margin:20px;
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);
  border-radius:20px;padding:48px 40px 40px;
  backdrop-filter:blur(24px);box-shadow:0 32px 80px rgba(0,0,0,.5);
}
.login-logo{
  width:52px;height:52px;border-radius:14px;
  background:linear-gradient(135deg,#1d4ed8,#0ea5e9);
  display:flex;align-items:center;justify-content:center;
  font-size:24px;margin:0 auto 24px;box-shadow:0 8px 24px rgba(14,165,233,.4);
}
.login-card h1{text-align:center;color:#f8fafc;font-size:22px;font-weight:700;margin-bottom:6px;}
.login-card .subtitle{text-align:center;color:rgba(255,255,255,.45);font-size:13px;margin-bottom:32px;}
.field{margin-bottom:18px;}
.field label{display:block;font-size:12px;font-weight:600;letter-spacing:.06em;color:rgba(255,255,255,.5);margin-bottom:8px;text-transform:uppercase;}
.field input{
  width:100%;padding:13px 16px;background:rgba(255,255,255,.07);
  border:1px solid rgba(255,255,255,.12);border-radius:10px;color:#f1f5f9;font-size:14.5px;outline:none;
  transition:border-color .2s,background .2s;
}
.field input:focus{border-color:rgba(59,130,246,.6);background:rgba(255,255,255,.1);}
.field input::placeholder{color:rgba(255,255,255,.25);}
.login-btn{
  width:100%;padding:14px;margin-top:6px;
  background:linear-gradient(135deg,#1d4ed8,#0ea5e9);
  border:none;border-radius:10px;color:#fff;font-size:15px;font-weight:700;cursor:pointer;
  letter-spacing:.03em;transition:opacity .2s,transform .1s;
  box-shadow:0 6px 20px rgba(14,165,233,.35);
}
.login-btn:hover{opacity:.92;transform:translateY(-1px);}
.login-btn:active{transform:translateY(0);}
.login-error{
  text-align:center;color:#f87171;font-size:13px;margin-top:14px;
  padding:10px;background:rgba(248,113,113,.1);border-radius:8px;border:1px solid rgba(248,113,113,.2);
}
.login-footer{text-align:center;margin-top:28px;color:rgba(255,255,255,.25);font-size:12px;}
.shake{animation:shake .35s ease;}
@keyframes shake{0%,100%{transform:translateX(0);}20%{transform:translateX(-8px);}40%{transform:translateX(8px);}60%{transform:translateX(-5px);}80%{transform:translateX(5px);}}

/* ── MAIN WRAP ── */
.pw{position:fixed;inset:0;background:#f1f5f9;color:#1e293b;overflow-y:auto;overflow-x:hidden;line-height:1.65;font-size:14px;}
.pw.hidden{display:none;}

/* ── NAV ── */
.nav{
  position:sticky;top:0;z-index:100;
  background:rgba(10,15,30,.95);backdrop-filter:blur(12px);
  border-bottom:1px solid rgba(255,255,255,.08);
  padding:0 40px;display:flex;align-items:center;justify-content:space-between;height:58px;
}
.nav-brand{color:#f8fafc;font-weight:700;font-size:15px;display:flex;align-items:center;gap:10px;}
.nav-dot{width:8px;height:8px;border-radius:50%;background:#10b981;}
.nav-links{display:flex;gap:6px;overflow-x:auto;}
.nav-links a{color:rgba(255,255,255,.55);font-size:13px;padding:6px 12px;border-radius:6px;text-decoration:none;white-space:nowrap;transition:color .2s,background .2s;}
.nav-links a:hover{color:#fff;background:rgba(255,255,255,.08);}

/* ── HERO ── */
.hero{background:linear-gradient(135deg,#0a0f1e 0%,#0d1b3e 60%,#0f2452 100%);padding:72px 48px 60px;color:#fff;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;top:-40%;right:-10%;width:600px;height:600px;background:radial-gradient(circle,rgba(59,130,246,.12) 0%,transparent 70%);}
.hero::after{content:'';position:absolute;bottom:-30%;left:5%;width:400px;height:400px;background:radial-gradient(circle,rgba(16,185,129,.08) 0%,transparent 70%);}
.hero-inner{position:relative;z-index:1;max-width:900px;margin:0 auto;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.3);color:#6ee7b7;padding:6px 14px;border-radius:99px;font-size:12px;font-weight:600;letter-spacing:.05em;margin-bottom:24px;}
.hero h1{font-size:34px;font-weight:800;line-height:1.25;margin-bottom:16px;}
.hero h1 span{background:linear-gradient(90deg,#60a5fa,#34d399);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-meta{display:flex;flex-wrap:wrap;gap:20px;margin-top:28px;padding-top:24px;border-top:1px solid rgba(255,255,255,.1);}
.meta-item{font-size:13px;color:rgba(255,255,255,.55);}
.meta-item strong{color:rgba(255,255,255,.9);display:block;font-size:14px;margin-bottom:2px;}

/* ── CONTENT ── */
.content{max-width:960px;margin:0 auto;padding:48px 28px 80px;}
.section{margin-bottom:60px;}
.section-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#0ea5e9;margin-bottom:6px;}
h2{font-size:22px;font-weight:800;color:#0a0f1e;margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid #e2e8f0;}

/* ── ALERTS ── */
.alert{border-left:4px solid #3b82f6;background:#eff6ff;padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:20px;font-size:14px;color:#1e3a8a;}
.alert.green{border-color:#10b981;background:#f0fdf4;color:#14532d;}
.alert.orange{border-color:#f59e0b;background:#fffbeb;color:#78350f;}
.alert strong{display:block;margin-bottom:3px;font-size:14.5px;}

/* ── Q&A ── */
.qa{margin-bottom:12px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;}
.qa-q{background:#f8fafc;padding:12px 18px;font-weight:700;font-size:14px;color:#0a0f1e;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;gap:10px;}
.qa-num{width:24px;height:24px;border-radius:50%;background:#1d4ed8;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.qa-a{padding:12px 18px;font-size:14px;color:#475569;}

/* ── GAP ITEMS ── */
.gap-grid{display:grid;gap:12px;margin-bottom:24px;}
.gap-item{display:grid;grid-template-columns:28px 1fr auto;align-items:start;gap:12px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;}
.gap-num{width:28px;height:28px;border-radius:50%;background:#0a0f1e;color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;}
.gap-text h4{font-size:14px;font-weight:700;color:#0a0f1e;margin-bottom:3px;}
.gap-text p{font-size:13px;color:#64748b;margin:0;}
.gap-badge{white-space:nowrap;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:700;}
.gb-green{background:#dcfce7;color:#15803d;}
.gb-blue{background:#dbeafe;color:#1d4ed8;}

/* ── MILESTONE TABLE ── */
.phase-header{background:linear-gradient(135deg,#0a0f1e,#1e3a8a);color:#fff;padding:16px 22px;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;align-items:center;margin-top:28px;}
.phase-header h3{font-size:15px;font-weight:700;}
.phase-header span{font-size:13px;opacity:.7;}
.ms-table{width:100%;border-collapse:collapse;background:#fff;border-radius:0 0 12px 12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.07);}
.ms-table thead tr{background:#1e293b;color:#fff;}
.ms-table thead th{padding:11px 14px;text-align:left;font-size:12px;font-weight:600;letter-spacing:.04em;}
.ms-table tbody tr{border-bottom:1px solid #f1f5f9;transition:background .15s;}
.ms-table tbody tr:hover{background:#f8fafc;}
.ms-table td{padding:13px 14px;vertical-align:top;font-size:13.5px;}
.ms-num{font-weight:800;color:#1d4ed8;white-space:nowrap;font-size:14px;}
.ms-name{font-weight:700;color:#0a0f1e;}
.ms-name small{display:block;font-weight:400;color:#94a3b8;font-size:12px;margin-top:2px;}
.ms-price{font-weight:800;color:#059669;text-align:right;white-space:nowrap;font-size:14px;}
.ms-table .deliverables{color:#475569;font-size:13px;line-height:1.55;padding:0;margin:0;}
.ms-table .deliverables li{margin-bottom:3px;list-style:none;padding-left:14px;position:relative;}
.ms-table .deliverables li::before{content:'·';position:absolute;left:2px;color:#94a3b8;}
.total-row td{background:#f0fdf4;font-weight:700;border-top:3px solid #0a0f1e!important;}
.total-row .ms-price{font-size:16px;color:#059669;}
.grand-row td{background:#0a0f1e;color:#fff!important;font-weight:800;}
.grand-row .ms-price{color:#34d399!important;font-size:18px;}

/* ── BADGES ── */
.badge{display:inline-block;padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700;}
.bd-blue{background:#dbeafe;color:#1d4ed8;}
.bd-green{background:#dcfce7;color:#15803d;}

/* ── DELIVERABLE CARDS ── */
.deliv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;margin-bottom:24px;}
.deliv-card{background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px 18px;display:flex;align-items:flex-start;gap:12px;}
.deliv-icon{width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#1d4ed8,#0ea5e9);display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0;color:#fff;}
.deliv-card h4{font-size:13.5px;font-weight:700;color:#0a0f1e;margin-bottom:3px;}
.deliv-card p{font-size:12.5px;color:#64748b;margin:0;line-height:1.5;}

/* ── TECH GRID ── */
.tech-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px;margin-bottom:20px;}
.tech-chip{background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:10px 14px;font-size:13px;font-weight:600;color:#0a0f1e;text-align:center;}
.tech-chip span{display:block;font-size:11px;font-weight:400;color:#94a3b8;margin-top:2px;}

/* ── SAVINGS BOX ── */
.savings-box{background:linear-gradient(135deg,#f0fdf4,#ecfdf5);border:2px solid #10b981;border-radius:12px;padding:20px 24px;margin:20px 0;}
.savings-box h4{color:#065f46;font-size:16px;margin-bottom:10px;}
.savings-box ul{list-style:none;padding:0;}
.savings-box li{padding:6px 0;font-size:14px;color:#047857;padding-left:20px;position:relative;}
.savings-box li::before{content:'>';position:absolute;left:4px;color:#10b981;font-weight:700;}

/* ── FUTURE PRICING ── */
.future-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:16px 0;}
.future-card{background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;}
.future-card .price{font-size:22px;font-weight:800;color:#1d4ed8;margin-bottom:4px;}
.future-card .label{font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;}
.future-card p{font-size:12.5px;color:#64748b;margin:0;}

/* ── FOOTER ── */
.footer{background:linear-gradient(135deg,#0a0f1e,#0d1b3e);color:rgba(255,255,255,.55);text-align:center;padding:36px 20px;font-size:13px;}
.footer strong{color:#fff;}
.footer-grid{display:flex;justify-content:center;flex-wrap:wrap;gap:32px;margin-bottom:24px;}
.footer-item strong{color:#93c5fd;display:block;font-size:12px;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;}
.footer-item span{color:#e2e8f0;font-size:15px;font-weight:600;}

@media(max-width:640px){
  .hero{padding:48px 20px 40px;}
  .hero h1{font-size:24px;}
  .content{padding:32px 16px 60px;}
  .nav{padding:0 16px;}
  .ms-table{font-size:12px;}
  .ms-table td,.ms-table th{padding:9px 10px;}
  .phase-header{flex-direction:column;gap:6px;}
  .deliv-grid{grid-template-columns:1fr;}
  .nav-links{display:none;}
}
`;

export default function JeanProposal() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  function doLogin() {
    if (username === "jean" && password === "jean2026!") {
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
            <div className="login-logo">🎤</div>
            <h1>Proposal Portal</h1>
            <p className="subtitle">AI Voice Receptionist · Healthcare Automation · Restricted Access</p>
            <div className="field">
              <label>Username</label>
              <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={(e) => e.key === "Enter" && doLogin()} autoComplete="off" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && doLogin()} autoComplete="off" />
            </div>
            <button className="login-btn" onClick={doLogin}>Access Proposal</button>
            {error && <div className="login-error">Incorrect credentials. Please try again.</div>}
            <p className="login-footer">Confidential — For authorized recipients only</p>
          </div>
        </div>
      )}

      {loggedIn && (
        <div className="pw">

          {/* NAV */}
          <nav className="nav">
            <div className="nav-brand"><span className="nav-dot" /> Muhammad Anique — AI Voice Receptionist Proposal</div>
            <div className="nav-links">
              <a href="#overview">Overview</a>
              <a href="#platform">Platform</a>
              <a href="#milestones">Milestones</a>
              <a href="#deliverables">Deliverables</a>
              <a href="#next">Next Steps</a>
            </div>
          </nav>

          {/* HERO */}
          <div className="hero">
            <div className="hero-inner">
              <div className="hero-badge">Proposal v1 — Healthcare AI Voice Automation · June 2026</div>
              <h1>Healthcare AI Voice Receptionist<br /><span>Complete Build &amp; Deployment — $2,000</span></h1>
              <p style={{ color: "rgba(255,255,255,.65)", fontSize: 15, maxWidth: 680 }}>
                A production-ready AI Voice Receptionist built on VAPI for medical practices across the United States. Handles inbound calls, after-hours coverage, message taking, intelligent call routing, SMS follow-ups, and CRM integration — designed as a scalable template for rapid multi-client deployment.
              </p>
              <div className="hero-meta">
                <div className="meta-item"><strong>Platform</strong>VAPI AI (Recommended)</div>
                <div className="meta-item"><strong>Total Price</strong>$2,000 Fixed</div>
                <div className="meta-item"><strong>Timeline</strong>4 Weeks (1 Month)</div>
                <div className="meta-item"><strong>Phases</strong>4 Milestone Phases</div>
                <div className="meta-item"><strong>Contract</strong>Fixed-Price Milestones</div>
                <div className="meta-item"><strong>Start</strong>Within 3 Business Days</div>
              </div>
            </div>
          </div>

          <div className="content">

            {/* OVERVIEW */}
            <div className="section" id="overview">
              <div className="section-label">Proposal Opening</div>
              <h2>Confirmation &amp; Overview</h2>

              <div className="alert green">
                <strong>"I have built AI voice receptionists before."</strong>
                I have personally designed and deployed AI voice receptionist systems for service-based businesses, including healthcare-adjacent workflows involving appointment handling, caller triage, message capture, and CRM integration via GoHighLevel and Make.com. The system I will build for you is grounded in real production experience — not theory.
              </div>

              <div className="qa">
                <div className="qa-q"><div className="qa-num">A</div> Who This Proposal Is For</div>
                <div className="qa-a">
                  <p style={{ marginBottom: 10 }}>You are a healthcare operations leader launching a medical AI automation company. Your model is clear: you handle business development, sales, and client relationships — I build the technical infrastructure. This proposal delivers a <strong>scalable AI Voice Receptionist template</strong> tailored specifically for medical practices, built to be duplicated and customized rapidly as you onboard new clients.</p>
                  <p>Version 1 does not require EMR integration. The focus is a reliable, professional, HIPAA-aware voice agent that works from day one and can be replicated across your client portfolio.</p>
                </div>
              </div>

              <div className="qa">
                <div className="qa-q"><div className="qa-num">B</div> Why VAPI — Platform Recommendation</div>
                <div className="qa-a">
                  <p style={{ marginBottom: 10 }}><strong>Short answer: VAPI is the right platform for your business model.</strong></p>
                  <p style={{ marginBottom: 8 }}><strong>1. Most mature API ecosystem.</strong> VAPI offers the deepest integration surface: custom LLM functions, webhook events for every call stage, real-time tool calls mid-conversation, and full conversation transcripts. Retell and Bland both trail VAPI in API maturity for complex healthcare workflows.</p>
                  <p style={{ marginBottom: 8 }}><strong>2. Built for multi-client deployment.</strong> VAPI's assistant API is designed around reusable assistant templates. One base configuration, duplicated and parameterized per client — exactly matching your scale-out business model. Retell requires more manual configuration per client.</p>
                  <p style={{ marginBottom: 8 }}><strong>3. Native Twilio &amp; GoHighLevel support.</strong> VAPI plugs directly into Twilio for phone number management and has documented GoHighLevel integration patterns, eliminating custom middleware complexity.</p>
                  <p style={{ marginBottom: 8 }}><strong>4. Healthcare-appropriate voice quality.</strong> VAPI's ElevenLabs and PlayHT voice options produce the professional, calm tone medical patients expect. The latency (&lt;800ms average) is acceptable for medical office calls.</p>
                  <p><strong>5. Cost model fits your business.</strong> VAPI charges per minute of voice usage, with no setup fee per assistant. As you add clients, your cost scales proportionally with usage — not with a per-seat license that hurts you before clients generate revenue.</p>
                </div>
              </div>

              <div className="qa">
                <div className="qa-q"><div className="qa-num">C</div> Healthcare Experience &amp; Workflow Knowledge</div>
                <div className="qa-a">
                  <p style={{ marginBottom: 10 }}>I understand the operational reality of a medical practice: front desk volume, after-hours anxiety, urgent call triage, appointment confirmation loops, insurance verification inquiries, and the patient experience expectations that differ from standard service businesses.</p>
                  <p style={{ marginBottom: 8 }}>The call flows I will design reflect real healthcare front desk logic: <strong>identifying urgency level before any routing decision</strong>, never leaving a caller without a clear next step, and maintaining a professional tone calibrated for patients who may be anxious or unwell.</p>
                  <p>While Version 1 does not require EMR integration, the architecture I build will be designed with future EMR connectivity in mind — clean data capture fields, standardized caller information schema, and webhook-ready workflow events that can connect to Epic, athenahealth, or eClinicalWorks in a future phase.</p>
                </div>
              </div>
            </div>

            {/* PLATFORM */}
            <div className="section" id="platform">
              <div className="section-label">Technology</div>
              <h2>Technology Stack</h2>

              <div className="alert">
                <strong>All systems will be built in accounts that you own and control.</strong>
                Every credential, API key, phone number, workflow, and configuration will be set up in your accounts. Upon final payment, you own 100% of all intellectual property: prompts, workflows, automations, documentation, and training materials.
              </div>

              <div className="tech-grid">
                {[
                  ["VAPI AI", "Voice Agent Core"],
                  ["Twilio", "Phone Numbers"],
                  ["GoHighLevel", "CRM Integration"],
                  ["Make.com", "Workflow Automation"],
                  ["Zapier", "Fallback Automation"],
                  ["ElevenLabs", "Voice Synthesis"],
                  ["OpenAI GPT-4o", "LLM Backbone"],
                  ["SMS / Twilio", "Follow-Up Messaging"],
                ].map(([name, role]) => (
                  <div className="tech-chip" key={name}>{name}<span>{role}</span></div>
                ))}
              </div>

              <div className="savings-box">
                <h4>Why This Stack Works for Multi-Client Healthcare Deployment</h4>
                <ul>
                  <li><strong>VAPI + Twilio:</strong> Phone number portability means each client keeps their existing number — no patient re-education required.</li>
                  <li><strong>GoHighLevel:</strong> The dominant CRM for healthcare automation agencies. Your clients likely already have it or will onboard to it.</li>
                  <li><strong>Make.com over native integrations:</strong> A visual automation layer means you can customize workflows for each client without touching code — critical for your non-technical deployment model.</li>
                  <li><strong>VAPI assistant templates:</strong> The entire voice agent is exportable as a JSON template. Deploying for a new client takes 2–4 hours, not 2–4 weeks.</li>
                </ul>
              </div>
            </div>

            {/* MILESTONES */}
            <div className="section" id="milestones">
              <div className="section-label">Pricing &amp; Timeline</div>
              <h2>Fixed-Price Milestones — $2,000 Total / 4 Weeks</h2>

              <div className="alert">
                <strong>Fixed-price, milestone-based release only.</strong>
                No hourly billing. No hidden costs. Payment releases upon your review and acceptance of each milestone. You own all deliverables from the moment of acceptance.
              </div>

              {/* PHASE 1 */}
              <div className="phase-header">
                <h3>Phase 1 — Foundation &amp; VAPI Setup</h3>
                <span>Week 1 · Days 1–7</span>
              </div>
              <table className="ms-table">
                <thead>
                  <tr>
                    <th style={{ width: 50 }}>#</th>
                    <th style={{ width: 180 }}>Milestone</th>
                    <th>Key Deliverables</th>
                    <th style={{ width: 60 }}>Days</th>
                    <th style={{ width: 90 }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ms-num">M1</td>
                    <td><span className="ms-name">VAPI Core Setup<small><span className="badge bd-blue">Agent + Voice + Phone</span></small></span></td>
                    <td>
                      <ul className="deliverables">
                        <li>VAPI account configured in your ownership (API keys, billing set up)</li>
                        <li>Twilio phone number provisioned and linked to VAPI</li>
                        <li>Base assistant created: professional healthcare persona, practice name, greeting flow</li>
                        <li>Voice model selected and tuned (ElevenLabs — warm, calm, professional tone)</li>
                        <li>LLM backbone configured: GPT-4o with healthcare system prompt</li>
                        <li>Business hours detection logic (open / after-hours / holiday routing)</li>
                        <li>Core knowledge base: practice FAQ document ingested (services, location, hours, insurance)</li>
                        <li>Call recording enabled with consent announcement</li>
                      </ul>
                    </td>
                    <td>7</td>
                    <td className="ms-price">$450</td>
                  </tr>
                </tbody>
              </table>

              {/* PHASE 2 */}
              <div className="phase-header" style={{ marginTop: 20 }}>
                <h3>Phase 2 — Call Flow Design &amp; Logic</h3>
                <span>Week 2 · Days 8–14</span>
              </div>
              <table className="ms-table">
                <thead>
                  <tr>
                    <th style={{ width: 50 }}>#</th>
                    <th style={{ width: 180 }}>Milestone</th>
                    <th>Key Deliverables</th>
                    <th style={{ width: 60 }}>Days</th>
                    <th style={{ width: 90 }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ms-num">M2</td>
                    <td><span className="ms-name">Call Flow &amp; Routing<small><span className="badge bd-blue">Triage + Transfer + Messages</span></small></span></td>
                    <td>
                      <ul className="deliverables">
                        <li><strong>Inbound call handling:</strong> greet caller, identify purpose, route appropriately</li>
                        <li><strong>After-hours protocol:</strong> professional message, emergency escalation path, callback capture</li>
                        <li><strong>Urgency detection:</strong> keyword-triggered escalation for chest pain, emergency, urgent — immediate warm transfer to on-call line</li>
                        <li><strong>Common office questions:</strong> directions, hours, insurance accepted, appointment availability, prep instructions</li>
                        <li><strong>Message taking flow:</strong> structured capture of name, DOB, callback number, reason for call, preferred callback time</li>
                        <li><strong>Caller information capture:</strong> full patient info schema (name, phone, reason, urgency level) logged per call</li>
                        <li><strong>Call transfer logic:</strong> warm transfer to front desk staff with caller summary announcement</li>
                        <li><strong>Voicemail fallback:</strong> professional voicemail when staff unavailable or transfer fails</li>
                        <li>Call flow diagram documented (visual flowchart delivered)</li>
                      </ul>
                    </td>
                    <td>7</td>
                    <td className="ms-price">$550</td>
                  </tr>
                </tbody>
              </table>

              {/* PHASE 3 */}
              <div className="phase-header" style={{ marginTop: 20 }}>
                <h3>Phase 3 — Integrations &amp; Automation</h3>
                <span>Week 3 · Days 15–21</span>
              </div>
              <table className="ms-table">
                <thead>
                  <tr>
                    <th style={{ width: 50 }}>#</th>
                    <th style={{ width: 180 }}>Milestone</th>
                    <th>Key Deliverables</th>
                    <th style={{ width: 60 }}>Days</th>
                    <th style={{ width: 90 }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ms-num">M3</td>
                    <td><span className="ms-name">CRM + SMS + Workflows<small><span className="badge bd-blue">GHL + Make.com + Twilio SMS</span></small></span></td>
                    <td>
                      <ul className="deliverables">
                        <li><strong>GoHighLevel CRM integration:</strong> every call automatically creates/updates a contact record with call summary, transcript, and caller data</li>
                        <li><strong>Inbound call webhook:</strong> VAPI end-of-call webhook → Make.com → GoHighLevel contact creation + tag assignment</li>
                        <li><strong>SMS follow-up workflow:</strong> automatic SMS sent post-call with office information, callback confirmation, or requested details</li>
                        <li><strong>After-hours SMS acknowledgment:</strong> immediate SMS to caller confirming message received + expected callback time window</li>
                        <li><strong>Message notification workflow:</strong> new message taken → SMS/email alert to designated staff member with call summary</li>
                        <li><strong>Appointment request capture:</strong> structured appointment request logged in CRM with preferred time, reason, and patient contact details</li>
                        <li><strong>Call transcript logging:</strong> full transcript stored in CRM contact notes per call</li>
                        <li>Make.com scenario documentation (visual + written) delivered</li>
                      </ul>
                    </td>
                    <td>7</td>
                    <td className="ms-price">$650</td>
                  </tr>
                </tbody>
              </table>

              {/* PHASE 4 */}
              <div className="phase-header" style={{ marginTop: 20, background: "linear-gradient(135deg,#065f46,#059669)" }}>
                <h3>Phase 4 — Testing, Documentation &amp; Deployment</h3>
                <span>Week 4 · Days 22–30</span>
              </div>
              <table className="ms-table">
                <thead>
                  <tr>
                    <th style={{ width: 50 }}>#</th>
                    <th style={{ width: 180 }}>Milestone</th>
                    <th>Key Deliverables</th>
                    <th style={{ width: 60 }}>Days</th>
                    <th style={{ width: 90 }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ms-num">M4</td>
                    <td><span className="ms-name">QA, Docs &amp; Handoff<small><span className="badge bd-green">Production Ready</span></small></span></td>
                    <td>
                      <ul className="deliverables">
                        <li><strong>End-to-end call testing:</strong> 20+ test scenarios (routine inquiry, after-hours, emergency, message taking, transfer, FAQ, no-response handling)</li>
                        <li><strong>Edge case validation:</strong> background noise handling, unclear speech fallback, repeated misunderstanding escalation to human</li>
                        <li><strong>VAPI assistant export:</strong> full assistant configuration exported as JSON template for client duplication</li>
                        <li><strong>Make.com scenario export:</strong> all automation blueprints exported and documented</li>
                        <li><strong>Client onboarding playbook:</strong> step-by-step guide to deploy the system for a new healthcare client in under 4 hours</li>
                        <li><strong>Training video — Staff Overview:</strong> how to monitor calls, review transcripts, respond to notifications (screen-recorded, narrated)</li>
                        <li><strong>Training video — Admin Setup:</strong> how to update the knowledge base, adjust hours, modify transfer numbers</li>
                        <li><strong>Prompt engineering documentation:</strong> all system prompts annotated with rationale for future customization</li>
                        <li><strong>Scaling recommendations:</strong> written roadmap for Phase 2 additions (appointment booking API, EMR integration, multi-location routing)</li>
                      </ul>
                    </td>
                    <td>9</td>
                    <td className="ms-price">$350</td>
                  </tr>
                  <tr className="total-row">
                    <td colSpan={3} style={{ textAlign: "right", paddingRight: 16, color: "#065f46" }}>Project Total — Complete Delivery</td>
                    <td><strong>30 days</strong></td>
                    <td className="ms-price">$2,000</td>
                  </tr>
                </tbody>
              </table>

              <table className="ms-table" style={{ marginTop: 2, borderRadius: "0 0 12px 12px" }}>
                <tbody>
                  <tr className="grand-row">
                    <td colSpan={3} style={{ textAlign: "right", paddingRight: 16 }}>Grand Total — Full AI Voice Receptionist System (Production-Ready + Scalable Template)</td>
                    <td style={{ width: 60 }}><strong style={{ color: "#fff" }}>30 days</strong></td>
                    <td style={{ width: 90 }} className="ms-price">$2,000</td>
                  </tr>
                </tbody>
              </table>

              <div className="alert green" style={{ marginTop: 20 }}>
                <strong>Payment Terms</strong>
                Milestone-based payment release. M1: $450 upon VAPI system live with phone answered. M2: $550 upon all call flows tested and call flow diagram delivered. M3: $650 upon CRM integration live, SMS workflows confirmed, and transcripts logging. M4: $350 upon full QA pass, training videos delivered, and all documentation handed over. No payment before acceptance criteria are met.
              </div>
            </div>

            {/* DELIVERABLES */}
            <div className="section" id="deliverables">
              <div className="section-label">What You Receive</div>
              <h2>Complete Deliverables Package</h2>

              <div className="deliv-grid">
                {[
                  ["🎤", "Production Voice Agent", "Fully configured VAPI assistant live on your Twilio number, answering calls professionally from day one."],
                  ["📋", "Call Flow Diagram", "Visual flowchart of every call path — inbound, after-hours, urgent, message taking, and transfer logic."],
                  ["💬", "Optimized Voice Prompts", "Full system prompt library, annotated with rationale. Healthcare tone, urgency detection, FAQ handling."],
                  ["📱", "SMS Follow-Up Workflows", "Automated post-call SMS to callers and staff notifications via Twilio + Make.com."],
                  ["📊", "CRM Integration", "GoHighLevel contact creation, call transcript logging, and appointment request capture per call."],
                  ["☎️", "Call Transfer System", "Warm transfer to front desk with caller summary announcement. Voicemail fallback when unavailable."],
                  ["📚", "Full Documentation", "Technical docs, prompt annotations, Make.com blueprints, and admin guide. All exported and yours."],
                  ["🎬", "Training Videos (×2)", "Staff overview video and admin setup video. Screen-recorded, narrated, ready to share with clients."],
                  ["🚀", "Client Onboarding Playbook", "Step-by-step guide to deploy this system for a new client in under 4 hours. Your business scales with this."],
                  ["📈", "Scaling Roadmap", "Written Phase 2 recommendations: appointment booking API, EMR integration, multi-location routing."],
                ].map(([icon, title, desc]) => (
                  <div className="deliv-card" key={title}>
                    <div className="deliv-icon">{icon}</div>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SCOPE CHECKLIST */}
            <div className="section">
              <div className="section-label">Scope Confirmation</div>
              <h2>All Brief Requirements — Covered</h2>

              <div className="gap-grid">
                {[
                  ["Answer inbound calls professionally", "M1. VAPI agent with healthcare persona, professional greeting, practice name, and warm tone configured.", "M1 ✓", "gb-green"],
                  ["Handle after-hours calls", "M2. Business hours detection, after-hours routing, professional closure message, emergency escalation path.", "M2 ✓", "gb-green"],
                  ["Answer common office questions", "M1. FAQ knowledge base ingested: services, hours, location, insurance, exam prep, parking, referrals.", "M1 ✓", "gb-green"],
                  ["Take messages & capture caller information", "M2. Structured message-taking flow: name, DOB, callback number, reason, urgency, preferred callback time.", "M2 ✓", "gb-green"],
                  ["Route urgent calls appropriately", "M2. Keyword-triggered urgency detection (emergency, chest pain, urgent). Immediate warm transfer to on-call line.", "M2 ✓", "gb-green"],
                  ["Transfer calls to office staff", "M2. Warm transfer with caller summary announcement. Staff unavailable fallback to voicemail.", "M2 ✓", "gb-green"],
                  ["Send SMS follow-up messages", "M3. Automatic SMS post-call, after-hours acknowledgment SMS, staff notification SMS. Via Twilio + Make.com.", "M3 ✓", "gb-green"],
                  ["Integrate with CRM workflows", "M3. GoHighLevel integration: contact creation/update, call transcript notes, appointment request logging, tag assignment.", "M3 ✓", "gb-green"],
                  ["Easily duplicated for future clients", "M4. VAPI assistant JSON template export + client onboarding playbook. New client deployed in under 4 hours.", "M4 ✓", "gb-green"],
                  ["No EMR integration required (V1)", "Confirmed. Architecture is EMR-ready for future phases but Version 1 operates independently.", "Confirmed", "gb-blue"],
                ].map(([title, desc, badge, badgeClass], i) => (
                  <div className="gap-item" key={i}>
                    <div className="gap-num">{i + 1}</div>
                    <div className="gap-text">
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                    <div><span className={`gap-badge ${badgeClass}`}>{badge}</span></div>
                  </div>
                ))}
              </div>
            </div>

            {/* FUTURE PRICING */}
            <div className="section">
              <div className="section-label">Long-Term Partnership</div>
              <h2>Future Client Deployments &amp; Ongoing Support</h2>
              <p style={{ fontSize: 14, color: "#475569", marginBottom: 20 }}>
                This is not a one-time project. As you grow your healthcare automation business, here is how we scale together:
              </p>
              <div className="future-grid">
                {[
                  ["New Client Deploy", "$300", "Deploy the template to a new medical practice. Custom prompts, knowledge base, phone number, CRM integration. ~3–4 hours work."],
                  ["Monthly Retainer", "$500/mo", "Up to 5 client deployments/updates per month, prompt optimization, workflow adjustments, monitoring support."],
                  ["Phase 2 — EMR", "TBD", "Direct appointment booking integration with athenahealth, eClinicalWorks, or similar EMR. Scoped after Phase 1 production data."],
                  ["Hourly Ad-Hoc", "$75/hr", "For one-off customizations, urgent fixes, or platform-specific integrations outside the retainer scope."],
                ].map(([label, price, desc]) => (
                  <div className="future-card" key={label}>
                    <div className="label">{label}</div>
                    <div className="price">{price}</div>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* NEXT STEPS */}
            <div className="section" id="next">
              <div className="section-label">Next Steps</div>
              <h2>Ready to Start Within 3 Business Days</h2>

              <div className="alert green">
                <strong>Three items needed before we begin:</strong>
                <br />1. <strong>Practice details</strong> — Practice name, specialty, services offered, office hours, address, and any existing FAQ content you want ingested into the knowledge base.
                <br />2. <strong>Transfer number(s)</strong> — The phone number(s) the agent should transfer urgent calls and staff notifications to.
                <br />3. <strong>GoHighLevel access</strong> — Sub-account access or API key for CRM integration setup. (Or confirm if you need a new GHL sub-account created.)
                <br /><br />Once these are provided, I will begin M1 within 3 business days. The system will be answering calls professionally within the first week.
              </div>

              <div className="alert orange">
                <strong>What This Partnership Looks Like Long-Term</strong>
                You are building a healthcare AI automation company. My role is to be your invisible technical engine. You close the clients — I build the systems. Every deployment I deliver comes with the documentation and training materials your clients need to feel confident. As your client base grows, your deployment cost per client drops and your margin improves. This $2,000 project is the foundation of that business.
              </div>
            </div>

          </div>

          {/* FOOTER */}
          <div className="footer">
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div className="footer-grid">
                <div className="footer-item"><strong>Developer</strong><span>Muhammad Anique</span></div>
                <div className="footer-item"><strong>Platform</strong><span>VAPI AI</span></div>
                <div className="footer-item"><strong>Timeline</strong><span>4 Weeks</span></div>
                <div className="footer-item"><strong>Fixed Price</strong><span>$2,000</span></div>
                <div className="footer-item"><strong>Start</strong><span>3 Business Days</span></div>
              </div>
              <p style={{ opacity: .45, fontSize: 12 }}>Confidential · AI Voice Receptionist Proposal · Healthcare Automation · June 2026</p>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
