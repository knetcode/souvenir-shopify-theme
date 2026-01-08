import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  image: string;
  title: string;
  description?: string;
  author?: string;
  href: string;
}

export default function CategoryCard({
  image,
  title,
  description,
  author,
  href,
}: CategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
        {author}
      </p>
      <h3 className="text-base mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-[var(--gray)] line-clamp-2">{description}</p>
      )}
      <span className="read-more mt-2 inline-block text-sm">Read More</span>
    </Link>
  );
}

