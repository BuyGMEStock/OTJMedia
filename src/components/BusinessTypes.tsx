'use client'

import { 
  ShoppingBagIcon, 
  WrenchIcon, 
  ScaleIcon, 
  CameraIcon, 
  UserGroupIcon,
  RocketLaunchIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import AnimatedSection from './AnimatedSection'
import Link from 'next/link'
import { useState } from 'react'

const businessTypes = [
  {
    title: 'Restaurants & Cafés',
    icon: ShoppingBagIcon,
    description: 'Transform your food business with an eco-friendly website that:',
    features: [
      'Online ordering system with real-time inventory',
      'End-of-day specials for leftover food',
      'Integration with local shelters for food donations',
      'Loyalty program and customer rewards'
    ],
    cta: 'Get Your Restaurant Online'
  },
  {
    title: 'Plumbers & Contractors',
    icon: WrenchIcon,
    description: 'Get more jobs with a website that works for you:',
    features: [
      'Smart quote request system',
      'Project photo galleries',
      'Automated scheduling system',
      'Emergency service alerts'
    ],
    cta: 'Start Getting More Jobs'
  },
  {
    title: 'Lawyers & Legal Firms',
    icon: ScaleIcon,
    description: 'Build trust and attract clients with:',
    features: [
      'Professional case highlights',
      'Secure client portal',
      'Client testimonial showcase',
      'Practice area insights'
    ],
    cta: 'Elevate Your Legal Practice'
  },
  {
    title: 'Creatives & Artists',
    icon: CameraIcon,
    description: 'Showcase your work with:',
    features: [
      'Stunning portfolio galleries',
      'Online shop for prints/merchandise',
      'Booking system for sessions',
      'Blog for sharing your creative process'
    ],
    cta: 'Showcase Your Work'
  },
  {
    title: 'Coaches & Consultants',
    icon: UserGroupIcon,
    description: 'Convert visitors into clients with:',
    features: [
      'Lead-generating landing pages',
      'Calendar integration for consultations',
      'Testimonial and results showcase',
      'Free resource downloads'
    ],
    cta: 'Grow Your Client Base'
  },
  {
    title: 'Athletes & Personal Brands',
    icon: RocketLaunchIcon,
    description: 'Build your personal brand with a site that:',
    features: [
      'Dynamic achievement showcase',
      'Interactive career timeline',
      'Social media integration hub',
      'Personal brand analytics dashboard'
    ],
    cta: 'Build Your Personal Brand'
  }
]

export default function BusinessTypes() {
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimatedSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Solutions for Every Business Type
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We create custom websites that solve real business problems and drive growth for your specific industry.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTypes.map((type, index) => (
            <AnimatedSection
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:scale-105 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">{type.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-2 mb-6 flex-grow">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/calendar"
                className="btn-secondary w-full justify-center mt-auto"
              >
                {type.cta}
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Contact Form Modal */}
      {isFormVisible && (
        <AnimatedSection
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
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
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
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
              <div className="flex justify-end">
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
    </section>
  )
} 