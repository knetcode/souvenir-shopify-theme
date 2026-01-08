import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function EditionsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-8">
            The Editions
          </p>

          {/* Current Edition */}
          <section className="mb-16">
            <h1 className="text-3xl md:text-4xl mb-2">EDITION ONE</h1>
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
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
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
                      alt={`Carousel image ${i + 1}`}
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
            </div>

            {/* Article Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { category: "Spending Time With", title: "A conversation with the fashion duo bringing knitting to the cool girls of Copenhagen", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
                { category: "Postcards", title: "The owner of our favourite café in Helsingor tells us the untouched corners of Denmark", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" },
                { category: "Summer Leaves", title: "A love letter to the summer houses of Denmark (and how to rent one)", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80" },
                { category: "Kit", title: "Essential travel items", img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80" },
              ].map((item, i) => (
                <article key={i} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-[var(--pink)]">
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
                  <h3 className="text-base mb-2">
                    {item.title}
                  </h3>
                  <Link href={`/articles/${i + 1}`} className="read-more text-sm">
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* Previous Editions */}
          <section className="py-12 border-t border-gray-100">
            <h2 className="text-2xl mb-8 uppercase tracking-wide">Previous Editions</h2>

            {/* Category Tabs */}
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
                  <Link href={`/editions/${i + 1}`} className="read-more text-sm">
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
