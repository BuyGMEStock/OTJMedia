import Link from 'next/link';

const NotListedSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#FF8B6B] to-[#FF5F5F] p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      <div className="wave-animation" />
      <div className="relative z-10">
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-6">
          <span className="text-3xl">✨</span>
          Not Listed Here? Your Business Still Needs a Killer Website!
        </h2>
        
        <p className="text-white/90 mb-6">
          Just because your industry isn't mentioned above doesn't mean you won't benefit from a high-converting, lead-generating website.
          Whether you're a fitness trainer, landscaper, boutique owner, therapist, or any other professional, a strong online presence can:
        </p>

        <ul className="space-y-3 mb-8">
          {[
            'Bring in more customers (even while you sleep)',
            'Establish credibility (so clients trust you before they even call)',
            'Save time on admin (with booking, payments, and FAQs automated)',
            'Stand out from competitors (who still rely on outdated flyers or word-of-mouth)'
          ].map((benefit, index) => (
            <li key={index} className="flex items-center gap-2 text-white">
              <span className="text-green-300">✓</span>
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">
            We Build Websites for ANY Business That Wants More Leads
          </h3>
          <p className="text-white/90 mb-4">
            At OTJ Media, we don't just make pretty websites—we build marketing machines that:
          </p>
          <ul className="space-y-2">
            {[
              'Work on phones & tablets (where most customers find you)',
              'Load fast (slow sites = lost sales)',
              'Turn visitors into paying clients (with smart design & strategy)',
              'Grow with your business (easy to update, no coding needed)'
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-white/90">
                <span className="text-white">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="border-l-4 border-white/20 pl-4 mb-8 text-white/90 italic">
          "OTJ Media built a site for my dog grooming business, and now I'm booked out 3 weeks in advance!"
          <footer className="mt-2 text-white/70">
            — Happy Business Owner
          </footer>
        </blockquote>

        <Link href="/contact" className="btn-primary-gradient inline-block">
          GET A FREE CONSULTATION
        </Link>
      </div>
    </div>
  );
};

export default NotListedSection; 