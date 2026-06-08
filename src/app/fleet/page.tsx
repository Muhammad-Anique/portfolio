"use client";
import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════
   Exotic Fleet OS — Notion Workspace Proposal
   Custom Notion build for exotic & luxury vehicle rental business
   ═══════════════════════════════════════════════════════════════════ */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Manrope:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700;900&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}

/* ── BASE ── */
.fleet-wrap{
  position:fixed;inset:0;z-index:9999;
  background:#fafaf9;color:#1c1917;
  overflow-y:auto;overflow-x:hidden;
  line-height:1.7;font-size:14.5px;
  font-family:'Manrope',system-ui,sans-serif;
}

/* ── TOP NAV ── */
.topnav{
  position:sticky;top:0;z-index:100;
  background:rgba(250,250,249,.88);backdrop-filter:blur(16px);
  border-bottom:1px solid #e7e5e4;height:56px;
  display:flex;align-items:center;justify-content:space-between;padding:0 32px;
}
.topnav-brand{font-weight:700;font-size:15px;color:#1c1917;display:flex;align-items:center;gap:10px;font-family:'Playfair Display',serif;}
.topnav-dot{width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#EC420F,#d8681d);}
.topnav-right{display:flex;align-items:center;gap:16px;}
.topnav-right a{
  font-size:12px;font-weight:600;color:#78716c;text-decoration:none;
  padding:6px 14px;border-radius:8px;transition:.2s;font-family:'Lato',sans-serif;
}
.topnav-right a:hover{color:#EC420F;background:rgba(236,66,15,.05);}
.topnav-cta{
  background:linear-gradient(135deg,#EC420F,#d8681d)!important;
  color:#fff!important;padding:8px 18px!important;border-radius:10px!important;
  font-weight:700!important;box-shadow:0 2px 10px rgba(236,66,15,.2);
  transition:all .2s!important;
}
.topnav-cta:hover{box-shadow:0 4px 18px rgba(236,66,15,.3)!important;transform:translateY(-1px);}

/* ── HERO ── */
.hero{
  background:linear-gradient(135deg,#1c1917 0%,#292524 50%,#1c1917 100%);
  padding:72px 40px 64px;color:#fff;position:relative;overflow:hidden;
}
.hero::before{content:'';position:absolute;top:-30%;right:-5%;width:700px;height:700px;background:radial-gradient(circle,rgba(236,66,15,.1) 0%,transparent 65%);pointer-events:none;}
.hero::after{content:'';position:absolute;bottom:-40%;left:-10%;width:600px;height:600px;background:radial-gradient(circle,rgba(199,149,115,.07) 0%,transparent 65%);pointer-events:none;}
.hero-inner{position:relative;z-index:1;max-width:900px;margin:0 auto;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(236,66,15,.12);border:1px solid rgba(236,66,15,.22);color:#f9a88a;padding:6px 16px;border-radius:99px;font-size:12px;font-weight:600;letter-spacing:.06em;margin-bottom:22px;font-family:'Lato',sans-serif;}
.hero h1{font-size:44px;font-weight:700;line-height:1.12;margin-bottom:14px;font-family:'Playfair Display',serif;letter-spacing:-.01em;}
.hero h1 span{background:linear-gradient(90deg,#EC420F,#d8681d);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-sub{color:rgba(255,255,255,.6);font-size:15.5px;max-width:620px;line-height:1.7;margin-bottom:32px;}
.hero-stats{display:flex;flex-wrap:wrap;gap:32px;padding-top:28px;border-top:1px solid rgba(255,255,255,.08);}
.hstat{text-align:center;}
.hstat-val{font-size:26px;font-weight:800;color:#EC420F;font-family:'Lato',sans-serif;}
.hstat-val.warm{color:#c79573;}
.hstat-lbl{font-size:10px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-top:3px;font-family:'Lato',sans-serif;}

/* ── LAYOUT ── */
.content-wrap{display:flex;max-width:1160px;margin:0 auto;padding:44px 24px 80px;gap:44px;}
.main-col{flex:1;min-width:0;}
.sidebar{position:sticky;top:72px;width:210px;max-height:calc(100vh - 90px);overflow-y:auto;flex-shrink:0;padding:16px 0;}
.sidebar::-webkit-scrollbar{width:2px;}
.sidebar::-webkit-scrollbar-thumb{background:#d6d3d1;border-radius:99px;}
.sidebar-title{font-family:'Lato',sans-serif;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:.08em;color:#1c1917;margin-bottom:6px;}
.sidebar-bar{width:36%;height:4px;border-radius:99px;background:linear-gradient(to right,#EC420F,#d8681d);margin-bottom:14px;}
.sidebar a{
  display:flex;align-items:center;gap:7px;padding:4px 8px;margin-bottom:1px;
  font-size:12px;font-weight:500;color:#a8a29e;text-decoration:none;border-radius:5px;
  transition:.15s;font-family:'Manrope',sans-serif;border-left:2px solid transparent;
}
.sidebar a:hover,.sidebar a.active{color:#EC420F;background:rgba(236,66,15,.04);border-left-color:#EC420F;}
.sidebar a .dot{width:4px;height:4px;border-radius:50%;background:#d6d3d1;flex-shrink:0;transition:.15s;}
.sidebar a:hover .dot,.sidebar a.active .dot{background:#EC420F;}

/* ── SECTIONS ── */
.sec{margin-bottom:52px;scroll-margin-top:72px;}
.sec-label{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#EC420F;margin-bottom:4px;font-family:'Lato',sans-serif;}
h2.sec-title{font-size:24px;font-weight:700;color:#1c1917;margin-bottom:14px;padding-bottom:10px;border-bottom:2px solid #e7e5e4;font-family:'Playfair Display',serif;}
h3.sub{font-size:16px;font-weight:700;color:#292524;margin:22px 0 10px;font-family:'Lato',sans-serif;}

/* ── CARDS ── */
.card{background:#fff;border:1px solid #e7e5e4;border-radius:14px;padding:22px 24px;margin-bottom:14px;box-shadow:0 1px 3px rgba(0,0,0,.03);transition:box-shadow .2s;}
.card:hover{box-shadow:0 4px 20px rgba(0,0,0,.06);}
.card-accent{border-left:4px solid #EC420F;}
.card-accent-warm{border-left:4px solid #c79573;}
.card-accent-amber{border-left:4px solid #d8681d;}
.card-accent-green{border-left:4px solid #16a34a;}
.card-accent-red{border-left:4px solid #ef4444;}
.card-title{font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.07em;margin-bottom:10px;font-family:'Lato',sans-serif;}
.card-title.orange{color:#EC420F;}
.card-title.warm{color:#c79573;}
.card-title.amber{color:#d8681d;}
.card-title.green{color:#16a34a;}
.card-title.red{color:#dc2626;}
.card-title.dark{color:#44403c;}

/* ── GRID ── */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;}

/* ── TABLE ── */
.tbl{width:100%;border-collapse:separate;border-spacing:0;margin-bottom:16px;font-size:13px;border-radius:10px;overflow:hidden;border:1px solid #e7e5e4;font-family:'Manrope',sans-serif;}
.tbl thead tr{background:#fafaf9;}
.tbl thead th{padding:10px 14px;text-align:left;font-weight:700;color:#78716c;font-size:11.5px;letter-spacing:.04em;border-bottom:2px solid #e7e5e4;font-family:'Lato',sans-serif;text-transform:uppercase;}
.tbl tbody tr{transition:background .1s;}
.tbl tbody tr:hover{background:#fafaf9;}
.tbl td{padding:10px 14px;vertical-align:top;border-bottom:1px solid #f5f5f4;color:#44403c;}
.tbl td:first-child{font-weight:600;color:#1c1917;}
.tbl tbody tr:last-child td{border-bottom:none;}

/* ── BADGES ── */
.badge{display:inline-block;padding:3px 10px;border-radius:99px;font-size:10.5px;font-weight:700;font-family:'Lato',sans-serif;}
.badge-orange{background:rgba(236,66,15,.1);color:#EC420F;}
.badge-warm{background:rgba(199,149,115,.15);color:#92400e;}
.badge-green{background:rgba(22,163,74,.1);color:#16a34a;}
.badge-red{background:rgba(239,68,68,.1);color:#dc2626;}
.badge-slate{background:#f5f5f4;color:#78716c;}

/* ── BULLET LIST ── */
.blist{list-style:none;padding:0;margin:0;}
.blist li{padding:5px 0 5px 18px;position:relative;font-size:13.5px;color:#44403c;line-height:1.6;}
.blist li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:50%;background:#EC420F;}
.blist.warm li::before{background:#c79573;}
.blist.green li::before{background:#16a34a;}
.blist.amber li::before{background:#d8681d;}

/* ── ALERT ── */
.alert{border-left:4px solid #EC420F;background:rgba(236,66,15,.04);padding:16px 20px;border-radius:0 10px 10px 0;margin-bottom:16px;font-size:14px;color:#7c2d12;}
.alert.warm{border-color:#c79573;background:rgba(199,149,115,.08);color:#78350f;}
.alert.green{border-color:#16a34a;background:rgba(22,163,74,.06);color:#14532d;}
.alert strong{display:block;margin-bottom:4px;font-family:'Lato',sans-serif;font-size:13px;}

/* ── CODE BLOCK ── */
.codeblock{background:#1c1917;color:#e7e5e4;padding:18px 22px;border-radius:12px;font-family:'JetBrains Mono','Fira Code',monospace;font-size:12px;line-height:1.75;overflow-x:auto;margin-bottom:16px;white-space:pre;border:1px solid #292524;}

/* ── PROCESS STEP ── */
.step{display:flex;gap:16px;margin-bottom:16px;}
.step-num{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,#EC420F,#d8681d);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#fff;flex-shrink:0;font-family:'Lato',sans-serif;}
.step-body{flex:1;}
.step-title{font-size:14px;font-weight:700;color:#1c1917;margin-bottom:3px;font-family:'Manrope',sans-serif;}
.step-desc{font-size:13px;color:#57534e;line-height:1.6;}

/* ── QUESTION CARD ── */
.q-card{background:#fff;border:1px solid #e7e5e4;border-radius:12px;padding:18px 22px;margin-bottom:12px;border-left:4px solid #d8681d;}
.q-label{font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#d8681d;margin-bottom:6px;font-family:'Lato',sans-serif;}
.q-text{font-size:14px;color:#1c1917;font-weight:600;font-family:'Manrope',sans-serif;}

/* ── FOOTER ── */
.foot{
  background:linear-gradient(135deg,#1c1917,#292524);color:rgba(255,255,255,.5);
  text-align:center;padding:44px 24px;font-size:13px;
}
.foot strong{color:#fff;}
.foot-grid{display:flex;justify-content:center;flex-wrap:wrap;gap:36px;margin-bottom:28px;}
.foot-item strong{color:#EC420F;display:block;font-size:10px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:4px;font-family:'Lato',sans-serif;}
.foot-item span{color:#e7e5e4;font-size:15px;font-weight:600;}

/* ── RESPONSIVE ── */
@media(max-width:1024px){.sidebar{display:none;}.content-wrap{padding:28px 16px 60px;}}
@media(max-width:768px){
  .g2,.g3{grid-template-columns:1fr;}
  .hero{padding:44px 20px 40px;}.hero h1{font-size:28px;}
  .topnav{padding:0 14px;height:50px;}.topnav-right{display:none;}
  .hero-stats{gap:20px;}
  .tbl{font-size:12px;}.tbl td,.tbl th{padding:8px 10px;}
}
`;

const NAV = [
  { id: "understanding", label: "Understanding" },
  { id: "structure", label: "Workspace Structure" },
  { id: "database", label: "Database Design" },
  { id: "roi", label: "ROI & Formulas" },
  { id: "experience", label: "Experience" },
  { id: "process", label: "My Process" },
  { id: "dashboard", label: "Dashboard" },
  { id: "scale", label: "Scalability" },
  { id: "simplicity", label: "Simplicity" },
  { id: "projections", label: "Projected vs Actual" },
  { id: "branding", label: "Branding" },
  { id: "feedback", label: "Feedback & Revisions" },
  { id: "handover", label: "Handover & Docs" },
  { id: "timeline", label: "Timeline" },
  { id: "questions", label: "My Questions" },
  { id: "next", label: "Next Steps" },
];

export default function FleetProposal() {
  const [activeSection, setActiveSection] = useState("understanding");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i]!.getBoundingClientRect();
        if (rect.top <= 100) {
          setActiveSection(NAV[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="fleet-wrap">
        {/* ═══ NAV ═══ */}
        <nav className="topnav">
          <div className="topnav-brand"><span className="topnav-dot" />Fleet OS Proposal</div>
          <div className="topnav-right">
            <a href="#roi">ROI Engine</a>
            <a href="#process">Process</a>
            <a href="#timeline">Timeline</a>
            <a href="mailto:anique.cs@gmail.com" className="topnav-cta">Let&apos;s Talk</a>
          </div>
        </nav>

        {/* ═══ HERO ═══ */}
        <div className="hero">
          <div className="hero-inner">
            <div className="hero-badge">Proposal · Notion Workspace Build</div>
            <h1>Exotic Fleet <span>Operating System</span></h1>
            <p className="hero-sub">
              A custom Notion workspace engineered to be the internal command center for your exotic &amp; luxury vehicle rental business — from fleet inventory and daily ops to real-time ROI tracking and financial decision-making.
            </p>
            <div className="hero-stats">
              <div className="hstat"><div className="hstat-val">5</div><div className="hstat-lbl">Core Databases</div></div>
              <div className="hstat"><div className="hstat-val warm">Dynamic</div><div className="hstat-lbl">ROI Engine</div></div>
              <div className="hstat"><div className="hstat-val">Live</div><div className="hstat-lbl">Dashboard</div></div>
              <div className="hstat"><div className="hstat-val warm">Scalable</div><div className="hstat-lbl">Architecture</div></div>
              <div className="hstat"><div className="hstat-val">Full</div><div className="hstat-lbl">Documentation</div></div>
            </div>
          </div>
        </div>

        {/* ═══ CONTENT ═══ */}
        <div className="content-wrap">
          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="sidebar-title">Contents</div>
            <div className="sidebar-bar" />
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={activeSection === n.id ? "active" : ""}>
                <span className="dot" />{n.label}
              </a>
            ))}
          </aside>

          {/* MAIN */}
          <div className="main-col">

            {/* ── 1. UNDERSTANDING ── */}
            <div className="sec" id="understanding">
              <div className="sec-label">Section 1</div>
              <h2 className="sec-title">Understanding Your Business</h2>
              <div className="alert green">
                <strong>Core Insight</strong>
                You are not just renting cars — you are managing high-value depreciating assets where every idle day costs real money. The system must answer one question above all: <em>&ldquo;Is this vehicle making me money, and how much?&rdquo;</em>
              </div>
              <p style={{ color: "#57534e", marginBottom: 16 }}>
                Based on your brief, I understand you operate an exotic and luxury vehicle rental fleet where:
              </p>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title orange">Business Reality</div>
                  <ul className="blist">
                    <li>Each vehicle carries significant fixed monthly costs (lease/finance, insurance, storage, maintenance)</li>
                    <li>Revenue is earned per rental day — making <strong>utilization rate</strong> the single most critical metric</li>
                    <li>You need to evaluate whether to acquire new vehicles based on projected ROI</li>
                    <li>Daily operations (bookings, availability, handoffs) must be tracked cleanly</li>
                  </ul>
                </div>
                <div className="card card-accent-warm">
                  <div className="card-title warm">What You Need</div>
                  <ul className="blist warm">
                    <li>A single source of truth for fleet, bookings, and finances</li>
                    <li>Instant visibility into which vehicles are profitable and which aren&apos;t</li>
                    <li>A system that helps you <strong>decide</strong>, not just record</li>
                    <li>Clean daily workflow — not a spreadsheet nightmare</li>
                    <li>Scalability as you grow the fleet</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── 2. WORKSPACE STRUCTURE ── */}
            <div className="sec" id="structure">
              <div className="sec-label">Section 2</div>
              <h2 className="sec-title">Workspace Structure</h2>
              <p style={{ color: "#57534e", marginBottom: 16 }}>
                The workspace is organized into three tiers — <strong>Command Center</strong> (daily ops dashboard), <strong>Operations</strong> (working databases), and <strong>Intelligence</strong> (financial analysis &amp; reporting).
              </p>
              <div className="codeblock">{`📁 FLEET OS
│
├── 🏠 Command Center (Dashboard)
│   ├── Fleet Overview          — all vehicles at a glance
│   ├── Active Rentals          — what's out today
│   ├── Revenue Snapshot        — MTD / YTD performance
│   └── Alerts & Action Items   — overdue returns, maintenance due
│
├── ⚙️ Operations
│   ├── 🚗 Vehicle Database     — every car, all specs & costs
│   ├── 📋 Bookings Database    — every rental, linked to vehicle
│   ├── 👤 Clients Database     — customer profiles & history
│   └── 🔧 Maintenance Log     — service records per vehicle
│
├── 💰 Intelligence
│   ├── 📊 Financial Dashboard  — ROI, profit, break-even
│   ├── 📈 Vehicle P&L Cards    — per-vehicle profit/loss
│   ├── 🔮 Acquisition Analyzer — evaluate new vehicle buys
│   └── 📅 Monthly Reports      — auto-generated snapshots
│
└── 📖 Reference
    ├── SOPs & Processes
    └── Brand Assets & Templates`}</div>
              <div className="alert">
                <strong>Design Principle</strong>
                Every page has a clear purpose. No &ldquo;junk drawer&rdquo; pages. If someone opens the workspace for the first time, they can navigate it in under 30 seconds.
              </div>
            </div>

            {/* ── 3. DATABASE ARCHITECTURE ── */}
            <div className="sec" id="database">
              <div className="sec-label">Section 3</div>
              <h2 className="sec-title">Database Architecture &amp; Relationships</h2>
              <p style={{ color: "#57534e", marginBottom: 16 }}>
                Five core databases form the backbone. Every relationship is intentional — no orphan data, no duplication.
              </p>

              <div className="codeblock">{`┌─────────────────────────────────────────────────┐
│               🚗 VEHICLES (Master)               │
│  One row = one vehicle in the fleet              │
│  Fields: Make, Model, Year, VIN, Status,         │
│          Monthly Cost, Daily Rate, Image          │
│                                                   │
│  ↓ has many                                       │
│  ├── 📋 BOOKINGS (one per rental)                │
│  │   Fields: Client, Vehicle, Start, End,        │
│  │   Days, Revenue, Status, Notes                │
│  │   → rolls up to Vehicle: total days,          │
│  │     total revenue, avg daily rate             │
│  │                                                │
│  ├── 🔧 MAINTENANCE (one per service)            │
│  │   Fields: Date, Type, Cost, Vendor, Notes     │
│  │   → rolls up to Vehicle: total maint cost     │
│  │                                                │
│  └── 💰 MONTHLY SNAPSHOTS (one per month)        │
│      Fields: Month, Days Rented, Revenue,        │
│      Total Costs, Profit, ROI%                   │
│      → auto-calculated from bookings + costs     │
│                                                   │
│  👤 CLIENTS                                       │
│  One row = one customer                          │
│  ↔ linked to Bookings (see rental history)       │
└─────────────────────────────────────────────────┘`}</div>

              <h3 className="sub">Relationship Map</h3>
              <table className="tbl">
                <thead><tr><th>From</th><th>To</th><th>Type</th><th>Purpose</th></tr></thead>
                <tbody>
                  <tr><td>Vehicle</td><td>Bookings</td><td><span className="badge badge-orange">1 → Many</span></td><td>Every booking belongs to one vehicle; vehicle sees all its rentals</td></tr>
                  <tr><td>Vehicle</td><td>Maintenance</td><td><span className="badge badge-orange">1 → Many</span></td><td>Track all service events per vehicle, roll up total cost</td></tr>
                  <tr><td>Vehicle</td><td>Monthly Snapshots</td><td><span className="badge badge-orange">1 → Many</span></td><td>Per-vehicle P&amp;L per month — the heart of ROI tracking</td></tr>
                  <tr><td>Client</td><td>Bookings</td><td><span className="badge badge-warm">1 → Many</span></td><td>See full rental history per client, repeat rate, revenue</td></tr>
                  <tr><td>Bookings</td><td>Vehicle + Client</td><td><span className="badge badge-slate">Many → 1</span></td><td>Each booking links to exactly one vehicle and one client</td></tr>
                </tbody>
              </table>

              <h3 className="sub">Rollup &amp; Formula Strategy</h3>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title orange">On the Vehicle Record</div>
                  <ul className="blist">
                    <li><strong>Total Days Rented (MTD)</strong> — rollup from Bookings, filtered by current month</li>
                    <li><strong>Total Revenue (MTD)</strong> — rollup sum of booking revenue</li>
                    <li><strong>Total Maintenance Cost</strong> — rollup from Maintenance log</li>
                    <li><strong>Net Profit (MTD)</strong> — formula: Revenue − (Monthly Cost + Maintenance)</li>
                    <li><strong>ROI %</strong> — formula: (Net Profit / Total Cost) × 100</li>
                    <li><strong>Break-Even Days</strong> — formula: Monthly Fixed Cost / Daily Rate</li>
                    <li><strong>Status</strong> — Available / Rented / Maintenance / Reserved</li>
                  </ul>
                </div>
                <div className="card card-accent-warm">
                  <div className="card-title warm">On the Booking Record</div>
                  <ul className="blist warm">
                    <li><strong>Duration</strong> — formula: End Date − Start Date</li>
                    <li><strong>Revenue</strong> — formula: Duration × Daily Rate (or custom override)</li>
                    <li><strong>Vehicle Name</strong> — auto-populated from relation</li>
                    <li><strong>Client Name</strong> — auto-populated from relation</li>
                    <li><strong>Status</strong> — Confirmed / Active / Completed / Cancelled</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── 4. ROI ENGINE ── */}
            <div className="sec" id="roi">
              <div className="sec-label">Section 4</div>
              <h2 className="sec-title">ROI &amp; Break-Even Calculations</h2>
              <div className="alert">
                <strong>Key Design Decision</strong>
                All financial formulas live directly on the Vehicle database as Notion formulas. This means every vehicle card is a <em>live P&amp;L statement</em> — no manual spreadsheet work needed.
              </div>

              <h3 className="sub">Core Formulas</h3>
              <div className="codeblock">{`═══ PER VEHICLE — MONTHLY ═══

Total Monthly Cost   = Lease/Finance + Insurance + Storage + Avg Maintenance
Monthly Revenue      = Sum of all booking revenue in current month (rollup)
Monthly Profit       = Monthly Revenue − Total Monthly Cost
Monthly ROI %        = (Monthly Profit / Total Monthly Cost) × 100
Break-Even Days      = Total Monthly Cost / Daily Rental Rate
Utilization %        = (Days Rented / Days in Month) × 100
Revenue per Day      = Monthly Revenue / Days in Month

═══ PER VEHICLE — ANNUAL ═══

Annual Cost          = Total Monthly Cost × 12
Annual Revenue       = Rollup of all booking revenue (12-month window)
Annual Profit        = Annual Revenue − Annual Cost
Annual ROI %         = (Annual Profit / Annual Cost) × 100
Break-Even Days/Year = Annual Cost / Daily Rental Rate

═══ FLEET-WIDE ═══

Total Fleet Revenue  = Sum across all vehicles
Total Fleet Cost     = Sum across all vehicles
Fleet Profit Margin  = (Total Revenue − Total Cost) / Total Revenue × 100
Avg Fleet ROI        = Mean of all vehicle ROI percentages
Top Performer        = Vehicle with highest Monthly ROI%
Underperformer       = Vehicle with lowest or negative ROI%`}</div>

              <h3 className="sub">Acquisition Analyzer</h3>
              <p style={{ color: "#57534e", marginBottom: 14 }}>
                When you are evaluating whether to add a new vehicle to the fleet, you simply create a new record with <strong>projected</strong> numbers:
              </p>
              <div className="card card-accent-amber">
                <div className="card-title amber">How It Works</div>
                <table className="tbl" style={{ marginBottom: 0 }}>
                  <thead><tr><th>Input You Provide</th><th>System Calculates</th></tr></thead>
                  <tbody>
                    <tr><td>Expected monthly lease/finance cost</td><td>Monthly break-even days required</td></tr>
                    <tr><td>Expected insurance cost</td><td>Projected monthly profit at X% utilization</td></tr>
                    <tr><td>Target daily rental rate</td><td>Annual ROI at conservative / target / optimistic scenarios</td></tr>
                    <tr><td>Estimated rental days/month</td><td>Months to recoup any upfront costs</td></tr>
                  </tbody>
                </table>
              </div>
              <p style={{ color: "#57534e", marginTop: 14, fontSize: 13.5 }}>
                This turns Notion into a <strong>financial modeling tool</strong> — you can compare two potential acquisitions side-by-side before committing a single dollar.
              </p>
            </div>

            {/* ── 5. EXPERIENCE ── */}
            <div className="sec" id="experience">
              <div className="sec-label">Section 5</div>
              <h2 className="sec-title">Relevant Experience</h2>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title orange">Systems I&apos;ve Built</div>
                  <ul className="blist">
                    <li><strong>Full CRM + Financial Tracker</strong> — for a medical clinic (100+ fields, ROI tracking, automated pipeline, Zoho CRM integration)</li>
                    <li><strong>AI Agent Orchestration Dashboard</strong> — real-time multi-agent system with live document generation</li>
                    <li><strong>Business Operations Workspace</strong> — inventory management, cost tracking, automated reporting</li>
                    <li><strong>Lead Qualification System</strong> — with automated scoring, financial projections, and ROI calculations</li>
                  </ul>
                </div>
                <div className="card card-accent-warm">
                  <div className="card-title warm">Why This Matters for You</div>
                  <ul className="blist warm">
                    <li>I understand <strong>database architecture</strong> — I build systems with 100+ fields that stay clean and usable</li>
                    <li>I&apos;ve implemented <strong>real financial formulas</strong> — not toy calculations, but break-even analysis and P&amp;L tracking</li>
                    <li>I build for <strong>daily operators</strong>, not just admins — usability is always a priority</li>
                    <li>I treat Notion as a <strong>product</strong>, not a document — structured, tested, documented</li>
                  </ul>
                </div>
              </div>
              <p style={{ color: "#57534e", marginTop: 8, fontSize: 13 }}>
                You can view my full portfolio and project case studies at <a href="https://muhammadanique.com" style={{ color: "#EC420F", fontWeight: 600 }}>muhammadanique.com</a>
              </p>
            </div>

            {/* ── 6. PROCESS ── */}
            <div className="sec" id="process">
              <div className="sec-label">Section 6</div>
              <h2 className="sec-title">My Step-by-Step Process</h2>

              <div className="step"><div className="step-num">1</div><div className="step-body"><div className="step-title">Discovery &amp; Audit</div><div className="step-desc">Deep dive into your current workflow — what tools you use, what data you track, what frustrates you. I review your website and branding to understand the aesthetic. I map out every data point that matters.</div></div></div>

              <div className="step"><div className="step-num">2</div><div className="step-body"><div className="step-title">Architecture &amp; Schema Design</div><div className="step-desc">I design the full database schema — every field, every relation, every formula — and share it with you for approval <em>before</em> building. No surprises. You see the blueprint first.</div></div></div>

              <div className="step"><div className="step-num">3</div><div className="step-body"><div className="step-title">Core Build</div><div className="step-desc">Build all databases, relations, rollups, and formulas. Populate with sample data to validate that every calculation works correctly. This is the foundation — it has to be bulletproof.</div></div></div>

              <div className="step"><div className="step-num">4</div><div className="step-body"><div className="step-title">Dashboard &amp; Views</div><div className="step-desc">Build the Command Center dashboard, custom views (gallery, board, calendar, table), and filtered views for daily operations. This is where usability happens.</div></div></div>

              <div className="step"><div className="step-num">5</div><div className="step-body"><div className="step-title">Branding &amp; Polish</div><div className="step-desc">Apply your brand colors, logo, cover images, icons, and typography. Style every page to feel cohesive and professional — matching your website&apos;s aesthetic.</div></div></div>

              <div className="step"><div className="step-num">6</div><div className="step-body"><div className="step-title">Review &amp; Revisions</div><div className="step-desc">You test the full system with real data. I do 2 rounds of structured revisions based on your feedback. We iterate until it&apos;s exactly right.</div></div></div>

              <div className="step"><div className="step-num">7</div><div className="step-body"><div className="step-title">Handover &amp; Training</div><div className="step-desc">Full video walkthrough, written documentation, and a live Q&amp;A session. You leave feeling 100% confident operating the system independently.</div></div></div>
            </div>

            {/* ── 7. DASHBOARD ── */}
            <div className="sec" id="dashboard">
              <div className="sec-label">Section 7</div>
              <h2 className="sec-title">Main Dashboard Design</h2>
              <p style={{ color: "#57534e", marginBottom: 16 }}>
                The Command Center is the first thing you see when you open the workspace. It is designed for <strong>30-second decision making</strong> — glance, understand, act.
              </p>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title orange">Top Section — Vital Signs</div>
                  <ul className="blist">
                    <li><strong>Fleet Status Bar</strong> — visual count of Available / Rented / Maintenance vehicles</li>
                    <li><strong>Revenue MTD</strong> — total month-to-date revenue across all vehicles</li>
                    <li><strong>Fleet Utilization %</strong> — how much of your fleet is producing revenue today</li>
                    <li><strong>Top Performer</strong> — best ROI vehicle this month, auto-calculated</li>
                  </ul>
                </div>
                <div className="card card-accent-warm">
                  <div className="card-title warm">Middle — Active Operations</div>
                  <ul className="blist warm">
                    <li><strong>Today&apos;s Pickups &amp; Returns</strong> — filtered calendar view</li>
                    <li><strong>Active Rentals Board</strong> — Kanban: Reserved → Active → Returning → Complete</li>
                    <li><strong>Action Items</strong> — overdue returns, upcoming maintenance, pending confirmations</li>
                  </ul>
                </div>
              </div>
              <div className="card card-accent-amber" style={{ marginTop: 4 }}>
                <div className="card-title amber">Bottom — Financial Intelligence</div>
                <ul className="blist amber">
                  <li><strong>Vehicle P&amp;L Grid</strong> — gallery view showing each vehicle&apos;s monthly profit/loss with color coding (green = profitable, red = losing)</li>
                  <li><strong>Revenue vs Cost Trend</strong> — monthly snapshots showing the trajectory</li>
                  <li><strong>Break-Even Tracker</strong> — which vehicles have hit break-even this month, which haven&apos;t</li>
                  <li><strong>Quick Add</strong> — buttons to add a new booking, log maintenance, or add a vehicle</li>
                </ul>
              </div>
            </div>

            {/* ── 8. SCALABILITY ── */}
            <div className="sec" id="scale">
              <div className="sec-label">Section 8</div>
              <h2 className="sec-title">Scalability — Built to Grow</h2>
              <div className="alert">
                <strong>Principle</strong>
                Adding a new vehicle should take under 2 minutes and immediately work with every formula, dashboard, and report in the system — zero configuration needed.
              </div>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title orange">How It Scales</div>
                  <ul className="blist">
                    <li><strong>Template-based vehicle entry</strong> — pre-filled fields, dropdowns, smart defaults</li>
                    <li><strong>Formulas are self-referencing</strong> — they pull from rollups/relations, not hardcoded values</li>
                    <li><strong>Dashboard auto-updates</strong> — new vehicles appear in all views immediately</li>
                    <li><strong>Monthly snapshots auto-generate</strong> — no manual report building</li>
                  </ul>
                </div>
                <div className="card card-accent-warm">
                  <div className="card-title warm">Future-Proof Design</div>
                  <ul className="blist warm">
                    <li>Database schema supports 100+ vehicles without performance issues</li>
                    <li>Modular design — add new databases (e.g., Expenses, Staff) without breaking existing ones</li>
                    <li>Grouped views by vehicle class (Exotic, Luxury, SUV, etc.) — useful as categories grow</li>
                    <li>Archive system for retired vehicles — data preserved but not cluttering active views</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── 9. SIMPLICITY ── */}
            <div className="sec" id="simplicity">
              <div className="sec-label">Section 9</div>
              <h2 className="sec-title">Daily Usability — Simple by Design</h2>
              <div className="g2">
                <div className="card card-accent-green">
                  <div className="card-title green">What Makes It Simple</div>
                  <ul className="blist green">
                    <li><strong>One-click booking creation</strong> — select vehicle, select client, enter dates. Revenue auto-calculates.</li>
                    <li><strong>Pre-built views</strong> — you never need to create a filter or sort. Every useful view is ready.</li>
                    <li><strong>Visual status indicators</strong> — colors, icons, and progress bars. No reading walls of text.</li>
                    <li><strong>No duplicate entry</strong> — enter data once, it flows everywhere through relations.</li>
                    <li><strong>Mobile-friendly</strong> — Notion&apos;s mobile app works with the workspace design.</li>
                  </ul>
                </div>
                <div className="card card-accent">
                  <div className="card-title orange">Complexity Rules</div>
                  <ul className="blist">
                    <li>Formulas run behind the scenes — the operator sees <strong>results</strong>, not formulas</li>
                    <li>Advanced views (ROI analysis, P&amp;L) are in the Intelligence section — <em>separate</em> from daily ops</li>
                    <li>Every page has a brief description at the top explaining what it does and how to use it</li>
                    <li>SOPs and mini-guides built directly into the workspace for reference</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── 10. PROJECTED VS ACTUAL ── */}
            <div className="sec" id="projections">
              <div className="sec-label">Section 10</div>
              <h2 className="sec-title">Projected vs Actual Performance</h2>
              <p style={{ color: "#57534e", marginBottom: 16 }}>
                Each vehicle has two sets of numbers — <strong>projected</strong> (what you expect) and <strong>actual</strong> (what really happened). The system highlights the variance so you can spot problems early.
              </p>
              <table className="tbl">
                <thead><tr><th>Metric</th><th>Projected (You Set)</th><th>Actual (System Tracks)</th><th>Variance</th></tr></thead>
                <tbody>
                  <tr><td>Days Rented / Month</td><td>Manual input (e.g., 20)</td><td>Rollup from Bookings</td><td><span className="badge badge-green">Auto-calculated</span></td></tr>
                  <tr><td>Monthly Revenue</td><td>Projected Days × Daily Rate</td><td>Sum of actual booking revenue</td><td><span className="badge badge-green">Auto-calculated</span></td></tr>
                  <tr><td>Monthly Profit</td><td>Projected Revenue − Costs</td><td>Actual Revenue − Costs</td><td><span className="badge badge-green">Auto-calculated</span></td></tr>
                  <tr><td>ROI %</td><td>Based on projected figures</td><td>Based on actual figures</td><td><span className="badge badge-green">Auto-calculated</span></td></tr>
                  <tr><td>Break-Even Days</td><td>Cost / Target Rate</td><td>Cost / Actual Avg Rate</td><td><span className="badge badge-green">Auto-calculated</span></td></tr>
                </tbody>
              </table>
              <div className="alert warm">
                <strong>Variance Alerts</strong>
                When actual performance drops more than 20% below projections, the system flags it visually with a red indicator — so you can investigate or adjust your strategy before the month closes.
              </div>
            </div>

            {/* ── 11. BRANDING ── */}
            <div className="sec" id="branding">
              <div className="sec-label">Section 11</div>
              <h2 className="sec-title">Branding &amp; Visual Identity</h2>
              <div className="card card-accent">
                <div className="card-title orange">My Approach to Branded Workspaces</div>
                <ul className="blist">
                  <li><strong>Brand audit first</strong> — I review your website, logo, color palette, and overall aesthetic before touching Notion</li>
                  <li><strong>Custom cover images</strong> — designed to match your brand, applied to every major page</li>
                  <li><strong>Icon system</strong> — consistent icon set that aligns with your visual language</li>
                  <li><strong>Color-coded status tags</strong> — using your brand&apos;s color scheme (primary, secondary, accent)</li>
                  <li><strong>Typography consistency</strong> — leveraging Notion&apos;s style options to match your brand&apos;s tone (modern, bold, clean)</li>
                  <li><strong>Logo placement</strong> — workspace icon and key page headers feature your logo</li>
                </ul>
              </div>
              <p style={{ color: "#57534e", marginTop: 8, fontSize: 13.5 }}>
                I&apos;d love to review your current website to pull the exact colors, fonts, and mood so the Notion workspace feels like a natural extension of your brand. If you could share the URL, I&apos;ll use it as the design reference.
              </p>
            </div>

            {/* ── 12. FEEDBACK ── */}
            <div className="sec" id="feedback">
              <div className="sec-label">Section 12</div>
              <h2 className="sec-title">Feedback &amp; Revision Process</h2>
              <div className="g2">
                <div className="card card-accent">
                  <div className="card-title orange">How I Handle Feedback</div>
                  <ul className="blist">
                    <li><strong>Milestone-based reviews</strong> — you see the work at 3 key checkpoints, not just at the end</li>
                    <li><strong>Async-friendly</strong> — leave comments directly in Notion, Loom videos, or a shared doc</li>
                    <li><strong>2 structured revision rounds</strong> included — targeted changes based on your testing</li>
                    <li><strong>Quick turnaround</strong> — revisions within 24–48 hours of feedback</li>
                  </ul>
                </div>
                <div className="card card-accent-warm">
                  <div className="card-title warm">Checkpoints</div>
                  <table className="tbl" style={{ marginBottom: 0 }}>
                    <thead><tr><th>Checkpoint</th><th>What You Review</th></tr></thead>
                    <tbody>
                      <tr><td><span className="badge badge-orange">CP1</span></td><td>Database schema + field definitions (before build)</td></tr>
                      <tr><td><span className="badge badge-orange">CP2</span></td><td>Core build with sample data — formulas, relations, views</td></tr>
                      <tr><td><span className="badge badge-orange">CP3</span></td><td>Full polished workspace with branding — final review</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ── 13. HANDOVER ── */}
            <div className="sec" id="handover">
              <div className="sec-label">Section 13</div>
              <h2 className="sec-title">Handover &amp; Documentation</h2>
              <div className="g3">
                {[
                  { icon: "🎥", title: "Video Walkthrough", desc: "Full recorded walkthrough of every page, database, and workflow. You can rewatch anytime." },
                  { icon: "📖", title: "Written Guide", desc: "A documentation page built directly inside the Notion workspace — always accessible, always up to date." },
                  { icon: "💬", title: "Live Q&A Session", desc: "A 30–45 minute live call after handover to answer questions, make final tweaks, and ensure confidence." },
                ].map((item) => (
                  <div className="card" key={item.title} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                    <div style={{ fontWeight: 700, color: "#1c1917", marginBottom: 6, fontFamily: "'Manrope',sans-serif" }}>{item.title}</div>
                    <div style={{ fontSize: 12.5, color: "#78716c", lineHeight: 1.55 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="alert green" style={{ marginTop: 8 }}>
                <strong>Post-Delivery Support</strong>
                I include 7 days of free support after handover — if anything breaks, needs adjusting, or doesn&apos;t make sense, I&apos;m available to fix it immediately.
              </div>
            </div>

            {/* ── 14. TIMELINE ── */}
            <div className="sec" id="timeline">
              <div className="sec-label">Section 14</div>
              <h2 className="sec-title">Estimated Timeline</h2>
              <table className="tbl">
                <thead><tr><th>Phase</th><th>Duration</th><th>Deliverable</th></tr></thead>
                <tbody>
                  <tr><td style={{ fontWeight: 700 }}>Discovery &amp; Schema</td><td>2–3 days</td><td>Full database schema document for approval</td></tr>
                  <tr><td style={{ fontWeight: 700 }}>Core Build</td><td>4–5 days</td><td>All databases, relations, formulas, sample data</td></tr>
                  <tr><td style={{ fontWeight: 700 }}>Dashboard &amp; Views</td><td>2–3 days</td><td>Command Center, all operational views, financial views</td></tr>
                  <tr><td style={{ fontWeight: 700 }}>Branding &amp; Polish</td><td>1–2 days</td><td>Branded workspace matching your visual identity</td></tr>
                  <tr><td style={{ fontWeight: 700 }}>Revisions</td><td>2–3 days</td><td>2 rounds of structured revisions</td></tr>
                  <tr><td style={{ fontWeight: 700 }}>Handover &amp; Training</td><td>1–2 days</td><td>Video, docs, live session</td></tr>
                  <tr style={{ background: "rgba(236,66,15,.04)" }}><td style={{ fontWeight: 800, color: "#EC420F" }}>Total</td><td style={{ fontWeight: 800, color: "#EC420F" }}>~12–18 days</td><td style={{ fontWeight: 700 }}>Complete Fleet OS + documentation + training</td></tr>
                </tbody>
              </table>
              <p style={{ fontSize: 12.5, color: "#78716c", fontStyle: "italic" }}>
                Timeline depends on feedback turnaround. Faster feedback = faster delivery. I&apos;m available to start immediately upon agreement.
              </p>
            </div>

            {/* ── 15. MY QUESTIONS ── */}
            <div className="sec" id="questions">
              <div className="sec-label">Section 15</div>
              <h2 className="sec-title">Questions for You</h2>
              <p style={{ color: "#57534e", marginBottom: 16 }}>
                To build the best possible system, I&apos;d appreciate clarity on a few things:
              </p>

              {[
                { n: "Q1", q: "Could you share your website URL? I'd like to review the business, vehicle lineup, and branding before starting the design phase." },
                { n: "Q2", q: "How many vehicles are currently in the fleet, and what's the target fleet size in the next 6–12 months?" },
                { n: "Q3", q: "What does your current tracking look like? Spreadsheets, another tool, or mostly manual / in your head?" },
                { n: "Q4", q: "Are there specific vehicle categories (e.g., Exotic, Luxury Sedan, SUV, Specialty) that need separate views or reporting?" },
                { n: "Q5", q: "For bookings — do you manage them through a platform (Turo, your website, etc.) or is it direct / manual? This affects whether we need any integration consideration." },
                { n: "Q6", q: "Do you have employees or partners who will also use this workspace, or is it primarily for you as the owner/operator?" },
                { n: "Q7", q: "For costs — do all vehicles follow the same cost structure (lease + insurance + maintenance), or are some owned outright, financed differently, etc.?" },
                { n: "Q8", q: "Is there any existing data (spreadsheets, CSVs) you'd like migrated into the new system, or are we starting fresh?" },
                { n: "Q9", q: "What Notion plan are you on (Free, Plus, Business)? This affects which features (automations, API, etc.) we can leverage." },
                { n: "Q10", q: "Beyond the fleet financials, are there any other operational areas you'd want tracked (e.g., detailing schedules, fuel, tolls, driver logs, damage tracking)?" },
              ].map((item) => (
                <div className="q-card" key={item.n}>
                  <div className="q-label">{item.n}</div>
                  <div className="q-text">{item.q}</div>
                </div>
              ))}
            </div>

            {/* ── 16. NEXT STEPS ── */}
            <div className="sec" id="next">
              <div className="sec-label">Next Steps</div>
              <h2 className="sec-title">Let&apos;s Build Your Fleet OS</h2>
              <div className="card" style={{ background: "linear-gradient(135deg,#1c1917,#292524)", color: "#fff", border: "none", padding: "32px 28px" }}>
                <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20, color: "rgba(255,255,255,.75)" }}>
                  I&apos;m excited about this project. You clearly care about building something structured and professional — and that&apos;s exactly the kind of system I enjoy building. Here&apos;s what I&apos;d suggest:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Reply with answers to my questions above — this will give me everything I need for the discovery phase",
                    "I'll review your website and current materials, then send a detailed schema proposal",
                    "Once you approve the schema, I begin the build — with checkpoint reviews along the way",
                  ].map((text, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#EC420F,#d8681d)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                      <p style={{ color: "rgba(255,255,255,.85)", fontSize: 14.5, lineHeight: 1.6 }}>{text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.08)" }}>
                  <p style={{ color: "#EC420F", fontWeight: 700, fontFamily: "'Lato',sans-serif", fontSize: 13, letterSpacing: ".04em", marginBottom: 4 }}>CONTACT</p>
                  <p style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>Muhammad Anique — <a href="mailto:anique.cs@gmail.com" style={{ color: "#f9a88a" }}>anique.cs@gmail.com</a></p>
                  <p style={{ color: "rgba(255,255,255,.4)", fontSize: 12.5, marginTop: 4 }}>Full-Stack Developer &amp; Systems Architect · <a href="https://muhammadanique.com" style={{ color: "rgba(255,255,255,.5)" }}>muhammadanique.com</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ═══ FOOTER ═══ */}
        <div className="foot">
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div className="foot-grid">
              {[
                ["Prepared By", "Muhammad Anique"],
                ["Project", "Fleet OS — Notion Build"],
                ["Databases", "5 Core"],
                ["Timeline", "~12–18 Days"],
                ["Contact", "anique.cs@gmail.com"],
              ].map(([k, v]) => (
                <div className="foot-item" key={k}><strong>{k}</strong><span>{v}</span></div>
              ))}
            </div>
            <p style={{ opacity: 0.4, fontSize: 12 }}>
              Confidential · Exotic Fleet OS Proposal · March 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
