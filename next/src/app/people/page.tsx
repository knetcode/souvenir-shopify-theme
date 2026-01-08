import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// People/Interviews collection page
export default function PeoplePage() {
  const people = [
    { name: "Kirstie Sequitin", role: "Designer & Mother of Two", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
    { name: "Laura Reed", role: "Photographer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { name: "Tessa Norman", role: "Travel Writer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
    { name: "Marcus Chen", role: "Chef & Father", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { name: "Sofia Martinez", role: "Architect", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
    { name: "James Wilson", role: "Ceramicist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
    { name: "Emma Thompson", role: "Stylist", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
    { name: "Oliver Brown", role: "Illustrator", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl uppercase tracking-wide mb-2">People</h1>
            <p className="text-[var(--gray)]">Interviews & Profiles</p>
          </div>

          {/* Description */}
          <p className="text-[var(--gray)] max-w-2xl mb-12">
            Meet the creative parents, designers, and travelers who inspire us. 
            From their favorite family destinations to how they balance work and 
            adventure, these are the stories behind the itineraries.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {people.map((person, i) => (
              <article key={i} className="group">
                <div className="relative aspect-[4/5] overflow-hidden mb-4">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                  {person.role}
                </p>
                <h3 className="text-base mb-2">
                  {person.name}
                </h3>
                <Link href={`/people/person-${i + 1}`} className="read-more text-sm">
                  Read Interview
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
