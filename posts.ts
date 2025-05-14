export interface IPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  thumbnail: string;
}
export const posts: IPost[] = [
  {
    title: "The Rise of Minimalist Web Design",
    slug: "the-rise-of-minimalist-web-design",
    author: "Kartik Kochhar",
    date: "2025-05-14",
    category: "Web Design",
    thumbnail: "/images/thumbnails/typescript.jpg",
  },
  {
    title: "Why Consistency is Key in UI/UX Design",
    slug: "why-consistency-is-key-in-ui-ux-design",
    author: "Kartik Kochhar",
    date: "2025-05-14",
    category: "UI/UX",
    thumbnail: "/images/thumbnails/typescript.jpg",
  },
  {
    title: "How AI is Reshaping Content Creation",
    slug: "how-ai-is-reshaping-content-creation",
    author: "Kartik Kochhar",
    date: "2025-05-14",
    category: "AI",
    thumbnail: "/images/thumbnails/typescript.jpg",
  },
  {
    title: "Building Your First Side Project as a Developer",
    slug: "building-your-first-side-project-as-a-developer",
    author: "Kartik Kochhar",
    date: "2025-05-14",
    category: "Development",
    thumbnail: "/images/thumbnails/typescript.jpg",
  },
];
