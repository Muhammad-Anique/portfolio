"use client";
import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Workflow,
  Brain,
  Table2,
  Globe,
  Puzzle,
  Lock,
  Blocks,
  PenLine,
  UploadCloud,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   Curriculum Workflow — Complete Project Bible
   AI-Assisted Bible Curriculum Generation & Upload Pipeline (n8n)
   Login-protected proposal
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
  border-radius:8px;padding:48px 40px 40px;
  box-shadow:0 4px 6px -1px rgba(0,0,0,.2),0 20px 50px -12px rgba(0,0,0,.4);
}
.login-logo{
  width:56px;height:56px;border-radius:8px;
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
  border:1.5px solid #2a2a2a;border-radius:8px;color:#f5f5f5;font-size:14.5px;outline:none;
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
  border:none;border-radius:8px;color:#fff;font-size:15px;font-weight:700;cursor:pointer;
  letter-spacing:.02em;transition:all .2s;box-shadow:0 4px 14px rgba(236,66,15,.3);
  font-family:'Manrope',sans-serif;
}
.login-btn:hover{box-shadow:0 8px 24px rgba(236,66,15,.4);transform:translateY(-1px);}
.login-btn:active{transform:translateY(0);box-shadow:0 2px 8px rgba(236,66,15,.2);}
.login-error{
  display:none;text-align:center;color:#ef4444;font-size:13px;margin-top:14px;
  padding:10px 14px;background:rgba(239,68,68,.1);border-radius:8px;border:1px solid rgba(239,68,68,.2);font-weight:500;
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
.sidebar{position:sticky;top:24px;width:168px;max-height:calc(100vh - 48px);overflow-y:auto;flex-shrink:0;padding:16px 0;}
.sidebar::-webkit-scrollbar{width:3px;}
.sidebar::-webkit-scrollbar-thumb{background:#d6d3d1;border-radius:8px;}
.sidebar-title{font-family:'Lato',sans-serif;font-size:14px;font-weight:900;text-transform:uppercase;letter-spacing:.08em;color:#1c1917;margin-bottom:8px;}
.sidebar-bar{width:40%;height:4px;border-radius:8px;background:linear-gradient(to right,#EC420F,#d8681d);margin-bottom:16px;}
.sidebar a{display:flex;align-items:center;gap:8px;padding:5px 8px;margin-bottom:2px;font-size:12px;font-weight:500;color:#78716c;text-decoration:none;border-radius:6px;transition:.15s;font-family:'Manrope',sans-serif;border-left:2px solid transparent;}
.sidebar a:hover{color:#EC420F;background:rgba(236,66,15,.04);border-left-color:#EC420F;}
.sidebar a .dot{width:5px;height:5px;border-radius:50%;background:#d6d3d1;flex-shrink:0;transition:.15s;}
.sidebar a:hover .dot{background:#EC420F;}
.sidebar a.active{color:#EC420F;background:rgba(236,66,15,.06);border-left-color:#EC420F;font-weight:700;}
.sidebar a.active .dot{background:#EC420F;}
.sec{margin-bottom:56px;}
.sec-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#EC420F;margin-bottom:4px;font-family:'Lato',sans-serif;}
h2.sec-title{font-size:24px;font-weight:700;color:#1c1917;margin-bottom:16px;padding-bottom:10px;border-bottom:2px solid #e7e5e4;font-family:'Playfair Display',serif;}
h3.sub{font-size:16px;font-weight:700;color:#292524;margin:20px 0 10px;font-family:'Lato',sans-serif;}

/* ── CARDS ── */
.card{
  background:#fff;border:1px solid #e7e5e4;border-radius:8px;
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
.card-accent-slate{border-left:4px solid #78716c;}
.card-title{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px;font-family:'Lato',sans-serif;}
.card-title.blue{color:#EC420F;}
.card-title.green{color:#c79573;}
.card-title.red{color:#dc2626;}
.card-title.amber{color:#d8681d;}
.card-title.purple{color:#a16207;}
.card-title.slate{color:#78716c;}

/* ── GRID ── */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;}

/* ── TABLES ── */
.tbl{width:100%;border-collapse:separate;border-spacing:0;margin-bottom:16px;font-size:13px;border-radius:8px;overflow:hidden;border:1px solid #e7e5e4;font-family:'Manrope',sans-serif;}
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
.badge-slate{background:#f5f5f4;color:#78716c;}

/* ── BULLET LIST ── */
.blist{list-style:none;padding:0;margin:0;}
.blist li{padding:4px 0 4px 16px;position:relative;font-size:13px;color:#44403c;line-height:1.55;font-family:'Manrope',sans-serif;}
.blist li::before{content:'';position:absolute;left:0;top:11px;width:6px;height:6px;border-radius:50%;background:#EC420F;}
.blist.green li::before{background:#c79573;}
.blist.red li::before{background:#ef4444;}
.blist.amber li::before{background:#d8681d;}

/* ── ALERT ── */
.alert{border-left:4px solid #EC420F;background:rgba(236,66,15,.04);padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:16px;font-size:14px;color:#7c2d12;}
.alert.green{border-color:#c79573;background:rgba(199,149,115,.08);color:#78350f;}
.alert.amber{border-color:#d8681d;background:rgba(216,104,29,.06);color:#78350f;}
.alert.red{border-color:#ef4444;background:#fef2f2;color:#7f1d1d;}
.alert strong{display:block;margin-bottom:3px;font-family:'Lato',sans-serif;}

/* ── CODE BLOCK ── */
.codeblock{background:#1c1917;color:#e7e5e4;padding:16px 20px;border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:12px;line-height:1.7;overflow-x:auto;margin-bottom:16px;white-space:pre;border:1px solid #292524;}

/* ── PIPELINE VISUAL ── */
.pipe{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:20px;}
.pipe-stage{
  flex:1;min-width:100px;background:#fff;border:2px solid #e7e5e4;border-radius:8px;
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
  background:#fff;border:1px solid #e7e5e4;border-radius:8px;margin-bottom:10px;
  box-shadow:0 1px 3px rgba(0,0,0,.04);transition:box-shadow .15s;
}
.ms-bar:hover{box-shadow:0 4px 16px rgba(0,0,0,.08);}
.ms-icon{
  width:42px;height:42px;border-radius:8px;display:flex;align-items:center;justify-content:center;
  font-size:14px;font-weight:800;color:#fff;flex-shrink:0;
}
.ms-info{flex:1;}
.ms-name{font-size:14px;font-weight:700;color:#1c1917;font-family:'Manrope',sans-serif;}
.ms-days{font-size:12px;color:#a8a29e;}
.ms-price{font-size:18px;font-weight:800;color:#c79573;font-family:'Lato',sans-serif;}

/* ── QA ── */
.qa{margin-bottom:10px;background:#fff;border:1px solid #e7e5e4;border-radius:8px;overflow:hidden;}
.qa-q{background:#fafaf9;padding:12px 16px;font-weight:700;font-size:14px;color:#1c1917;border-bottom:1px solid #e7e5e4;display:flex;align-items:center;gap:10px;font-family:'Manrope',sans-serif;}
.qa-num{width:24px;height:24px;border-radius:50%;background:#EC420F;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.qa-a{padding:12px 16px;font-size:13.5px;color:#57534e;line-height:1.65;}

/* ── TECH CARD ── */
.tech-card{
  background:#fff;border:1px solid #e7e5e4;border-radius:8px;padding:20px 18px;
  border-top:4px solid #EC420F;transition:transform .15s,box-shadow .15s;
}
.tech-card:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.08);}
.tech-icon{margin-bottom:8px;display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:8px;background:rgba(236,66,15,.08);}
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
  { id: "proposal", label: "Proposal & Terms" },
  { id: "experience", label: "Relevant Experience" },
  { id: "problem", label: "Problem" },
  { id: "stack", label: "Stack" },
  { id: "arch", label: "Architecture" },
  { id: "pipeline", label: "Pipeline" },
  { id: "data", label: "Data Model" },
  { id: "dedup", label: "Dedup & Idempotency" },
  { id: "reliability", label: "Reliability" },
  { id: "errors", label: "Error Handling" },
  { id: "scaling", label: "Scaling" },
  { id: "testing", label: "Testing & QA" },
  { id: "security", label: "Security" },
  { id: "subworkflows", label: "Sub-Workflows" },
  { id: "milestones", label: "Milestones" },
  { id: "risk", label: "Risks" },
  { id: "answers", label: "Q&A" },
  { id: "glossary", label: "Glossary" },
];

export default function BibleProposal() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [activeSection, setActiveSection] = useState(NAV[0].id);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (loggedIn) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [loggedIn]);

  useEffect(() => {
    if (!loggedIn) return;
    const root = scrollRef.current;
    if (!root) return;
    const targets = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { root, rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );
    targets.forEach((t) => observer.observe(t as Element));
    return () => observer.disconnect();
  }, [loggedIn]);

  function doLogin() {
    if (username === "bible" && password === "bible@1234") {
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
            <div className="login-logo"><BookOpen size={26} color="#fff" /></div>
            <h1>Proposal Portal</h1>
            <p className="subtitle">Curriculum Workflow · Restricted Access</p>
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
            <button type="button" className="login-btn" onClick={doLogin}>Sign In</button>
            {error && <div className="login-error" style={{ display: "block" }}>Incorrect credentials. Please try again.</div>}
            <div className="login-divider">Restricted</div>
            <p className="login-footer">Confidential — For authorized recipients only</p>
          </div>
        </div>
      )}

      {loggedIn && (
        <div className="pw" ref={scrollRef}>
          {/* ═══ HERO ═══ */}
          <div className="hero">
            <div className="hero-inner">
              <div className="hero-badge">Complete Project Bible · n8n Curriculum Pipeline</div>
              <h1>Curriculum <span>Workflow</span></h1>
              <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, maxWidth: 640, fontFamily: "'Manrope', sans-serif", lineHeight: 1.7 }}>
                End-to-end AI-assisted curriculum generation and upload system for an interactive Bible-learning application. n8n orchestrates AI blueprint generation, Google Sheets staging/review, and REST API upload — reliable, resumable, deduplicated, and fully auditable.
              </p>
              <div className="hero-stats">
                <div className="hstat"><div className="hstat-val">4</div><div className="hstat-lbl">Record Levels</div></div>
                <div className="hstat"><div className="hstat-val green">2</div><div className="hstat-lbl">Status Tracks</div></div>
                <div className="hstat"><div className="hstat-val">12</div><div className="hstat-lbl">Pipeline Stages</div></div>
                <div className="hstat"><div className="hstat-val">3</div><div className="hstat-lbl">n8n Sub-Workflows</div></div>
                <div className="hstat"><div className="hstat-val">100%</div><div className="hstat-lbl">Resumable</div></div>
                <div className="hstat"><div className="hstat-val">0</div><div className="hstat-lbl">Duplicate Uploads</div></div>
                <div className="hstat"><div className="hstat-val green">20</div><div className="hstat-lbl">Days to Test Course</div></div>
                <div className="hstat"><div className="hstat-val">$16/hr</div><div className="hstat-lbl">Proposed Rate</div></div>
              </div>
            </div>
          </div>

          <div className="content-wrap">
            {/* ═══ SIDEBAR TOC ═══ */}
            <aside className="sidebar">
              <div className="sidebar-title">Contents</div>
              <div className="sidebar-bar" />
              {NAV.map((n) => (
                <a key={n.id} href={`#${n.id}`} className={n.id === activeSection ? "active" : undefined}>
                  <span className="dot" />
                  {n.label}
                </a>
              ))}
            </aside>

            <div className="content">

            {/* ═══ 1. EXEC SUMMARY ═══ */}
            <div className="sec" id="exec">
              <div className="sec-label">Section 1</div>
              <h2 className="sec-title">Executive Summary</h2>
              <div className="alert green">
                <strong>The One-Sentence Pitch</strong>
                A course title goes in a Google Sheet; an AI-driven n8n pipeline blueprints it, breaks it into course → section → unit → lesson records, stages everything for human review, generates full lesson content only for approved outlines, and uploads the approved hierarchy to the existing REST API — saving every generated ID back to the sheet, with zero data loss and zero duplicate uploads if anything fails midway.
              </div>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title blue">What Already Exists</div>
                  <ul className="blist">
                    <li>Backend REST API — fully built and documented in Postman</li>
                    <li>Endpoints for Course, Section, Unit, Lesson CRUD</li>
                    <li>Dev API credentials and sample request/response payloads</li>
                    <li>Google Sheets used as staging/review surface</li>
                    <li>Curriculum-generation requirements and content guidance</li>
                  </ul>
                </div>
                <div className="card card-accent-green">
                  <div className="card-title green">What Gets Built</div>
                  <ul className="blist green">
                    <li>n8n workflow: Sheet input → AI blueprint → staged records</li>
                    <li>Human-in-the-loop approval gate before any generation or upload</li>
                    <li>Per-lesson content generation, saved immediately on success</li>
                    <li>Hierarchical uploader: Course → Section → Unit → Lesson</li>
                    <li>Idempotent, resumable, fully status-tracked end to end</li>
                  </ul>
                </div>
              </div>
              <h3 className="sub">Deliverable Definition of Done</h3>
              <div className="card card-accent-amber">
                <div className="card-title amber">One Test Course, Start to Finish</div>
                <p style={{ fontSize: 13, color: "#44403c" }}>
                  Course input → AI blueprint → staged records → human approval → lesson generation → approval → API upload → returned application IDs saved back to staging. Documented, maintainable, and safe to rerun at any point in the chain.
                </p>
              </div>
            </div>

            {/* ═══ 2. PROPOSAL & TERMS ═══ */}
            <div className="sec" id="proposal">
              <div className="sec-label">Section 2</div>
              <h2 className="sec-title">Proposal &amp; Terms</h2>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title blue">Engagement Terms</div>
                  <table className="tbl">
                    <tbody>
                      {[
                        ["Bid rate", "$16.00/hr (client sees) · $14.40/hr net after 10% service fee"],
                        ["Client budget range", "$20.00 – $40.00/hr"],
                        ["Commitment", "Less than 30 hrs/week"],
                        ["Project length", "1 to 3 months"],
                        ["Experience level", "Intermediate"],
                        ["Rate escalation", "None scheduled"],
                        ["Timeline to first test course", "20 days from Postman + n8n workspace access"],
                      ].map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
                    </tbody>
                  </table>
                </div>
                <div className="card card-accent-green">
                  <div className="card-title green">What the Client Gets First</div>
                  <ul className="blist green">
                    <li>One test course driven fully end-to-end within 20 days of access</li>
                    <li>Input → blueprint → staged records → approval → lesson generation → API upload → IDs saved back</li>
                    <li>Integration only — existing API and database are never redesigned</li>
                    <li>Google Sheets used exactly as specified, for staging and review</li>
                  </ul>
                </div>
              </div>

              <h3 className="sub">Cover Letter</h3>
              <div className="card card-accent-amber">
                <p style={{ fontSize: 13.5, color: "#44403c", lineHeight: 1.8 }}>
                  The line that stood out most: <em>&ldquo;if lesson 27 fails, lessons 1–26 remain saved.&rdquo;</em> That is exactly how this gets built — nothing lost, nothing uploaded twice.
                </p>
                <h3 className="sub" style={{ marginTop: 14 }}>Approach</h3>
                <ul className="blist amber">
                  <li>Every record saved the moment it&apos;s generated, so long jobs are always resumable</li>
                  <li>Review status and upload status tracked separately, so approval and API state never get confused</li>
                  <li>Strict upload hierarchy (Course → Section → Unit → Lesson), with returned API IDs written back so children reference the right parent</li>
                  <li>Idempotent uploads — status checked before every API call, so reruns skip uploaded records instead of duplicating them</li>
                  <li>Clean sub-workflows (blueprint, lesson generation, upload), each testable and triggerable on its own</li>
                </ul>
                <div className="alert amber" style={{ marginTop: 14 }}>
                  <strong>Recommendation offered in the proposal</strong>
                  A separate status field per stage — generation, review, upload — rather than one combined status. It makes retries and dashboards far cleaner.
                </div>
                <p style={{ fontSize: 13, color: "#57534e", marginTop: 10 }}>
                  Built exactly as specified: Google Sheets for staging and review, integrating with the existing API, not redesigning anything. Ready to start whenever access is sent.
                </p>
              </div>
            </div>

            {/* ═══ 3. RELEVANT EXPERIENCE ═══ */}
            <div className="sec" id="experience">
              <div className="sec-label">Section 3</div>
              <h2 className="sec-title">Relevant Experience</h2>
              <p style={{ fontSize: 13, color: "#57534e", marginBottom: 12 }}>Hands-on delivery on both sides of this project&apos;s core skill set: reliable n8n orchestration and LLM-driven conversation/content pipelines integrated against real external APIs.</p>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title blue">SOFIA — Dr. Antonio / NOVVA Medical</div>
                  <p style={{ fontSize: 13, color: "#44403c", lineHeight: 1.7 }}>
                    Designed and deployed a self-hosted n8n workflow powering a WhatsApp assistant, integrated with Zoho CRM and Sisclinic in Brazil to handle patient bookings end to end — happy path and every edge case. Managed appointments, sent radiology reports, and handled follow-ups, built for reliability against messy real-world conditions, not just the ideal flow.
                  </p>
                  <div style={{ marginTop: 10 }}><span className="badge badge-blue">n8n</span> <span className="badge badge-blue">LLM conversation</span> <span className="badge badge-blue">Multi-API integration</span></div>
                </div>
                <div className="card card-accent-green">
                  <div className="card-title green">Voice Agent — Jack Scanlan / One Roof Roofing</div>
                  <p style={{ fontSize: 13, color: "#44403c", lineHeight: 1.7 }}>
                    Built an n8n workflow paired with a voice agent to capture and handle inbound inquiries for a roofing business. Live at <strong>onerooff.com</strong>.
                  </p>
                  <div style={{ marginTop: 10 }}><span className="badge badge-green">n8n</span> <span className="badge badge-green">Voice agent</span> <span className="badge badge-green">Lead capture</span></div>
                </div>
              </div>
              <div className="alert">
                <strong>Why it transfers directly to this project</strong>
                Both projects required LLM-driven logic, external API integration, and deliberate edge-case handling — the same reliability discipline this curriculum pipeline needs: resumable state, no duplicate writes, clear error visibility.
              </div>
            </div>

            {/* ═══ 4. PROBLEM ═══ */}
            <div className="sec" id="problem">
              <div className="sec-label">Section 4</div>
              <h2 className="sec-title">The Problem This Solves</h2>
              <div className="g2">
                <div className="card card-accent-red">
                  <div className="card-title red">Without This Pipeline</div>
                  <ul className="blist red">
                    <li>Every course written and structured by hand — slow, inconsistent</li>
                    <li>No staging step — bad content reaches the live API directly</li>
                    <li>One failed lesson forces a full course restart</li>
                    <li>Reruns risk duplicate courses/sections/units/lessons</li>
                    <li>Parent-child ID wiring done manually, error-prone</li>
                    <li>No visibility into what generated, what&apos;s approved, what&apos;s uploaded</li>
                  </ul>
                </div>
                <div className="card card-accent-green">
                  <div className="card-title green">With This Pipeline</div>
                  <ul className="blist green">
                    <li>AI drafts full course structures from a one-line input</li>
                    <li>Every record reviewed and approved before it touches the API</li>
                    <li>Lesson 27 failing never threatens lessons 1–26</li>
                    <li>Rerun is safe — already-uploaded rows are always skipped</li>
                    <li>Parent IDs captured automatically and threaded to children</li>
                    <li>Generation, review, and upload status tracked independently</li>
                  </ul>
                </div>
              </div>
              <div className="codeblock">{`WITHOUT:                                    WITH:
Course idea → manual writing                Course idea → AI blueprint
            → manual structuring                        → staged for review
            → manual API calls                          → approve → auto-generate
            → hope nothing breaks                        → auto-upload with retry
RESULT: slow, fragile, unrepeatable         RESULT: fast, safe, resumable, auditable`}</div>
            </div>

            {/* ═══ 3. STACK ═══ */}
            <div className="sec" id="stack">
              <div className="sec-label">Section 5</div>
              <h2 className="sec-title">Technology Stack</h2>
              <div className="g3">
                {[
                  { Icon: Workflow, name: "n8n", role: "Orchestration engine", desc: "Self-hosted. Drives every stage — Sheets read, AI calls, staging writes, approval polling, hierarchical upload, retries.", color: "#EC420F" },
                  { Icon: Brain, name: "OpenAI / LLM", role: "Blueprint & content generation", desc: "Structured JSON output for course blueprints and full lesson content, validated before it's ever staged.", color: "#d8681d" },
                  { Icon: Table2, name: "Google Sheets", role: "Staging & review surface", desc: "Course / Section / Unit / Lesson tabs. Source of truth for approval state until upload succeeds.", color: "#c79573" },
                  { Icon: Globe, name: "REST API", role: "Existing backend (given)", desc: "Course, Section, Unit, Lesson endpoints. Documented in Postman. Not redesigned — only integrated with.", color: "#a16207" },
                  { Icon: Puzzle, name: "Sub-workflows", role: "Reusable building blocks", desc: "Generate-lesson, upload-record, and retry-handler isolated as callable n8n sub-workflows.", color: "#78716c" },
                  { Icon: Lock, name: "HTTP Auth", role: "API credential handling", desc: "n8n credential store for dev API keys; swappable for production without workflow changes.", color: "#EC420F" },
                ].map((s) => (
                  <div className="tech-card" key={s.name} style={{ borderTopColor: s.color }}>
                    <div className="tech-icon" style={{ background: `${s.color}14` }}><s.Icon size={20} color={s.color} /></div>
                    <div className="tech-name">{s.name}</div>
                    <div className="tech-role" style={{ color: s.color }}>{s.role}</div>
                    <div className="tech-desc">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ 4. ARCHITECTURE ═══ */}
            <div className="sec" id="arch">
              <div className="sec-label">Section 6</div>
              <h2 className="sec-title">Architecture Deep Dive</h2>
              <h3 className="sub">Golden Rules — Immutable Principles</h3>
              <table className="tbl">
                <thead><tr><th>#</th><th>Principle</th><th>What It Means</th></tr></thead>
                <tbody>
                  {[
                    ["P01", "Sheet = staging, API = truth", "Nothing is real until it's uploaded. The sheet is a workbench, not the record of truth."],
                    ["P02", "Nothing uploads unapproved", "Review status gates generation and upload. AI output alone is never enough."],
                    ["P03", "Save immediately, per unit of work", "Every generated lesson is written to the sheet the moment it succeeds — before the next one starts."],
                    ["P04", "Parent before child, always", "A Section never uploads before its Course has an ID. A Lesson never uploads before its Unit has one."],
                    ["P05", "Upload is idempotent", "Re-running the workflow never creates a duplicate Course/Section/Unit/Lesson."],
                    ["P06", "Review status ≠ Upload status", "'Approved' and 'Uploaded' are tracked as separate columns, never conflated."],
                    ["P07", "Failure is local, not global", "One lesson's failure only marks that lesson as failed — it never rolls back the batch."],
                    ["P08", "Every stage is resumable", "Any n8n execution can be re-triggered mid-course and pick up exactly where it left off."],
                  ].map(([n, p, m]) => <tr key={n}><td><span className="badge badge-blue">{n}</span></td><td style={{ fontWeight: 700 }}>{p}</td><td>{m}</td></tr>)}
                </tbody>
              </table>

              <h3 className="sub">System Architecture</h3>
              <div className="codeblock">{`┌─────────────┐   ┌──────────────┐   ┌───────────────────┐   ┌────────────────┐
│ Google Sheet│──▶│  n8n Workflow │──▶│  OpenAI / LLM API  │──▶│  Google Sheet   │
│ Course Input│   │  (Blueprint)  │   │  (Structured JSON) │   │  (Staged rows)  │
└─────────────┘   └──────────────┘   └───────────────────┘   └────────────────┘
                                                                       │
                                                        human review / edit / approve
                                                                       ▼
┌────────────────┐   ┌──────────────────┐   ┌───────────────────┐
│  Google Sheet   │──▶│  n8n Sub-workflow │──▶│  Google Sheet       │
│ Approved Lessons│   │ (Generate Lesson) │   │ (Content + status)  │
└────────────────┘   └──────────────────┘   └───────────────────┘
                                                                       │
                                                        approved & content-complete
                                                                       ▼
┌────────────────┐   ┌──────────────────┐   ┌────────────────────┐
│  Google Sheet   │──▶│  n8n Sub-workflow │──▶│  REST API           │
│ Approved Records│   │ (Upload, w/retry) │   │ Course→Section→     │
└────────────────┘   └──────────────────┘   │ Unit→Lesson         │
                                │             └────────────────────┘
                                ▼
                    write returned IDs back to staging`}</div>
            </div>

            {/* ═══ 5. PIPELINE ═══ */}
            <div className="sec" id="pipeline">
              <div className="sec-label">Section 7</div>
              <h2 className="sec-title">The 12-Stage Pipeline</h2>
              <div className="pipe">
                {[
                  ["01", "Read Input", "Course row from Sheet"],
                  ["02", "AI Blueprint", "LLM drafts full course"],
                  ["03", "Explode", "Course→Section→Unit→Lesson rows"],
                  ["04", "Stage", "Write to review sheet"],
                ].map(([n, name, d]) => (
                  <div className="pipe-stage" key={n}><div className="pipe-num">{n}</div><div className="pipe-name">{name}</div><div className="pipe-desc">{d}</div></div>
                ))}
              </div>
              <div className="pipe">
                {[
                  ["05", "Human Review", "Edit / approve / reject"],
                  ["06", "Generate Content", "Full lesson text per outline"],
                  ["07", "Save Per Lesson", "Immediate, atomic writes"],
                  ["08", "Approve Content", "Second human gate"],
                ].map(([n, name, d]) => (
                  <div className="pipe-stage" key={n}><div className="pipe-num">{n}</div><div className="pipe-name">{name}</div><div className="pipe-desc">{d}</div></div>
                ))}
              </div>
              <div className="pipe">
                {[
                  ["09", "Find Approved", "Query sheet for ready rows"],
                  ["10", "Hierarchical Upload", "Course→Section→Unit→Lesson"],
                  ["11", "Write IDs Back", "Parent IDs to child rows"],
                  ["12", "Track Status", "Generation / review / upload / errors"],
                ].map(([n, name, d]) => (
                  <div className="pipe-stage" key={n}><div className="pipe-num">{n}</div><div className="pipe-name">{name}</div><div className="pipe-desc">{d}</div></div>
                ))}
              </div>
              <div className="alert">
                <strong>Why 12 stages, not one big workflow</strong>
                Each stage writes its result before the next stage reads it. That boundary is what makes lesson 27 failing harmless to lessons 1–26 — the pipeline never holds uncommitted work in memory across a failure point.
              </div>
            </div>

            {/* ═══ 6. DATA MODEL ═══ */}
            <div className="sec" id="data">
              <div className="sec-label">Section 8</div>
              <h2 className="sec-title">Data Model — Google Sheets Staging Schema</h2>
              <p style={{ fontSize: 13, color: "#57534e", marginBottom: 12 }}>Four tabs, one per hierarchy level, each carrying its own local key, its parent&apos;s key, and independent status columns.</p>
              <h3 className="sub">Shared Column Set (every tab)</h3>
              <table className="tbl">
                <thead><tr><th>Column</th><th>Type</th><th>Purpose</th></tr></thead>
                <tbody>
                  {[
                    ["row_uid", "string (stable)", "Deterministic key generated once — never regenerated on rerun"],
                    ["parent_uid", "string", "Points to parent row's row_uid (blank for Course tab)"],
                    ["api_id", "string, blank until upload", "ID returned by REST API — the dedup fingerprint"],
                    ["generation_status", "enum", "pending / generated / failed"],
                    ["review_status", "enum", "pending / approved / rejected"],
                    ["upload_status", "enum", "not_uploaded / uploading / uploaded / failed"],
                    ["error_message", "string", "Last error, cleared on success"],
                    ["attempt_count", "integer", "Retry counter, capped per stage"],
                    ["created_at / updated_at", "ISO timestamp", "Audit trail for every write"],
                  ].map(([c, t, p]) => <tr key={c}><td>{c}</td><td>{t}</td><td>{p}</td></tr>)}
                </tbody>
              </table>
              <h3 className="sub">Tab-Specific Fields</h3>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title blue">Course / Section / Unit</div>
                  <ul className="blist"><li>title, description, order_index</li><li>ai_prompt_used (for regeneration traceability)</li></ul>
                </div>
                <div className="card card-accent-green">
                  <div className="card-title green">Lesson</div>
                  <ul className="blist green"><li>title, outline, full_content, order_index</li><li>content_generated_at, content_approved_at</li></ul>
                </div>
              </div>
              <div className="alert amber">
                <strong>review_status vs upload_status — kept strictly separate</strong>
                A record can be approved but not yet uploaded (queued), or uploaded from a previous run and later edited (re-approval needed, but api_id already exists — the uploader treats this as an update, not a new create).
              </div>
            </div>

            {/* ═══ 7. DEDUP & IDEMPOTENCY ═══ */}
            <div className="sec" id="dedup">
              <div className="sec-label">Section 9</div>
              <h2 className="sec-title">Deduplication & Idempotency</h2>
              <div className="card card-accent">
                <div className="card-title blue">The Core Rule</div>
                <p style={{ fontSize: 13, color: "#44403c" }}>Before any upload call, the uploader checks <code>api_id</code>. Non-blank → record already exists upstream → skip create, optionally PATCH if content changed. Blank → safe to POST. This single check is what makes reruns safe at any scale.</p>
              </div>
              <table className="tbl">
                <thead><tr><th>Scenario</th><th>Behavior</th></tr></thead>
                <tbody>
                  <tr><td>Workflow rerun, row already uploaded</td><td>api_id present → skipped, no duplicate call</td></tr>
                  <tr><td>Row edited after upload, still approved</td><td>api_id present → PATCH instead of POST</td></tr>
                  <tr><td>Upload succeeded, ID write-back failed</td><td>Reconciliation step queries API by natural key before retrying create</td></tr>
                  <tr><td>Two workflow executions overlap</td><td>row_uid lock flag prevents concurrent processing of the same row</td></tr>
                  <tr><td>AI blueprint regenerated for same course</td><td>New row_uids only for genuinely new children — matched by title+order first</td></tr>
                </tbody>
              </table>
              <div className="alert red">
                <strong>Edge case handled: partial upload write-back failure</strong>
                If the API accepts a POST but the write-back to Sheets fails (network blip), a naive retry would create a second record. The reconciliation check queries the API for an existing child matching parent_id + title + order_index before ever issuing a second POST for that row.
              </div>
            </div>

            {/* ═══ 8. RELIABILITY ═══ */}
            <div className="sec" id="reliability">
              <div className="sec-label">Section 10</div>
              <h2 className="sec-title">Reliability & Resumability</h2>
              <div className="g2">
                <div className="card card-accent-green">
                  <div className="card-title green">Guarantee</div>
                  <ul className="blist green">
                    <li>Lesson 27 failing leaves lessons 1–26 fully saved and untouched</li>
                    <li>Only failed/incomplete rows are ever re-processed on rerun</li>
                    <li>Successfully uploaded records are never duplicated</li>
                    <li>Parent IDs are always resolved before child upload begins</li>
                    <li>Long-running generation resumes from last saved row, not from zero</li>
                  </ul>
                </div>
                <div className="card card-accent">
                  <div className="card-title blue">How It&apos;s Achieved</div>
                  <ul className="blist">
                    <li>Per-lesson generation loop writes to Sheets immediately after each success</li>
                    <li>Every stage filters its input by status column, not by &ldquo;all rows&rdquo;</li>
                    <li>n8n batching processes one lesson/record at a time, not one giant array in memory</li>
                    <li>Hierarchical upload queries child-readiness (parent api_id present) before proceeding</li>
                    <li>Sub-workflows are independently retriable without re-invoking the parent</li>
                  </ul>
                </div>
              </div>
              <h3 className="sub">Retry Policy</h3>
              <table className="tbl">
                <thead><tr><th>Failure Type</th><th>Retry Strategy</th><th>Cap</th></tr></thead>
                <tbody>
                  <tr><td>LLM timeout / rate limit</td><td>Exponential backoff (2s, 4s, 8s)</td><td>3 attempts</td></tr>
                  <tr><td>API 5xx / network error</td><td>Exponential backoff, then mark failed</td><td>3 attempts</td></tr>
                  <tr><td>API 4xx (bad payload)</td><td>No retry — logged as validation error, held for human fix</td><td>0 attempts</td></tr>
                  <tr><td>Sheets write conflict</td><td>Immediate single retry</td><td>1 attempt</td></tr>
                </tbody>
              </table>
            </div>

            {/* ═══ 9. ERROR HANDLING ═══ */}
            <div className="sec" id="errors">
              <div className="sec-label">Section 11</div>
              <h2 className="sec-title">Error Handling & Logging</h2>
              <div className="alert">
                <strong>Every error is captured at the row it belongs to</strong>
                error_message and attempt_count live on the row itself — no separate log table to cross-reference. Opening the sheet answers &ldquo;what broke and why&rdquo; without touching n8n.
              </div>
              <table className="tbl">
                <thead><tr><th>Layer</th><th>On Failure</th></tr></thead>
                <tbody>
                  <tr><td>AI blueprint generation</td><td>generation_status=failed, error_message set, row held for manual regenerate trigger</td></tr>
                  <tr><td>Lesson content generation</td><td>Row marked failed, loop continues to next lesson — never blocks the batch</td></tr>
                  <tr><td>API upload</td><td>upload_status=failed, error_message includes HTTP status + response body</td></tr>
                  <tr><td>Workflow-level exception</td><td>n8n Error Trigger workflow captures execution ID, node, and payload for debugging</td></tr>
                </tbody>
              </table>
            </div>

            {/* ═══ 10. SCALING ═══ */}
            <div className="sec" id="scaling">
              <div className="sec-label">Section 12</div>
              <h2 className="sec-title">Scaling Considerations</h2>
              <ul className="blist">
                <li>Batch/loop nodes process N lessons per run, not one massive AI call per course</li>
                <li>Google Sheets read/write batched to stay under API rate limits as course count grows</li>
                <li>Sub-workflows (generate, upload, retry) callable independently for future multi-course parallelism</li>
                <li>Sheets staging is a v1 constraint by design — the API/schema-first data model means migrating staging to a database later doesn&apos;t touch the REST API integration</li>
                <li>Correlation via row_uid means work can be sharded across multiple workflow executions without collision</li>
              </ul>
            </div>

            {/* ═══ 11. TESTING & QA ═══ */}
            <div className="sec" id="testing">
              <div className="sec-label">Section 13</div>
              <h2 className="sec-title">Testing & QA Strategy</h2>
              <table className="tbl">
                <thead><tr><th>Test</th><th>Validates</th></tr></thead>
                <tbody>
                  <tr><td>Single course, happy path</td><td>Full pipeline: input → blueprint → approval → generation → upload → ID write-back</td></tr>
                  <tr><td>Kill workflow mid-lesson-generation</td><td>Rerun resumes at the failed lesson, prior lessons untouched</td></tr>
                  <tr><td>Rerun after full success</td><td>Zero duplicate API records created</td></tr>
                  <tr><td>Reject a record, re-approve later</td><td>Upload proceeds only after review_status flips to approved</td></tr>
                  <tr><td>Force an API 500 on one lesson</td><td>Only that lesson marked failed; siblings upload normally</td></tr>
                  <tr><td>Edit an already-uploaded record</td><td>Uploader issues PATCH using stored api_id, not a duplicate POST</td></tr>
                </tbody>
              </table>
            </div>

            {/* ═══ 12. SECURITY ═══ */}
            <div className="sec" id="security">
              <div className="sec-label">Section 14</div>
              <h2 className="sec-title">Security & Credentials</h2>
              <ul className="blist">
                <li>API credentials stored in n8n&apos;s encrypted credential store — never hardcoded in nodes</li>
                <li>Dev vs. production API keys swappable via credential reference, no workflow edits</li>
                <li>Google Sheets access scoped to a dedicated service account, least-privilege</li>
                <li>LLM prompts and responses logged only as much as needed for debugging — no unnecessary retention</li>
              </ul>
            </div>

            {/* ═══ 13. SUB-WORKFLOWS ═══ */}
            <div className="sec" id="subworkflows">
              <div className="sec-label">Section 15</div>
              <h2 className="sec-title">Sub-Workflow Breakdown</h2>
              <div className="g3">
                {[
                  { Icon: Blocks, name: "Blueprint Workflow", desc: "Sheet trigger → LLM structured call → explode into Course/Section/Unit/Lesson rows → write to staging." },
                  { Icon: PenLine, name: "Generate-Lesson Sub-Workflow", desc: "Called per approved outline. Generates content, saves immediately, returns status to parent loop." },
                  { Icon: UploadCloud, name: "Upload Sub-Workflow", desc: "Called per approved record. Checks api_id, POST or PATCH, writes ID + status back, retries on transient failure." },
                ].map((s) => (
                  <div className="tech-card" key={s.name}>
                    <div className="tech-icon"><s.Icon size={20} color="#EC420F" /></div>
                    <div className="tech-name">{s.name}</div>
                    <div className="tech-desc">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ 14. MILESTONES ═══ */}
            <div className="sec" id="milestones">
              <div className="sec-label">Section 16</div>
              <h2 className="sec-title">Delivery Milestones</h2>
              {[
                ["M1", "Blueprint & staging workflow", "#EC420F"],
                ["M2", "Human review/approval loop in Sheets", "#d8681d"],
                ["M3", "Lesson content generation, per-item save", "#c79573"],
                ["M4", "Hierarchical API uploader + ID write-back", "#a16207"],
                ["M5", "Retry, dedup, and resume hardening", "#78716c"],
                ["M6", "End-to-end test course + documentation", "#1c1917"],
              ].map(([n, name, color]) => (
                <div className="ms-bar" key={n}>
                  <div className="ms-icon" style={{ background: color as string }}>{n}</div>
                  <div className="ms-info"><div className="ms-name">{name}</div></div>
                </div>
              ))}
            </div>

            {/* ═══ 15. RISKS ═══ */}
            <div className="sec" id="risk">
              <div className="sec-label">Section 17</div>
              <h2 className="sec-title">Risks & Mitigations</h2>
              <table className="tbl">
                <thead><tr><th>Risk</th><th>Mitigation</th></tr></thead>
                <tbody>
                  <tr><td>LLM output doesn&apos;t match expected structure</td><td>Structured/JSON-mode prompting + schema validation before staging write</td></tr>
                  <tr><td>Google Sheets API rate limits at scale</td><td>Batched reads/writes, backoff on 429</td></tr>
                  <tr><td>Concurrent workflow runs corrupt shared rows</td><td>Row-level lock flag + status-filtered queries</td></tr>
                  <tr><td>Postman collection diverges from live API</td><td>Contract validated against dev credentials before upload logic is finalized</td></tr>
                </tbody>
              </table>
            </div>

            {/* ═══ 16. Q&A ═══ */}
            <div className="sec" id="answers">
              <div className="sec-label">Section 18</div>
              <h2 className="sec-title">Screening Questions & Answers</h2>
              <p style={{ fontSize: 13, color: "#57534e", marginBottom: 12 }}>Verbatim answers submitted with the proposal.</p>
              {[
                ["What is your experience with n8n and OpenAI/LLM workflows?", "Strong hands-on experience on real client projects. For Dr. Antonio, designed and deployed a self-hosted n8n workflow powering a WhatsApp assistant (SOFIA), integrated with Zoho and Sisclinic in Brazil to handle patient bookings end to end — happy path and every edge case, including radiology report delivery and follow-ups. For Mr. Jack Scanlan, built an n8n workflow paired with a voice agent for a roofing business, live at onerooff.com. Both projects involved heavy LLM-driven conversation, external API integration, and edge-case handling — exactly the reliability and structured workflow design this curriculum project calls for."],
                ["Have you built resumable workflows where individual failed items can be retried?", "Yes, item-level retry is built in deliberately. Every record is saved with its own status the moment it's processed, so state lives outside the run. If item 27 fails, items 1–26 stay saved and are skipped on the next run, and only 27 gets reprocessed. Status is checked before acting on each item, so successful records are never duplicated on a rerun. For this project, generation, review, and upload status would be tracked separately so a retry at one stage never disturbs another, with clear error logging for what failed and why."],
                ["How would you prevent duplicate API uploads when a workflow is rerun?", "The upload step is idempotent, driven by status, not by the run. Each record has an upload-status field and a slot for the ID the API returns. Before every call, that field is checked — already uploaded with an ID means the record is skipped; only unsent or failed records upload on a rerun. The moment the API returns success, status and returned ID are written back to the sheet immediately, so the record is locked as done even if the workflow stops right after. This matters twice for the hierarchy: saving a parent's ID on first success keeps parents from being recreated, and children from pointing at the wrong parent."],
                ["How would you manage course/section/unit/lesson parent-child IDs?", "The hierarchy is managed top-down, so a parent always has a real ID before any child uploads. Each staging row has an ID column for the API-returned ID plus a parent-reference column pointing to its parent row. Uploads run in strict order: Course, then Sections, then Units, then Lessons. When a Course uploads, its returned API ID is written back immediately. Each Section then reads its parent Course's saved ID and sends it as the parent reference — Units read their Section's ID, Lessons read their Unit's ID, same pattern down the chain. Because parent IDs are saved the moment they're created, children always resolve to the correct parent, and reruns reuse existing IDs instead of recreating parents."],
                ["Would you recommend one workflow or multiple sub-workflows for this project?", "Multiple sub-workflows, not one large one. The project has clear stages triggered at different times — blueprint generation, lesson generation, and API upload — with human approval in between. Forcing all of that into one workflow makes it hard to test, hard to rerun one part, and fragile when something fails midway. Splitting it into three focused sub-workflows: Blueprint (read input, generate the blueprint, break it into records, stage them), Lesson Generation (take approved outlines, generate content, save each one immediately), and Upload (find approved records, push them through the API in hierarchy order, save returned IDs back). Each can be triggered on its own, so a retry only reruns the stage that failed. A small orchestrator can tie them together later for one-click runs if wanted."],
              ].map(([q, a], i) => (
                <div className="qa" key={i as number}>
                  <div className="qa-q"><span className="qa-num">{i + 1}</span>{q}</div>
                  <div className="qa-a">{a}</div>
                </div>
              ))}
            </div>

            {/* ═══ 17. GLOSSARY ═══ */}
            <div className="sec" id="glossary">
              <div className="sec-label">Section 19</div>
              <h2 className="sec-title">Glossary</h2>
              <table className="tbl">
                <tbody>
                  {[
                    ["Blueprint", "AI-generated course skeleton before it's split into records"],
                    ["Staging", "Google Sheets rows awaiting human review before upload"],
                    ["row_uid", "Stable per-row key used for dedup and resumability"],
                    ["api_id", "ID returned by the REST API once a record is created — the dedup fingerprint"],
                    ["Idempotent upload", "Re-running the uploader never creates duplicate records"],
                    ["Sub-workflow", "Independently callable n8n workflow invoked by the main pipeline"],
                  ].map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
                </tbody>
              </table>
            </div>

            </div>
          </div>

          {/* ═══ FOOTER ═══ */}
          <div className="foot">
            <div className="foot-grid">
              <div className="foot-item"><strong>Project</strong><span>Curriculum Workflow</span></div>
              <div className="foot-item"><strong>Engine</strong><span>n8n</span></div>
              <div className="foot-item"><strong>Backend</strong><span>Existing REST API</span></div>
              <div className="foot-item"><strong>Status</strong><span>Proposal — Awaiting Approval</span></div>
            </div>
            <p>Confidential — <strong>Curriculum Workflow Project Bible</strong> — For authorized recipients only</p>
          </div>
        </div>
      )}
    </>
  );
}
