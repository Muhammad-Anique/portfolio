import { useState, useEffect } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 340px)").matches) {
        setBreakpoint("xs"); // Extra Small
      } else if (window.matchMedia("(min-width: 341px) and (max-width: 768px)").matches) {
        setBreakpoint("sm"); // Small
      } else if (window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches) {
        setBreakpoint("md"); // Medium
      } else if (window.matchMedia("(min-width: 1025px) and (max-width: 1280px)").matches) {
        setBreakpoint("lg"); // Large
      } else if (window.matchMedia("(min-width: 1281px) and (max-width: 1536px)").matches) {
        setBreakpoint("xl"); // Extra Large
      } else if (window.matchMedia("(min-width: 1537px)").matches) {
        setBreakpoint("2xl"); // 2 Extra Large
      }
    };

    // Initial check
    handleResize();

    // Event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};
