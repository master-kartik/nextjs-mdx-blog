import Footer from "./Footer";
import Header from "./Header";
import SyntaxHighlighter from "./SyntaxHighlighter";
import Thumbnail from "./Thumbnail";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
      <Header />

      <main className="relative">
        <Thumbnail />
        <div className="px-5 md:px-0 max-w-3xl mx-auto -mt-20 relative z-10">
          <div className="bg-white dark:bg-neutral-950 p-6 md:p-10 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 prose dark:prose-invert">
            {isProduction ? (
              <SyntaxHighlighter>{children}</SyntaxHighlighter>
            ) : (
              <div>{children}</div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
