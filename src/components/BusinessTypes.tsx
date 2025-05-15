'use client'

import { 
  ShoppingBagIcon, 
  WrenchIcon, 
  ScaleIcon, 
  CameraIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline'
import AnimatedSection from './AnimatedSection'

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
    description: 'Get more jobs with a website that:',
    features: [
      'Instant quote requests and emergency call buttons',
      'Before/after photo galleries of your work',
      'Scheduling system that syncs with your calendar',
      'Mobile-optimized for on-the-job browsing'
    ],
    cta: 'Start Getting More Jobs'
  },
  {
    title: 'Lawyers & Legal Firms',
    icon: ScaleIcon,
    description: 'Build trust and attract clients with:',
    features: [
      'Professional case study highlights',
      'Secure client intake forms',
      'Testimonial and review showcase',
      'Practice area specialization pages'
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
  }
]

export default function BusinessTypes() {
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
              className="card hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">{type.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-2 mb-6">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-secondary w-full justify-center">
                {type.cta}
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
} 