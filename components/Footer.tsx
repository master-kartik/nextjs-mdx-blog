"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-8 flex px-5 md:px-0 justify-between items-center mt-10">
      <Link href={"/"} className="flex space-x-2 items-center">
        <div className="text-2xl">
          MDXBlog
        </div>
      </Link>
      <div className="flex flex-col md:flex-row text-gray-700 dark:text-gray-400 md:space-x-10">
        <Link href={"/"}>Terms of Use</Link>
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Cookie Policy</Link>
      </div>
    </div>
  );
}
