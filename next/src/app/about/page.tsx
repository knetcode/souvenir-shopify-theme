import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section - Yellow Background */}
        <section className="bg-[var(--yellow)] py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl italic mb-12">
              Thanks for being here!
            </h1>
            
            <div className="relative aspect-video max-w-2xl mx-auto mb-12 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80"
                alt="Family dining together"
                fill
                className="object-cover"
              />
            </div>

            <div className="max-w-xl mx-auto">
              <p className="text-xl md:text-2xl italic leading-relaxed">
                Welcome to Souvenir – a modern travel brand for creative parents. We save you 
                time by offering real travel itineraries, by trusted creatives, with the insights 
                you actually need to know. Ready to go?
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                  alt="Beach scene"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-[var(--gray)]">
                  We started Souvenir because we were tired of spending hours researching trips, 
                  only to end up at the same tourist traps or kid-unfriendly restaurants. We 
                  wanted real recommendations from parents who&apos;ve been there – the ones who know 
                  which beach has the gentlest waves, which café has the best high chairs, and 
                  which hiking trail won&apos;t end in a meltdown.
                </p>
                <p className="text-[var(--gray)]">
                  Our itineraries are created by a community of creative parents – designers, 
                  photographers, writers, and makers – who travel beautifully with their families. 
                  Each itinerary is a detailed day-by-day guide, packed with the kind of insider 
                  tips you&apos;d get from your most well-traveled friend.
                </p>
                <p className="text-[var(--gray)]">
                  Beyond itineraries, Souvenir is a place to discover beautiful objects from our 
                  travels, read interviews with interesting parents, and find inspiration for 
                  your next adventure. We believe family travel should be an enriching experience 
                  for everyone – kids and grown-ups alike.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-6 bg-[var(--cream)]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative w-48 h-48 mx-auto mb-8 overflow-hidden rounded-full">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                alt="Lucy - Founder"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl italic mb-4">About Lucy</h3>
            <p className="text-[var(--gray)] max-w-2xl mx-auto">
              Lucy is the founder of Souvenir. A former magazine editor and mother of two, 
              she started Souvenir after years of creating detailed travel itineraries for 
              friends and family who were always asking for her recommendations. She believes 
              the best family trips are the ones where everyone – from the smallest to the 
              tallest – comes home with stories to tell. When she&apos;s not planning her next 
              adventure, you&apos;ll find her hunting for vintage ceramics at flea markets or 
              testing out new pasta recipes with her kids.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8">CONTACT</h2>
            <p className="text-lg mb-8">We love to hear from you!</p>
            
            <div className="space-y-4 text-[var(--gray)]">
              <p>
                <strong className="text-[var(--foreground)]">For all customer service, questions or comments</strong>{" "}
                please email hello@souvenirtravel.com
              </p>
              <p>
                <strong className="text-[var(--foreground)]">For advertising, partnerships and submissions</strong>{" "}
                please get in touch at partnerships@souvenirtravel.com
              </p>
              <p>
                <strong className="text-[var(--foreground)]">For any problems with online orders or deliveries</strong>{" "}
                please contact orders@souvenirtravel.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
