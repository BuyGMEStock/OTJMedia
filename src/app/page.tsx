'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import BusinessTypes from '@/components/BusinessTypes'
import Navigation from '@/components/Navigation'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="gradient-bg min-h-screen flex items-center relative overflow-hidden">
          <div className="container-custom relative z-10">
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
                <button className="btn-primary">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </AnimatedSection>

              {/* Right Column - Visual Elements */}
              <AnimatedSection
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Floating Stats Card */}
                <AnimatedSection
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="card absolute -top-10 right-0 w-64"
                >
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">720+</p>
                    <p className="text-gray-600">Projects Launched</p>
                  </div>
                </AnimatedSection>

                {/* Main Visual */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-8">
                    <div className="h-full w-full rounded-xl bg-gradient-to-br from-white/20 to-white/5" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
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