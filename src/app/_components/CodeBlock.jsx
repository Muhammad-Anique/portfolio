"use client";

import { useTheme } from "../_context/ThemeContext";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Use 'esm' directory
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CheckIcon, CopyIcon } from "lucide-react";

const formatCode = async (code, language = "javascript") => {
  try {
    if (typeof code !== "string") {
      code = String(code); // Ensure it's a string
    }
    console.log(language);
    return code;
  } catch (error) {
    console.error("Error formatting code:", error);
    return ""; // Return an empty string on error
  }
};

const CodeBlock = ({ code, language = "javascript", title }) => {
  const [formattedCode, setFormattedCode] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const formatAndSetCode = async () => {
      const formatted = await formatCode(code);
      setFormattedCode(formatted);
    };

    formatAndSetCode();
  }, [code]);

  const handleCopy = () => {
    if (formattedCode) {
      navigator.clipboard
        .writeText(formattedCode)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  return (
    <div className="w-full h-auto flex flex-col gap-2  mt-3">
      {title && (
        <h1 className="text-lg text-zinc-900 dark:text-zinc-200  font-lato font-bold">
          {title}
        </h1>
      )}
      <div className="relative dark:bg-zinc-900/80 bg-zinc-200/40 backdrop-blur-md text-white rounded-lg dark:shadow-md overflow-hidden">
        <div className="flex justify-between items-center dark:bg-zinc-900/80 bg-zinc-300/40  px-4 py-2">
          <span className="text-sm font-medium uppercase text-zinc-700 dark:text-zinc-400">
            {language}
          </span>
          <button
            onClick={handleCopy}
            aria-label="Copy code"
            className="focus:outline-none flex items-center group justify-center gap-1"
          >
            {!isCopied ? (
              <CopyIcon
                className={`w-4 h-4 text-zinc-600 group-hover:text-zinc-950 dark:text-zinc-200`}
              />
            ) : (
              <CheckIcon className={`w-4 h-4 text-green-600 `} />
            )}
            <span
              className={`text-sm ${
                isCopied
                  ? "text-green-600"
                  : "text-zinc-600 dark:text-zinc-200 group-hover:text-zinc-950"
              }`}
            >
              {isCopied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>
        <div className="overflow-auto">
          {/* Only render the SyntaxHighlighter after the code is formatted */}
          {formattedCode && (
            <SyntaxHighlighter
              language={language}
              style={theme === "dark" ? dracula : prism} // Use `dracula` for dark mode, `prism` for light mode
              customStyle={{
                background: "transparent",
                margin: 0,
                padding: "1rem",
                borderRadius: "0.5rem",
                fontSize: "clamp(0.85rem, 2.5vw, 1rem)", // Responsive font size
                lineHeight: 1.5, // Improved readability
              }}
              showLineNumbers
              lineNumberStyle={{
                color: theme === "dark" ? "#6c757d" : "#333", // Line number color based on theme
                fontSize: "clamp(0.75rem, 2vw, 0.85rem)", // Responsive line number font size
                marginRight: "10px",
              }}
            >
              {formattedCode}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
