// components/ProgressCircle.js

const ProgressCircle = () => {
    const radius = 44.5;
    const circumference = 1 * Math.PI * radius;
    const progress = 0.6; // 60% progress
    const dashOffset = circumference * (1 - progress); // Adjust dash offset based on progress
  

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Dashed Circle (Background) */}
      <div className="absolute z-10 w-full h-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 129 129"
          fill="none"
        >
          <circle
            cx="64.5"
            cy="64.5"
            r="54.5"
            stroke="url(#paint0_radial_35_569)"
            strokeOpacity="0.5"
            strokeWidth="20"
            strokeDasharray="3 3" // Dash pattern for the background circle
          />
          <defs>
            <radialGradient
              id="paint0_radial_35_569"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(64.5 64.5) rotate(90) scale(88.9861)"
            >
              <stop stopColor="#EC420F" />
              <stop offset="1" stopColor="#39C8C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Filled Circle (Progress Circle) */}
      <div className="absolute z-20 w-full h-full flex items-center justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 129 129"
          fill="none"
        >
          {/* Use a circle with the progress dash effect */}
          <circle
            cx="64.5"
            cy="64.5"
            r={radius}
            strokeWidth="10"
            strokeDasharray={circumference} // Full circle length
            strokeDashoffset={dashOffset} // Apply offset based on progress
            stroke="#EC420F" // Solid orange for the progress part
            mask="url(#circle-mask)" // Mask the part of the filled circle
          />
        </svg>
      </div>

      {/* Define the mask */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <defs>
          <mask id="circle-mask">
            {/* Mask only the top part of the circle (where the dashed part will appear) */}
            <circle cx="64.5" cy="64.5" r="54.5" fill="zinc-200" />
            {/* The dashed pattern is black on the mask, meaning it will be hidden */}
            <circle
              cx="64.5"
              cy="64.5"
              r="54.5"
              stroke="black"
              strokeWidth="10"
              strokeDasharray="3 3"
            />
          </mask>
        </defs>
      </svg>
    </div>
  );
};

export default ProgressCircle;
