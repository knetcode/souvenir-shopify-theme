import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Shop/Souvenirs collection page
export default function ShopPage() {
  const products = [
    { title: "Ceramic Plate Set", category: "Kitchenware", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80" },
    { title: "Linen Napkins", category: "Home", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" },
    { title: "Beach Towel", category: "Beach", image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=400&q=80" },
    { title: "Wooden Spoon Set", category: "Kitchenware", image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=400&q=80" },
    { title: "Handwoven Basket", category: "Home", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
    { title: "Cotton Tote Bag", category: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
    { title: "Olive Oil Set", category: "Food", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80" },
    { title: "Straw Hat", category: "Accessories", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=80" },
    { title: "Terracotta Vase", category: "Home", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&q=80" },
    { title: "Sea Salt", category: "Food", image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=400&q=80" },
    { title: "Linen Dress", category: "Fashion", image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&q=80" },
    { title: "Sandals", category: "Fashion", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl uppercase tracking-wide mb-2">The Souvenir</h1>
            <p className="text-[var(--gray)]">Beautiful objects from our travels</p>
          </div>

          {/* Description */}
          <p className="text-[var(--gray)] max-w-2xl mb-12">
            Carefully curated items discovered on our travels. From handmade ceramics to 
            artisan textiles, each piece tells a story and brings a little bit of your 
            favorite destinations home.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((item, i) => (
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
                  {item.category}
                </p>
                <h3 className="text-base mb-2">
                  {item.title}
                </h3>
                <Link href={`/shop/product-${i + 1}`} className="read-more text-sm">
                  Shop Now
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
