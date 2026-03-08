import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Anique - Agentic Engineer for Genie AI",
  description:
    "AI Agentic Engineer & Full Stack Developer. Builder of autonomous AI agent systems at OmniGPT. Applying for the Agentic Engineer role at Genie AI.",
};

export default function GenieAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body {
              background: #FAFAFA !important;
            }
            /* Hide the main portfolio navbar */
            body > div > div > .fixed.backdrop-blur-sm,
            .fixed.backdrop-blur-sm.top-0.z-50,
            .font-playfair.fixed,
            /* Target the specific navbar wrapper */
            body > div > div > div:first-child > .fixed {
              display: none !important;
            }
            /* Hide sidebar trigger and sidebar */
            #sidebar-main,
            [id="sidebar-main"] {
              display: none !important;
            }
          `,
        }}
      />
      {children}
    </>
  );
}
