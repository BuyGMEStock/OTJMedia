'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'

const searchQueries = [
  "How to make a website",
  "How to help my business succeed online",
  "How to generate more sales",
  "How to get more eyes on my business",
  "Best website design for small business",
  "How to stand out from competitors online",
  "Website that converts visitors to customers",
  "Professional business website examples",
  "Modern website design ideas 2024",
  "How to build brand trust online"
]

export default function AnimatedMacBook() {
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [scope, animate] = useAnimate()
  
  // Function to simulate typing effect
  const typeQuery = async (query: string) => {
    let text = ""
    setTypedText("")
    
    // Type each character with a slight delay
    for (let i = 0; i < query.length; i++) {
      text += query[i]
      setTypedText(text)
      await new Promise(resolve => setTimeout(resolve, 50)) // 50ms delay between characters
    }
    
    // Wait 5 seconds after typing is complete
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    // Move to next query
    setCurrentQueryIndex((prev) => (prev + 1) % searchQueries.length)
  }
  
  // Start typing animation when query changes
  useEffect(() => {
    typeQuery(searchQueries[currentQueryIndex])
  }, [currentQueryIndex])

  return (
    <div className="w-full">
      {/* MacBook Pro Body */}
      <div className="relative w-full">
        {/* Screen */}
        <motion.div
          initial={{ rotateX: 90 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full aspect-[16/10] bg-[#151515] rounded-[20px] shadow-2xl p-[8px]"
          style={{ 
            transformOrigin: "bottom",
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          {/* Screen Content */}
          <div className="w-full h-full bg-white rounded-[14px] overflow-hidden shadow-inner">
            {/* Browser Chrome */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="h-[44px] bg-[#f6f6f6] border-b border-[#ddd] flex items-center px-3 gap-4"
            >
              {/* Traffic Lights */}
              <div className="flex gap-[6px] ml-1">
                <div className="w-[12px] h-[12px] rounded-full bg-[#ff5f57] shadow-inner" />
                <div className="w-[12px] h-[12px] rounded-full bg-[#febc2e] shadow-inner" />
                <div className="w-[12px] h-[12px] rounded-full bg-[#28c840] shadow-inner" />
              </div>
              
              {/* Search Bar */}
              <div className="flex-1 h-[28px] bg-[#ffffff] rounded-md border border-[#ddd] flex items-center px-3 shadow-inner">
                <div className="w-4 h-4 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-400">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span ref={scope} className="text-sm text-gray-800 font-medium">
                  {typedText}
                </span>
                <motion.div
                  className="w-[2px] h-[14px] bg-blue-500 ml-[2px]"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </motion.div>
            
            {/* Browser Content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="p-6 bg-gradient-to-b from-gray-50 to-white h-full"
            >
              <div className="max-w-2xl mx-auto">
                {/* Gradient Header */}
                <div className="h-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg w-3/4 mb-6 animate-pulse"></div>
                
                {/* OTJMedia Result */}
                <div className="mb-6">
                  <h2 className="text-[#1a0dab] text-xl font-medium hover:underline cursor-pointer mb-1">
                    OTJ Media Group | Professional Web Development Services
                  </h2>
                  <p className="text-sm text-gray-600">
                    Transform your business with a custom website that drives sales, saves time, and makes a difference. 
                    Expert web development for businesses of all sizes.
                  </p>
                </div>

                {/* Gradient Lines */}
                <div className="space-y-4">
                  <div className="h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full w-full opacity-30 animate-pulse"></div>
                  <div className="h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full w-5/6 opacity-30 animate-pulse"></div>
                  <div className="h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full w-4/6 opacity-30 animate-pulse"></div>
                  <div className="h-2 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 rounded-full w-3/4 opacity-30 animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Base/Stand */}
        <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-[80%] h-2 bg-gradient-to-b from-[#151515] to-[#252525] rounded-t-sm" />
        <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[15%] h-[10px] bg-[#151515] rounded-b-lg" />
      </div>
    </div>
  )
} 