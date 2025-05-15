import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule a Strategy Session | OTJMedia',
  description: 'Book a free strategy session with OTJMedia to discuss your business goals and how we can help you achieve them.',
}

export default function CalendarInvites() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container-custom py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Schedule Your Strategy Session
          </h1>
          <p className="text-lg text-gray-300">
            Choose a time that works best for you, and let's discuss how we can help your business grow online.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Cal.com Embed */}
          <iframe
            src="https://cal.com/otjmedia/30min"
            className="w-full min-h-[700px] border-0"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </main>
  )
} 