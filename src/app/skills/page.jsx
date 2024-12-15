"use client";
import React from "react";
import Skills from "../_components/Skills";
import { jsPDF } from "jspdf";
import OptimizedBackground from "../_components/OptimizedBackground";
const Page = () => {
  const downloadDivAsPDF = () => {
    const content = document.getElementById("downloadable-content"); // Select the div to download

    const pdf = new jsPDF("p", "mm", "a4"); // Create new PDF instance (portrait, A4 format)

    const margin = 6; // Margin for PDF
    const pageHeight = pdf.internal.pageSize.height; // Page height in mm
    let yPosition = margin + 5; // Start from top of the page with some margin
    const textSize = 12; // Small text size for content
    const lineHeight = 6; // Decreased line height (adjust as needed)

    // Set font size for the text
    pdf.setFontSize(textSize);

    // Extract text content from the div
    let textContent = content.innerText || content.textContent;

    // Add extracted text content to the PDF, breaking into multiple lines if needed
    let splitText = pdf.splitTextToSize(textContent, 180); // Limit text width (180mm fits within A4 width)

    // Loop through each line and add it to the PDF
    splitText.forEach((line) => {
      if (yPosition + lineHeight > pageHeight - margin) {
        pdf.addPage(); // Add a new page if the current one is full
        yPosition = margin + 5; // Reset the Y position for new page
      }
      pdf.text(line, margin, yPosition); // Add text to the PDF at the current position
      yPosition += lineHeight; // Increase the Y position for the next line (adjusted line height)
    });

    // Handle images inside the div
    const images = content.getElementsByTagName("img");
    let imageYPosition = yPosition; // Starting Y position for images after the text

    Array.from(images).forEach((image) => {
      const imgData = image.src;
      const imgWidth = 150; // Image width in mm
      const imgHeight = (image.height * imgWidth) / image.width; // Proportional height based on width

      if (imageYPosition + imgHeight > pageHeight - margin) {
        pdf.addPage(); // Add a new page if the current one is full
        imageYPosition = margin; // Reset Y position for new page
      }

      // Add image to PDF (x, y, width, height in mm)
      pdf.addImage(
        imgData,
        "JPEG",
        margin,
        imageYPosition,
        imgWidth,
        imgHeight
      );

      // Update the Y position for the next image
      imageYPosition += imgHeight + 10; // Adjust for next image with a small margin
    });

    // Save the generated PDF
    pdf.save("content.pdf");
  };
  return (
    <div
      id="downloadable-content"
      className="w-full h-auto py-7 md:py-16 flex-col gap-10 relative flex items-center justify-center"
    >
      <OptimizedBackground src={"/l1.jpg"} opacity={0.08} />

      <div className="w-full  h-auto py-20 min-h-[1050px] px-7 flex items-center justify-center">
        <div
          name="container"
          className="h-auto max-w-[1250] w-full  flex flex-col items-center justify-center gap-7 "
        >
          <h1
            onClick={downloadDivAsPDF}
            className="big-winks-text text-3xl md:text-5xl -translate-y-5 md:-translate-y-12 -rotate-6 text-zinc-300"
          >
            Expertise
          </h1>

          <div className="flex flex-col gap-16 md:gap-32 w-full items-center justify-center">
            <Skills title="Front-End Development" />
            <Skills title="Back-End Development" />
            <Skills title="DevOps" />
            <Skills title="Programming Languages" />
            <Skills title="Libraries" />
            <Skills title="UI/UX Design" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
