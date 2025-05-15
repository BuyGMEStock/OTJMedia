'use client'

import { useEffect, useRef, useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import { ShoppingBagIcon, WrenchIcon, ScaleIcon, CameraIcon, UserGroupIcon, SparklesIcon, XMarkIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const services = [
  {
    icon: ShoppingBagIcon,
    title: 'Restaurant & Café ',
    headline: "Hungry for More Customers? We'll Build You a Website That Brings Them In",
    features: [
      'Online Ordering System with real-time menu updates',
      'Waste-Reducing Specials Section',
      'Food Donation Integration',
      'Loyalty Program Integration',
    ],
    testimonial: '"Since OTJ Media built our website, our takeout orders have increased by 40% and we\'ve reduced food waste by 25%."',
    author: '— Jamie, Restaurant Owner',
    cta: 'Get Your Restaurant Online Today',
  },
  {
    icon: WrenchIcon,
    title: 'Plumbers & Contractors',
    headline: 'Stop Losing Jobs to Competitors With Better Websites',
    features: [
      'Instant Quote Generator',
      'Emergency Call Button',
      'Project Gallery with before/after sliders',
      'Calendar Sync for appointments',
    ],
    testimonial: '"Our phone started ringing the day OTJ Media launched our new site. We booked 3 new jobs in the first week!"',
    author: '— Alex, Contractor',
    cta: 'Get More Jobs Now',
  },
  {
    icon: ScaleIcon,
    title: 'Legal Firms',
    headline: 'Turn Website Visitors Into Paying Clients',
    features: [
      'Case Study Highlights',
      'Secure Client Intake (HIPAA-compliant)',
      'Testimonial Showcase',
      'Practice Area Pages',
    ],
    testimonial: '"OTJ Media understood exactly how to present our firm professionally while making us approachable. Our consultation requests doubled."',
    author: '— Morgan, Attorney',
    cta: 'Attract More Clients',
  },
  {
    icon: CameraIcon,
    title: 'Creatives & Artists',
    headline: 'Your Art Deserves an Online Home That Does It Justice',
    features: [
      'Portfolio Galleries',
      'E-Commerce Integration',
      'Booking System',
      'Creative Blog',
    ],
    testimonial: '"My art sales increased 300% after OTJ Media built my website. Finally an online presence that matches my artistic vision!"',
    author: '— Riley, Artist',
    cta: 'Showcase Your Work',
  },
  {
    icon: UserGroupIcon,
    title: 'Coaches & Consultants',
    headline: 'Convert Browsers Into Paying Clients',
    features: [
      'High-Converting Landing Pages',
      'Scheduling Integration',
      'Results Showcase',
      'Resource Library',
    ],
    testimonial: '"The website OTJ Media built helped me fill my coaching roster in 2 weeks after launch. Worth every penny!"',
    author: '— Taylor, Coach',
    cta: 'Grow Your Client Base',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Athletes & Developers',
    headline: 'Stand Out in a Competitive Field with a Stunning Personal Brand',
    features: [
      'Dynamic Project/Highlight Showcase',
      'Interactive Timeline of Achievements',
      'Social Media Integration Hub',
      'Personal Brand Analytics Dashboard',
    ],
    testimonial: '"My portfolio site by OTJ Media helped me land three major opportunities in just two months. Recruiters love how they can see all my work in one place!"',
    author: '— Jordan, Software Developer',
    cta: 'Build Your Personal Brand',
  },
]

export default function ServicesPage() {
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ctaSectionRef.current) return;
      
      const rect = ctaSectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      ctaSectionRef.current.style.setProperty('--mouse-x', `${x}%`);
      ctaSectionRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    const section = ctaSectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@otjmedia.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    setIsFormVisible(false);
    setFormData({ email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#ff69b4,#ff8a00,#845ec2,#2c5ebd)] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10 pointer-events-none"></div>
      <div className="container-custom section-padding">
        <AnimatedSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Industry-specific websites that turn visitors into customers. Explore what we can do for your business:
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <AnimatedSection
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card flex flex-col h-full backdrop-blur-sm bg-white/10"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <service.icon className="w-8 h-8 text-white" />
                <h2 className="font-display text-2xl font-semibold text-white tracking-tight">{service.title}</h2>
              </div>
              <h3 className="text-lg font-bold text-white/90 mb-6 text-center leading-snug">{service.headline}</h3>
              <ul className="mb-8 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80 justify-center text-center px-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-white/40 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <blockquote className="italic text-white/80 border-l-4 border-white/20 pl-4 mb-4 text-center mx-auto max-w-[90%]">{service.testimonial}</blockquote>
              <span className="text-sm text-white/70 mb-8 text-center block font-medium">{service.author}</span>
              <Link href="/contact" className="btn-primary-gradient mx-auto mt-auto text-center">{service.cta}</Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Not Listed Here Section */}
        <AnimatedSection 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="mt-16"
        >
          <div 
            ref={ctaSectionRef}
            className="cta-section p-8 md:p-12 relative overflow-hidden text-center"
          >
            <div className="wave-animation" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white/90 tracking-tight">Is Your Business Not Listed Above?</h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-white/90 mb-4 leading-tight">
                Every Business Deserves a Strategic Digital Presence
              </h3>
              <h4 className="text-xl md:text-2xl font-display font-medium text-white/90 mb-8 leading-tight">
                Elevate Your Business with a High-Performance Website
              </h4>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                Regardless of your industry, a professionally designed website serves as a critical asset in today's digital economy. Whether you operate in fitness, landscaping, retail, therapy, or another specialized field, an optimized online presence enables:
              </p>
              <ul className="mb-12 space-y-4 text-lg text-white/80 max-w-2xl mx-auto">
                {[
                  'Increased customer acquisition (generating leads 24/7)',
                  'Enhanced credibility (establishing trust before the first interaction)',
                  'Operational efficiency (automating bookings, payments, and inquiries)',
                  'Competitive differentiation (surpassing rivals reliant on outdated marketing methods)'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 justify-center">
                    <span className="text-white/90 shrink-0">✓</span>
                    <span className="text-left">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-12">
                <h4 className="text-xl md:text-2xl font-display font-semibold text-white/90 mb-6 tracking-tight">
                  OTJ Media: Beyond Aesthetics—Results-Driven Web Solutions
                </h4>
                <p className="text-lg text-white/80 mb-6">
                  We specialize in developing websites that function as growth engines, engineered to:
                </p>
                <ul className="space-y-4 text-lg text-white/80 max-w-2xl mx-auto">
                  {[
                    'Deliver seamless mobile responsiveness (optimized for the devices your customers use most)',
                    'Prioritize speed and performance (reducing bounce rates and maximizing conversions)',
                    'Convert traffic into revenue (through data-informed UX and strategic calls-to-action)',
                    'Scale effortlessly (intuitive CMS with no technical expertise required)'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 justify-center">
                      <span className="text-white/90 shrink-0">✓</span>
                      <span className="text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <blockquote className="italic text-white/80 border-l-4 border-white/20 pl-6 mb-3 text-center mx-auto max-w-2xl text-lg">
                "OTJ Media transformed our digital presence. Since launching our new website, our appointment bookings have increased by 65%, and client inquiries are at an all-time high."
              </blockquote>
              <span className="text-base text-white/70 mb-10 text-center block font-medium">—Satisfied Client</span>
              <div className="flex justify-center">
                <Link href="/calendar" className="btn-primary-gradient inline-flex items-center gap-2 text-base">
                  Schedule Your Strategy Session
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose OTJ Media Section */}
        <AnimatedSection 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="mt-16 text-center relative"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-white tracking-tight">
            Why Partner with OTJ Media for Your Digital Presence?
          </h2>
          <h3 className="font-display text-xl md:text-2xl font-medium mb-8 text-white/90 tracking-tight">
            Data-Driven Web Solutions Tailored to Your Business Objectives
          </h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            At OTJ Media, we deliver more than websites—we architect digital platforms designed to achieve measurable business outcomes. 
            Our approach combines strategic insight with technical excellence to provide:
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            <div className="text-left">
              <h4 className="font-display text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white/80 rounded-full"></span>
                Sector-Specific Design Frameworks
              </h4>
              <p className="text-white/80 pl-4">
                Customized user experiences that resonate with your target audience and industry standards
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-display text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white/80 rounded-full"></span>
                Cross-Device Optimization
              </h4>
              <p className="text-white/80 pl-4">
                Seamless performance across all platforms, with mobile-first architecture that captures today's on-the-go consumers
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-display text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white/80 rounded-full"></span>
                Performance-Optimized Infrastructure
              </h4>
              <p className="text-white/80 pl-4">
                Lightning-fast load times that reduce bounce rates and improve conversion metrics
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-display text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white/80 rounded-full"></span>
                Search Engine Visibility
              </h4>
              <p className="text-white/80 pl-4">
                Technical SEO foundations combined with content strategy to enhance discoverability
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-display text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white/80 rounded-full"></span>
                Intuitive Content Management
              </h4>
              <p className="text-white/80 pl-4">
                Enterprise-grade CMS solutions requiring no technical expertise for daily operations
              </p>
            </div>
          </div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed italic">
            Our methodology bridges the gap between aesthetic appeal and functional business results, ensuring your digital investment delivers tangible ROI.
          </p>
          <button 
            onClick={() => setIsFormVisible(true)}
            type="button"
            className="btn-primary-gradient inline-flex items-center gap-2 text-base group cursor-pointer"
          >
            Get Your Custom Quote Today
            <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
          </button>
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
      </div>
    </main>
  )
} 