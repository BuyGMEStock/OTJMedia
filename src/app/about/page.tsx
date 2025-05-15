'use client'

import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { RocketLaunchIcon, SparklesIcon, HeartIcon, BoltIcon, CommandLineIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function AboutPage() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@otjmedia.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    setIsFormVisible(false);
    setFormData({ email: '', subject: '', message: '' });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 gradient-bg">
        <div className="absolute -top-1/3 -left-1/4 w-2/3 h-2/3 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/3 -right-1/4 w-2/3 h-2/3 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding">
        {/* Hero/Intro */}
        <AnimatedSection initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <h1 className="mb-4">
            <span className="font-display text-3xl md:text-4xl font-medium tracking-tight text-white/80 block mb-2">About</span>
            <span className="font-display text-4xl md:text-5xl font-bold text-white block leading-tight tracking-normal">
              OTJ Media Group
            </span>
          </h1>
          <div className="inline-block bg-white/90 backdrop-blur-lg rounded-xl">
            <p className="text-xl md:text-2xl font-medium tracking-wide italic px-6 py-3 bg-gradient-to-r from-[#e95d35] via-[#d84a37] to-[#c73839] bg-clip-text text-transparent">
              Redefining Digital Presence for Small Businesses
            </p>
          </div>
        </AnimatedSection>

        {/* My Story */}
        <AnimatedSection initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="card mx-auto max-w-2xl mb-16 shadow-2xl bg-white/90 backdrop-blur-lg">
          <div className="flex items-center justify-center gap-3 mb-4">
            <RocketLaunchIcon className="w-6 h-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-primary">Solving Real Problems With Real Code</h2>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-800 mb-6">
              While completing my degree in Business Technology at the University of Ottawa, I identified a critical gap: small businesses were being outpaced by digital demands, especially during the 2020 pandemic. Where enterprises had resources to adapt, local entrepreneurs struggled with outdated or nonexistent online presence.
            </p>
            <p className="text-lg text-gray-800 mb-6">
              OTJ Media was built to close the gap.
            </p>
            <p className="text-lg text-gray-800 mb-6">
              Drawing on defense-grade engineering and government tech experience, we deliver what SMBs actually need:
            </p>
          </div>
          <ul className="space-y-8 mb-6 flex flex-col items-center">
            <li className="flex flex-col items-center gap-2 text-center max-w-lg">
              <h3 className="font-display text-xl font-bold text-primary">Strategic Foundations</h3>
              <p className="text-gray-800">Tailored digital infrastructure that works as hard as you do</p>
            </li>
            <li className="flex flex-col items-center gap-2 text-center max-w-lg">
              <h3 className="font-display text-xl font-bold text-primary">Performance-Optimized Design</h3>
              <p className="text-gray-800">No bloat—just revenue-driving functionality</p>
            </li>
            <li className="flex flex-col items-center gap-2 text-center max-w-lg">
              <h3 className="font-display text-xl font-bold text-primary">Future-Ready Architecture</h3>
              <p className="text-gray-800">Scalable systems that grow with your business</p>
            </li>
          </ul>
          <p className="text-lg text-gray-800 text-center">
            We empower businesses to compete confidently in the digital arena—because innovation shouldn't be exclusive to Fortune 500s.
          </p>
        </AnimatedSection>

        {/* What Sets Us Apart */}
        <AnimatedSection initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card bg-white/90 backdrop-blur-lg">
              <div className="flex items-center gap-3 mb-4">
                <CommandLineIcon className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl font-bold text-primary">Tech That Makes Sense</h3>
              </div>
              <p className="text-gray-800">
                No outdated templates or clunky platforms. I build with the latest tech stack because your business deserves better than yesterday's solutions.
              </p>
            </div>
            <div className="card bg-white/90 backdrop-blur-lg">
              <div className="flex items-center gap-3 mb-4">
                <HeartIcon className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl font-bold text-primary">Real Connection</h3>
              </div>
              <p className="text-gray-800">
                You're not just getting a developer—you're getting a partner who understands both the digital landscape and the challenges of modern business.
              </p>
            </div>
            <div className="card bg-white/90 backdrop-blur-lg">
              <div className="flex items-center gap-3 mb-4">
                <BoltIcon className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl font-bold text-primary">Speed & Efficiency</h3>
              </div>
              <p className="text-gray-800">
                Quick iterations, rapid deployment, and constant optimization. Because in today's market, being slow isn't just inconvenient—it's expensive.
              </p>
            </div>
            <div className="card bg-white/90 backdrop-blur-lg">
              <div className="flex items-center gap-3 mb-4">
                <SparklesIcon className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl font-bold text-primary">Fresh Perspective</h3>
              </div>
              <p className="text-gray-800">
                Growing up digital means I understand what today's customers expect. Your website won't just look good—it'll work the way modern users demand.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* My Approach + Final CTA Combined */}
        <AnimatedSection initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative mx-auto max-w-3xl mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-lg opacity-60 -z-10" />
          <div className="card bg-white/95 backdrop-blur-lg">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-primary text-center">Ready to Level Up Your Digital Game?</h2>
            <div className="space-y-6 mb-8 text-center">
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">Skip the Corporate Complexity</h3>
                <p className="text-gray-800">
                  No endless meetings or confusing proposals. We'll have clear, direct conversations about your goals and how to achieve them.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">Built for Real Results</h3>
                <p className="text-gray-800">
                  Your website should do more than exist—it should drive growth. Every feature is purposeful, every design choice intentional.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">Always Evolving</h3>
                <p className="text-gray-800">
                  The digital world doesn't stand still, and neither should your website. Expect continuous improvements and updates to keep you ahead.
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => setIsFormVisible(true)}
                className="btn-primary-gradient inline-flex items-center gap-2 group"
              >
                Let's Make It Happen
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form Modal */}
        {isFormVisible && (
          <AnimatedSection
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1,
              y: 0
            }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md p-8 border-t border-white/20 z-50"
          >
            <div className="max-w-2xl mx-auto relative">
              <button
                onClick={() => setIsFormVisible(false)}
                type="button"
                className="absolute -top-2 -right-2 p-2 text-white/80 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Subject Line"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe how we can help you"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn-primary-gradient group"
                  >
                    Send Message
                    <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        )}
      </div>
    </main>
  )
}

 