"use client";
import React, { useEffect } from "react";

const ProjectThemer = (props) => {
  const primary = props?.primaryColor || "#EC420F"; // Default to orange-red
  const secondary = props?.secondaryColor || "#FFA500"; // Default to orange
  const tertiary = props?.tertiaryColor || "#EC420F";

  useEffect(() => {
    const sidebar = document.getElementById("sidebar-main");

    const navdot = document.getElementById("nav-dot");
    if (sidebar) {
      sidebar.style.background = `linear-gradient(to bottom, ${primary}, ${secondary})`;
    }

    if (navdot) {
      navdot.style.backgroundColor = `${tertiary}`;
    }

    // Cleanup on unmount
    return () => {
      if (sidebar) {
        sidebar.style.background = `linear-gradient(to bottom, #EC420F, #FFA500)`; // Default gradient
      }
      if (navdot) {
        navdot.style.backgroundColor = "#EC420F"; // Default solid color
      }
    };
  }, [primary, secondary, tertiary]);

  return <div></div>;
};

export default ProjectThemer;
