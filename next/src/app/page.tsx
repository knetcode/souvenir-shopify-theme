import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section - Featured Itinerary */}
        <section className="py-6 px-6">
          <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-4">
            Our Top Itinerary
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                alt="The Danish Riviera"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="max-w-md">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                THE DANISH<br />RIVIERA
              </h1>
              <p className="text-lg italic mb-2">7 days</p>
              <p className="text-[var(--gray)] mb-6">
                There&apos;s a particular type of summer holiday that Denmark does especially well—
                low-key, design-forward, and ruggedly beautiful without trying too hard. It offers 
                something slow and more grounded: fresh air, wild white sand beaches, excellent 
                food, and the kind of child-friendly rhythm that doesn&apos;t sacrifice grown-up 
                enjoyment.
              </p>
              <Link href="/itineraries/danish-riviera" className="read-more">
                Read Itinerary
              </Link>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 px-6 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-4">
            Welcome to Souvenir
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-6">
            A place to find real travel itineraries by trusted creative parents with the 
            insights you actually need to know.
          </h2>
          <Link href="/about" className="read-more">
            Discover more
          </Link>
        </section>

        {/* Edition Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-2">EDITION ONE</h2>
            <p className="text-[var(--gray)] mb-8">North Zealand, Denmark</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Video/Itinerary Card */}
              <div>
                <div className="relative aspect-video bg-[var(--pink)] mb-4 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
                    alt="Edition One Video"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-sm">
                    VIDEO ?
                  </div>
                </div>
                <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-2">
                  7 Days in North Zealand, Denmark
                </p>
                <h3 className="text-xl mb-2">
                  Sun, sea & skies on the North Zealand coast. How we did it in detail day-by-day.
                </h3>
                <Link href="/itineraries/north-zealand" className="read-more">
                  Get the full itinerary
                </Link>
              </div>

              {/* Shop Card */}
              <div>
                <div className="relative aspect-video overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
                    alt="Shop souvenirs"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-2">
                  Shop
                </p>
                <h3 className="text-xl mb-2">
                  The perfect cotton co-ords we discovered in North Zealand and couldn&apos;t wait to share with you.
                </h3>
                <Link href="/shop" className="read-more">
                  Shop now
                </Link>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="mb-12">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {[
                  "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=400&q=80",
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
                  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&q=80",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-64 md:w-80 aspect-[4/5] relative snap-start"
                  >
                    <Image
                      src={img}
                      alt={`Carousel image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <button className="flex-shrink-0 w-12 h-12 border border-[var(--foreground)] flex items-center justify-center self-center ml-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Article Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-[var(--pink)]">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
                    alt="Spending Time with fashion duo"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                  Spending Time With
                </p>
                <h3 className="text-base mb-2">
                  A conversation with the fashion duo bringing knitting to the cool girls of Copenhagen
                </h3>
                <Link href="/articles/copenhagen-knitting" className="read-more text-sm">
                  Read more
                </Link>
              </article>

              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
                    alt="Postcards from Denmark"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                  Postcards
                </p>
                <h3 className="text-base mb-2">
                  The owner of our favourite café in Helsingor tells us the untouched corners of Denmark she explores with her three boys
                </h3>
                <Link href="/articles/postcards-denmark" className="read-more text-sm">
                  Read more
                </Link>
              </article>

              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80"
                    alt="Summer Leaves"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                  Summer Leaves
                </p>
                <h3 className="text-base mb-2">
                  A love letter to the summer houses of Denmark (and how to rent one)
                </h3>
                <Link href="/articles/summer-houses" className="read-more text-sm">
                  Read more
                </Link>
              </article>

              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80"
                    alt="Kit article"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                  Kit
                </p>
                <h3 className="text-base mb-2">
                  Essential travel items
                </h3>
                <Link href="/articles/kit" className="read-more text-sm">
                  Read more
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { text: "Souvenir has completely changed how we plan family trips. The itineraries are practical, beautiful, and actually work with kids.", author: "Rosie" },
                { text: "Finally, travel content that understands what parents need. No more endless research—just trust and go.", author: "Onjola" },
                { text: "The details in these itineraries are incredible. From the best bakeries to kid-friendly beaches, everything is thoughtfully curated.", author: "Giovanna" },
              ].map((testimonial, i) => (
                <div key={i}>
                  <p className="italic text-xl mb-4">Testimonial {i + 1}</p>
                  <p className="text-[var(--gray)] mb-4">{testimonial.text}</p>
                  <p className="text-sm">– {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 px-6 bg-[var(--pink)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm uppercase tracking-wider">
              <button className="py-2 border-b-2 border-[var(--foreground)]">
                School Holidays
              </button>
              <button className="py-2 opacity-60 hover:opacity-100 transition-opacity">
                People
              </button>
              <button className="py-2 opacity-60 hover:opacity-100 transition-opacity">
                Adventure
              </button>
              <button className="py-2 opacity-60 hover:opacity-100 transition-opacity">
                City Breaks
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Half Term in Mallorca", author: "Half Term", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
                { title: "Easter in Lisbon", author: "Laura Reed", img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80" },
                { title: "Summer in Normandy", author: "Tessa Norman", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80" },
                { title: "Christmas in Vienna", author: "Vienna", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&q=80" },
              ].map((item, i) => (
                <article key={i} className="group bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                      {item.author}
                    </p>
                    <h3 className="text-base mb-2">
                      {item.title}
                    </h3>
                    <Link href={`/itineraries/${i}`} className="read-more text-sm">
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Promo Panel */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden bg-[var(--pink)]">
              <Image
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&q=80"
                alt="Promo panel"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white/30">
                <h3 className="text-3xl md:text-4xl mb-4">Become a Member</h3>
                <p className="text-[var(--gray)] mb-6 max-w-md">
                  Get unlimited access to all itineraries, exclusive content, and early access to new editions.
                </p>
                <Link href="/membership" className="bg-[var(--foreground)] text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-transparent hover:text-[var(--foreground)] border border-[var(--foreground)] transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
