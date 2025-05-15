'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import BusinessTypes from '@/components/BusinessTypes'
import Navigation from '@/components/Navigation'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedMacBook from '@/components/AnimatedMacBook'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="gradient-bg min-h-screen relative overflow-hidden">
          <div className="container-custom relative z-10 pt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <AnimatedSection
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                  BRING YOUR BUSINESS ONLINE WITH A CUSTOM WEBSITE THAT MAKES SALES, SAVES TIME, AND GIVES BACK
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Get a stunning, high-converting site built by OTJ Media Group — fast, optimized, and tailored to your audience.
                </p>
                <Link href="/calendar" className="btn-primary">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </AnimatedSection>

              {/* Right Column - MacBook Animation */}
              <div className="relative h-[80vh] flex items-center">
                <div className="w-full max-w-[1000px] mx-auto scale-110">
                  <AnimatedMacBook />
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Business Types Section */}
        <BusinessTypes />
      </main>
    </>
  )
} 