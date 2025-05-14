'use client';

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface CardProps {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  thumbnail: string;
}

const Card = ({ title, slug, author, date, category, thumbnail }: CardProps) => {
  const formattedDate = format(new Date(date), "MMMM d, yyyy");

  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl duration-300"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={`${title} - thumbnail`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 z-10 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded-md uppercase tracking-wide">
          {category}
        </span>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-extrabold leading-snug text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
          {title}
        </h2>

        <div className="mt-4 flex flex-wrap items-center text-sm text-neutral-500 dark:text-neutral-400">
          <span className="mr-4">{author}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
