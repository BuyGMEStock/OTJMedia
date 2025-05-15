'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-black/20 backdrop-blur-sm mt-auto">
      <div className="container-custom py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Digital Strategy</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">SEO Optimization</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/calendar" className="text-white/70 hover:text-white transition-colors">Book a Call</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-white/70 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="mailto:contact@otjmedia.com" className="text-white/70 hover:text-white transition-colors">Email Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} OTJ Media Group. All rights reserved.
            </p>
            <p className="text-white/70 text-sm text-center md:text-right">
              Designed and developed with ❤️ by OTJ Media Group | Based in Ottawa, Canada
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 