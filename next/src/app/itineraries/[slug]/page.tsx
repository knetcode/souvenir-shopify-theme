import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Pre-paywall itinerary page
export default function ItineraryPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--gray)] mb-2">
            <Link href="/itineraries" className="hover:text-[var(--foreground)]">Itineraries</Link>
            <span>/</span>
            <span>Denmark</span>
          </div>
          <p className="text-[var(--gray)] mb-8">7 days</p>

          {/* Title Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                A week of sea and stars in the Danish Riviera
              </h1>
              <p className="text-xl italic text-[var(--gray)] mb-6">
                Head to Denmark&apos;s quietly stunning coast that ticks all the boxes. The Danes make summer living feel effortless.
              </p>
              <p className="text-sm text-[var(--gray)] mb-8">
                by Lucy who traveled with her husband, daughter (9) and son (5)
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                alt="Danish Riviera beach"
                fill
                className="object-cover"
              />
              <button className="absolute top-4 right-4 bg-white px-4 py-2 text-sm uppercase tracking-wide hover:bg-[var(--foreground)] hover:text-white transition-colors">
                Play Video &gt;
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mb-16">
            <p className="text-[var(--gray)] mb-6">
              There&apos;s a particular type of summer holiday that Denmark does especially well—
              low-key, design-forward, and ruggedly beautiful without trying too hard. It offers
              something slow and more grounded: fresh air, wild white sand beaches, excellent 
              food, and the kind of child-friendly rhythm that doesn&apos;t sacrifice grown-up 
              enjoyment. The &quot;Danish Riviera&quot; – the coastal region just north of Copenhagen, 
              delivers all of this in spades. It is where Copenhageners retreat for weekends and 
              the summer drawn by pine forests, quiet beaches, and endless flat gravel bike-
              ready quiet byways&apos;s lovely living where Danish lull has a family home.
            </p>
            <p className="text-[var(--gray)] mb-6">
              After an efficient airport experience (it&apos;s Denmark after all), we picked up our 
              rental car and headed straight for our lunch spot in Dragør, a tiny 12th-century 
              fishing village. Our base was a classic Danish summerhouse: simple, light-filled, and a 
              tad funky home. It had everything we needed—a garden for the children to play 
              in, a kitchen we actually wanted to cook in, and a chimney that caught the sunset.
            </p>
            <p className="text-[var(--gray)] mb-6">
              And what did we do? Not much, gloriously. Swam, ate ice cream (a lot of it), got
              sunburn, played tennis, bike rides, gravel smiles and sandcastles, and the occasional 
              jaunt off to cafes, where the kids amused themselves with colouring sets while relaxing over 
              a Rädler and aperol. We&apos;re lazy travelers like this was no clear that we were also certain 
              one night to watch the Perseid meteor shower from the floor of our bedroom
              wrapped in our duvets.
            </p>
          </div>

          {/* What's in this itinerary */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-lg uppercase tracking-wide mb-6">In This Itinerary:</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p>✓ BEACH TIME</p>
                  <p>✓ FREE RANGE KIDS</p>
                  <p>✓ WALKS & NATURE</p>
                  <p>✓ ART & CULTURE</p>
                </div>
                <div className="space-y-2">
                  <p>✓ AMAZING BAKERIES</p>
                  <p>✓ SELF CATERING</p>
                  <p>✓ GOOD FOOD & WINE</p>
                  <p>✓ SCANDI STYLE</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80"
                  alt="Beach scene"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
                  alt="Danish food"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-16">
            <p className="text-3xl italic mb-4">£25</p>
            <Link
              href="/checkout/danish-riviera"
              className="inline-block bg-[var(--foreground)] text-white px-8 py-4 text-sm uppercase tracking-wide hover:bg-transparent hover:text-[var(--foreground)] border border-[var(--foreground)] transition-colors"
            >
              Get the Full Itinerary
            </Link>
          </div>

          {/* From This Edition Section */}
          <section className="py-12 border-t border-gray-100">
            <h2 className="text-2xl mb-8 uppercase tracking-wide">From This Edition...</h2>

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory mb-8">
              {[
                "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=400&q=80",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
                "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&q=80",
              ].map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 md:w-72 aspect-[4/5] relative snap-start"
                >
                  <Image
                    src={img}
                    alt={`Edition image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <button className="flex-shrink-0 w-12 h-12 border border-[var(--foreground)] flex items-center justify-center self-center ml-4 hover:bg-[var(--foreground)] hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { category: "Spending Time With", title: "A conversation with the fashion duo bringing knitting to the cool girls of Copenhagen", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
                { category: "Postcards", title: "The owner of our favourite café in Helsingor tells us the untouched corners of Denmark she explores with her three boys", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" },
                { category: "Summer Leaves", title: "A love letter to the summer houses of Denmark (and how to rent one)", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80" },
                { category: "Kit", title: "Essential travel items", img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80" },
              ].map((item, i) => (
                <article key={i} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-base mb-2">{item.title}</h3>
                  <Link href={`/articles/${i + 1}`} className="read-more text-sm">
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* Other Itineraries You Might Like */}
          <section className="py-12 border-t border-gray-100">
            <h2 className="text-2xl mb-8 uppercase tracking-wide">Other Itineraries You Might Like...</h2>

            <div className="flex gap-8 mb-8 text-sm uppercase tracking-wider overflow-x-auto">
              <button className="py-2 border-b-2 border-[var(--foreground)] whitespace-nowrap">
                School Holidays
              </button>
              <button className="py-2 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">
                People
              </button>
              <button className="py-2 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">
                Adventure
              </button>
              <button className="py-2 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">
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
                <article key={i} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                    {item.author}
                  </p>
                  <h3 className="text-base mb-2">
                    {item.title}
                  </h3>
                  <Link href={`/itineraries/${i + 1}`} className="read-more text-sm">
                    Read More
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
