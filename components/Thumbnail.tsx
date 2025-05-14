'use client';

import { IPost, posts } from "@/posts";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { format } from "date-fns";

export default function Thumbnail() {
  const pathname = usePathname().split("/")[2];
  const post = posts.find((p: IPost) => p.slug === pathname);

  const formattedDate = post ? format(new Date(post.date), "MMMM d, yyyy") : "";

  return (
    <div className="relative h-[300px] md:h-[520px] w-full overflow-hidden bg-black">
      <Image
        src={post?.thumbnail || "/images/hero.png"}
        alt="Post Thumbnail"
        fill
        priority
        className="object-cover brightness-[0.6] transition-all duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
      <div className="absolute bottom-10 left-6 md:left-10 z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight group-hover:text-blue-500 transition-colors duration-300">
          {post?.title || "Loading..."}
        </h1>
        <p className="mt-2 text-sm text-neutral-300">
          {post?.author || "Anonymous"} &middot; {formattedDate || "Unknown Date"}
        </p>
      </div>
    </div>
  );
}
