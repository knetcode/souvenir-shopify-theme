import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Post-paywall full itinerary page
export default function FullItineraryPage() {
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
                src="/images/itinerary-hero.jpg"
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
              delivers all of this in spades.
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
                  src="/images/itinerary-detail-1.jpg"
                  alt="Beach scene"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/itinerary-detail-2.jpg"
                  alt="Danish food"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Day-by-Day Itinerary */}
          <section className="mb-16">
            {/* Day Navigation */}
            <div className="flex flex-col gap-2 mb-12">
              {[1, 2, 3].map((day) => (
                <button
                  key={day}
                  className={`text-left px-4 py-3 border-l-2 ${
                    day === 3 ? "border-[var(--foreground)] bg-gray-50" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  Day {day}
                </button>
              ))}
            </div>

            {/* Day 3 Content */}
            <div className="max-w-3xl">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/day-3-image.jpg"
                    alt="Day 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[var(--gray)] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-[var(--gray)] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              <p className="text-[var(--gray)] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-[var(--gray)] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <p className="text-sm text-[var(--gray)] italic mt-8">
                Image caption bla bla bla bla bla
              </p>
            </div>

            {/* Remaining Days Accordion */}
            <div className="mt-12 space-y-2">
              {[4, 5, 6, 7].map((day) => (
                <button
                  key={day}
                  className="w-full text-left px-4 py-3 border-l-2 border-gray-200 hover:border-gray-400"
                >
                  Day {day}
                </button>
              ))}
              <button className="w-full text-left px-4 py-3 border-l-2 border-gray-200 hover:border-gray-400">
                Logistics & Things to Note
              </button>
              <button className="w-full text-left px-4 py-3 border-l-2 border-gray-200 hover:border-gray-400">
                Rainy Days
              </button>
              <button className="w-full text-left px-4 py-3 border-l-2 border-gray-200 hover:border-gray-400">
                If We Had More Time
              </button>
            </div>
          </section>

          {/* From This Edition Section */}
          <section className="py-12 border-t border-gray-100">
            <h2 className="text-2xl mb-8 uppercase tracking-wide">From This Edition...</h2>

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 md:w-72 aspect-[4/5] relative snap-start"
                >
                  <Image
                    src={`/images/carousel-${i}.jpg`}
                    alt={`Edition image ${i}`}
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
                { category: "Spending Time With", title: "A conversation with the fashion duo bringing knitting to the cool girls of Copenhagen" },
                { category: "Postcards", title: "The owner of our favourite café in Helsingor tells us the untouched corners of Denmark" },
                { category: "Summer Leaves", title: "A love letter to the summer houses of Denmark (and how to rent one)" },
                { category: "Kit", title: "Essential travel items" },
              ].map((item, i) => (
                <article key={i} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <Image
                      src={`/images/article-${i + 1}.jpg`}
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
                { title: "Mary Half Time", author: "Half Term" },
                { title: "Laura Reed", author: "Laura Reed" },
                { title: "Tessa Norman", author: "Tessa Norman" },
                { title: "Vienna", author: "Vienna" },
              ].map((item, i) => (
                <article key={i} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={`/images/category-${i + 1}.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                    {item.author}
                  </p>
                  <h3 className="text-base mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
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

