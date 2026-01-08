import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Food, Culture, Life article page
export default function ArticlePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--gray)] mb-2">
            <Link href="/articles" className="hover:text-[var(--foreground)]">Food, Culture, Life</Link>
            <span>/</span>
            <span>Summer Houses</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl mb-6">A Love Letter to Danish Summer Houses</h1>

          {/* Introduction */}
          <p className="text-lg text-[var(--gray)] mb-12">
            There&apos;s something magical about the Danish summerhouse tradition. These 
            simple wooden cottages, often passed down through generations, represent 
            everything we love about Scandinavian design and lifestyle: simplicity, 
            functionality, and a deep connection to nature.
          </p>

          {/* Hero Image */}
          <div className="relative aspect-video overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80"
              alt="Danish summer house"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-[var(--gray)]">
              The Danish sommerhus (summer house) isn&apos;t about luxury – it&apos;s about 
              stripping back to essentials. Whitewashed walls, worn wooden floors, 
              a kitchen with just enough equipment to make simple meals, and beds 
              that somehow always feel more comfortable than the ones at home.
            </p>

            <p className="text-[var(--gray)]">
              For families with children, these cottages offer something increasingly 
              rare in our connected world: permission to be bored. Without the 
              distractions of screens and schedules, kids rediscover the simple 
              pleasures of building sandcastles, catching crabs, and reading books 
              by torchlight.
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 my-12">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
                  alt="Beach near summer house"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80"
                  alt="Summer house interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl mt-12 mb-4">How to Rent a Summer House</h2>

            <p className="text-[var(--gray)]">
              While many summer houses are privately owned and passed down through 
              families, there&apos;s a thriving rental market. The best properties book 
              up months in advance for summer, so plan ahead. Look for houses in 
              the North Zealand area for classic Danish coastal scenery, or try 
              the islands of Bornholm or Møn for something different.
            </p>

            <p className="text-[var(--gray)]">
              Sites like Novasol and DanCenter have extensive listings, but for 
              more unique properties, try searching on Airbnb or asking locals for 
              recommendations. The best houses often aren&apos;t advertised online at all.
            </p>

            <h2 className="text-2xl mt-12 mb-4">What to Expect</h2>

            <p className="text-[var(--gray)]">
              Most summer houses are self-catering, so come prepared to cook. Danish 
              supermarkets are excellent, and there&apos;s something deeply satisfying about 
              preparing simple meals with fresh local ingredients. Don&apos;t miss the 
              chance to buy fish directly from local fishermen – the experience alone 
              is worth it.
            </p>

            <p className="text-[var(--gray)]">
              Bring layers – Danish weather is famously changeable, and you&apos;ll want 
              to be prepared for everything from blazing sunshine to cozy rainy days 
              indoors. And pack board games. Trust us on this one.
            </p>
          </div>

          {/* You Might Also Like */}
          <section className="py-12 mt-12 border-t border-gray-100">
            <h2 className="text-2xl mb-8 uppercase tracking-wide">You Might Also Like...</h2>

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {[
                { title: "The Best Bakeries in Copenhagen", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" },
                { title: "Cycling Through Denmark with Kids", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
                { title: "A Guide to Danish Design", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
                { title: "Beach Days: Our Favorite Spots", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
              ].map((article, i) => (
                <div key={i} className="flex-shrink-0 w-64 snap-start">
                  <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-[var(--pink)]">
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                    Food, Culture, Life
                  </p>
                  <h3 className="text-base mb-2">{article.title}</h3>
                  <Link href={`/articles/article-${i + 1}`} className="read-more text-sm">
                    Read More
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
