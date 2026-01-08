import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
  description?: string;
  category?: string;
  href: string;
  variant?: "default" | "small" | "large";
}

export default function Card({
  image,
  title,
  description,
  category,
  href,
  variant = "default",
}: CardProps) {
  const sizeClasses = {
    default: "aspect-[4/5]",
    small: "aspect-square",
    large: "aspect-[3/4]",
  };

  return (
    <Link href={href} className="card group block">
      <div className={`relative ${sizeClasses[variant]} overflow-hidden mb-4`}>
        <Image
          src={image}
          alt={title}
          fill
          className="card-image object-cover"
        />
      </div>
      {category && (
        <p className="text-xs uppercase tracking-wider text-[var(--gray)] mb-1">
          {category}
        </p>
      )}
      <h3 className="text-lg mb-2 group-hover:opacity-70 transition-opacity">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-[var(--gray)] line-clamp-2">{description}</p>
      )}
      <span className="read-more mt-3 inline-block">Read More</span>
    </Link>
  );
}

