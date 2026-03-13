"use client";
import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════
   NOVVA Medical — Complete Project Bible (Light Theme)
   All content from NOVVA_MEDICAL_COMPLETE_PROJECT_BIBLE.md
   Login-protected proposal for Dr. Antonio Djalma
   ═══════════════════════════════════════════════════════════════════ */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Manrope:wght@200;300;400;500;600;700;800&family=Lato:wght@100;300;400;700;900&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Manrope','Segoe UI',system-ui,-apple-system,sans-serif;}

/* ── LOGIN ── */
#login-screen{
  position:fixed;inset:0;z-index:9999;
  display:flex;align-items:center;justify-content:center;
  background:#0a0a0a;
  overflow:hidden;
}
#login-screen::before{
  content:'';position:absolute;inset:0;
  background:
    radial-gradient(ellipse at 20% 80%,rgba(236,66,15,.12) 0%,transparent 50%),
    radial-gradient(ellipse at 80% 20%,rgba(216,104,29,.08) 0%,transparent 50%),
    radial-gradient(ellipse at 50% 50%,rgba(199,149,115,.06) 0%,transparent 60%);
}
.login-card{
  position:relative;z-index:1;width:100%;max-width:420px;margin:20px;
  background:#141414;border:1px solid #2a2a2a;
  border-radius:24px;padding:48px 40px 40px;
  box-shadow:0 4px 6px -1px rgba(0,0,0,.2),0 20px 50px -12px rgba(0,0,0,.4);
}
.login-logo{
  width:56px;height:56px;border-radius:16px;
  background:linear-gradient(135deg,#EC420F,#d8681d);
  display:flex;align-items:center;justify-content:center;
  font-size:26px;margin:0 auto 28px;box-shadow:0 8px 24px rgba(236,66,15,.3);
}
.login-card h1{text-align:center;color:#f5f5f5;font-size:26px;font-weight:800;margin-bottom:6px;letter-spacing:-.01em;font-family:'Playfair Display',serif;}
.login-card .subtitle{text-align:center;color:#737373;font-size:13px;margin-bottom:36px;font-weight:500;font-family:'Manrope',sans-serif;}
.field{margin-bottom:20px;}
.field label{display:block;font-size:11px;font-weight:700;letter-spacing:.08em;color:#a3a3a3;margin-bottom:8px;text-transform:uppercase;font-family:'Lato',sans-serif;}
.field-input-wrap{position:relative;}
.field input{
  width:100%;padding:14px 16px;background:#1a1a1a;
  border:1.5px solid #2a2a2a;border-radius:12px;color:#f5f5f5;font-size:14.5px;outline:none;
  font-family:'Manrope',sans-serif;
  transition:border-color .2s,background .2s,box-shadow .2s;
}
.field input:focus{border-color:#EC420F;background:#1a1a1a;box-shadow:0 0 0 3px rgba(236,66,15,.15);}
.field input::placeholder{color:#525252;}
.eye-btn{
  position:absolute;right:14px;top:50%;transform:translateY(-50%);
  background:none;border:none;cursor:pointer;padding:4px;
  color:#737373;transition:color .15s;display:flex;align-items:center;
}
.eye-btn:hover{color:#EC420F;}
.eye-btn svg{width:20px;height:20px;}
.login-btn{
  width:100%;padding:15px;margin-top:8px;
  background:linear-gradient(135deg,#EC420F,#d8681d);
  border:none;border-radius:12px;color:#fff;font-size:15px;font-weight:700;cursor:pointer;
  letter-spacing:.02em;transition:all .2s;box-shadow:0 4px 14px rgba(236,66,15,.3);
  font-family:'Manrope',sans-serif;
}
.login-btn:hover{box-shadow:0 8px 24px rgba(236,66,15,.4);transform:translateY(-1px);}
.login-btn:active{transform:translateY(0);box-shadow:0 2px 8px rgba(236,66,15,.2);}
.login-error{
  display:none;text-align:center;color:#ef4444;font-size:13px;margin-top:14px;
  padding:10px 14px;background:rgba(239,68,68,.1);border-radius:10px;border:1px solid rgba(239,68,68,.2);font-weight:500;
}
.login-footer{text-align:center;margin-top:32px;color:#525252;font-size:12px;font-weight:500;}
.login-divider{display:flex;align-items:center;gap:12px;margin:24px 0 4px;color:#404040;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;}
.login-divider::before,.login-divider::after{content:'';flex:1;height:1px;background:#2a2a2a;}
.shake{animation:shake .35s ease;}
@keyframes shake{0%,100%{transform:translateX(0);}20%{transform:translateX(-6px);}40%{transform:translateX(6px);}60%{transform:translateX(-4px);}80%{transform:translateX(4px);}}

/* ── MAIN WRAP ── */
.pw{
  position:fixed;inset:0;z-index:9999;
  background:#fafaf9;color:#1c1917;
  overflow-y:auto;overflow-x:hidden;
  line-height:1.65;font-size:14px;
  font-family:'Manrope',sans-serif;
}
.pw.hidden{display:none;}

/* ── STICKY NAV ── */
.topnav{
  position:sticky;top:0;z-index:100;
  background:rgba(250,250,249,.92);backdrop-filter:blur(12px);
  border-bottom:1px solid #e7e5e4;height:56px;
  display:flex;align-items:center;justify-content:space-between;padding:0 32px;
}
.topnav-brand{font-weight:800;font-size:15px;color:#1c1917;display:flex;align-items:center;gap:10px;font-family:'Playfair Display',serif;}
.topnav-dot{width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#EC420F,#d8681d);}
.topnav-links{display:flex;gap:4px;overflow-x:auto;}
.topnav-links a{
  color:#78716c;font-size:12px;font-weight:600;padding:6px 10px;border-radius:6px;
  text-decoration:none;white-space:nowrap;transition:.15s;font-family:'Lato',sans-serif;
}
.topnav-links a:hover{color:#EC420F;background:rgba(236,66,15,.06);}

/* ── HERO ── */
.hero{
  background:linear-gradient(135deg,#1c1917 0%,#292524 50%,#1c1917 100%);
  padding:64px 40px 56px;color:#fff;position:relative;overflow:hidden;
}
.hero::before{content:'';position:absolute;top:-40%;right:-10%;width:600px;height:600px;background:radial-gradient(circle,rgba(236,66,15,.1) 0%,transparent 70%);}
.hero::after{content:'';position:absolute;bottom:-30%;left:-10%;width:500px;height:500px;background:radial-gradient(circle,rgba(199,149,115,.08) 0%,transparent 70%);}
.hero-inner{position:relative;z-index:1;max-width:920px;margin:0 auto;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(236,66,15,.12);border:1px solid rgba(236,66,15,.25);color:#f9a88a;padding:6px 14px;border-radius:99px;font-size:12px;font-weight:600;letter-spacing:.05em;margin-bottom:20px;font-family:'Lato',sans-serif;}
.hero h1{font-size:42px;font-weight:700;line-height:1.15;margin-bottom:12px;font-family:'Playfair Display',serif;letter-spacing:-.01em;}
.hero h1 span{background:linear-gradient(90deg,#EC420F,#d8681d);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-stats{display:flex;flex-wrap:wrap;gap:28px;margin-top:28px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08);}
.hstat{text-align:center;}
.hstat-val{font-size:28px;font-weight:800;color:#EC420F;font-family:'Lato',sans-serif;}
.hstat-val.green{color:#c79573;}
.hstat-lbl{font-size:10px;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em;margin-top:2px;font-family:'Lato',sans-serif;}

/* ── LAYOUT WITH SIDEBAR ── */
.content-wrap{display:flex;max-width:1200px;margin:0 auto;padding:40px 24px 80px;gap:40px;}
.content{flex:1;min-width:0;}
.sidebar{position:sticky;top:72px;width:220px;max-height:calc(100vh - 90px);overflow-y:auto;flex-shrink:0;padding:16px 0;}
.sidebar::-webkit-scrollbar{width:3px;}
.sidebar::-webkit-scrollbar-thumb{background:#d6d3d1;border-radius:99px;}
.sidebar-title{font-family:'Lato',sans-serif;font-size:14px;font-weight:900;text-transform:uppercase;letter-spacing:.08em;color:#1c1917;margin-bottom:8px;}
.sidebar-bar{width:40%;height:4px;border-radius:99px;background:linear-gradient(to right,#EC420F,#d8681d);margin-bottom:16px;}
.sidebar a{display:flex;align-items:center;gap:8px;padding:5px 10px;margin-bottom:2px;font-size:12.5px;font-weight:500;color:#78716c;text-decoration:none;border-radius:6px;transition:.15s;font-family:'Manrope',sans-serif;border-left:2px solid transparent;}
.sidebar a:hover{color:#EC420F;background:rgba(236,66,15,.04);border-left-color:#EC420F;}
.sidebar a .dot{width:5px;height:5px;border-radius:50%;background:#d6d3d1;flex-shrink:0;transition:.15s;}
.sidebar a:hover .dot{background:#EC420F;}
.sec{margin-bottom:56px;}
.sec-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#EC420F;margin-bottom:4px;font-family:'Lato',sans-serif;}
h2.sec-title{font-size:24px;font-weight:700;color:#1c1917;margin-bottom:16px;padding-bottom:10px;border-bottom:2px solid #e7e5e4;font-family:'Playfair Display',serif;}
h3.sub{font-size:16px;font-weight:700;color:#292524;margin:20px 0 10px;font-family:'Lato',sans-serif;}

/* ── CARDS ── */
.card{
  background:#fff;border:1px solid #e7e5e4;border-radius:12px;
  padding:20px 22px;margin-bottom:14px;
  box-shadow:0 1px 3px rgba(0,0,0,.04);
  transition:box-shadow .2s;
}
.card:hover{box-shadow:0 4px 16px rgba(0,0,0,.07);}
.card-accent{border-left:4px solid #EC420F;}
.card-accent-green{border-left:4px solid #c79573;}
.card-accent-red{border-left:4px solid #ef4444;}
.card-accent-amber{border-left:4px solid #d8681d;}
.card-accent-purple{border-left:4px solid #a16207;}
.card-accent-cyan{border-left:4px solid #c79573;}
.card-accent-slate{border-left:4px solid #78716c;}
.card-title{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px;font-family:'Lato',sans-serif;}
.card-title.blue{color:#EC420F;}
.card-title.green{color:#c79573;}
.card-title.red{color:#dc2626;}
.card-title.amber{color:#d8681d;}
.card-title.purple{color:#a16207;}
.card-title.cyan{color:#c79573;}
.card-title.slate{color:#78716c;}

/* ── GRID ── */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;}

/* ── TABLES ── */
.tbl{width:100%;border-collapse:separate;border-spacing:0;margin-bottom:16px;font-size:13px;border-radius:10px;overflow:hidden;border:1px solid #e7e5e4;font-family:'Manrope',sans-serif;}
.tbl thead tr{background:#fafaf9;}
.tbl thead th{padding:10px 14px;text-align:left;font-weight:700;color:#78716c;font-size:12px;letter-spacing:.03em;border-bottom:2px solid #e7e5e4;font-family:'Lato',sans-serif;}
.tbl tbody tr{border-bottom:1px solid #f5f5f4;transition:background .1s;}
.tbl tbody tr:hover{background:#fafaf9;}
.tbl tbody tr:last-child td{border-bottom:none;}
.tbl td{padding:10px 14px;vertical-align:top;border-bottom:1px solid #f5f5f4;color:#44403c;}
.tbl td:first-child{font-weight:600;color:#1c1917;}
.tbl .highlight-row td{background:rgba(236,66,15,.04);font-weight:700;}
.tbl .total-row td{background:rgba(199,149,115,.08);font-weight:800;border-top:2px solid #1c1917;}

/* ── BADGES ── */
.badge{display:inline-block;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:700;font-family:'Lato',sans-serif;}
.badge-blue{background:rgba(236,66,15,.1);color:#EC420F;}
.badge-green{background:rgba(199,149,115,.15);color:#92400e;}
.badge-red{background:#fee2e2;color:#dc2626;}
.badge-amber{background:rgba(216,104,29,.1);color:#d8681d;}
.badge-purple{background:rgba(161,98,7,.1);color:#a16207;}
.badge-cyan{background:rgba(199,149,115,.12);color:#92400e;}
.badge-slate{background:#f5f5f4;color:#78716c;}

/* ── BULLET LIST ── */
.blist{list-style:none;padding:0;margin:0;}
.blist li{padding:4px 0 4px 16px;position:relative;font-size:13px;color:#44403c;line-height:1.55;font-family:'Manrope',sans-serif;}
.blist li::before{content:'';position:absolute;left:0;top:11px;width:6px;height:6px;border-radius:50%;background:#EC420F;}
.blist.green li::before{background:#c79573;}
.blist.red li::before{background:#ef4444;}
.blist.amber li::before{background:#d8681d;}
.blist.purple li::before{background:#a16207;}

/* ── ALERT ── */
.alert{border-left:4px solid #EC420F;background:rgba(236,66,15,.04);padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:16px;font-size:14px;color:#7c2d12;}
.alert.green{border-color:#c79573;background:rgba(199,149,115,.08);color:#78350f;}
.alert.amber{border-color:#d8681d;background:rgba(216,104,29,.06);color:#78350f;}
.alert.red{border-color:#ef4444;background:#fef2f2;color:#7f1d1d;}
.alert strong{display:block;margin-bottom:3px;font-family:'Lato',sans-serif;}

/* ── CODE BLOCK ── */
.codeblock{background:#1c1917;color:#e7e5e4;padding:16px 20px;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:12px;line-height:1.7;overflow-x:auto;margin-bottom:16px;white-space:pre;border:1px solid #292524;}

/* ── PIPELINE VISUAL ── */
.pipe{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:20px;}
.pipe-stage{
  flex:1;min-width:100px;background:#fff;border:2px solid #e7e5e4;border-radius:10px;
  padding:12px 8px;text-align:center;transition:.2s;
}
.pipe-stage:hover{border-color:#EC420F;box-shadow:0 2px 12px rgba(236,66,15,.12);}
.pipe-num{font-size:11px;font-weight:800;color:#EC420F;letter-spacing:.1em;font-family:'Lato',sans-serif;}
.pipe-name{font-size:13px;font-weight:700;color:#1c1917;margin-top:2px;font-family:'Manrope',sans-serif;}
.pipe-desc{font-size:10px;color:#a8a29e;margin-top:2px;}
.pipe-arrow{display:flex;align-items:center;color:#a8a29e;font-size:18px;font-weight:700;}

/* ── MILESTONE ── */
.ms-bar{
  display:flex;align-items:center;gap:14px;padding:14px 18px;
  background:#fff;border:1px solid #e7e5e4;border-radius:12px;margin-bottom:10px;
  box-shadow:0 1px 3px rgba(0,0,0,.04);transition:box-shadow .15s;
}
.ms-bar:hover{box-shadow:0 4px 16px rgba(0,0,0,.08);}
.ms-icon{
  width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;
  font-size:14px;font-weight:800;color:#fff;flex-shrink:0;
}
.ms-info{flex:1;}
.ms-name{font-size:14px;font-weight:700;color:#1c1917;font-family:'Manrope',sans-serif;}
.ms-days{font-size:12px;color:#a8a29e;}
.ms-price{font-size:18px;font-weight:800;color:#c79573;font-family:'Lato',sans-serif;}

/* ── QA ── */
.qa{margin-bottom:10px;background:#fff;border:1px solid #e7e5e4;border-radius:10px;overflow:hidden;}
.qa-q{background:#fafaf9;padding:12px 16px;font-weight:700;font-size:14px;color:#1c1917;border-bottom:1px solid #e7e5e4;display:flex;align-items:center;gap:10px;font-family:'Manrope',sans-serif;}
.qa-num{width:24px;height:24px;border-radius:50%;background:#EC420F;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.qa-a{padding:12px 16px;font-size:13.5px;color:#57534e;line-height:1.65;}

/* ── TECH CARD ── */
.tech-card{
  background:#fff;border:1px solid #e7e5e4;border-radius:12px;padding:20px 18px;
  border-top:4px solid #EC420F;transition:transform .15s,box-shadow .15s;
}
.tech-card:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.08);}
.tech-icon{font-size:24px;margin-bottom:8px;}
.tech-name{font-size:15px;font-weight:700;color:#1c1917;font-family:'Manrope',sans-serif;}
.tech-role{font-size:12px;font-weight:600;margin-bottom:6px;font-family:'Lato',sans-serif;}
.tech-desc{font-size:12px;color:#78716c;line-height:1.5;}

/* ── FOOTER ── */
.foot{
  background:linear-gradient(135deg,#1c1917,#292524);color:rgba(255,255,255,.55);
  text-align:center;padding:40px 24px;font-size:13px;
}
.foot strong{color:#fff;}
.foot-grid{display:flex;justify-content:center;flex-wrap:wrap;gap:32px;margin-bottom:24px;}
.foot-item strong{color:#EC420F;display:block;font-size:11px;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;font-family:'Lato',sans-serif;}
.foot-item span{color:#e7e5e4;font-size:15px;font-weight:600;}

/* ── RESPONSIVE ── */
@media(max-width:1024px){
  .sidebar{display:none;}
  .content-wrap{padding:28px 14px 60px;}
}
@media(max-width:768px){
  .g2,.g3{grid-template-columns:1fr;}
  .hero{padding:40px 20px 36px;}.hero h1{font-size:28px;}
  .topnav{padding:0 14px;height:50px;}
  .topnav-links{display:none;}
  .pipe{flex-direction:column;}.pipe-arrow{transform:rotate(90deg);}
  .tbl{font-size:12px;}.tbl td,.tbl th{padding:8px 10px;}
}
`;

const NAV = [
  { id: "exec", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "stack", label: "Stack" },
  { id: "arch", label: "Architecture" },
  { id: "pipeline", label: "Pipeline" },
  { id: "data", label: "Data Model" },
  { id: "sisclinic", label: "Sisclinic" },
  { id: "pix", label: "PIX" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "sofia", label: "Sofia AI" },
  { id: "n8n", label: "n8n" },
  { id: "gov", label: "Governance" },
  { id: "profiles", label: "Profiles" },
  { id: "voucher", label: "Voucher" },
  { id: "milestones", label: "Milestones" },
  { id: "risk", label: "Risks" },
  { id: "answers", label: "Q&A" },
  { id: "api", label: "API Ref" },
  { id: "glossary", label: "Glossary" },
];

export default function AntonioProposal() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (loggedIn) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [loggedIn]);

  function doLogin() {
    if (username === "antonio" && password === "novva123") {
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
              <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={(e) => e.key === "Enter" && doLogin()} autoComplete="off" />
            </div>
            <div className="field">
              <label>Password</label>
              <div className="field-input-wrap">
                <input type={showPass ? "text" : "password"} placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && doLogin()} autoComplete="off" style={{ paddingRight: 44 }} />
                <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)} tabIndex={-1} aria-label={showPass ? "Hide password" : "Show password"}>
                  {showPass ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>
            </div>
            <button className="login-btn" onClick={doLogin}>Sign In</button>
            {error && <div className="login-error" style={{ display: "block" }}>Incorrect credentials. Please try again.</div>}
            <div className="login-divider">Restricted</div>
            <p className="login-footer">Confidential — For authorized recipients only</p>
          </div>
        </div>
      )}

      {loggedIn && (
        <div className="pw">
          {/* ═══ TOP NAV ═══ */}
          <nav className="topnav">
            <div className="topnav-brand"><span className="topnav-dot" />NOVVA Medical — Project Bible</div>
            <div className="topnav-links">
              {NAV.map((n) => (<a key={n.id} href={`#${n.id}`}>{n.label}</a>))}
            </div>
          </nav>

          {/* ═══ HERO ═══ */}
          <div className="hero">
            <div className="hero-inner">
              <div className="hero-badge">Complete Project Bible · March 2026</div>
              <h1>NOVVA <span>Medical</span></h1>
              <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, maxWidth: 600, fontFamily: "'Manrope', sans-serif", lineHeight: 1.7 }}>
                Complete Clinic Automation Ecosystem for Dr. Antonio Djalma de Sousa Junior — DJALMA DIAGNOSTICOS. A fully automated clinic management brain replacing manual chaos with a deterministic 6-stage pipeline.
              </p>
              <div className="hero-stats">
                <div className="hstat"><div className="hstat-val green">$15,000</div><div className="hstat-lbl">Budget</div></div>
                <div className="hstat"><div className="hstat-val">9</div><div className="hstat-lbl">Milestones</div></div>
                <div className="hstat"><div className="hstat-val">92</div><div className="hstat-lbl">Working Days</div></div>
                <div className="hstat"><div className="hstat-val">100+</div><div className="hstat-lbl">CRM Fields</div></div>
                <div className="hstat"><div className="hstat-val">6</div><div className="hstat-lbl">Integrations</div></div>
                <div className="hstat"><div className="hstat-val">50K+</div><div className="hstat-lbl">Spec Lines</div></div>
                <div className="hstat"><div className="hstat-val">1,560</div><div className="hstat-lbl">AI Prompt Lines</div></div>
              </div>
            </div>
          </div>

          <div className="content-wrap">
            {/* ═══ SIDEBAR TOC ═══ */}
            <aside className="sidebar">
              <div className="sidebar-title">Contents</div>
              <div className="sidebar-bar" />
              {NAV.map((n) => (
                <a key={n.id} href={`#${n.id}`}>
                  <span className="dot" />
                  {n.label}
                </a>
              ))}
            </aside>

            <div className="content">

            {/* ═══ 1. EXECUTIVE SUMMARY ═══ */}
            <div className="sec" id="exec">
              <div className="sec-label">Section 1</div>
              <h2 className="sec-title">Executive Summary</h2>
              <div className="alert green">
                <strong>The One-Sentence Pitch</strong>
                When a patient messages on WhatsApp, an AI assistant named Sofia handles the conversation, books the appointment, sends the payment link, confirms it, reminds them about prep, and follows up after — ALL automatically. The doctor just does ultrasounds and everything else runs itself.
              </div>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title blue">Key Numbers</div>
                  <table className="tbl">
                    <tbody>
                      {[
                        ["Monthly patients", "~300"],
                        ["Monthly revenue", "~R$ 47,000 (~$9,400 USD)"],
                        ["Monthly procedures", "~140"],
                        ["Staff", "1 doctor + 2-3 secretaries"],
                        ["Budget", "$15,000 USD"],
                        ["Timeline", "10-12 months"],
                        ["Architecture docs", "80+ canonical documents"],
                        ["Lines of specification", "50,000+"],
                        ["AI prompt size", "1,560 lines"],
                        ["Patches", "17 distributed patches"],
                        ["Clinical playbooks", "13 canonical playbooks"],
                      ].map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
                    </tbody>
                  </table>
                </div>
                <div className="card card-accent-green">
                  <div className="card-title green">Why $15,000 Works</div>
                  <p style={{ fontSize: 13, color: "#334155", lineHeight: 1.7 }}>
                    Dr. Antonio has already completed <strong>80% of the architecture and design work</strong> himself — 80+ canonical documents, 50,000+ lines of spec, field inventories, business rules, clinical protocols, and the complete 1,560-line AI prompt.
                  </p>
                  <p style={{ fontSize: 13, color: "#334155", lineHeight: 1.7, marginTop: 8 }}>
                    The developer&apos;s role is <strong>pure engineering</strong>: scripting, orchestration, API integrations, and deployment. No architecture decisions needed — just execution of a brilliantly pre-designed system.
                  </p>
                </div>
              </div>

              <h3 className="sub">Client Profile</h3>
              <div className="card card-accent">
                <table className="tbl">
                  <tbody>
                    {[
                      ["Director", "Dr. Antonio Djalma de Sousa Junior"],
                      ["Company", "DJALMA DIAGNOSTICOS (trading as NOVVA Medical)"],
                      ["CNPJ", "57.277.863/0001-24"],
                      ["Location", "Serra Talhada, Pernambuco, Brazil"],
                      ["Specialty", "Diagnostic ultrasound — general, obstetric, gynecological, vascular, fertility"],
                      ["Patient mix", "Private-pay, Insurance (UNIMED, HAPVIDA), Government (Sistema Saúde)"],
                    ].map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
                  </tbody>
                </table>
              </div>

              <div className="card card-accent-amber">
                <div className="card-title amber">Authority Hierarchy</div>
                <table className="tbl">
                  <thead><tr><th>Level</th><th>Role</th><th>Authority</th></tr></thead>
                  <tbody>
                    <tr><td><span className="badge badge-red">L1</span></td><td>Doctor (Dr. Antonio)</td><td>Supreme authority. Overrides everything. No audit required.</td></tr>
                    <tr><td><span className="badge badge-amber">L2</span></td><td>Coordinator</td><td>Day-to-day operations management</td></tr>
                    <tr><td><span className="badge badge-blue">L3</span></td><td>Secretary</td><td>Front desk, calls, manual data entry, check-in</td></tr>
                    <tr><td><span className="badge badge-slate">L4</span></td><td>Sofia AI</td><td>Lowest authority. Suggests, never decides. Always defers.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ═══ 3. THE PROBLEM ═══ */}
            <div className="sec" id="problem">
              <div className="sec-label">Section 3</div>
              <h2 className="sec-title">The Problem — Why This Project Exists</h2>
              <div className="g2">
                <div className="card card-accent-red">
                  <div className="card-title red">Current State (The Chaos)</div>
                  <ul className="blist red">
                    <li>Double data entry — secretary enters in BOTH Zoho CRM AND Sisclinic manually</li>
                    <li>Lost WhatsApp messages — no tracking, no history</li>
                    <li>No-show epidemic — high no-show rates, no prevention or detection</li>
                    <li>Payment chaos — PIX payments not matched to appointments</li>
                    <li>Critical findings lost — follow-up depends on human memory</li>
                    <li>No longitudinal tracking — periodic monitoring has no systematic follow-up</li>
                    <li>Scale bottleneck — can&apos;t grow beyond ~300 patients without hiring</li>
                    <li>CRM is decorative — previous firm&apos;s partial work made Zoho a data graveyard</li>
                  </ul>
                </div>
                <div className="card card-accent-green">
                  <div className="card-title green">Target State (The Vision)</div>
                  <ul className="blist green">
                    <li>90-95% of workflows fully automated</li>
                    <li>Sofia AI handles 70% of WhatsApp conversations autonomously</li>
                    <li>Auto-booking in Sisclinic when CRM confirms</li>
                    <li>PIX auto-matched to appointments via TXID</li>
                    <li>Critical findings trigger automatic follow-up</li>
                    <li>Doctor just does ultrasounds — system runs itself</li>
                    <li>Scale to 500+ patients/month without new hires</li>
                    <li>Everything tracked, logged, auditable with correlation IDs</li>
                  </ul>
                </div>
              </div>
              <div className="codeblock">{`CURRENT:                                    TARGET:
PATIENT → Secretary → Manual Zoho           PATIENT → WhatsApp → Sofia AI
         → Manual Sisclinic                          → Auto-book Sisclinic
         → Manual PIX check                          → Auto PIX QR + match
         → Manual reminders                          → Auto D-2/D-1/D-0
         → Manual no-show track                      → Auto DNA Score
RESULT: Chaos, lost messages                 RESULT: 90-95% automated`}</div>
            </div>

            {/* ═══ 4. TECH STACK ═══ */}
            <div className="sec" id="stack">
              <div className="sec-label">Section 4</div>
              <h2 className="sec-title">Complete Technology Stack</h2>
              <div className="g3">
                {[
                  { icon: "📋", name: "Zoho CRM", role: "Single source of truth", desc: "100+ fields, 10 modules, 6-stage pipeline. If it's not in Zoho, it doesn't exist.", color: "#1d4ed8", hosted: "SaaS" },
                  { icon: "⚙️", name: "n8n", role: "Orchestration engine", desc: "5 core workflows. Webhooks, retry/DLQ, correlation tracking. Self-hosted on VPS.", color: "#7c3aed", hosted: "Self-hosted" },
                  { icon: "💬", name: "WhatsApp", role: "Patient communication", desc: "Evolution API (Baileys engine). 13+ templates, quiet hours, no 24h window restriction.", color: "#059669", hosted: "Self-hosted" },
                  { icon: "💳", name: "Banco Inter", role: "PIX payments", desc: "QR code generation, webhook confirmation, 3-level matching. mTLS authentication.", color: "#d97706", hosted: "Bank API" },
                  { icon: "🏥", name: "Sisclinic", role: "Medical records", desc: "Booking sync, report polling, presence detection. Zero rate limiting confirmed.", color: "#dc2626", hosted: "SaaS" },
                  { icon: "🤖", name: "Sofia AI", role: "Conversational engine", desc: "3-tier LLM router: DeepSeek → OpenAI → Claude → Templates. ~$50-150/mo.", color: "#0891b2", hosted: "Hybrid" },
                ].map((s) => (
                  <div className="tech-card" key={s.name} style={{ borderTopColor: s.color }}>
                    <div className="tech-icon">{s.icon}</div>
                    <div className="tech-name">{s.name}</div>
                    <div className="tech-role" style={{ color: s.color }}>{s.role}</div>
                    <div className="tech-desc">{s.desc}</div>
                    <div style={{ marginTop: 8 }}><span className="badge badge-slate">{s.hosted}</span></div>
                  </div>
                ))}
              </div>

              <h3 className="sub">AI/LLM Stack (Sofia)</h3>
              <table className="tbl">
                <thead><tr><th>Tier</th><th>Provider</th><th>Role</th><th>Timeout</th><th>Cost</th></tr></thead>
                <tbody>
                  <tr><td><span className="badge badge-green">Tier 0</span></td><td>DeepSeek</td><td>Primary — cheapest, handles 70%+</td><td>5s</td><td>~$0.001/msg</td></tr>
                  <tr><td><span className="badge badge-blue">Tier 1</span></td><td>OpenAI</td><td>Fallback — reliable</td><td>8s</td><td>~$0.01/msg</td></tr>
                  <tr><td><span className="badge badge-purple">Tier 2</span></td><td>Claude</td><td>Premium — highest quality</td><td>10s</td><td>~$0.02/msg</td></tr>
                  <tr><td><span className="badge badge-slate">Tier 3</span></td><td>Templates</td><td>Emergency — no AI needed</td><td>0s</td><td>$0</td></tr>
                </tbody>
              </table>
              <p style={{ fontSize: 12, color: "#64748b", fontStyle: "italic" }}>Estimated monthly AI cost: $50-150 (DeepSeek handles most traffic)</p>
            </div>

            {/* ═══ 5. ARCHITECTURE ═══ */}
            <div className="sec" id="arch">
              <div className="sec-label">Section 5</div>
              <h2 className="sec-title">Architecture Deep Dive</h2>
              <h3 className="sub">The Golden Rules (P01–P12) — Immutable Principles</h3>
              <table className="tbl">
                <thead><tr><th>#</th><th>Principle</th><th>What It Means</th></tr></thead>
                <tbody>
                  {[
                    ["P01", "Zoho CRM = SUPREME AUTHORITY", "If Zoho and any other system disagree, Zoho wins. Always."],
                    ["P02", "Pipeline = 6 stages (E1-E6)", "The old 8-stage version is DEAD. Never reference it."],
                    ["P03", "Deal = 1 clinical appointment", "Born at E1, dies at E6. One deal = one visit."],
                    ["P04", "Contact = patient (longitudinal)", "Persists across all Deals. The patient's lifetime record."],
                    ["P05", "Sofia = copilot, Doctor = commander", "LLM suggests, n8n decides, CRM records. Sofia NEVER decides."],
                    ["P06", "DNA Score = sensor (0-100)", "Informs but NEVER decides. Never blocks an appointment."],
                    ["P07", "Medical Override = nuclear bypass", "Doctor overrides everything. No justification. No audit."],
                    ["P08", "Exactly 3 profiles", "NOVO, CLIENTE, INDESEJADO. No 'PERFIL_RESTRITO'."],
                    ["P09", "Follow-up in Achados module", "On the Contact, NOT the Deal. Deal dies; Contact lives forever."],
                    ["P10", "Every automation has human fallback", "No blind flows. Every path has a human escape hatch."],
                    ["P11", "Hierarchy: L1 > L2 > L3 > L4", "Doctor > Coordinator > Secretary > Sofia. In conflict, Sofia STOPS."],
                    ["P12", "Social media = entry door only", "All substantive interaction migrates to WhatsApp."],
                  ].map(([n, p, m]) => <tr key={n}><td><span className="badge badge-blue">{n}</span></td><td style={{ fontWeight: 700 }}>{p}</td><td>{m}</td></tr>)}
                </tbody>
              </table>

              <h3 className="sub">System Architecture</h3>
              <div className="codeblock">{`┌────────────────────────────────────────────────────────────┐
│                     PATIENT LAYER                          │
│  WhatsApp ◄── Evolution API ── VPS (self-hosted)           │
│  [Future: Phone ◄── Retell AI ── Twilio]                   │
└────────────────────┬───────────────────────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────────────────────┐
│                 ORCHESTRATION LAYER (n8n)                   │
│                                                            │
│  WF_INGEST ──► WF_CLASSIFY ──► WF_DECIDE ──► WF_RESPOND   │
│       │             │              │              │        │
│       └─────────────┴──────────────┴──────────────┘        │
│                         │                                  │
│                    WF_ERROR (catches all → DLQ)             │
│                                                            │
│  Sub-workflows: LLM Router | C1-C4 Gestors                 │
└────────────────────┬───────────────────────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────────────────────┐
│              SOURCE OF TRUTH (Zoho CRM)                    │
│                                                            │
│  Deals ── Pipeline E1→E6    Contacts ── Longitudinal       │
│  Products ── Exam catalog   Achados ── Clinical findings   │
│  Transacoes ── Payments     LOG_DECISOES ── Event log      │
│  EXCEPTIONS ── DLQ          Sofia_Config ── Kill switches  │
└────────────────────┬───────────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
  ┌──────────┐ ┌──────────┐ ┌──────────┐
  │ Sisclinic│ │Banco Inter│ │Zoho Books│
  │ Booking  │ │  PIX     │ │Financial │
  └──────────┘ └──────────┘ └──────────┘`}</div>
            </div>

            {/* ═══ 6. PIPELINE E1-E6 ═══ */}
            <div className="sec" id="pipeline">
              <div className="sec-label">Section 6</div>
              <h2 className="sec-title">Pipeline E1–E6 — The Heart of Everything</h2>
              <div className="pipe">
                {[
                  { n: "E1", name: "Queue", desc: "Capture & triage" },
                  { n: "E2", name: "Schedule + Pay", desc: "Book & deposit" },
                  { n: "E3", name: "Exam Done", desc: "Patient showed up" },
                  { n: "E4", name: "Validation", desc: "Doctor reviews" },
                  { n: "E5", name: "Post-Exam", desc: "Report + voucher" },
                  { n: "E6", name: "Close", desc: "Archived forever" },
                ].map((s, i) => (
                  <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, minWidth: 100 }}>
                    <div className="pipe-stage" style={{ flex: 1 }}>
                      <div className="pipe-num">{s.n}</div>
                      <div className="pipe-name">{s.name}</div>
                      <div className="pipe-desc">{s.desc}</div>
                    </div>
                    {i < 5 && <div className="pipe-arrow">→</div>}
                  </div>
                ))}
              </div>

              <h3 className="sub">Stage Details</h3>
              <table className="tbl">
                <thead><tr><th>Stage</th><th>CRM Name</th><th>Sofia State</th><th>Function</th><th>Guard</th></tr></thead>
                <tbody>
                  {[
                    ["E1", "E1_FILA_TRABALHO", "ENTRADA", "Capture, triage, DNA scoring", "None — entry point"],
                    ["E2", "E2_AGENDAMENTO_SINAL", "AGENDANDO", "Schedule exam, collect deposit", "tipo_exame + Data_Agendamento"],
                    ["E3", "E3_EXAME_REALIZADO", "EXAME_REALIZADO", "Record attendance", "status_sinal=PAGO OR Override + compareceu=true"],
                    ["E4", "E4_VALIDACAO_MEDICA", "VALIDANDO", "Doctor validates report", "laudo_liberado=true"],
                    ["E5", "E5_POS_EXAME_VOUCHER", "VOUCHER", "Deliver report, voucher, NPS", "validacao_medica_status=VALIDADO (L1 only)"],
                    ["E6", "E6_FIDELIZACAO", "FIDELIZACAO", "Close deal, loyalty", "Post-exam complete"],
                  ].map(([s, crm, state, fn, guard]) => <tr key={s}><td><span className="badge badge-blue">{s}</span></td><td style={{ fontFamily: "monospace", fontSize: 11 }}>{crm}</td><td>{state}</td><td>{fn}</td><td>{guard}</td></tr>)}
                </tbody>
              </table>

              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title blue">Validation Rules (VRs)</div>
                  <table className="tbl">
                    <thead><tr><th>Rule</th><th>Transition</th><th>Condition</th></tr></thead>
                    <tbody>
                      <tr><td>VR-01</td><td>E2→E3</td><td>status_sinal=PAGO OR Medical_Override</td></tr>
                      <tr><td>VR-02</td><td>E3→E4</td><td>laudo_liberado=true</td></tr>
                      <tr><td>VR-03</td><td>E4→E5</td><td>validacao_medica_status=VALIDADO</td></tr>
                      <tr><td>VR-04</td><td>Any skip</td><td>Blocked for non-admin profiles</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="card card-accent-amber">
                  <div className="card-title amber">Regressions & Closure</div>
                  <ul className="blist amber">
                    <li>E2→E1: 24h timeout (no payment, no action)</li>
                    <li>E4→E1: Technical failure</li>
                    <li>E6 is FINAL and IMMUTABLE — deals cannot be reopened</li>
                    <li>E6 WON + first exam: NOVO → CLIENTE (automatic)</li>
                    <li>E6 LOST requires motivo_perda (CANCELAMENTO | NO_SHOW | etc.)</li>
                    <li>Stage↔sofia_state bijection enforced via Deluge</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ═══ 7. DATA MODEL ═══ */}
            <div className="sec" id="data">
              <div className="sec-label">Section 7</div>
              <h2 className="sec-title">Zoho CRM Data Model — Complete Field Inventory</h2>

              <h3 className="sub">10 CRM Modules</h3>
              <table className="tbl">
                <thead><tr><th>Module</th><th>Type</th><th>Function</th><th>Fields</th></tr></thead>
                <tbody>
                  {[
                    ["Deals", "Standard", "Pipeline E1-E6 (one per appointment)", "100+"],
                    ["Contacts", "Standard", "Patient longitudinal record", "35+"],
                    ["Products", "Standard", "Exam catalog + pricing", "15+"],
                    ["Achados", "Custom", "Clinical findings (longitudinal)", "21"],
                    ["Transacoes_Bancarias", "Custom", "Payment records (PIX, card, cash)", "23+"],
                    ["LOG_DECISOES", "Custom", "Structured event/decision log", "23"],
                    ["EXCEPTIONS", "Custom", "Dead-letter queue", "10+"],
                    ["Sofia_Config", "Custom", "Kill switches + config (SINGLETON)", "15+"],
                    ["Regras_Followup", "Custom", "Follow-up periodicity rules", "10+"],
                    ["Tasks", "Standard", "Human tasks for escalation", "Standard"],
                  ].map(([m, t, f, c]) => <tr key={m}><td>{m}</td><td><span className={`badge ${t === "Custom" ? "badge-purple" : "badge-blue"}`}>{t}</span></td><td>{f}</td><td style={{ fontWeight: 700, textAlign: "center" }}>{c}</td></tr>)}
                </tbody>
              </table>

              <h3 className="sub">Deal Fields — 100+ Fields by Group</h3>
              <div className="g2">
                {[
                  { group: "Pipeline / State", fields: [["stage", "Picklist", "E1-E6"], ["sofia_state", "Picklist", "Mirror (bijective)"], ["sofia_mode", "Picklist", "ATIVO|HUMANO|CRITICO|SILENCIO|OPT_OUT"], ["sub_status_e1/e2", "Picklist", "Sub-status within E1/E2"]], color: "blue" },
                  { group: "Financial", fields: [["valor_exame", "Currency", "Exam price"], ["percentual_sinal", "Number", "Deposit % (P1-P8)"], ["status_sinal", "Picklist", "PENDENTE|PAGO|PARCIAL|CANCELADO|DISPENSADO|ESTORNADO"], ["ID_Transacao_Bancaria", "Text", "TXID or endToEndId"]], color: "green" },
                  { group: "Scheduling", fields: [["Data_Agendamento", "DateTime", "Scheduled exam date/time"], ["tipo_exame", "Picklist", "Exam type"], ["sisclinic_handle", "Text", "Sisclinic appointment handle"], ["sync_sisclinic_status", "Picklist", "Sync status"]], color: "amber" },
                  { group: "Governance", fields: [["Medical_Override", "Boolean", "Doctor's nuclear bypass"], ["PAUSE_ALL", "Boolean", "Master kill switch"], ["Owner_Humano", "Lookup", "Current human responsible"], ["Log_Excecao", "Long Text", "Exception log"]], color: "red" },
                  { group: "Sofia / Hook Pack (18 fields)", fields: [["sofia_loop_count", "Number", "Anti-loop counter"], ["sofia_context_short", "Text(2000)", "Compressed context"], ["correlation_id_last", "Text", "Last correlation ID"], ["last_intent_confidence", "Number", "0.0-1.0"]], color: "purple" },
                  { group: "Voucher (7 fields)", fields: [["voucher_codigo", "Text", "VOUCHER-[DEAL_ID]-[TS]"], ["voucher_valor", "Currency", "10% (min R$20, max R$200)"], ["voucher_validade", "Date", "180 days post-issue"], ["voucher_usado", "Boolean", "Already redeemed (1:1)"]], color: "cyan" },
                ].map((g) => (
                  <div className={`card card-accent-${g.color}`} key={g.group}>
                    <div className={`card-title ${g.color}`}>{g.group}</div>
                    <table className="tbl">
                      <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
                      <tbody>{g.fields.map(([f, t, d]) => <tr key={f}><td style={{ fontFamily: "monospace", fontSize: 11 }}>{f}</td><td><span className="badge badge-slate">{t}</span></td><td>{d}</td></tr>)}</tbody>
                    </table>
                  </div>
                ))}
              </div>

              <h3 className="sub">DNA Score Formula</h3>
              <div className="card card-accent-amber">
                <div className="codeblock" style={{ marginBottom: 0 }}>{`Base = (Faltas × 10) + (Atrasos × 5) + (Reagendamentos × 3) - (Comparecimentos × 2)
Minimum = 0

Aggravators:                    Attenuators:
  + No-show sem aviso: +15        - Aviso >48h: -3
  + Cancelamento <24h: +8         - Justificativa documentada: -5
  + Histórico não-pagamento: +12  - Fidelidade >1 ano: -10
  + Problema comportamental: +10  - Indicação de pacientes: -5

⚠ DNA INFORMS, NEVER DECIDES (P06). Recalculated on every event.`}</div>
              </div>
            </div>

            {/* ═══ 8. SISCLINIC ═══ */}
            <div className="sec" id="sisclinic">
              <div className="sec-label">Section 8</div>
              <h2 className="sec-title">Integration #1: Sisclinic (Booking System)</h2>
              <div className="alert"><strong>Golden Rule:</strong> Zoho CRM = FINANCIAL ENGINE + SOURCE OF TRUTH. Sisclinic = MEDICAL RECORDS + INSURANCE BILLING (TISS). Zoho decides who entered, how much, if paid, if returned.</div>
              <div className="g2">
                <div className="card card-accent-red">
                  <div className="card-title red">API Endpoints (19-page PDF)</div>
                  <table className="tbl">
                    <thead><tr><th>Endpoint</th><th>Purpose</th></tr></thead>
                    <tbody>
                      {[
                        ["/auth/gera-token-paciente", "JWT token generation"],
                        ["/cadastros/pacientes/list", "Search patients by CPF"],
                        ["/agendador/pacientes/cadastrar-com-usuario/", "Register new patient"],
                        ["/agenda/nova-busca-inteligente", "Smart slot search (7-day window)"],
                        ["/agendador/lockagenda/bloquear-horario/", "Lock time slot"],
                        ["/atendimento/agendamentos/exames", "Book procedure/exam"],
                        ["/atendimento/agendamentos/{handle}/cancelar", "Cancel appointment"],
                        ["/laudo/central-laudos/lista-atendimentos", "List reports (for polling)"],
                      ].map(([e, p]) => <tr key={e}><td style={{ fontFamily: "monospace", fontSize: 11 }}>{e}</td><td>{p}</td></tr>)}
                    </tbody>
                  </table>
                </div>
                <div className="card card-accent-green">
                  <div className="card-title green">Key Technical Notes</div>
                  <ul className="blist green">
                    <li>Zero rate limiting — free aggressive polling</li>
                    <li>Rescheduling = Cancel + Create New (2 API calls, not 4)</li>
                    <li>Patient presence detectable BEFORE report release</li>
                    <li>Production token: 0-1 business day, no bureaucracy</li>
                    <li>CPF format: Must include dash (123456789-01)</li>
                    <li>disponivelWeb: ALWAYS send as true</li>
                    <li>Lock timeout: Configurable in system preferences</li>
                  </ul>
                  <div className="card-title green" style={{ marginTop: 16 }}>Sync Model</div>
                  <ul className="blist">
                    <li><strong>CRM → Sisclinic:</strong> Deal confirmed E2 → search → lock → book → store handle</li>
                    <li><strong>Sisclinic → CRM:</strong> Polling 5min → presence=E3, report=E4</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ═══ 9. PIX ═══ */}
            <div className="sec" id="pix">
              <div className="sec-label">Section 9</div>
              <h2 className="sec-title">Integration #2: Banco Inter (PIX Payments)</h2>
              <div className="g2">
                <div className="card card-accent-amber">
                  <div className="card-title amber">Deposit Hierarchy P1–P8</div>
                  <table className="tbl">
                    <thead><tr><th>Priority</th><th>Rule</th><th>Deposit</th></tr></thead>
                    <tbody>
                      {[
                        ["P1", "Medical Override", "0%"],
                        ["P2", "Government patient", "0%"],
                        ["P3", "INDESEJADO profile", "100%"],
                        ["P4", "On-call (sobreaviso)", "100%"],
                        ["P5", "Fertility/complex exam", "50%"],
                        ["P6", "High-risk (DNA 30-59)", "50%"],
                        ["P7", "Expensive (>R$1,500)", "25%"],
                        ["P8", "Everyone else", "0%"],
                      ].map(([p, r, d]) => <tr key={p}><td><span className="badge badge-amber">{p}</span></td><td>{r}</td><td style={{ fontWeight: 700 }}>{d}</td></tr>)}
                    </tbody>
                  </table>
                  <p style={{ fontSize: 11, color: "#92400e", marginTop: 8 }}>Rules evaluated TOP-DOWN. First match wins.</p>
                </div>
                <div className="card card-accent">
                  <div className="card-title blue">Payment Matching (3 Levels)</div>
                  <table className="tbl">
                    <thead><tr><th>Level</th><th>Method</th><th>When Used</th></tr></thead>
                    <tbody>
                      <tr><td><span className="badge badge-green">L1</span></td><td>Exact TXID match</td><td>QR code generated by system</td></tr>
                      <tr><td><span className="badge badge-amber">L2</span></td><td>Fuzzy (CPF + amount ± tolerance)</td><td>Manual PIX transfer</td></tr>
                      <tr><td><span className="badge badge-red">L3</span></td><td>Manual reconciliation queue</td><td>When auto-matching fails</td></tr>
                    </tbody>
                  </table>
                  <div className="card-title blue" style={{ marginTop: 16 }}>Payment Status Machine</div>
                  <div className="codeblock" style={{ marginBottom: 0 }}>{`PENDENTE → PAGO (webhook confirms)
PENDENTE → PARCIAL (partial payment)
PENDENTE → CANCELADO (Deal cancelled)
PENDENTE → DISPENSADO (Override or Gov)
PAGO → ESTORNADO (refund by doctor)`}</div>
                </div>
              </div>
            </div>

            {/* ═══ 10. WHATSAPP ═══ */}
            <div className="sec" id="whatsapp">
              <div className="sec-label">Section 10</div>
              <h2 className="sec-title">Integration #3: WhatsApp / Evolution API</h2>
              <div className="alert green"><strong>Evolution API = Self-hosted WhatsApp gateway.</strong> NOT Meta&apos;s official Business API. Uses Baileys engine. No 24h window restriction. No template approval delays. Free-form messaging.</div>
              <h3 className="sub">13+ Message Templates</h3>
              <table className="tbl">
                <thead><tr><th>Template</th><th>Stage</th><th>Purpose</th></tr></thead>
                <tbody>
                  {[
                    ["TPL_E1_BOAS_VINDAS", "E1", "Welcome new patient"],
                    ["TPL_E2_AGENDAMENTO", "E2", "Appointment confirmation"],
                    ["TPL_E2_SINAL_PIX", "E2", "PIX payment request with QR code"],
                    ["TPL_E2_PREPARO", "E2", "Exam preparation instructions"],
                    ["TPL_D2_CONFIRMACAO", "Pre-E3", "D-2 prep validation + reminder"],
                    ["TPL_D1_LEMBRETE", "Pre-E3", "D-1 final reminder"],
                    ["TPL_D0_ULTIMO", "Pre-E3", "D-0 (2h before) last reminder"],
                    ["TPL_E3_REALIZADO", "E3", "Exam completed confirmation"],
                    ["TPL_E5_LAUDO", "E5", "Report delivery"],
                    ["TPL_E5_VOUCHER", "E5", "Voucher delivery"],
                    ["TPL_E5_NPS", "E5", "Satisfaction survey"],
                    ["TPL_EXAME_CRITICO", "Any", "Critical finding (special handling)"],
                    ["TPL_PADRAO_RESTRITO", "Any", "Restricted response (INDESEJADO)"],
                  ].map(([t, s, p]) => <tr key={t}><td style={{ fontFamily: "monospace", fontSize: 11 }}>{t}</td><td><span className="badge badge-blue">{s}</span></td><td>{p}</td></tr>)}
                </tbody>
              </table>
              <div className="card card-accent">
                <div className="card-title blue">Quiet Hours Policy (08h-20h Recife UTC-3)</div>
                <div className="g2">
                  <div><strong style={{ color: "#059669", fontSize: 12 }}>CAN do outside hours:</strong><ul className="blist green"><li>Respond to greetings, collect intent</li><li>Register patient data</li><li>Send pre-programmed prep instructions</li><li>Schedule callback for next business day</li></ul></div>
                  <div><strong style={{ color: "#dc2626", fontSize: 12 }}>CANNOT do outside hours:</strong><ul className="blist red"><li>Send PIX payment links</li><li>Create tasks for secretary</li><li>Confirm definitive schedule</li><li>Execute human handoff</li></ul></div>
                </div>
              </div>
            </div>

            {/* ═══ 11. SOFIA AI ═══ */}
            <div className="sec" id="sofia">
              <div className="sec-label">Section 11</div>
              <h2 className="sec-title">Sofia AI — The Conversational Engine</h2>
              <div className="alert"><strong>Sofia is a Clinical Operational Conversational System (SOCC).</strong> NOT a chatbot. NOT autonomous. NOT a doctor. She suggests, rules decide, CRM records. Identified by [SOFIA_AI] tag in every message.</div>

              <h3 className="sub">Three Cognitive Layers</h3>
              <div className="g3">
                <div className="card card-accent"><div className="card-title blue">Layer 1: Zoho CRM</div><p style={{ fontSize: 13 }}>Source of truth — sovereign Deal state</p></div>
                <div className="card card-accent-purple"><div className="card-title purple">Layer 2: n8n</div><p style={{ fontSize: 13 }}>Deterministic orchestrator — router + executor + logger</p></div>
                <div className="card card-accent-cyan"><div className="card-title cyan">Layer 3: LLM (Sofia)</div><p style={{ fontSize: 13 }}>Linguistic interface — interprets messages, composes responses</p></div>
              </div>

              <h3 className="sub">5 Governance Gates (Pre-LLM)</h3>
              <table className="tbl">
                <thead><tr><th>Gate</th><th>Condition</th><th>Effect</th></tr></thead>
                <tbody>
                  {[
                    ["G1", "Contact.SofiaMode == ASSISTIDO", "Human handling required"],
                    ["G2", "Deal.pode_total == true in validation", "Medical override active"],
                    ["G3", "Deal.achado_critico == true AND not communicated", "Critical finding pending"],
                    ["G4", "Contact.Flag_SENSIVEL == true AND clinical subject", "Sensitive patient"],
                    ["G5", "Deal.PAUSE_ALL == true", "Master kill switch active"],
                  ].map(([g, c, e]) => <tr key={g}><td><span className="badge badge-red">{g}</span></td><td style={{ fontFamily: "monospace", fontSize: 11 }}>{c}</td><td>{e}</td></tr>)}
                </tbody>
              </table>

              <h3 className="sub">4 Confidence Zones</h3>
              <div className="g2">
                <div className="card card-accent-green"><div className="card-title green">GREEN ≥ 0.85</div><p style={{ fontSize: 13 }}>Execute automatically</p></div>
                <div className="card card-accent-amber"><div className="card-title amber">YELLOW 0.70-0.84</div><p style={{ fontSize: 13 }}>Execute + detailed log for review</p></div>
                <div className="card card-accent" style={{ borderLeftColor: "#f97316" }}><div className="card-title" style={{ color: "#ea580c" }}>ORANGE 0.50-0.69</div><p style={{ fontSize: 13 }}>Confirm with human before executing</p></div>
                <div className="card card-accent-red"><div className="card-title red">RED &lt; 0.50</div><p style={{ fontSize: 13 }}>Immediate human handoff, Sofia does nothing</p></div>
              </div>

              <h3 className="sub">15 Patient Intents (LLM-detected)</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {["AGENDAR_EXAME", "REAGENDAR", "CANCELAR", "CONFIRMAR_PRESENCA", "CONSULTAR_PREPARO", "CONSULTAR_RESULTADO", "CONSULTAR_PRECO", "PAGAR", "RECLAMACAO", "ELOGIO", "DUVIDA_GERAL", "EMERGENCIA", "CALLBACK", "OPT_OUT", "OUTRO"].map((i) => <span key={i} className="badge badge-blue">{i}</span>)}
              </div>

              <h3 className="sub">Sofia&apos;s 3 Tones & What She NEVER Does</h3>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title blue">Tones by Profile</div>
                  <table className="tbl">
                    <thead><tr><th>Profile</th><th>Tone</th></tr></thead>
                    <tbody>
                      <tr><td><span className="badge badge-green">NOVO</span></td><td>Warm, educational. Explains step by step.</td></tr>
                      <tr><td><span className="badge badge-blue">CLIENTE</span></td><td>Cordial, direct. Personalized. Gets to the point.</td></tr>
                      <tr><td><span className="badge badge-red">INDESEJADO</span></td><td>Firm, professional. No warmth. Patient NEVER knows.</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="card card-accent-red">
                  <div className="card-title red">Sofia NEVER:</div>
                  <ul className="blist red">
                    <li>Takes clinical decisions or gives medical advice</li>
                    <li>Communicates critical findings to patients</li>
                    <li>Negotiates discounts (escalates to L1)</li>
                    <li>Alters pipeline or Deal state directly</li>
                    <li>Modifies her own prompt or stores data outside CRM</li>
                    <li>Mentions DNA Score, profiles, or internal labels</li>
                    <li>Says &ldquo;fique tranquila&rdquo; in medical contexts</li>
                  </ul>
                </div>
              </div>

              <h3 className="sub">Pricing Progression F1→F4</h3>
              <table className="tbl">
                <thead><tr><th>Phase</th><th>What Sofia Reveals</th><th>Advance If</th></tr></thead>
                <tbody>
                  <tr><td><span className="badge badge-blue">F1</span></td><td>Focuses on schedule + generic installments. NO prices.</td><td>Patient insists on price</td></tr>
                  <tr><td><span className="badge badge-blue">F2</span></td><td>Reinforces installments (up to 12x). Still no prices.</td><td>Patient insists again</td></tr>
                  <tr><td><span className="badge badge-blue">F3</span></td><td>Reveals accepted insurance plans. Insurance or private?</td><td>Patient makes choice</td></tr>
                  <tr><td><span className="badge badge-blue">F4</span></td><td>Specific prices per exam type + payment method</td><td>Final — schedule closes</td></tr>
                </tbody>
              </table>
            </div>

            {/* ═══ 12. n8n ═══ */}
            <div className="sec" id="n8n">
              <div className="sec-label">Section 12</div>
              <h2 className="sec-title">n8n Orchestration — The 5 Core Workflows</h2>
              {[
                { name: "WF_INGEST", subtitle: "The Mailroom", color: "blue", items: ["Webhook from Evolution API (incoming WhatsApp message)", "Deduplicate (idempotency_key = hash of sender+timestamp+content)", "Normalize (clean phone, extract text, handle media)", "Find/Create Contact in Zoho CRM", "Find/Create Deal or find existing active Deal", "Pass to WF_CLASSIFY"] },
                { name: "WF_CLASSIFY", subtitle: "The Sorter", color: "purple", items: ["Build Context Payload (7 blocks: crm_state, patient, policy, temporal, system_health, conversation_history, channel)", "Check 5 Governance Gates → if any fails: BLOCKED", "Call LLM Router 3-Tier with full context", "Returns: intent_code, confidence, suggested response", "Pass to WF_DECIDE"] },
                { name: "WF_DECIDE", subtitle: "The Boss", color: "amber", items: ["Apply DETERMINISTIC business rules (NOT AI-driven)", "Confidence Zoning (GREEN/YELLOW/ORANGE/RED)", "Apply rules per intent (15 intents, each with deterministic rules)", "Post-LLM GuardRails validation", "Router: WAIT_INPUT | HANDOFF_HUMAN | CREATE_TASK | SEND_PAYMENT_LINK | END_CONVERSATION", "Dispatch to C1-C4 sub-workflows"] },
                { name: "WF_RESPOND", subtitle: "The Messenger", color: "green", items: ["Compose message (AI-generated or template)", "Apply formatting (buttons, lists)", "Check Quiet Hours (08h-20h)", "Send via Evolution API", "Log: Note on Deal + sofia_last_message + timestamp"] },
                { name: "WF_ERROR", subtitle: "The Safety Net", color: "red", items: ["Log error with full context + correlation_id", "Retry 3 attempts with exponential backoff", "All retries failed → DLQ (EXCEPTIONS module)", "Create URGENT Task for human review", "Send alert to Zoho Cliq — NO SILENT FAILURES"] },
              ].map((wf) => (
                <div className={`card card-accent-${wf.color}`} key={wf.name} style={{ marginBottom: 12 }}>
                  <div className={`card-title ${wf.color}`}>{wf.name} — {wf.subtitle}</div>
                  <ul className="blist">{wf.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
                </div>
              ))}
            </div>

            {/* ═══ 14. GOVERNANCE ═══ */}
            <div className="sec" id="gov">
              <div className="sec-label">Section 14</div>
              <h2 className="sec-title">Governance, Compliance & LGPD</h2>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title blue">Kill Switches (Sofia_Config)</div>
                  <table className="tbl">
                    <thead><tr><th>Switch</th><th>Default</th><th>Controls</th></tr></thead>
                    <tbody>
                      {[
                        ["sofia_llm_enabled", "TRUE", "LLM agent"],
                        ["sofia_voice_enabled", "false", "Voice (future)"],
                        ["sofia_rag_enabled", "false", "Clinical RAG (future)"],
                        ["sofia_health_monitor", "TRUE", "Health Calculator"],
                        ["PAUSE_ALL", "false", "Master kill switch"],
                      ].map(([s, d, c]) => <tr key={s}><td style={{ fontFamily: "monospace", fontSize: 11 }}>{s}</td><td><span className={`badge ${d === "TRUE" ? "badge-green" : "badge-slate"}`}>{d}</span></td><td>{c}</td></tr>)}
                    </tbody>
                  </table>
                </div>
                <div className="card card-accent-purple">
                  <div className="card-title purple">Permission Matrix</div>
                  <table className="tbl">
                    <thead><tr><th>Action</th><th>L3</th><th>L4</th><th>L1</th></tr></thead>
                    <tbody>
                      {[
                        ["Schedule normal", "✓", "✓", "✓"],
                        ["Promise off-schedule", "✗", "✗", "✓"],
                        ["Approve on-call", "✗", "✗", "✓"],
                        ["Medical Override", "✗", "✗", "✓"],
                        ["PAUSE_ALL", "✗", "✗", "✓"],
                        ["Validate E4", "✗", "✗", "✓"],
                        ["Register cash", "✓", "✗", "✓"],
                        ["Send voucher", "✗", "Auto", "✓"],
                        ["Move Deal", "✓*", "✓*", "✓"],
                        ["Mention DNA to patient", "✗", "✗", "✗"],
                      ].map(([a, l3, l4, l1]) => <tr key={a}><td>{a}</td><td style={{ textAlign: "center", color: l3.includes("✓") ? "#059669" : l3 === "Auto" ? "#1d4ed8" : "#dc2626" }}>{l3}</td><td style={{ textAlign: "center", color: l4.includes("✓") ? "#059669" : l4 === "Auto" ? "#1d4ed8" : "#dc2626" }}>{l4}</td><td style={{ textAlign: "center", color: l1 === "✓" ? "#059669" : "#dc2626" }}>{l1}</td></tr>)}
                    </tbody>
                  </table>
                  <p style={{ fontSize: 10, color: "#64748b" }}>L1=Doctor · L3=Secretary · L4=Sofia · *max 1 stage</p>
                </div>
              </div>
              <div className="card card-accent-green">
                <div className="card-title green">LGPD (Brazilian Data Privacy)</div>
                <ul className="blist green">
                  <li>Gate E1: No communication without active consent</li>
                  <li>No clinical data in CRM (operational only, not medical)</li>
                  <li>payload_hash (SHA-256) in LOG_DECISOES for data integrity</li>
                  <li>Right to be forgotten: Deletion process defined</li>
                  <li>NEVER log tokens, secrets, or sensitive data</li>
                  <li>Every critical transition: Note on Deal + LOG_DECISOES + correlation_id</li>
                </ul>
              </div>
            </div>

            {/* ═══ 15. PROFILES ═══ */}
            <div className="sec" id="profiles">
              <div className="sec-label">Section 15</div>
              <h2 className="sec-title">Patient Profiles, DNA Score & Flags</h2>
              <table className="tbl">
                <thead><tr><th>Dimension</th><th>NOVO (New)</th><th>CLIENTE (Client)</th><th>INDESEJADO (Undesirable)</th></tr></thead>
                <tbody>
                  {[
                    ["Sofia tone", "Warm, educational", "Cordial, direct", "Firm, professional, distant"],
                    ["Default deposit", "Per P1-P8", "Per P1-P8", "100% ALWAYS"],
                    ["Voucher eligible", "YES", "YES", "NO"],
                    ["Longitudinal follow-up", "NO", "YES", "NO"],
                    ["Sofia automation", "Full (E1-E5)", "Full (E1-E5)", "Restricted"],
                  ].map(([d, n, c, i]) => <tr key={d}><td style={{ fontWeight: 700 }}>{d}</td><td>{n}</td><td>{c}</td><td style={{ color: "#dc2626" }}>{i}</td></tr>)}
                </tbody>
              </table>

              <h3 className="sub">7 Cumulative Operational Flags</h3>
              <table className="tbl">
                <thead><tr><th>Flag</th><th>Trigger</th><th>Effect</th><th>Activated By</th></tr></thead>
                <tbody>
                  {[
                    ["RISCO_AGENDA", "DNA 30-59, 1 no-show", "50% deposit, reinforced confirmation", "System (auto)"],
                    ["SENSIVEL", "Emotional/psychological condition", "Extra-careful tone, persistent on Contact", "Human"],
                    ["URGENTE", "Critical exam/finding", "Max schedule priority, reduced timers", "Human"],
                    ["ATENCAO", "Complex prep, history of prep errors", "Mandatory prep validation", "Human"],
                    ["ACOMPANHANTE", "Minor, sedation, PCD", "Reception alert, specific guidance", "Human"],
                    ["PODE_TOTAL", "Medical Override active", "0% deposit, bypass financial rules", "Doctor only"],
                    ["SEM_RESPOSTA", "48h+ without WhatsApp reply", "Escalate to human, pause automation", "System (auto)"],
                  ].map(([f, t, e, a]) => <tr key={f}><td><span className="badge badge-amber">{f}</span></td><td>{t}</td><td>{e}</td><td>{a}</td></tr>)}
                </tbody>
              </table>
            </div>

            {/* ═══ 16. VOUCHER ═══ */}
            <div className="sec" id="voucher">
              <div className="sec-label">Sections 16-18</div>
              <h2 className="sec-title">Voucher Engine, Playbooks & Dashboards</h2>
              <div className="g2">
                <div className="card card-accent-green">
                  <div className="card-title green">Voucher Rules</div>
                  <table className="tbl">
                    <tbody>
                      {[
                        ["Trigger", "After successful exam (E5)"],
                        ["Value", "10% of exam price"],
                        ["Minimum", "R$20"],
                        ["Maximum", "R$200"],
                        ["Validity", "180 days"],
                        ["Usage", "One-time only"],
                        ["Code format", "VOUCHER-[DEAL_ID]-[TS]"],
                        ["Eligibility", "PARTICULAR + APROVADA"],
                      ].map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
                    </tbody>
                  </table>
                </div>
                <div className="card card-accent-red">
                  <div className="card-title red">7 Anti-Fraud Patterns</div>
                  <ul className="blist red">
                    <li>Same voucher used twice → blocked</li>
                    <li>Voucher from different patient → blocked</li>
                    <li>Expired voucher → blocked</li>
                    <li>Voucher + insurance combination → blocked</li>
                    <li>Voucher + government patient → blocked</li>
                    <li>Voucher + INDESEJADO profile → blocked</li>
                    <li>Critical finding present → delivery blocked</li>
                  </ul>
                </div>
              </div>

              <h3 className="sub">22 Core KPIs</h3>
              <div className="g2">
                {[
                  { cat: "Pipeline", kpis: ["Conversion rate per stage", "Average time in each stage"], color: "blue" },
                  { cat: "Financial", kpis: ["Deposit collection rate", "% Medical Override usage", "Revenue per exam type"], color: "green" },
                  { cat: "No-show", kpis: ["No-show rate (overall + by profile)", "DNA Score distribution"], color: "red" },
                  { cat: "Sofia", kpis: ["Automation rate (%  without human)", "Intent detection accuracy", "LLM provider distribution"], color: "purple" },
                ].map((g) => (
                  <div className={`card card-accent-${g.color}`} key={g.cat}>
                    <div className={`card-title ${g.color}`}>{g.cat}</div>
                    <ul className="blist">{g.kpis.map((k) => <li key={k}>{k}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ 20-21. MILESTONES ═══ */}
            <div className="sec" id="milestones">
              <div className="sec-label">Sections 20-21</div>
              <h2 className="sec-title">Milestone Plan — $15,000 Budget</h2>
              <div className="alert green"><strong>Budget Strategy:</strong> Consolidate milestones, prioritize Phase 1 operational MVP with Sofia AI as a core component (the messaging engine depends on the LLM agent being active from Day 1). Defer Phase 2 (Zoho Books, dashboards, voice). Leverage Dr. Antonio&apos;s 80% pre-designed architecture. Focus on pure engineering execution.</div>

              {[
                { id: "M1", name: "CRM Foundation + Data Model", price: "$1,800", days: "12 days", color: "#1d4ed8", items: ["100+ Deal fields + 35+ Contact fields", "All custom modules configured", "60-item exam catalog with pricing", "DNA Score formula in Deluge", "3 profiles + 7 operational flags + blacklist system"] },
                { id: "M2", name: "Pipeline + Validation Rules + Blueprints", price: "$1,500", days: "10 days", color: "#7c3aed", items: ["VR-01 to VR-04 validation rules with PT-BR errors", "Blueprints for visual workflow enforcement", "Stage↔sofia_state bijection via Deluge", "Regression rules + Medical Override mechanism", "E6 closure rules (immutability)"] },
                { id: "M3", name: "n8n Orchestration + Hook Pack", price: "$2,000", days: "12 days", color: "#0891b2", items: ["5 core workflows: INGEST/CLASSIFY/DECIDE/RESPOND/ERROR", "Hook Pack JSON contracts + 12 tool-call definitions", "Context Payload builder (7 blocks from CRM)", "Health Calculator (15-min cron)", "Retry 3x + DLQ + correlation_id tracing"] },
                { id: "M4", name: "Sofia AI Core (LLM + Router + Prompt)", price: "$2,500", days: "14 days", color: "#3b82f6", items: ["1,560-line prompt deployed as AI Agent in n8n", "LLM Router 3-Tier with circuit breaker", "5 governance gates + post-LLM guardrails", "15 intent detection + confidence zoning", "Anti-loop protection + handoff mechanism + F1→F4 pricing"] },
                { id: "M5", name: "WhatsApp + Messaging Engine", price: "$1,500", days: "10 days", color: "#059669", items: ["Evolution API connection + webhooks", "13+ templates by stage/profile/scenario", "Quiet Hours enforcement + D-2/D-1/D-0 reminders", "Active prep validation (GREEN/YELLOW/RED)", "LGPD consent gate + callback scheduling"] },
                { id: "M6", name: "Banco Inter PIX Integration", price: "$1,200", days: "8 days", color: "#d97706", items: ["OAuth 2.0 + mTLS certificates", "PIX QR code generation linked to Deal", "Webhook + 3-level payment matching", "P1-P8 deposit hierarchy", "24h timeout → E2→E1 regression"] },
                { id: "M7", name: "Sisclinic Integration", price: "$1,200", days: "8 days", color: "#dc2626", items: ["JWT auth + patient lookup by CPF", "Smart slot search + lock + book", "Cancel + reschedule (2 API calls)", "Polling every 5min: presence + report release", "Handle stored in Deal (sisclinic_handle)"] },
                { id: "M8", name: "Complementary Modules + Patches", price: "$1,500", days: "10 days", color: "#9333ea", items: ["Voucher Engine (10%, R$20-200, 180 days, 7 anti-fraud)", "Longitudinal Engine D-15/D-7", "Callback system (3 attempts)", "No-show detection + DNA Score update", "7 critical patches (callback, off-hours, refund, E4 SLA, prep, fertility, pricing)"] },
                { id: "M9", name: "Testing + Hardening + Documentation", price: "$1,300", days: "8 days", color: "#475569", items: ["58+ E2E test scenarios", "Permission matrix verified all roles", "Kill switch testing (every switch independently)", "Rollback procedures (<2 min recovery)", "Walkthrough recordings for L1-L4"] },
              ].map((m) => (
                <div className="ms-bar" key={m.id}>
                  <div className="ms-icon" style={{ background: `linear-gradient(135deg,${m.color},${m.color}cc)` }}>{m.id}</div>
                  <div className="ms-info">
                    <div className="ms-name">{m.name}</div>
                    <div className="ms-days">{m.days}</div>
                    <ul className="blist" style={{ marginTop: 6 }}>{m.items.map((it, i) => <li key={i} style={{ fontSize: 12 }}>{it}</li>)}</ul>
                  </div>
                  <div className="ms-price">{m.price}</div>
                </div>
              ))}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "#f0fdf4", border: "2px solid #10b981", borderRadius: 12, marginTop: 12 }}>
                <span style={{ fontSize: 17, fontWeight: 800, color: "#0f172a" }}>TOTAL</span>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: 28, fontWeight: 800, color: "#059669" }}>$15,000</span>
                  <div style={{ fontSize: 12, color: "#64748b" }}>92 days · Fixed-price · Milestone-based</div>
                </div>
              </div>

              <h3 className="sub">Payment Terms</h3>
              <div className="card card-accent-green">
                <ul className="blist green">
                  <li>Fixed price per milestone — no hourly billing</li>
                  <li>Payment on completion — deliver first, get paid after</li>
                  <li>Triple evidence required: Screenshot + Config export + Live log with correlation_id</li>
                  <li>Payments through Upwork</li>
                  <li>Review SLA: 5 business days per milestone</li>
                  <li>Rollback procedure tested (&lt;2 min) before every production deployment</li>
                </ul>
              </div>

              <h3 className="sub">Timeline</h3>
              <table className="tbl">
                <thead><tr><th>Period</th><th>Milestones</th><th>Focus</th></tr></thead>
                <tbody>
                  {[
                    ["Month 1-2", "M1 + M2", "CRM Foundation + Pipeline Rules"],
                    ["Month 2-3", "M3", "n8n Orchestration + Hook Pack"],
                    ["Month 3-5", "M4", "Sofia AI Core (heaviest milestone — foundation for messaging)"],
                    ["Month 5-6", "M5 + M6", "WhatsApp + PIX Payments (Sofia powers messaging)"],
                    ["Month 6-7", "M7", "Sisclinic Integration"],
                    ["Month 7-8", "M8", "Complementary Modules + Patches"],
                    ["Month 8-9", "M9", "Testing + Hardening + Go-Live"],
                  ].map(([p, m, f]) => <tr key={p}><td>{p}</td><td><span className="badge badge-blue">{m}</span></td><td>{f}</td></tr>)}
                </tbody>
              </table>
            </div>

            {/* ═══ 22. RISK REGISTER ═══ */}
            <div className="sec" id="risk">
              <div className="sec-label">Section 22</div>
              <h2 className="sec-title">Risk Register & Mitigation</h2>
              <table className="tbl">
                <thead><tr><th>#</th><th>Risk</th><th>Prob.</th><th>Impact</th><th>Mitigation</th></tr></thead>
                <tbody>
                  {[
                    ["R1", "Evolution API version incompatibility", "Med", "High", "Confirm version before M4; abstract API layer"],
                    ["R2", "Banco Inter mTLS certificate issues", "Low", "High", "Certificates already available; test early in M5"],
                    ["R3", "Sisclinic API behavior differs from docs", "Med", "Med", "Test with production token early; vendor responsive"],
                    ["R4", "LLM costs exceed estimate", "Low", "Low", "DeepSeek handles 70%+; circuit breaker limits"],
                    ["R5", "Zoho API rate limiting", "Low", "Med", "Batch operations; cache where possible"],
                    ["R6", "Patient adoption resistance", "Med", "Med", "Gradual rollout; human fallback always available"],
                    ["R7", "Scope creep from 17 patches", "High", "High", "Prioritize critical patches; defer non-critical"],
                    ["R8", "Previous firm's data conflicts", "Low", "Low", "Old data mostly empty; fresh start confirmed"],
                    ["R9", "LGPD compliance gaps", "Low", "High", "Consent gate enforced at E1; deletion defined"],
                    ["R10", "n8n self-hosted stability", "Med", "Med", "Health Calculator; auto-restart; DLQ catches failures"],
                  ].map(([n, r, p, i, m]) => <tr key={n}><td><span className="badge badge-slate">{n}</span></td><td>{r}</td><td><span className={`badge ${p === "High" ? "badge-red" : p === "Med" ? "badge-amber" : "badge-green"}`}>{p}</span></td><td><span className={`badge ${i === "High" ? "badge-red" : i === "Med" ? "badge-amber" : "badge-green"}`}>{i}</span></td><td>{m}</td></tr>)}
                </tbody>
              </table>
            </div>

            {/* ═══ 23. ANSWERS ═══ */}
            <div className="sec" id="answers">
              <div className="sec-label">Section 23</div>
              <h2 className="sec-title">Answers to Dr. Antonio&apos;s Questions</h2>
              {[
                { q: "WhatsApp — Option A, B, or C?", a: "Recommendation: Option A (Evolution API only) for Phase 1. At 300 patients/month, dual-layer is overengineering. Evolution API already provides free-form messaging, buttons, lists — no 24h window restriction. Adding middleware doubles complexity for no practical gain. If volume exceeds 2,000 patients, migrating is a 2-day effort." },
                { q: "Sisclinic — Is M7 Active or Conditional?", a: "Confirmed: M6 (Sisclinic) is ACTIVE and included. Vendor confirmed: zero rate limiting, 2-call rescheduling, presence detection before report, token in 0-1 day. This reduces effort by ~30% vs original estimate." },
                { q: "How does $28K become $15K?", a: "Dr. Antonio did 80% of architecture. Sisclinic simpler than estimated. Consolidated 14 milestones into 9. Phase 2 deferred (Zoho Books, dashboards, voice channel). Single messaging layer. Dedicated 40hrs/week commitment." },
                { q: "Financial Architecture — What's Already Done?", a: "Dr. Antonio prepared 2,300+ line financial architecture: 10 cash registers, 33-account chart, 60-item catalog, CRM↔Books sync, anti-duplication layers, invoice lifecycle. The architecture IS done — remaining effort is pure implementation at ~$2,800-3,500 for Phase 2." },
                { q: "Staging Environment?", a: "To be confirmed. Options: Zoho Sandbox (safest), separate Zoho instance (recommended), or production with <2 min rollback." },
                { q: "17 Patches — What Are They?", a: "Critical patches in M8: Callback (43K), Off-hours, Refund, E4 SLA, Prep validation, Fertility timing, Pricing progression. Remaining 10 can be specified by Dr. Antonio for Phase 2." },
              ].map((qa, i) => (
                <div className="qa" key={i}>
                  <div className="qa-q"><div className="qa-num">{i + 1}</div>Q: {qa.q}</div>
                  <div className="qa-a">{qa.a}</div>
                </div>
              ))}

              <h3 className="sub">Open Questions for Dr. Antonio</h3>
              <table className="tbl">
                <thead><tr><th>#</th><th>Question</th><th>Priority</th><th>Blocker?</th></tr></thead>
                <tbody>
                  {[
                    ["1", "Evolution API version currently running on VPS?", "HIGH", "Yes (M4)"],
                    ["2", "Staging environment decision?", "HIGH", "Yes (M1)"],
                    ["3", "Which of 17 patches are highest priority for M8?", "MED", "No"],
                    ["4", "Context Memory spec — ready to share?", "MED", "No"],
                    ["5", "Clinical Inventory scope — which items?", "LOW", "No"],
                  ].map(([n, q, p, b]) => <tr key={n}><td>{n}</td><td>{q}</td><td><span className={`badge ${p === "HIGH" ? "badge-red" : p === "MED" ? "badge-amber" : "badge-green"}`}>{p}</span></td><td>{b}</td></tr>)}
                </tbody>
              </table>
            </div>

            {/* ═══ 26. API REFERENCE ═══ */}
            <div className="sec" id="api">
              <div className="sec-label">Section 26</div>
              <h2 className="sec-title">Sisclinic API Reference (Complete)</h2>
              <div className="codeblock">{`── Authentication ──
POST /auth/gera-token-paciente
Body: {"password":"{{token}}","cpfOrProtocolo":"{{user}}"}
Response: JWT token

── Patient Search ──
POST /cadastros/pacientes/list
Body: filtering[{field:"cpf",value:"840515420-50",condition:"EQUALS"}]

── New Patient ──
POST /agendador/pacientes/cadastrar-com-usuario/
Body: {nome,cpf,dataNascimento,email,sexo,telefones[{tipo:{handle:3}}]}

── Smart Slot Search ──
POST /agenda/nova-busca-inteligente
Body: {tipoServico:"P",disponivelWeb:true,convenio:98,servico:7928,dataInicial:"..."}

── Lock Slot ──
POST /agendador/lockagenda/bloquear-horario/

── Book Exam ──
POST /atendimento/agendamentos/exames
Body: {data,paciente:{handle},convenio,recurso,duracao,medico,servico}
Response: {handle:628350} ← STORE IN DEAL

── Cancel ──
PUT /atendimento/agendamentos/{handle}/cancelar

── List Reports (Polling) ──
POST /laudo/central-laudos/lista-atendimentos
Response: {situacaoLaudo,temLaudo,urlLaudoHtml,dataLaudoGerado}

── Patient Payments ──
GET /financeiro/pagamento/paciente/{handle}?dataInicio=...&dataFim=...`}</div>
            </div>

            {/* ═══ 27. GLOSSARY ═══ */}
            <div className="sec" id="glossary">
              <div className="sec-label">Section 27</div>
              <h2 className="sec-title">Glossary of Terms</h2>
              <table className="tbl">
                <thead><tr><th>Term</th><th>Definition</th></tr></thead>
                <tbody>
                  {[
                    ["Achados", "Clinical findings module (longitudinal patient history on Contact)"],
                    ["Baileys", "Engine inside Evolution API that connects to WhatsApp Web protocol"],
                    ["Blueprint", "Zoho's visual workflow rules for pipeline stage transitions"],
                    ["Circuit Breaker", "Pattern: auto-switch to backup when a service fails"],
                    ["Correlation ID", "Unique UUID tracking number for every action across all systems"],
                    ["Deluge", "Zoho's built-in programming language for automation rules"],
                    ["DLQ", "Dead Letter Queue — where failed operations go for human review"],
                    ["DNA Score", "Patient risk score 0-100. INFORMS, never DECIDES."],
                    ["E1-E6", "The 6 pipeline stages every patient visit goes through"],
                    ["Evolution API", "Self-hosted WhatsApp gateway (no 24h restriction)"],
                    ["Handle", "Sisclinic's unique identifier for records"],
                    ["Hook Pack", "Pre-built JSON contracts for future features"],
                    ["Kill Switch", "Emergency OFF toggle for any automation component"],
                    ["L1-L4", "Authority levels: Doctor > Coordinator > Secretary > Sofia AI"],
                    ["LGPD", "Brazil's data privacy law (equivalent to GDPR)"],
                    ["LLM Router", "AI model fallback chain: DeepSeek → OpenAI → Claude → Templates"],
                    ["Medical Override", "Doctor's 'God Mode' — bypasses ALL rules"],
                    ["mTLS", "Mutual TLS — required by Banco Inter"],
                    ["PIX", "Brazil's instant payment system — universal, 24/7, free"],
                    ["Sinal", "Deposit to confirm appointment (P1-P8 hierarchy)"],
                    ["Sofia", "AI WhatsApp assistant — copilot, not pilot"],
                    ["TXID", "Transaction ID in PIX QR code, links payment to Deal"],
                  ].map(([t, d]) => <tr key={t}><td>{t}</td><td>{d}</td></tr>)}
                </tbody>
              </table>
            </div>

            {/* ═══ 25. ACCEPTANCE CRITERIA ═══ */}
            <div className="sec">
              <div className="sec-label">Section 25</div>
              <h2 className="sec-title">Acceptance Criteria Index</h2>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title blue">CRM Base (CA-01 to CA-10)</div>
                  <ul className="blist">
                    <li>CA-01: Transitions enforced (VRs active)</li>
                    <li>CA-02: Financial integrity (E2→E3 blocked without payment)</li>
                    <li>CA-03: Sisclinic booking functional (no duplicates)</li>
                    <li>CA-04: correlation_id traceable in entire chain</li>
                    <li>CA-05: E2E tests pass</li>
                    <li>CA-06: PAUSE_ALL functional</li>
                    <li>CA-07: Medical Override functional</li>
                    <li>CA-08: Handoff functional</li>
                    <li>CA-09: PIX webhook with idempotency</li>
                    <li>CA-10: Messaging functional</li>
                  </ul>
                </div>
                <div className="card card-accent-purple">
                  <div className="card-title purple">Sofia AI (SF-01 to SF-10)</div>
                  <ul className="blist purple">
                    <li>SF-01: Prompt deployed as AI Agent in n8n</li>
                    <li>SF-02: LLM Router 3-Tier functional with failover</li>
                    <li>SF-03: Context Payload with 7 blocks injected</li>
                    <li>SF-04: 5 governance gates blocking correctly</li>
                    <li>SF-05: Post-LLM GuardRails validating</li>
                    <li>SF-06: Router by next_action executing</li>
                    <li>SF-07: Anti-loop detecting at 3 messages</li>
                    <li>SF-08: Handoff creating Task with SLA</li>
                    <li>SF-09: LOG_DECISOES recording all</li>
                    <li>SF-10: Sofia_Context_Short updated</li>
                  </ul>
                </div>
              </div>
            </div>

            </div>{/* /content */}
          </div>{/* /content-wrap */}

          {/* ═══ FOOTER ═══ */}
          <div className="foot">
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div className="foot-grid">
                {[
                  ["Developer", "Muhammad Anique"],
                  ["Budget", "$15,000"],
                  ["Milestones", "9"],
                  ["Timeline", "~10-12 months"],
                  ["Working Days", "~92"],
                  ["Contact", "anique.cs@gmail.com"],
                ].map(([k, v]) => (
                  <div className="foot-item" key={k}><strong>{k}</strong><span>{v}</span></div>
                ))}
              </div>
              <p style={{ opacity: 0.45, fontSize: 12 }}>
                Confidential · NOVVA Medical Complete Project Bible · Version 1.0 · March 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
