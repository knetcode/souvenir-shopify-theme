import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Interview page
export default function InterviewPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--gray)] mb-2">
            <Link href="/people" className="hover:text-[var(--foreground)]">The Interview</Link>
            <span>/</span>
            <span>People / Kirstie Sequitin</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl mb-6">Kirstie Sequitin</h1>

          {/* Introduction */}
          <p className="text-lg text-[var(--gray)] mb-12">
            Kirstie Sequitin is a designer, mother of two, and the creative force behind 
            some of our favorite family-friendly destinations. Based in Copenhagen, she 
            splits her time between running her design studio and exploring new places 
            with her family. We caught up with her to talk travel, creativity, and 
            finding balance.
          </p>

          {/* Hero Image */}
          <div className="relative aspect-[4/3] overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
              alt="Kirstie Sequitin"
              fill
              className="object-cover"
            />
          </div>

          {/* Q&A Section */}
          <div className="space-y-12">
            {/* Question 1 */}
            <div>
              <h3 className="text-xl italic mb-4">What inspired you to start traveling with your kids?</h3>
              <p className="text-[var(--gray)]">
                Honestly, it was necessity at first! I had work trips I couldn&apos;t miss, and 
                rather than leave them behind, we just made it work. Those early trips 
                taught me that kids are incredibly adaptable – more than we give them credit 
                for. Now travel is such an integral part of our family life that I can&apos;t 
                imagine it any other way.
              </p>
            </div>

            {/* Question 2 */}
            <div>
              <h3 className="text-xl italic mb-4">How do you balance work and family time when traveling?</h3>
              <p className="text-[var(--gray)]">
                I&apos;ve learned to be very intentional about scheduling. Mornings are usually 
                for work – I&apos;ll find a café with good wifi while the kids are still 
                sleepy and happy to color or read. Then afternoons and evenings are purely 
                family time. The key is accepting that neither will be perfect, and that&apos;s 
                okay. A &quot;good enough&quot; work session and a &quot;good enough&quot; beach day still make 
                for an amazing trip.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80"
                  alt="Interview image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80"
                  alt="Interview image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Question 3 */}
            <div>
              <h3 className="text-xl italic mb-4">What&apos;s your favorite family destination?</h3>
              <p className="text-[var(--gray)]">
                Tokyo holds a special place in my heart. It sounds intimidating with kids, 
                but it&apos;s actually incredibly family-friendly. The food is amazing (even 
                for picky eaters), the trains are an adventure in themselves, and there&apos;s 
                something magical about watching your kids experience a culture so different 
                from their own. Plus, the convenience stores are a parent&apos;s dream – you 
                can get everything from diapers to delicious onigiri at 3am.
              </p>
            </div>

            {/* Question 4 */}
            <div>
              <h3 className="text-xl italic mb-4">What do you always pack?</h3>
              <p className="text-[var(--gray)]">
                A small roll of masking tape – it sounds strange, but it&apos;s endlessly 
                useful. Taping down phone chargers, making impromptu games, covering up 
                annoying LED lights in hotel rooms, marking our luggage. Also, a really 
                good reusable water bottle for each kid, and a small bag of their favorite 
                snacks from home. Sometimes familiar tastes make all the difference when 
                everything else is new.
              </p>
            </div>

            {/* Related Itinerary Link */}
            <div className="py-8 border-t border-b border-gray-100">
              <p className="italic mb-2">Discover Kirstie&apos;s Tokyo itinerary!</p>
              <Link href="/itineraries/tokyo" className="read-more">
                Click Here
              </Link>
            </div>
          </div>

          {/* You Might Also Like */}
          <section className="py-12">
            <h2 className="text-2xl mb-8 uppercase tracking-wide">You Might Also Like...</h2>

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {[
                { name: "Laura Reed", role: "Photographer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
                { name: "Tessa Norman", role: "Travel Writer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
                { name: "Marcus Chen", role: "Chef & Father", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
                { name: "Sofia Martinez", role: "Architect", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
              ].map((person, i) => (
                <div key={i} className="flex-shrink-0 w-64 snap-start">
                  <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-[var(--pink)]">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                    {person.role}
                  </p>
                  <h3 className="text-base mb-2">{person.name}</h3>
                  <Link href={`/people/person-${i + 1}`} className="read-more text-sm">
                    Read Interview
                  </Link>
                </div>
              ))}
              <button className="flex-shrink-0 w-12 h-12 border border-[var(--foreground)] flex items-center justify-center self-center ml-4 hover:bg-[var(--foreground)] hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
