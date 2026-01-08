import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Itineraries collection page
export default function ItinerariesPage() {
  const itineraries = [
    { title: "Half Term in Mallorca", location: "Mallorca, Spain", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
    { title: "Easter in Lisbon", location: "Lisbon, Portugal", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80" },
    { title: "Summer in Normandy", location: "Normandy, France", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80" },
    { title: "Christmas in Vienna", location: "Vienna, Austria", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&q=80" },
    { title: "Danish Riviera", location: "North Zealand, Denmark", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
    { title: "Tuscan Hills", location: "Tuscany, Italy", image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=400&q=80" },
    { title: "Cornwall Coast", location: "Cornwall, UK", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80" },
    { title: "Greek Islands", location: "Cyclades, Greece", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&q=80" },
    { title: "Swedish Archipelago", location: "Stockholm, Sweden", image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&q=80" },
    { title: "Amalfi Coast", location: "Campania, Italy", image: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=400&q=80" },
    { title: "Provence", location: "Provence, France", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80" },
    { title: "Scottish Highlands", location: "Scotland, UK", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl uppercase tracking-wide mb-2">The Itineraries</h1>
            <p className="text-[var(--gray)]">All Editions</p>
          </div>

          {/* Description */}
          <p className="text-[var(--gray)] max-w-2xl mb-12">
            Detailed day-by-day travel guides created by creative parents who&apos;ve been there. 
            Each itinerary includes insider tips, kid-friendly recommendations, and all the 
            practical details you need for a stress-free family trip.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {itineraries.map((item, i) => (
              <article key={i} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                  {item.location}
                </p>
                <h3 className="text-base mb-2">
                  {item.title}
                </h3>
                <Link href={`/itineraries/item-${i + 1}`} className="read-more text-sm">
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
