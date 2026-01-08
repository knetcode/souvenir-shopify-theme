"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const colors = [
    { name: "Blue", hex: "#6B8BA4" },
    { name: "Cream", hex: "#F5E6D3" },
    { name: "Terracotta", hex: "#C67B5C" },
    { name: "Sage", hex: "#9CAF88" },
  ];

  const images = [
    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&q=80",
    "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&q=80",
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--gray)] mb-2">
            <Link href="/shop" className="hover:text-[var(--foreground)]">The Souvenir</Link>
            <span>/</span>
            <span>Shop by item</span>
          </div>
          <p className="text-[var(--gray)] mb-8">Kitchenware</p>

          {/* Product Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div>
              <div className="relative aspect-square overflow-hidden mb-4">
                <Image
                  src={images[selectedImage]}
                  alt="Ceramic plate set"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-16 h-16 overflow-hidden border-2 ${
                      selectedImage === i ? "border-[var(--foreground)]" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Product thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl mb-2">Ceramic plate set</h1>
              <p className="text-[var(--gray)] uppercase tracking-wide text-sm mb-4">
                Sublimi Design
              </p>
              <p className="text-2xl mb-6">£45</p>

              {/* Color Selection */}
              <div className="mb-6">
                <p className="text-sm uppercase tracking-wide mb-3">Color</p>
                <div className="flex gap-3">
                  {colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === i ? "border-[var(--foreground)]" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-sm uppercase tracking-wide mb-3">Qty</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-[var(--foreground)]"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-[var(--foreground)]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button className="w-full bg-[var(--foreground)] text-white py-4 text-sm uppercase tracking-wide hover:bg-transparent hover:text-[var(--foreground)] border border-[var(--foreground)] transition-colors mb-8">
                Add to Cart
              </button>

              {/* Product Description */}
              <div className="text-[var(--gray)] space-y-4">
                <p>
                  Hand-thrown ceramic plates crafted by artisans in a small workshop in 
                  North Zealand, Denmark. Each piece is unique, featuring subtle variations 
                  in glaze that reflect the craftsmanship involved. The simple, elegant 
                  design works beautifully for everyday meals or special occasions.
                </p>
                <p>
                  Set includes four dinner plates. Dishwasher and microwave safe. Due to 
                  the handmade nature, slight variations in color and size are to be expected 
                  and add to the charm of each piece.
                </p>
              </div>

              {/* Link to Itinerary */}
              <div className="mt-8 p-4 bg-[var(--cream)]">
                <p className="text-sm uppercase tracking-wide mb-2">
                  Discover the full details of the trip where we found this beautiful souvenir
                </p>
                <Link href="/itineraries/danish-riviera" className="read-more">
                  Click Here
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=400&q=80",
              "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
              "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&q=80",
              "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80",
            ].map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={img}
                  alt={`Product image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Other Souvenirs */}
          <section className="py-12 border-t border-gray-100">
            <h2 className="text-2xl mb-8 uppercase tracking-wide">Our Other Souvenirs...</h2>

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {[
                { title: "Linen Napkins", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" },
                { title: "Beach Towel", img: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=400&q=80" },
                { title: "Wooden Spoon Set", img: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=400&q=80" },
                { title: "Handwoven Basket", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
              ].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-64 snap-start">
                  <div className="relative aspect-square overflow-hidden mb-4 bg-[var(--pink)]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
                    Home
                  </p>
                  <h3 className="text-base mb-2">{item.title}</h3>
                  <Link href={`/shop/product-${i + 1}`} className="read-more text-sm">
                    Discover
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
