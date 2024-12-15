
"use client"
import { useEffect, useState } from "react"


const Flame = ({cursor, cardRef,mouseOnCard }) => {
  const [gradientCenter, setGradientCenter] = useState({ cx: "70%", cy: "50%" })

  useEffect(() => {
    if (cardRef.current && cursor.x !== null && cursor.y !== null) {
      const cardRect = cardRef.current.getBoundingClientRect()
      const cxPercentage = (cursor.x / cardRect.width) * 100 - 24
      const cyPercentage = (cursor.y / cardRect.height) * 100
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      })
    }
  }, [cursor, cardRef])

  return (

    <svg xmlns="http://www.w3.org/2000/svg" width="730" height="730" viewBox="0 0 730 730" fill="none">
    <path d="M263.5 150.5V637"stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint0_linear_98_27)')}`}/>
    <path d="M315 243V729.5" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint1_linear_98_27)')}`}/>
    <path d="M365 180V666.5" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint2_linear_98_27)')}`}/>
    <path d="M413 97V583.5" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint3_linear_98_27)')}`}/>
    <path d="M465 0V486.5" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint4_linear_98_27)')}`}/>
    <path d="M523 67V553.5" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint5_linear_98_27)')}`}/>
    <path d="M581 160V646.5" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint6_linear_98_27)')}`}/>
    <path d="M150.5 89L637 89" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint7_linear_98_27)')}`}/>
    <path d="M243 140.5L729.5 140.5" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint9_linear_98_27)')}`}/>
    <path d="M180 190.5L666.5 190.5" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint10_linear_98_27)')}`}/>
    <path d="M97 238.5L583.5 238.5" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint11_linear_98_27)')}`}/>
    <path d="M0 290.5L622 293.041" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint12_linear_98_27)')}`}/>
    <path d="M67 348.5L553.5 348.5" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint13_linear_98_27)')}`}/>
    <path d="M160 406.5L646.5 406.5" stroke={`${mouseOnCard ? ('url(#emeraldGradient)') : ('url(#paint13_linear_98_27)')}`}/>
    <defs>
    <linearGradient id="paint0_linear_98_27" x1="264" y1="150.5" x2="264" y2="637" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1f1f1f" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#313131"/>
    </linearGradient>
    <linearGradient id="paint1_linear_98_27" x1="315.5" y1="243" x2="315.5" y2="729.5" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint2_linear_98_27" x1="365.5" y1="180" x2="365.5" y2="666.5" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint3_linear_98_27" x1="413.5" y1="97" x2="413.5" y2="583.5" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint4_linear_98_27" x1="465.5" y1="0" x2="465.5" y2="486.5" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint5_linear_98_27" x1="465.5" y1="-1.33738e-05" x2="465.5" y2="486.5" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint6_linear_98_27" x1="523.5" y1="93" x2="523.5" y2="579.5" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint7_linear_98_27" x1="150.5" y1="89.5" x2="637" y2="89.5" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint8_linear_98_27" x1="243" y1="141" x2="729.5" y2="141" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint9_linear_98_27" x1="180" y1="191" x2="666.5" y2="191" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint10_linear_98_27" x1="97" y1="239" x2="583.5" y2="239" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint11_linear_98_27" x1="0.00204247" y1="290" x2="622.002" y2="292.541" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint12_linear_98_27" x1="-1.58872e-05" y1="291" x2="486.5" y2="291" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <linearGradient id="paint13_linear_98_27" x1="93" y1="349" x2="579.5" y2="349" gradientUnits="userSpaceOnUse">
    <stop stopColor="#1C1C1C" stopOpacity="0.5"/>
    <stop offset="1" stopColor="#3B3B3B"/>
    </linearGradient>
    <radialGradient
          id="emeraldGradient"
          gradientUnits="userSpaceOnUse"
          r="35%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnCard && <stop stopColor="#39C8C0" />}
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
    
    </defs>
    </svg>
    
  )
}

export default Flame