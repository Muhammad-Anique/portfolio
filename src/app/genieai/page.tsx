"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  Bot, Wrench, Zap, Sparkles, Target, GraduationCap,
  ArrowRight, ArrowUpRight, Download, Send, MessageCircle, X,
  Github, Linkedin, Mail, ExternalLink, BookOpen, Rocket, Star,
  Brain, Database, Cloud, Mic, Palette, ChevronRight,
  Briefcase, Calendar, MapPin, Award, Coffee,
} from "lucide-react";

/* ═══════════════════════════════════════════
   BRAND TOKENS
   ═══════════════════════════════════════════ */
const V = {
  purple: "#7C3AED",
  purpleLight: "#8B5CF6",
  purpleSoft: "#EDE9FE",
  purpleBorder: "#DDD6FE",
  lavender: "#F5F3FF",
  bg: "#FAFAFA",
  text: "#1A1A2E",
};

/* ─── Genie AI Logo ─── */
const GenieLogo = ({ className = "" }: { className?: string }) => (
  <svg width="120" height="20" viewBox="0 0 165 26" fill="none" className={className}>
    <path d="M12.5092 10.497V14.6668H18.7778V18.0809C17.9942 18.9764 17.0427 19.6481 15.9793 20.1518C14.9159 20.6555 13.7405 20.9074 12.5092 20.9074C10.2144 20.9074 8.25549 20.0958 6.6044 18.4727C4.98128 16.8216 4.16972 14.8347 4.16972 12.5679C4.16972 10.3012 4.98128 8.31424 6.6044 6.69113C8.25549 5.04003 10.2424 4.22847 12.5092 4.22847C14.8039 4.22847 16.7629 5.04003 18.386 6.69113L21.3803 3.72473C20.233 2.57736 18.8897 1.68186 17.3785 1.01023C15.8673 0.366579 14.2442 0.0307617 12.5092 0.0307617C9.03906 0.0307617 6.10067 1.26208 3.666 3.69676C1.23133 6.15941 0 9.09781 0 12.5399C0 16.01 1.23133 18.9484 3.666 21.3831C6.10067 23.8178 9.03906 25.0491 12.5092 25.0491C13.5726 25.0491 14.636 24.9092 15.6435 24.6573C16.6509 24.3775 17.6024 24.0137 18.4979 23.51C19.3934 23.0062 20.233 22.4186 20.9606 21.7189C21.7161 21.0193 22.3878 20.2357 22.9755 19.3962V10.4411H12.5092V10.497Z" fill="currentColor"/>
    <path d="M70.5484 0V14.9998L53.8975 0V25.0463H58.0392V10.0745L74.7461 25.0743V0H70.5484Z" fill="currentColor"/>
    <path d="M81.9375 0.0305786V25.0769H86.1072V0.0305786H81.9375Z" fill="currentColor"/>
    <path d="M109.98 4.22307V0.0533447H93.3291V25.0997H109.98V20.9299H97.4708V14.6894H109.98V10.5196H97.4708V4.25105H109.98V4.22307Z" fill="currentColor"/>
    <path d="M153.189 25.0769H148.543L146.445 20.8792H137.517L139.588 16.7374H144.346L141.967 11.98L140.68 9.37747L136.986 16.7374L134.943 20.8792L132.816 25.0769H128.143L140.68 0.0305786L153.189 25.0769Z" fill="currentColor"/>
    <path d="M160.408 0.0305786V25.0769H164.55V0.0305786H160.408Z" fill="currentColor"/>
    <path d="M46.734 4.22314V0.0534058H30.0831V25.0997H46.734V20.93H34.2248V14.6894H46.734V10.5197H34.2248V4.25111H46.734V4.22314Z" fill="currentColor"/>
  </svg>
);

/* ─── Typing animation ─── */
function TypeWriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[idx];
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1800);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDeleting(false); setIdx((i) => (i + 1) % words.length); }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [text, deleting, idx, words]);
  return <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">{text}<span className="animate-pulse text-purple-400">|</span></span>;
}

/* ─── Helpers ─── */
const Section = ({ children, className = "", id, style }: { children: ReactNode; className?: string; id?: string; style?: React.CSSProperties }) => (
  <section id={id} className={`py-24 px-6 md:px-10 ${className}`} style={style}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const Badge = ({ children, icon: Icon }: { children: string; icon?: React.ElementType }) => (
  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.12em] uppercase rounded-full border" style={{ color: V.purple, background: V.purpleSoft, borderColor: V.purpleBorder }}>
    {Icon && <Icon size={12} />}
    {children}
  </span>
);

/* ─── Chat Widget ─── */
function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { if (isOpen) inputRef.current?.focus(); }, [isOpen]);

  const send = async (content: string) => {
    if (!content.trim() || isLoading) return;
    const userMsg = { role: "user" as const, content: content.trim() };
    const all = [...messages, userMsg];
    setMessages(all); setInput(""); setIsLoading(true);
    try {
      const res = await fetch("/api/genieai-agent", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: all }) });
      if (!res.ok) throw new Error();
      const reader = res.body?.getReader();
      if (!reader) throw new Error();
      const decoder = new TextDecoder(); let acc = "";
      setMessages((p) => [...p, { role: "assistant", content: "" }]);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        const snap = acc;
        setMessages((p) => { const u = [...p]; u[u.length - 1] = { role: "assistant", content: snap }; return u; });
      }
    } catch { setMessages((p) => [...p, { role: "assistant", content: "Oops, something went wrong. Try again!" }]); }
    setIsLoading(false);
  };

  const suggestions = ["Why hire Anique for Genie AI?", "What AI agents has he built?", "Tell me about his OmniGPT work"];

  return (
    <>
      <motion.button onClick={() => setIsOpen(!isOpen)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl text-white shadow-xl shadow-purple-500/30 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${V.purple}, #A855F7)` }}>
        <AnimatePresence mode="wait">
          {isOpen ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={20} /></motion.div>
            : <motion.div key="c" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Sparkles size={20} /></motion.div>}
        </AnimatePresence>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", damping: 28 }}
            className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl shadow-purple-500/10 border border-gray-100 flex flex-col overflow-hidden"
            style={{ maxHeight: "min(560px, calc(100vh - 8rem))" }}>
            <div className="px-5 py-4 border-b border-gray-50 bg-gradient-to-r from-purple-50 to-violet-50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white"><Bot size={18} /></div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Ask about Anique</p>
                  <p className="text-[11px] text-gray-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> AI-powered</p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px]">
              {messages.length === 0 && (
                <div className="text-center py-6">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-purple-100 to-violet-100 flex items-center justify-center mb-3"><Coffee size={22} className="text-purple-500" /></div>
                  <p className="text-gray-600 text-sm font-semibold mb-1">Hey there!</p>
                  <p className="text-gray-400 text-xs mb-5">Ask me anything about Anique&apos;s fit for the role</p>
                  <div className="flex flex-col gap-2">
                    {suggestions.map((s) => (
                      <button key={s} onClick={() => send(s)} className="text-xs text-left px-4 py-2.5 rounded-xl border border-purple-100 text-purple-600 bg-purple-50/50 hover:bg-purple-50 hover:border-purple-200 transition-all flex items-center justify-between group">
                        {s} <ChevronRight size={14} className="text-purple-300 group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${msg.role === "user" ? "rounded-2xl rounded-br-sm bg-gradient-to-br from-purple-500 to-violet-600 text-white" : "rounded-2xl rounded-bl-sm bg-gray-50 text-gray-700 border border-gray-100"}`}>
                    {msg.role === "assistant" ? (msg.content ? (<div className="prose prose-sm prose-gray max-w-none [&_p]:my-1 [&_ul]:my-1.5 [&_ol]:my-1.5 [&_li]:my-0.5 [&_strong]:text-gray-900 [&_a]:text-purple-600 [&_code]:bg-purple-50 [&_code]:text-purple-700 [&_code]:px-1 [&_code]:rounded"><ReactMarkdown>{msg.content}</ReactMarkdown></div>) : (
                      <span className="inline-flex gap-1.5 py-1"><span className="w-2 h-2 rounded-full bg-purple-300 animate-bounce" /><span className="w-2 h-2 rounded-full bg-purple-300 animate-bounce [animation-delay:0.15s]" /><span className="w-2 h-2 rounded-full bg-purple-300 animate-bounce [animation-delay:0.3s]" /></span>
                    )) : msg.content}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="p-3 border-t border-gray-50 bg-white">
              <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
                <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." disabled={isLoading}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-300 transition-all" />
                <button type="submit" disabled={isLoading || !input.trim()}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white disabled:opacity-30 transition-all hover:shadow-lg hover:shadow-purple-500/25">
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function GenieAIPage() {
  return (
    <div className="min-h-screen font-[system-ui,Inter,-apple-system,sans-serif] selection:bg-purple-200" style={{ background: V.bg, color: V.text }}>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GenieLogo className="text-gray-900" />
            <div className="w-px h-5 bg-gray-200" />
            <span className="text-sm font-semibold text-gray-700">Muhammad Anique</span>
          </div>
          <div className="flex items-center gap-1.5">
            <a href="https://github.com/Muhammad-Anique" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-all"><Github size={18} /></a>
            <a href="https://linkedin.com/in/anique-cs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-all"><Linkedin size={18} /></a>
            <a href="mailto:anique.cs@gmail.com?subject=Agentic%20Engineer%20-%20Muhammad%20Anique" className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              <Mail size={14} /> Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <Section className="pt-36 pb-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Badge icon={Sparkles}>Applying for Agentic Engineer</Badge>
          <h1 className="mt-7 text-[3.2rem] md:text-[4.4rem] font-extrabold leading-[1.06] tracking-tight text-gray-900">
            I build systems<br />that <TypeWriter words={["think.", "reason.", "act.", "learn.", "scale."]} />
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
            Agentic Engineer at <strong className="text-gray-700">OmniGPT</strong>.
            I design MCP-powered workflows, orchestrate AI agents with memory &amp; reasoning,
            and ship full-stack products end-to-end. FAST-NUCES CS, <em>Magna Cum Laude</em>.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://muhammadanique.com" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 transition-all">
              Full Portfolio <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="https://exggfeypqucbibabxodx.supabase.co/storage/v1/object/public/Anique-Portfolio-Image/BlogFeatureImages/Muhammad-Anique-Resume.pdf" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50/50 transition-all shadow-sm">
              <Download size={16} /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "3.78", sub: "CGPA, FAST-NUCES", icon: GraduationCap },
            { val: "2+ yrs", sub: "Agentic Engineering", icon: Bot },
            { val: "14+", sub: "Projects Shipped", icon: Rocket },
            { val: "6x", sub: "Dean's List", icon: Award },
          ].map((s) => (
            <motion.div key={s.sub} whileHover={{ y: -2 }} className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm hover:shadow-md hover:border-purple-100 transition-all group">
              <s.icon size={18} className="mx-auto mb-2 text-gray-300 group-hover:text-purple-500 transition-colors" />
              <div className="text-2xl font-extrabold bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent">{s.val}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── Why Me ── */}
      <Section style={{ background: V.lavender }}>
        <Badge icon={Target}>Perfect Fit</Badge>
        <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Why I&apos;m built for this role</h2>
        <p className="mt-3 text-gray-500 max-w-xl">Your JD says &ldquo;design systems, orchestrate agents, backcast from outcomes.&rdquo; That&apos;s literally my day job.</p>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {[
            { icon: Bot, title: "Already Building AI Agents at Scale", body: "At OmniGPT, I design agents with memory, knowledge & reasoning using Agno. I architect MCP-powered tooling and own the full delivery lifecycle.", color: "from-purple-500 to-violet-500" },
            { icon: Wrench, title: "MCP + RAG + Vector DBs", body: "Hands-on with Model Context Protocol, Retrieval-Augmented Generation, embeddings, and vector databases. Not theoretical \u2014 production systems.", color: "from-blue-500 to-indigo-500" },
            { icon: Zap, title: "Full Stack, Not Siloed", body: "Node.js, Next.js, FastAPI, Supabase, AWS, PostgreSQL. Frontend to DevOps. I don\u2019t hand off \u2014 I own the whole stack.", color: "from-amber-500 to-orange-500" },
            { icon: Sparkles, title: "AI-Native Dev Workflow", body: "Claude Code and Cursor are my daily drivers. I think in agents and leverage, exactly the mindset Genie values.", color: "from-pink-500 to-rose-500" },
            { icon: Target, title: "Ships Autonomously", body: "Built Yetti.ai from zero to production \u2014 AI agents on Instagram, Stripe billing, knowledge bases, multi-workspace. No hand-holding needed.", color: "from-emerald-500 to-teal-500" },
            { icon: GraduationCap, title: "Academic Excellence", body: "BS CS from FAST-NUCES. CGPA 3.78. Dean\u2019s Certificate x6. Two silver medals, one bronze. Magna Cum Laude.", color: "from-violet-500 to-purple-600" },
          ].map((c) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-purple-200 hover:-translate-y-0.5 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white mb-4 shadow-sm`}>
                  <c.icon size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-purple-700 transition-colors">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Experience ── */}
      <Section>
        <Badge icon={Briefcase}>Experience</Badge>
        <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Where I&apos;ve been</h2>
        <div className="mt-10 space-y-0">
          {[
            { period: "2024 \u2013 2026", role: "Software Engineer", company: "OmniGPT Ltd, Bangkok", location: "Remote", desc: "Agentic engineer building and orchestrating AI agents end-to-end. Designing agents with memory, knowledge & reasoning using Agno. Architecting MCP-powered tooling, automating complex multi-step workflows. Owning full delivery lifecycle from infrastructure and DevOps to shipping polished products.", tags: ["Agno", "MCP", "AI Agents", "Full Stack", "DevOps"], current: true },
            { period: "2022 \u2013 Present", role: "Freelance Agentic Engineer", company: "Fiverr | Upwork", location: "Remote", desc: "Building AI-powered SaaS apps, voice agents, custom support bots, and end-to-end workflow automation. Built Yetti.ai (Instagram AI agents), WhatsApp AI agents, lead qualification systems. Integrating LLMs, designing intelligent pipelines.", tags: ["Yetti.ai", "SaaS", "Zapier", "n8n", "Make.com", "Vapi.ai"] },
            { period: "2022 \u2013 2023", role: "React Intern", company: "Devbeans Technologies, Lahore", location: "On-site", desc: "Built React.js skills and front-end development expertise through hands-on professional experience.", tags: ["React.js", "Frontend"] },
          ].map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-8 pb-10 last:pb-0 border-l-2 border-gray-200 last:border-l-transparent">
              <div className={`absolute left-0 top-1.5 w-4 h-4 -translate-x-[9px] rounded-full border-[3px] border-white shadow-sm ${exp.current ? "bg-purple-500 ring-4 ring-purple-100" : "bg-gray-300"}`} />
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all ml-2">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-purple-600"><Calendar size={11} /> {exp.period}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-400"><MapPin size={11} /> {exp.location}</span>
                  {exp.current && <span className="text-[10px] px-2 py-0.5 rounded-full text-white font-bold bg-gradient-to-r from-purple-500 to-violet-500">Current</span>}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{exp.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.tags.map((t) => <span key={t} className="text-[11px] px-2.5 py-1 rounded-lg font-medium bg-purple-50 text-purple-600 border border-purple-100">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Skills ── */}
      <Section style={{ background: "white" }}>
        <Badge icon={Brain}>Tech Stack</Badge>
        <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Skills &amp; tools</h2>
        <p className="mt-2 text-sm text-gray-400 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500" /> = matches Agentic Engineer JD</p>
        <div className="mt-8 space-y-6">
          {[
            { cat: "AI / Agentic", icon: Bot, skills: ["Agno", "LangChain", "CrewAI", "AutoGen", "MCP", "RAG", "Vector DBs", "Embeddings", "Memory Systems"], jd: true },
            { cat: "Languages", icon: Zap, skills: ["JavaScript", "TypeScript", "Python", "C++"], jd: true },
            { cat: "Full Stack", icon: ExternalLink, skills: ["Node.js", "Next.js", "React.js", "Express.js", "FastAPI", "MERN"], jd: true },
            { cat: "Databases", icon: Database, skills: ["PostgreSQL", "Supabase", "MySQL", "MongoDB"] },
            { cat: "Cloud & DevOps", icon: Cloud, skills: ["AWS", "Vercel", "Cloudflare", "Railway", "GCP", "Docker"] },
            { cat: "Automation", icon: Wrench, skills: ["Zapier", "n8n", "Make.com", "Pipedream"] },
            { cat: "Voice AI", icon: Mic, skills: ["Vapi", "Elevenlabs", "Retell.io", "Telnyx"] },
            { cat: "Design & No-Code", icon: Palette, skills: ["Figma", "Shopify", "WordPress", "Bubble.io"] },
          ].map((group) => (
            <div key={group.cat} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-32 flex items-center gap-2 pt-1">
                <group.icon size={14} className={group.jd ? "text-purple-500" : "text-gray-300"} />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{group.cat}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span key={s} className={`inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg border font-medium transition-all hover:-translate-y-px hover:shadow-sm ${
                    group.jd ? "border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100" : "border-gray-150 bg-gray-50 text-gray-600 hover:bg-white"
                  }`}>
                    {group.jd && <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />}
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Projects ── */}
      <Section>
        <Badge icon={Rocket}>Featured Work</Badge>
        <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Projects that matter</h2>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {[
            { name: "Yetti.ai", role: "Founder & Builder", desc: "Full SaaS platform deploying AI agents on Instagram. Knowledge base training (PDF/Sheets/text), Stripe credits, referral program, multi-workspace, unified inbox.", tags: ["Next.js", "AWS", "Supabase", "Meta API", "Stripe", "AI Agents"], link: "https://muhammadanique.com/projects/yetti-ai-instagram-ai-agent-platform", gradient: "from-purple-500 via-violet-500 to-indigo-500" },
            { name: "OmniGPT Agent Platform", role: "Software Engineer", desc: "Building AI agents with memory, knowledge & reasoning. MCP-powered tooling, multi-step workflow automation, full delivery lifecycle from DevOps to polished products.", tags: ["Agno", "MCP", "RAG", "Python", "TypeScript", "DevOps"], link: "https://omnigpt.co", gradient: "from-indigo-500 via-blue-500 to-cyan-500" },
            { name: "WhatsApp AI Agent", role: "Freelance", desc: "24/7 WhatsApp AI agent for roofing company. Make.com automation, 360Dialog API, Supabase sessions, Vapi.ai for intelligent responses.", tags: ["Make.com", "Vapi.ai", "360Dialog", "Supabase"], link: "https://muhammadanique.com/projects/onerooff-whatsapp-ai-agent", gradient: "from-emerald-500 via-green-500 to-teal-500" },
            { name: "Helloworld SaaS", role: "Full Stack Builder", desc: "Complete SaaS platform with project dashboard, analytics, CRM, billing, domain management, notes, settings. Built from scratch.", tags: ["Next.js", "Node.js", "Supabase", "Full Stack"], link: "https://muhammadanique.com/projects/helloworld", gradient: "from-amber-500 via-orange-500 to-red-500" },
          ].map((p) => (
            <motion.a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-200 hover:-translate-y-1 transition-all">
              <div className={`h-1.5 bg-gradient-to-r ${p.gradient}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{p.name}</h3>
                  <ArrowUpRight size={16} className="text-gray-300 group-hover:text-purple-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-xs text-gray-400 mb-2.5 flex items-center gap-1"><Briefcase size={11} /> {p.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <span key={t} className="text-[11px] px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 border border-gray-100 group-hover:border-purple-100 group-hover:bg-purple-50/50 group-hover:text-purple-600 transition-all">{t}</span>)}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* ── 90-Day Plan ── */}
      <Section style={{ background: V.lavender }}>
        <Badge icon={Calendar}>90-Day Plan</Badge>
        <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">My first 90 days at Genie</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {[
            { month: "Month 1", title: "Learn & Build", icon: BookOpen, color: "from-blue-500 to-indigo-500", items: ["Deep-dive into Genie\u2019s codebase & agent architecture", "Build first subagent within the legal framework", "Engage with AIOps workflows and establish patterns", "Ship first meaningful production contribution"] },
            { month: "Month 2", title: "Own & Deliver", icon: Rocket, color: "from-purple-500 to-violet-500", items: ["Take full end-to-end ownership of assigned product", "Design technical systems that amplify team output", "Iterate rapidly on agent orchestration & monitoring", "Drive measurable velocity improvements"] },
            { month: "Month 3", title: "Lead & Strategize", icon: Star, color: "from-amber-500 to-orange-500", items: ["Proactively contribute to product strategy & roadmap", "Identify new agent-powered feature opportunities", "Share agentic development patterns with team", "Measure and demonstrate impact on product quality"] },
          ].map((p) => (
            <motion.div key={p.month} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-sm mb-4`}>
                <p.icon size={20} />
              </div>
              <p className="text-xs font-bold tracking-wider uppercase text-purple-600">{p.month}</p>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-4">{p.title}</h3>
              <ul className="space-y-2.5">
                {p.items.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-gray-500 leading-relaxed">
                    <ChevronRight size={14} className="mt-0.5 text-purple-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section className="text-center py-28">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-xl mx-auto relative">
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 rounded-[32px] blur-xl opacity-40 -z-10 scale-95" />
          <div className="bg-white rounded-[28px] border border-purple-100 p-12 shadow-xl shadow-purple-500/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500" />
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/30">
              <MessageCircle size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Let&apos;s build the future<br />of legal AI together</h2>
            <p className="text-gray-500 mt-3 mb-8">Ready to architect agent systems, ship autonomously, and help Genie AI democratize legal infrastructure.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:anique.cs@gmail.com?subject=Agentic%20Engineer%20-%20Muhammad%20Anique"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 transition-all">
                <Mail size={16} /> Get in Touch <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/anique-cs" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50/50 transition-all shadow-sm">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/Muhammad-Anique" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50/50 transition-all shadow-sm">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-gray-400">
          <span>Muhammad Anique &middot; Targeted Portfolio for Genie AI</span>
          <span className="flex items-center gap-1"><Sparkles size={10} /> Built with Next.js &amp; AI</span>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}
