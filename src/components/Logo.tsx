import React from 'react'

export default function Logo({ tagline = true, className = '' }: { tagline?: boolean, className?: string }) {
  return (
    <div className={`flex flex-col items-start ${className}`} style={{ lineHeight: 1 }}>
      <div className="flex items-center gap-2">
        {/* SVG Icon */}
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="4" fill="none" />
          <path d="M10 38C16 24 32 10 38 10" stroke="white" strokeWidth="4" strokeLinecap="round" />
          {/* The two small circles and bar above the O */}
          <circle cx="22" cy="10" r="3" fill="white" />
          <circle cx="32" cy="10" r="3" fill="white" />
          <rect x="24.5" y="7.5" width="7" height="5" rx="2.5" fill="white" />
          {/* You can further tweak the icon for more accuracy */}
        </svg>
        {/* OTJ Text */}
        <span className="text-3xl md:text-4xl font-bold italic text-white tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>OTJ</span>
      </div>
      {tagline && (
        <span className="text-xs md:text-sm italic text-white mt-1 ml-1 tracking-wide" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
          THE WEBSITE YOUR BUSINESS NEEDS
        </span>
      )}
    </div>
  )
} 