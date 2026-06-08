"use client";
import { useState, useEffect } from "react";
import {
  Phone, PhoneIncoming, Mic, MessageSquare, Zap,
  Shield, BrainCircuit, Globe, Clock, Users,
  FileText, Video, Rocket, CheckCircle, Headphones,
  Eye, EyeOff,
} from "lucide-react";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Manrope:wght@200;300;400;500;600;700;800&family=Lato:wght@100;300;400;700;900&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Manrope','Segoe UI',system-ui,-apple-system,sans-serif;}

/* ── LOGIN ── */
#login-screen{
  position:fixed;inset:0;z-index:9999;
  display:flex;align-items:center;justify-content:center;
  background:#0a0a0a;overflow:hidden;
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
.login-card .subtitle{text-align:center;color:#737373;font-size:13px;margin-bottom:36px;font-weight:500;}
.field{margin-bottom:20px;}
.field label{display:block;font-size:11px;font-weight:700;letter-spacing:.08em;color:#a3a3a3;margin-bottom:8px;text-transform:uppercase;font-family:'Lato',sans-serif;}
.field-input-wrap{position:relative;}
.field input{
  width:100%;padding:14px 16px;background:#1a1a1a;
  border:1.5px solid #2a2a2a;border-radius:12px;color:#f5f5f5;font-size:14.5px;outline:none;
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
.login-btn{
  width:100%;padding:15px;margin-top:8px;
  background:linear-gradient(135deg,#EC420F,#d8681d);
  border:none;border-radius:12px;color:#fff;font-size:15px;font-weight:700;cursor:pointer;
  letter-spacing:.02em;transition:all .2s;box-shadow:0 4px 14px rgba(236,66,15,.3);
}
.login-btn:hover{box-shadow:0 8px 24px rgba(236,66,15,.4);transform:translateY(-1px);}
.login-btn:active{transform:translateY(0);box-shadow:0 2px 8px rgba(236,66,15,.2);}
.login-error{
  text-align:center;color:#ef4444;font-size:13px;margin-top:14px;
  padding:10px 14px;background:rgba(239,68,68,.1);border-radius:10px;border:1px solid rgba(239,68,68,.2);font-weight:500;
}
.login-footer{text-align:center;margin-top:32px;color:#525252;font-size:12px;font-weight:500;}
.login-divider{display:flex;align-items:center;gap:12px;margin:24px 0 4px;color:#404040;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;}
.login-divider::before,.login-divider::after{content:'';flex:1;height:1px;background:#2a2a2a;}
.shake{animation:shake .35s ease;}
@keyframes shake{0%,100%{transform:translateX(0);}20%{transform:translateX(-6px);}40%{transform:translateX(6px);}60%{transform:translateX(-4px);}80%{transform:translateX(4px);}}

/* ── MAIN WRAP ── */
.pw{position:fixed;inset:0;z-index:9999;background:#fafaf9;color:#1c1917;overflow-y:auto;overflow-x:hidden;line-height:1.65;font-size:14px;font-family:'Manrope',sans-serif;}
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
.topnav-links a{color:#78716c;font-size:12px;font-weight:600;padding:6px 10px;border-radius:6px;text-decoration:none;white-space:nowrap;transition:.15s;font-family:'Lato',sans-serif;}
.topnav-links a:hover{color:#EC420F;background:rgba(236,66,15,.06);}

/* ── HERO ── */
.hero{background:linear-gradient(135deg,#1c1917 0%,#292524 50%,#1c1917 100%);padding:64px 40px 56px;color:#fff;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;top:-40%;right:-10%;width:600px;height:600px;background:radial-gradient(circle,rgba(236,66,15,.1) 0%,transparent 70%);}
.hero::after{content:'';position:absolute;bottom:-30%;left:-10%;width:500px;height:500px;background:radial-gradient(circle,rgba(199,149,115,.08) 0%,transparent 70%);}
.hero-inner{position:relative;z-index:1;max-width:920px;margin:0 auto;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(236,66,15,.12);border:1px solid rgba(236,66,15,.25);color:#f9a88a;padding:6px 14px;border-radius:99px;font-size:12px;font-weight:600;letter-spacing:.05em;margin-bottom:20px;font-family:'Lato',sans-serif;}
.hero h1{font-size:42px;font-weight:700;line-height:1.15;margin-bottom:12px;font-family:'Playfair Display',serif;letter-spacing:-.01em;}
.hero h1 span{background:linear-gradient(90deg,#EC420F,#d8681d);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-stats{display:flex;flex-wrap:wrap;gap:28px;margin-top:28px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08);}
.hstat{text-align:center;}
.hstat-val{font-size:28px;font-weight:800;color:#EC420F;font-family:'Lato',sans-serif;}
.hstat-val.warm{color:#c79573;}
.hstat-lbl{font-size:10px;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em;margin-top:2px;font-family:'Lato',sans-serif;}

/* ── LAYOUT WITH SIDEBAR ── */
.content-wrap{display:flex;max-width:1200px;margin:0 auto;padding:40px 24px 80px;gap:40px;}
.content{flex:1;min-width:0;}
.sidebar{position:sticky;top:72px;width:220px;max-height:calc(100vh - 90px);overflow-y:auto;flex-shrink:0;padding:16px 0;}
.sidebar::-webkit-scrollbar{width:3px;}
.sidebar::-webkit-scrollbar-thumb{background:#d6d3d1;border-radius:99px;}
.sidebar-title{font-family:'Lato',sans-serif;font-size:14px;font-weight:900;text-transform:uppercase;letter-spacing:.08em;color:#1c1917;margin-bottom:8px;}
.sidebar-bar{width:40%;height:4px;border-radius:99px;background:linear-gradient(to right,#EC420F,#d8681d);margin-bottom:16px;}
.sidebar a{display:flex;align-items:center;gap:8px;padding:5px 10px;margin-bottom:2px;font-size:12.5px;font-weight:500;color:#78716c;text-decoration:none;border-radius:6px;transition:.15s;border-left:2px solid transparent;}
.sidebar a:hover{color:#EC420F;background:rgba(236,66,15,.04);border-left-color:#EC420F;}
.sidebar a .dot{width:5px;height:5px;border-radius:50%;background:#d6d3d1;flex-shrink:0;transition:.15s;}
.sidebar a:hover .dot{background:#EC420F;}

/* ── SECTIONS ── */
.sec{margin-bottom:56px;}
.sec-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#EC420F;margin-bottom:4px;font-family:'Lato',sans-serif;}
h2.sec-title{font-size:24px;font-weight:700;color:#1c1917;margin-bottom:16px;padding-bottom:10px;border-bottom:2px solid #e7e5e4;font-family:'Playfair Display',serif;}
h3.sub{font-size:16px;font-weight:700;color:#292524;margin:20px 0 10px;font-family:'Lato',sans-serif;}

/* ── CARDS ── */
.card{background:#fff;border:1px solid #e7e5e4;border-radius:12px;padding:20px 22px;margin-bottom:14px;box-shadow:0 1px 3px rgba(0,0,0,.04);transition:box-shadow .2s;}
.card:hover{box-shadow:0 4px 16px rgba(0,0,0,.07);}
.card-accent{border-left:4px solid #EC420F;}
.card-accent-warm{border-left:4px solid #c79573;}
.card-accent-amber{border-left:4px solid #d8681d;}
.card-accent-red{border-left:4px solid #ef4444;}
.card-accent-slate{border-left:4px solid #78716c;}
.card-title{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px;font-family:'Lato',sans-serif;}
.card-title.orange{color:#EC420F;}
.card-title.warm{color:#c79573;}
.card-title.amber{color:#d8681d;}
.card-title.red{color:#dc2626;}
.card-title.slate{color:#78716c;}

/* ── GRID ── */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;}

/* ── TABLES ── */
.tbl{width:100%;border-collapse:separate;border-spacing:0;margin-bottom:16px;font-size:13px;border-radius:10px;overflow:hidden;border:1px solid #e7e5e4;}
.tbl thead tr{background:#fafaf9;}
.tbl thead th{padding:10px 14px;text-align:left;font-weight:700;color:#78716c;font-size:12px;letter-spacing:.03em;border-bottom:2px solid #e7e5e4;font-family:'Lato',sans-serif;}
.tbl tbody tr{border-bottom:1px solid #f5f5f4;transition:background .1s;}
.tbl tbody tr:hover{background:#fafaf9;}
.tbl tbody tr:last-child td{border-bottom:none;}
.tbl td{padding:10px 14px;vertical-align:top;border-bottom:1px solid #f5f5f4;color:#44403c;}
.tbl td:first-child{font-weight:600;color:#1c1917;}
.tbl .total-row td{background:rgba(199,149,115,.08);font-weight:800;border-top:2px solid #1c1917!important;}
.tbl .grand-row td{background:#1c1917;color:#fff!important;font-weight:800;}
.tbl .grand-row td:last-child{color:#f9a88a!important;font-size:16px;}

/* ── BADGES ── */
.badge{display:inline-block;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:700;font-family:'Lato',sans-serif;}
.badge-orange{background:rgba(236,66,15,.1);color:#EC420F;}
.badge-warm{background:rgba(199,149,115,.15);color:#92400e;}
.badge-amber{background:rgba(216,104,29,.1);color:#d8681d;}
.badge-red{background:#fee2e2;color:#dc2626;}
.badge-slate{background:#f5f5f4;color:#78716c;}
.badge-green{background:#dcfce7;color:#15803d;}

/* ── BULLET LIST ── */
.blist{list-style:none;padding:0;margin:0;}
.blist li{padding:4px 0 4px 16px;position:relative;font-size:13px;color:#44403c;line-height:1.55;}
.blist li::before{content:'';position:absolute;left:0;top:11px;width:6px;height:6px;border-radius:50%;background:#EC420F;}
.blist.warm li::before{background:#c79573;}
.blist.amber li::before{background:#d8681d;}
.blist.red li::before{background:#ef4444;}

/* ── ALERTS ── */
.alert{border-left:4px solid #EC420F;background:rgba(236,66,15,.04);padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:16px;font-size:14px;color:#7c2d12;}
.alert.warm{border-color:#c79573;background:rgba(199,149,115,.08);color:#78350f;}
.alert.amber{border-color:#d8681d;background:rgba(216,104,29,.06);color:#78350f;}
.alert.red{border-color:#ef4444;background:#fef2f2;color:#7f1d1d;}
.alert strong{display:block;margin-bottom:3px;font-family:'Lato',sans-serif;}

/* ── TECH CARD ── */
.tech-card{background:#fff;border:1px solid #e7e5e4;border-radius:12px;padding:20px 18px;border-top:4px solid #EC420F;transition:transform .15s,box-shadow .15s;}
.tech-card:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.08);}
.tech-name{font-size:15px;font-weight:700;color:#1c1917;font-family:'Manrope',sans-serif;}
.tech-role{font-size:12px;font-weight:600;margin-bottom:6px;font-family:'Lato',sans-serif;}
.tech-desc{font-size:12px;color:#78716c;line-height:1.5;}

/* ── MILESTONE BARS ── */
.ms-bar{display:flex;align-items:center;gap:14px;padding:16px 20px;background:#fff;border:1px solid #e7e5e4;border-radius:12px;margin-bottom:10px;box-shadow:0 1px 3px rgba(0,0,0,.04);transition:box-shadow .15s;}
.ms-bar:hover{box-shadow:0 4px 16px rgba(0,0,0,.08);}
.ms-icon{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;}
.ms-info{flex:1;}
.ms-label{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#a8a29e;margin-bottom:2px;font-family:'Lato',sans-serif;}
.ms-name{font-size:14px;font-weight:700;color:#1c1917;font-family:'Manrope',sans-serif;}
.ms-days{font-size:12px;color:#a8a29e;margin-top:1px;}
.ms-price{font-size:20px;font-weight:800;color:#EC420F;font-family:'Lato',sans-serif;white-space:nowrap;}

/* ── DELIV GRID ── */
.deliv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-bottom:16px;}
.deliv-card{background:#fff;border:1px solid #e7e5e4;border-radius:10px;padding:14px 16px;display:flex;align-items:flex-start;gap:12px;}
.deliv-icon{width:34px;height:34px;border-radius:8px;background:linear-gradient(135deg,#EC420F,#d8681d);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.deliv-card h4{font-size:13px;font-weight:700;color:#1c1917;margin-bottom:2px;font-family:'Manrope',sans-serif;}
.deliv-card p{font-size:12px;color:#78716c;margin:0;line-height:1.5;}

/* ── FUTURE PRICING ── */
.price-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:16px 0;}
.price-card{background:#fff;border:1px solid #e7e5e4;border-radius:10px;padding:18px;text-align:center;}
.price-card .pval{font-size:24px;font-weight:800;color:#EC420F;font-family:'Lato',sans-serif;margin-bottom:4px;}
.price-card .plabel{font-size:11px;font-weight:700;color:#a8a29e;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;font-family:'Lato',sans-serif;}
.price-card p{font-size:12px;color:#78716c;margin:0;line-height:1.5;}

/* ── QA ── */
.qa{margin-bottom:10px;background:#fff;border:1px solid #e7e5e4;border-radius:10px;overflow:hidden;}
.qa-q{background:#fafaf9;padding:12px 16px;font-weight:700;font-size:14px;color:#1c1917;border-bottom:1px solid #e7e5e4;display:flex;align-items:center;gap:10px;font-family:'Manrope',sans-serif;}
.qa-num{width:24px;height:24px;border-radius:50%;background:#EC420F;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.qa-a{padding:12px 16px;font-size:13.5px;color:#57534e;line-height:1.65;}

/* ── FOOTER ── */
.foot{background:linear-gradient(135deg,#1c1917,#292524);color:rgba(255,255,255,.55);text-align:center;padding:40px 24px;font-size:13px;}
.foot-grid{display:flex;justify-content:center;flex-wrap:wrap;gap:32px;margin-bottom:24px;}
.foot-item strong{color:#EC420F;display:block;font-size:11px;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;font-family:'Lato',sans-serif;}
.foot-item span{color:#e7e5e4;font-size:15px;font-weight:600;}

/* ── RESPONSIVE ── */
@media(max-width:1024px){.sidebar{display:none;}.content-wrap{padding:28px 14px 60px;}}
@media(max-width:768px){
  .g2,.g3{grid-template-columns:1fr;}
  .hero{padding:40px 20px 36px;}.hero h1{font-size:28px;}
  .topnav{padding:0 14px;height:50px;}
  .topnav-links{display:none;}
  .tbl{font-size:12px;}.tbl td,.tbl th{padding:8px 10px;}
  .deliv-grid{grid-template-columns:1fr;}
}
`;

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "platform",  label: "Why VAPI" },
  { id: "milestones", label: "Milestones" },
  { id: "deliverables", label: "Deliverables" },
  { id: "scope", label: "Scope Check" },
  { id: "future", label: "Future Work" },
  { id: "next", label: "Next Steps" },
];

export default function JeanProposal() {
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

      {/* ═══ LOGIN ═══ */}
      {!loggedIn && (
        <div id="login-screen">
          <div className={`login-card${shake ? " shake" : ""}`}>
            <div className="login-logo"><Mic size={26} color="#fff" /></div>
            <h1>Proposal Portal</h1>
            <p className="subtitle">AI Voice Receptionist · Healthcare Automation · Restricted Access</p>
            <div className="field">
              <label>Username</label>
              <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={(e) => e.key === "Enter" && doLogin()} autoComplete="off" />
            </div>
            <div className="field">
              <label>Password</label>
              <div className="field-input-wrap">
                <input type={showPass ? "text" : "password"} placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && doLogin()} autoComplete="off" style={{ paddingRight: 44 }} />
                <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)} tabIndex={-1}>
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <button className="login-btn" onClick={doLogin}>Access Proposal</button>
            {error && <div className="login-error">Incorrect credentials. Please try again.</div>}
            <div className="login-divider">Restricted</div>
            <p className="login-footer">Confidential — For authorized recipients only</p>
          </div>
        </div>
      )}

      {/* ═══ PROPOSAL ═══ */}
      {loggedIn && (
        <div className="pw">

          {/* NAV */}
          <nav className="topnav">
            <div className="topnav-brand"><span className="topnav-dot" />AI Voice Receptionist — Proposal</div>
            <div className="topnav-links">
              {NAV.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
            </div>
          </nav>

          {/* HERO */}
          <div className="hero">
            <div className="hero-inner">
              <div className="hero-badge">Proposal v1 · Healthcare AI Voice Automation · June 2026</div>
              <h1>AI Voice <span>Receptionist</span></h1>
              <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, maxWidth: 620, lineHeight: 1.7 }}>
                A production-ready AI Voice Receptionist built on VAPI for US medical practices. Answers calls, routes urgencies, takes messages, integrates with GoHighLevel, and deploys as a reusable template — so you can onboard new clients in hours, not weeks.
              </p>
              <div className="hero-stats">
                <div className="hstat"><div className="hstat-val warm">$2,000</div><div className="hstat-lbl">Fixed Price</div></div>
                <div className="hstat"><div className="hstat-val">3</div><div className="hstat-lbl">Milestones</div></div>
                <div className="hstat"><div className="hstat-val">30</div><div className="hstat-lbl">Days</div></div>
                <div className="hstat"><div className="hstat-val">4</div><div className="hstat-lbl">Integrations</div></div>
                <div className="hstat"><div className="hstat-val">100%</div><div className="hstat-lbl">Your IP</div></div>
              </div>
            </div>
          </div>

          <div className="content-wrap">

            {/* SIDEBAR */}
            <aside className="sidebar">
              <div className="sidebar-title">Contents</div>
              <div className="sidebar-bar" />
              {NAV.map((n) => (
                <a key={n.id} href={`#${n.id}`}><span className="dot" />{n.label}</a>
              ))}
            </aside>

            <div className="content">

              {/* ── OVERVIEW ── */}
              <div className="sec" id="overview">
                <div className="sec-label">Section 1</div>
                <h2 className="sec-title">Opening Statement &amp; Fit</h2>

                <div className="alert warm">
                  <strong>&ldquo;I have built AI voice receptionists before.&rdquo;</strong>
                  I have personally designed and deployed AI voice receptionist systems for service-based businesses, including healthcare-adjacent workflows covering appointment handling, caller triage, message capture, and CRM integration via GoHighLevel and Make.com. What I build for you is grounded in production experience, not theory.
                </div>

                <div className="g2">
                  <div className="card card-accent">
                    <div className="card-title orange">Why I Am the Right Partner</div>
                    <ul className="blist">
                      <li>Hands-on VAPI builds with custom LLM tool calls and webhook flows</li>
                      <li>GoHighLevel CRM architecture for multi-client agency models</li>
                      <li>Make.com automation across healthcare intake and follow-up workflows</li>
                      <li>Healthcare workflow knowledge — urgency triage, patient experience, after-hours protocols</li>
                      <li>All systems built in accounts you own — no vendor lock-in, ever</li>
                    </ul>
                  </div>
                  <div className="card card-accent-warm">
                    <div className="card-title warm">Project at a Glance</div>
                    <table className="tbl">
                      <tbody>
                        {[
                          ["Platform", "VAPI AI"],
                          ["Phone Layer", "Twilio"],
                          ["CRM", "GoHighLevel"],
                          ["Automation", "Make.com"],
                          ["SMS", "Twilio"],
                          ["Total Price", "$2,000 Fixed"],
                          ["Milestones", "3"],
                          ["Timeline", "30 Days"],
                          ["EMR Integration", "Not required (V1)"],
                          ["IP Ownership", "100% yours on final payment"],
                        ].map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="alert amber">
                  <strong>Long-Term Partnership Model</strong>
                  You focus on business development and client relationships. I build, maintain, and deploy the technical systems. Every new client you sign is a 2–4 hour deployment using the template we build together. Your margin improves with every client added.
                </div>
              </div>

              {/* ── WHY VAPI ── */}
              <div className="sec" id="platform">
                <div className="sec-label">Section 2</div>
                <h2 className="sec-title">Platform Recommendation — Why VAPI</h2>

                <div className="alert">
                  <strong>Recommended: VAPI over Retell or Bland</strong>
                  After evaluating all three platforms against your specific requirements — multi-client scalability, GoHighLevel integration, Twilio compatibility, and healthcare-appropriate voice quality — VAPI is the clear choice.
                </div>

                <div className="g3">
                  {[
                    { icon: <BrainCircuit size={20} color="#fff" />, color: "#EC420F", name: "VAPI AI", role: "Primary — Recommended", desc: "Deepest API surface, native tool calls mid-call, full transcript webhooks, and reusable assistant templates built for multi-client deployment." },
                    { icon: <Headphones size={20} color="#fff" />, color: "#78716c", name: "Retell AI", role: "Alternative — Not Selected", desc: "Strong product but more manual per-client setup. Less mature GoHighLevel integration documentation than VAPI." },
                    { icon: <Phone size={20} color="#fff" />, color: "#78716c", name: "Bland AI", role: "Alternative — Not Selected", desc: "Good for high-volume outbound. Inbound healthcare use cases are less documented. VAPI leads here." },
                  ].map((t) => (
                    <div className="tech-card" key={t.name} style={{ borderTopColor: t.color }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 34, height: 34, borderRadius: 8, background: t.color, display: "flex", alignItems: "center", justifyContent: "center" }}>{t.icon}</div>
                        <div className="tech-name">{t.name}</div>
                      </div>
                      <div className="tech-role" style={{ color: t.color }}>{t.role}</div>
                      <div className="tech-desc">{t.desc}</div>
                    </div>
                  ))}
                </div>

                <h3 className="sub">Five Reasons VAPI Wins for Your Business Model</h3>
                <div className="g2">
                  <div className="card card-accent">
                    <div className="card-title orange">Technical Advantages</div>
                    <ul className="blist">
                      <li><strong>Reusable assistant templates.</strong> One JSON export, parameterized per client. New deployments take hours, not days.</li>
                      <li><strong>Native Twilio support.</strong> Plug in any phone number, including existing client numbers — zero patient re-education.</li>
                      <li><strong>Real-time tool calls.</strong> The agent can look up practice hours, check appointment slots, or trigger CRM actions mid-conversation without interrupting the call.</li>
                      <li><strong>Full transcript webhooks.</strong> Every call ends with a structured payload: transcript, summary, caller data — flows directly into GoHighLevel.</li>
                    </ul>
                  </div>
                  <div className="card card-accent-amber">
                    <div className="card-title amber">Business Model Fit</div>
                    <ul className="blist amber">
                      <li><strong>Per-minute pricing.</strong> Cost scales with usage, not per assistant. You pay nothing extra to add a new client assistant.</li>
                      <li><strong>ElevenLabs voice quality.</strong> Calm, professional, gender-neutral tone — exactly what medical patients expect when calling a practice.</li>
                      <li><strong>Active healthcare community.</strong> The largest community of VAPI builders in healthcare use cases — documentation, patterns, and support are mature.</li>
                      <li><strong>Future EMR-ready.</strong> VAPI&apos;s tool call architecture is the cleanest path to future Epic/athenahealth integrations when you&apos;re ready.</li>
                    </ul>
                  </div>
                </div>

                <h3 className="sub">Full Technology Stack</h3>
                <div className="g3">
                  {[
                    { icon: <BrainCircuit size={20} color="#fff" />, color: "#EC420F", name: "VAPI AI", role: "Voice Agent Core", desc: "Assistant configuration, LLM routing, speech-to-text, TTS voice output, call webhooks." },
                    { icon: <Globe size={20} color="#fff" />, color: "#d8681d", name: "Twilio", role: "Phone Layer + SMS", desc: "Phone number provisioning, call routing, SMS delivery for follow-ups and notifications." },
                    { icon: <Users size={20} color="#fff" />, color: "#c79573", name: "GoHighLevel", role: "CRM Integration", desc: "Contact creation, call transcript notes, appointment request logging, tag-based workflows." },
                    { icon: <Zap size={20} color="#fff" />, color: "#92400e", name: "Make.com", role: "Automation Layer", desc: "End-of-call webhook processing, SMS triggers, staff alerts, cross-platform data sync." },
                    { icon: <Shield size={20} color="#fff" />, color: "#78716c", name: "OpenAI GPT-4o", role: "LLM Backbone", desc: "Healthcare-trained system prompt powering conversation understanding and response generation." },
                    { icon: <Headphones size={20} color="#fff" />, color: "#44403c", name: "ElevenLabs", role: "Voice Synthesis", desc: "Professional voice model tuned for medical office tone — calm, clear, and patient-appropriate." },
                  ].map((t) => (
                    <div className="tech-card" key={t.name} style={{ borderTopColor: t.color }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 34, height: 34, borderRadius: 8, background: t.color, display: "flex", alignItems: "center", justifyContent: "center" }}>{t.icon}</div>
                        <div className="tech-name">{t.name}</div>
                      </div>
                      <div className="tech-role" style={{ color: t.color }}>{t.role}</div>
                      <div className="tech-desc">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── MILESTONES ── */}
              <div className="sec" id="milestones">
                <div className="sec-label">Section 3</div>
                <h2 className="sec-title">Project Milestones — $2,000 Fixed Price</h2>

                <div className="alert">
                  <strong>Three milestones. No hourly billing. No hidden costs.</strong>
                  Each milestone has clear acceptance criteria. Payment releases only when you confirm the criteria are met. All deliverables are yours immediately upon acceptance.
                </div>

                {/* M1 */}
                <div className="ms-bar">
                  <div className="ms-icon" style={{ background: "linear-gradient(135deg,#EC420F,#d8681d)" }}>
                    <Mic size={20} color="#fff" />
                  </div>
                  <div className="ms-info">
                    <div className="ms-label">Milestone 1 · Days 1–10</div>
                    <div className="ms-name">Foundation &amp; Voice Core</div>
                    <div className="ms-days">VAPI setup · Twilio phone · Healthcare persona · FAQ knowledge base · Business hours logic</div>
                  </div>
                  <div className="ms-price">$600</div>
                </div>
                <div className="card card-accent" style={{ marginTop: 0, borderRadius: "0 0 12px 12px", marginBottom: 20 }}>
                  <div className="g2">
                    <div>
                      <div className="card-title orange">Deliverables</div>
                      <ul className="blist">
                        <li>VAPI account set up in your ownership (API keys, billing)</li>
                        <li>Twilio phone number provisioned and linked to VAPI</li>
                        <li>Healthcare AI persona created — professional, calm, gender-neutral voice</li>
                        <li>GPT-4o backbone with healthcare system prompt</li>
                        <li>Practice FAQ knowledge base ingested (services, hours, location, insurance)</li>
                        <li>Business hours logic — open / after-hours / holiday routing</li>
                        <li>Call recording with HIPAA-appropriate consent announcement</li>
                      </ul>
                    </div>
                    <div>
                      <div className="card-title orange">Acceptance Criteria</div>
                      <ul className="blist">
                        <li>Phone number answers live calls</li>
                        <li>Agent greets with practice name and correct persona</li>
                        <li>After-hours routing triggers correctly by time of day</li>
                        <li>FAQ questions answered accurately from knowledge base</li>
                      </ul>
                      <div style={{ marginTop: 14 }}>
                        <span className="badge badge-orange">~30% of work</span>
                        <span className="badge badge-slate" style={{ marginLeft: 6 }}>10 days</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* M2 */}
                <div className="ms-bar">
                  <div className="ms-icon" style={{ background: "linear-gradient(135deg,#d8681d,#c79573)" }}>
                    <PhoneIncoming size={20} color="#fff" />
                  </div>
                  <div className="ms-info">
                    <div className="ms-label">Milestone 2 · Days 11–22</div>
                    <div className="ms-name">Call Flows, CRM &amp; Automation</div>
                    <div className="ms-days">All routing logic · GoHighLevel · SMS workflows · Transfers · Message capture</div>
                  </div>
                  <div className="ms-price">$900</div>
                </div>
                <div className="card card-accent-amber" style={{ marginTop: 0, borderRadius: "0 0 12px 12px", marginBottom: 20 }}>
                  <div className="g2">
                    <div>
                      <div className="card-title amber">Call Flow Deliverables</div>
                      <ul className="blist amber">
                        <li><strong>Inbound routing:</strong> greet, identify purpose, route intelligently</li>
                        <li><strong>Urgency detection:</strong> chest pain, emergency, urgent keywords → immediate warm transfer to on-call line</li>
                        <li><strong>Message taking:</strong> name, DOB, callback number, reason, urgency, preferred time — all structured</li>
                        <li><strong>Warm transfer:</strong> caller summary announced to staff before handoff</li>
                        <li><strong>Voicemail fallback:</strong> professional recording when staff unreachable</li>
                        <li>Visual call flow diagram delivered</li>
                      </ul>
                    </div>
                    <div>
                      <div className="card-title amber">Integration Deliverables</div>
                      <ul className="blist amber">
                        <li><strong>GoHighLevel:</strong> contact created/updated per call, transcript in notes, tags applied</li>
                        <li><strong>Post-call SMS:</strong> automatic follow-up to caller via Twilio</li>
                        <li><strong>After-hours SMS:</strong> immediate acknowledgment + expected callback window</li>
                        <li><strong>Staff alert:</strong> new message → SMS/email to designated staff with summary</li>
                        <li><strong>Appointment requests:</strong> captured in CRM with time preference + reason</li>
                        <li>Make.com scenario documentation delivered</li>
                      </ul>
                      <div style={{ marginTop: 14 }}>
                        <span className="badge badge-amber">~45% of work</span>
                        <span className="badge badge-slate" style={{ marginLeft: 6 }}>12 days</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* M3 */}
                <div className="ms-bar">
                  <div className="ms-icon" style={{ background: "linear-gradient(135deg,#92400e,#78350f)" }}>
                    <Rocket size={20} color="#fff" />
                  </div>
                  <div className="ms-info">
                    <div className="ms-label">Milestone 3 · Days 23–30</div>
                    <div className="ms-name">QA, Documentation &amp; Deployment Kit</div>
                    <div className="ms-days">Testing · Training videos · Onboarding playbook · Prompt docs · Scaling roadmap</div>
                  </div>
                  <div className="ms-price">$500</div>
                </div>
                <div className="card card-accent-warm" style={{ marginTop: 0, borderRadius: "0 0 12px 12px", marginBottom: 24 }}>
                  <div className="g2">
                    <div>
                      <div className="card-title warm">QA Deliverables</div>
                      <ul className="blist warm">
                        <li>20+ end-to-end test scenarios (routine, after-hours, urgent, transfer, FAQ, no-response)</li>
                        <li>Edge case validation: background noise, unclear speech, repeated misunderstanding escalation</li>
                        <li>VAPI assistant JSON template exported for client duplication</li>
                        <li>Make.com blueprints exported and documented</li>
                      </ul>
                    </div>
                    <div>
                      <div className="card-title warm">Handoff Deliverables</div>
                      <ul className="blist warm">
                        <li><strong>Client onboarding playbook:</strong> deploy for new practice in under 4 hours</li>
                        <li><strong>Training video — Staff:</strong> monitoring calls, reviewing transcripts, responding to alerts</li>
                        <li><strong>Training video — Admin:</strong> updating knowledge base, adjusting hours, changing transfer numbers</li>
                        <li><strong>Prompt documentation:</strong> all system prompts annotated for future customization</li>
                        <li><strong>Phase 2 roadmap:</strong> appointment booking API, EMR integration, multi-location routing</li>
                      </ul>
                      <div style={{ marginTop: 14 }}>
                        <span className="badge badge-warm">~25% of work</span>
                        <span className="badge badge-slate" style={{ marginLeft: 6 }}>8 days</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing summary table */}
                <table className="tbl">
                  <thead>
                    <tr><th>#</th><th>Milestone</th><th>Duration</th><th style={{ textAlign: "right" }}>Price</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><span className="badge badge-orange">M1</span></td><td>Foundation &amp; Voice Core</td><td>Days 1–10</td><td style={{ textAlign: "right", fontWeight: 700 }}>$600</td></tr>
                    <tr><td><span className="badge badge-amber">M2</span></td><td>Call Flows, CRM &amp; Automation</td><td>Days 11–22</td><td style={{ textAlign: "right", fontWeight: 700 }}>$900</td></tr>
                    <tr><td><span className="badge badge-warm">M3</span></td><td>QA, Documentation &amp; Deployment Kit</td><td>Days 23–30</td><td style={{ textAlign: "right", fontWeight: 700 }}>$500</td></tr>
                    <tr className="total-row"><td colSpan={2} style={{ textAlign: "right" }}>Total</td><td>30 days</td><td style={{ textAlign: "right" }}>$2,000</td></tr>
                  </tbody>
                </table>

                <div className="alert warm">
                  <strong>Payment Terms</strong>
                  Milestone-based. M1 ($600) on VAPI live and answering calls. M2 ($900) on CRM integration confirmed, SMS flowing, all call flows tested. M3 ($500) on QA pass, videos delivered, all documentation handed over. No payment before acceptance criteria are met.
                </div>
              </div>

              {/* ── DELIVERABLES ── */}
              <div className="sec" id="deliverables">
                <div className="sec-label">Section 4</div>
                <h2 className="sec-title">Complete Deliverables Package</h2>

                <div className="deliv-grid">
                  {[
                    [<Mic size={16} color="#fff" key="mic" />, "Live Voice Agent", "VAPI assistant on your Twilio number, answering calls professionally from day one."],
                    [<PhoneIncoming size={16} color="#fff" key="pi" />, "Call Flow Diagram", "Visual flowchart of every call path — inbound, after-hours, urgent, message, and transfer."],
                    [<BrainCircuit size={16} color="#fff" key="bc" />, "Optimized Prompts", "Full system prompt library annotated with rationale. Healthcare tone, urgency detection, FAQ."],
                    [<MessageSquare size={16} color="#fff" key="ms" />, "SMS Workflows", "Post-call SMS, after-hours acknowledgment, and staff alerts via Twilio + Make.com."],
                    [<Users size={16} color="#fff" key="us" />, "CRM Integration", "GoHighLevel contact creation, transcript notes, appointment capture, and tag workflows."],
                    [<Phone size={16} color="#fff" key="ph" />, "Call Transfer System", "Warm transfer with caller summary. Professional voicemail fallback when staff unavailable."],
                    [<FileText size={16} color="#fff" key="ft" />, "Full Documentation", "Technical docs, prompt annotations, Make.com blueprints, admin guide — all yours to keep."],
                    [<Video size={16} color="#fff" key="vi" />, "Training Videos ×2", "Staff overview + admin setup. Screen-recorded, narrated, ready to share with new clients."],
                    [<Rocket size={16} color="#fff" key="ro" />, "Onboarding Playbook", "Step-by-step: deploy this system for a new client in under 4 hours."],
                    [<Clock size={16} color="#fff" key="cl" />, "Scaling Roadmap", "Phase 2 plan: booking API, EMR integration, multi-location routing — ready when you are."],
                  ].map(([icon, title, desc]) => (
                    <div className="deliv-card" key={String(title)}>
                      <div className="deliv-icon">{icon}</div>
                      <div><h4>{title}</h4><p>{desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── SCOPE CHECK ── */}
              <div className="sec" id="scope">
                <div className="sec-label">Section 5</div>
                <h2 className="sec-title">Every Job Requirement — Addressed</h2>

                <table className="tbl">
                  <thead>
                    <tr><th>#</th><th>Requirement</th><th>How It&apos;s Delivered</th><th>Milestone</th></tr>
                  </thead>
                  <tbody>
                    {[
                      ["Answer inbound calls professionally", "VAPI agent with healthcare persona, greeting flow, and professional ElevenLabs voice", "M1"],
                      ["Handle after-hours calls", "Business hours detection → after-hours routing → professional message → callback capture", "M1"],
                      ["Answer common office questions", "Practice FAQ ingested into VAPI knowledge base: services, hours, location, insurance, prep", "M1"],
                      ["Take messages", "Structured message-taking flow: name, DOB, callback number, reason, urgency, preferred time", "M2"],
                      ["Capture caller information", "Full caller schema logged per call → CRM contact creation automatically", "M2"],
                      ["Route urgent calls appropriately", "Keyword urgency detection → immediate warm transfer to on-call line", "M2"],
                      ["Transfer calls to office staff", "Warm transfer with caller summary announcement. Voicemail fallback when unavailable", "M2"],
                      ["Send SMS follow-up messages", "Post-call SMS, after-hours acknowledgment, staff alerts — Twilio + Make.com", "M2"],
                      ["Integrate with CRM workflows", "GoHighLevel: contact create/update, transcript notes, appointment capture, tag assignment", "M2"],
                      ["Easily duplicated for future clients", "VAPI JSON template + Make.com blueprints + onboarding playbook = new client in &lt;4 hours", "M3"],
                    ].map(([req, how, ms], i) => (
                      <tr key={i}>
                        <td><CheckCircle size={14} color="#EC420F" /></td>
                        <td style={{ fontWeight: 600 }}>{req}</td>
                        <td style={{ color: "#57534e", fontWeight: 400 }}>{how}</td>
                        <td><span className="badge badge-orange">{ms}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="alert warm">
                  <strong>EMR Integration — V1 Scope Confirmed</strong>
                  Version 1 operates fully independently of any EMR. The architecture is designed with clean data schemas and webhook-ready events so that Epic, athenahealth, eClinicalWorks, or NextGen integration can be added in a future phase without rearchitecting the core system.
                </div>
              </div>

              {/* ── FUTURE WORK ── */}
              <div className="sec" id="future">
                <div className="sec-label">Section 6</div>
                <h2 className="sec-title">Future Client Deployments &amp; Ongoing Support</h2>

                <p style={{ fontSize: 14, color: "#57534e", marginBottom: 20, lineHeight: 1.7 }}>
                  This project builds the foundation of your business. Every client you sign after this uses the template we build here. Here is how the partnership scales:
                </p>

                <div className="price-grid">
                  {[
                    ["$300", "Per Client Deploy", "New practice onboarded using the template — custom prompts, knowledge base, phone number, CRM wired up. ~3–4 hours of work."],
                    ["$500/mo", "Monthly Retainer", "Up to 5 deployments or updates per month, prompt tuning, workflow adjustments, and monitoring support."],
                    ["TBD", "Phase 2 — EMR", "Direct booking integration with athenahealth, eClinicalWorks, or similar. Scoped once V1 is live and generating data."],
                    ["$75/hr", "Ad-Hoc Support", "One-off customizations, urgent fixes, or new integrations outside retainer scope."],
                  ].map(([pval, plabel, desc]) => (
                    <div className="price-card" key={plabel}>
                      <div className="pval">{pval}</div>
                      <div className="plabel">{plabel}</div>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="g2" style={{ marginTop: 8 }}>
                  <div className="card card-accent">
                    <div className="card-title orange">Healthcare Platforms — Ready for Phase 2</div>
                    <ul className="blist">
                      <li>Epic — largest US health system EHR</li>
                      <li>Oracle Cerner — major hospital network standard</li>
                      <li>athenahealth — dominant in independent practices</li>
                      <li>eClinicalWorks — wide SMB medical practice adoption</li>
                      <li>NextGen, Meditech, Allscripts — specialty and regional</li>
                    </ul>
                  </div>
                  <div className="card card-accent-warm">
                    <div className="card-title warm">Why This Business Model Works</div>
                    <ul className="blist warm">
                      <li>One-time $2K build → recurring $300/client deployment revenue</li>
                      <li>10 clients = $3,000 deployment revenue + $500/mo retainer per tier</li>
                      <li>No EMR complexity in V1 means fast sales cycles</li>
                      <li>Template approach means margin improves with every client added</li>
                      <li>You own all IP — no dependency on any single vendor or developer</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ── NEXT STEPS ── */}
              <div className="sec" id="next">
                <div className="sec-label">Section 7</div>
                <h2 className="sec-title">Ready to Start in 3 Business Days</h2>

                <div className="qa">
                  <div className="qa-q"><div className="qa-num">1</div> What I Need to Begin</div>
                  <div className="qa-a">
                    <ul className="blist">
                      <li><strong>Practice details</strong> — Name, specialty, services, hours, address, and any existing FAQ content for the knowledge base</li>
                      <li><strong>Transfer number(s)</strong> — The phone number(s) for urgent call transfers and staff notification routing</li>
                      <li><strong>GoHighLevel access</strong> — Sub-account API key or admin access for CRM integration setup</li>
                    </ul>
                    <p style={{ marginTop: 10, color: "#7c2d12", fontWeight: 600 }}>Once provided, M1 begins within 3 business days. The system will be answering live calls within the first 10 days.</p>
                  </div>
                </div>

                <div className="qa">
                  <div className="qa-q"><div className="qa-num">2</div> Ownership &amp; IP</div>
                  <div className="qa-a">
                    All workflows, automations, prompts, configurations, documentation, training materials, and intellectual property created under this project become your property upon final payment. Every system is built in accounts you own and control. I retain no license to the work.
                  </div>
                </div>

                <div className="qa">
                  <div className="qa-q"><div className="qa-num">3</div> The Long-Term Vision</div>
                  <div className="qa-a">
                    You are building a healthcare AI automation company. My role is your invisible technical engine — I build while you sell. Every deployment we do together tightens the template, shortens the onboarding time, and increases your margin. This $2,000 project is not a transaction. It is the start of a repeatable, scalable business model.
                  </div>
                </div>

                <div className="alert warm" style={{ marginTop: 20 }}>
                  <strong>Let&apos;s Build This Together</strong>
                  Send over the three items above and I will have M1 scoped and ready to begin immediately. No contract complexity — milestone-based release, clear acceptance criteria, and 100% of the IP transfers to you.
                </div>
              </div>

            </div>{/* /content */}
          </div>{/* /content-wrap */}

          {/* FOOTER */}
          <div className="foot">
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div className="foot-grid">
                <div className="foot-item"><strong>Developer</strong><span>Muhammad Anique</span></div>
                <div className="foot-item"><strong>Platform</strong><span>VAPI AI</span></div>
                <div className="foot-item"><strong>Milestones</strong><span>3</span></div>
                <div className="foot-item"><strong>Timeline</strong><span>30 Days</span></div>
                <div className="foot-item"><strong>Fixed Price</strong><span>$2,000</span></div>
              </div>
              <p style={{ opacity: .45, fontSize: 12 }}>Confidential · AI Voice Receptionist Proposal · Healthcare Automation · June 2026</p>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
