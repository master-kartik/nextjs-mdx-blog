import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { posts } from "@/posts";

export default function page() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
{posts.map((p, idx) => (
        <Card
          key={idx}
          title={p.title}
          slug={p.slug}
          author={p.author}
          date={p.date}
          category={p.category}
          thumbnail={p.thumbnail}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}
