import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl md:text-3xl italic mb-8">
          Be in our club – sign up for news from Souvenir
        </h3>
        <form className="flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input text-center"
          />
          <button type="submit" className="text-sm uppercase tracking-wide underline underline-offset-4 hover:opacity-70 transition-opacity">
            Subscribe
          </button>
        </form>
      </section>

      {/* Membership Section */}
      <section className="bg-[var(--foreground)] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl uppercase tracking-wider mb-2">
                Become a Member
              </h2>
              <p className="text-xl md:text-2xl mb-6">
                Discover unlimited access to Souvenir
              </p>
              
              <div className="text-sm space-y-4 mb-8 max-w-md">
                <p className="flex items-baseline gap-4">
                  <span className="uppercase tracking-wide">Membership to Souvenir</span>
                  <span>£99 / year</span>
                </p>
                <p className="opacity-80">
                  Receive free access to all itineraries, first look at limited edition 
                  drops before the masses, and exclusive access to our IRL events.
                </p>
                <p className="opacity-80">
                  Non-members can still access Itineraries on a pay-per-itinerary basis, 
                  and your paid itineraries will be stored in your account for whenever 
                  you need it.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/membership"
                  className="border border-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-[var(--foreground)] transition-colors"
                >
                  Become a Member
                </Link>
                <div className="flex items-center gap-2 text-sm">
                  <span className="opacity-70">Already a Member?</span>
                  <Link href="/login" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                    Log In
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-48 h-48 md:w-56 md:h-56 relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&q=80"
                alt="Membership benefits"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-gray-500">Copyright ©</p>
          
          <nav className="flex flex-wrap justify-center gap-6 uppercase tracking-wide text-xs">
            <Link href="/subscriptions" className="hover:opacity-70 transition-opacity">
              Subscriptions
            </Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity">
              Contact
            </Link>
            <Link href="/advertising" className="hover:opacity-70 transition-opacity">
              Advertising
            </Link>
            <Link href="/privacy" className="hover:opacity-70 transition-opacity">
              Privacy
            </Link>
            <Link href="/shipping" className="hover:opacity-70 transition-opacity">
              Shipping & Returns
            </Link>
            <Link href="/terms" className="hover:opacity-70 transition-opacity">
              Terms of Service
            </Link>
          </nav>
        </div>
      </section>
    </footer>
  );
}

