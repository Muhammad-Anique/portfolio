"use client"
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Use 'esm' directory

const formatCode = async (code, language = 'javascript') => {
  try {
    if (typeof code !== 'string') {
      code = String(code); // Ensure it's a string
    }
    console.log(language)
    return code;
  } catch (error) {
    console.error('Error formatting code:', error);
    return ''; // Return an empty string on error
  }
};


const CodeBlock = ({ code, language = "javascript", title }) => {
  const [formattedCode, setFormattedCode] = useState(null);

  useEffect(() => {
    const formatAndSetCode = async () => {
      const formatted = await formatCode(code);
      setFormattedCode(formatted);
    };

    formatAndSetCode();
  }, [code]);

  return (
    <div className="w-full h-auto flex flex-col gap-2 mt-8">
      {title && (
        <h1 className="text-lg text-zinc-200 font-lato font-bold">{title}</h1>
      )}
      <div className="relative bg-zinc-900/80 text-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-between items-center bg-zinc-800/70 px-4 py-2">
          <span className="text-sm font-medium uppercase text-zinc-400">
            {language}
          </span>
        </div>
        <div className="overflow-auto">
          {/* Only render the SyntaxHighlighter after the code is formatted */}
          {formattedCode && (
            <SyntaxHighlighter
              language={language}
              style={dracula}
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
                color: "#6c757d",
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
