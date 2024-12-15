import Image from "next/image";

const OptimizedBackground = ({ src, opacity }) => {
  return (
    <div
      className={`fixed inset-0 h-screen w-screen bg-center opacity-10 ${
        opacity === 30 ? "opacity-30" : "opacity-10"
      }`}
    >
      {/* Next.js Image component with optimized lazy loading */}
      <Image
        src={src} // Path to your image
        alt="background image" // Alt text for accessibility
        layout="fill" // Fill the container
        objectFit="cover" // Cover the entire div without stretching
        priority={false} // Set to true if this image is critical to display immediately
        loading="lazy" // Lazy loading enabled (default for Next.js)
        style={{
          filter: "invert(0)", // Apply your filter if needed
        }}
      />
    </div>
  );
};

export default OptimizedBackground;
