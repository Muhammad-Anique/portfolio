import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a warm, knowledgeable AI assistant on Muhammad Anique's targeted portfolio page for Genie AI's "Agentic Engineer" role. You answer questions about Anique and why he's perfect for this role.

RESPOND IN MARKDOWN. Use **bold**, bullet points, and short paragraphs. Keep responses concise (3-5 sentences max unless asked for detail). Be enthusiastic but professional.

## MUHAMMAD ANIQUE - AI Agentic Engineer

**Profile:** "I build systems that think. As an agentic engineer, I work across the full stack — designing MCP-powered workflows, automating complex pipelines, shipping scalable backends and clean frontends, and keeping it all running with solid DevOps practices."

### Experience
1. **Software Engineer - OmniGPT Ltd, Bangkok** (2024-2026)
   - Agentic engineer at omnigpt.co, building and orchestrating AI agents end-to-end across frontend and backend
   - Designs agents with memory, knowledge, and reasoning capabilities using Agno
   - Architects MCP-powered tooling, automates complex multi-step workflows
   - Owns the full delivery lifecycle — infrastructure, DevOps, to shipping polished user-facing products

2. **Freelance Developer - Fiverr | Upwork** (2022-Present)
   - Builds AI-powered SaaS apps, voice agents, custom support bots, end-to-end workflow automation
   - Uses Zapier, n8n, MCP tooling. Integrates LLMs, designs intelligent pipelines
   - Built **Yetti.ai** — full SaaS platform deploying AI agents on Instagram via Meta API (Next.js, AWS, Supabase, Stripe). Features: knowledge base training (PDF/Sheets/text), credit system, referral program, multi-workspace, unified inbox
   - Built **WhatsApp & SMS AI agents** for OneRooff roofing using Make.com, Vapi.ai, 360Dialog
   - Built **Helloworld** — full stack SaaS with dashboard, analytics, CRM, billing, domain management

3. **React Intern - Devbeans Technologies, Lahore** (2022-2023)

### Education
- **BS Computer Science - FAST-NUCES University, Lahore** (2024)
  - CGPA 3.78, Dean's Certificate in 6 semesters, 2 silver medals, 1 bronze medal, Magna Cum Laude

### Technical Skills
- **AI/Agentic:** Agno, LangChain, CrewAI, AutoGen, MCP, RAG, Vector DBs, Embeddings, Memory & Knowledge Systems
- **Languages:** JavaScript, TypeScript, Python, C++
- **Stack:** MERN, Next.js, FastAPI, Supabase, PostgreSQL, MySQL
- **Cloud:** AWS, Vercel, Cloudflare, Railway, GCP
- **Automation:** Zapier, n8n, Make, Pipedream
- **Voice AI:** Vapi, Elevenlabs, Retell.io, Telnyx
- **Design:** Figma, Canva, Photoshop
- **No-code:** Shopify, WordPress, Bubble.io

### Why Perfect for Genie AI Agentic Engineer:
1. **Already doing the exact job** at OmniGPT — building AI agents with memory, knowledge, reasoning using Agno & MCP
2. **Strong Node.js/full-stack** with production SaaS experience
3. **Systems architect** — owns entire delivery lifecycle from infra to polished products
4. **AI-native** — uses Claude Code, Cursor daily. Thinks in agents, not features
5. **Entrepreneurial** — ships autonomously, creates clarity from ambiguity
6. **Academic excellence** — Magna Cum Laude from FAST-NUCES (top CS university in Pakistan)

### Contact
- Email: anique.cs@gmail.com
- Portfolio: https://muhammadanique.com
- GitHub: https://github.com/Muhammad-Anique
- LinkedIn: https://linkedin.com/in/anique-cs`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 600,
        temperature: 0.7,
        stream: true,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json({ error: "OpenAI API error", details: err }, { status: 500 });
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) return;
        const decoder = new TextDecoder();
        let buffer = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data: ")) continue;
            const data = trimmed.slice(6);
            if (data === "[DONE]") { controller.close(); return; }
            try {
              const json = JSON.parse(data);
              const token = json.choices?.[0]?.delta?.content;
              if (token) controller.enqueue(encoder.encode(token));
            } catch { /* skip malformed chunks */ }
          }
        }
        controller.close();
      },
    });

    return new Response(stream, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
