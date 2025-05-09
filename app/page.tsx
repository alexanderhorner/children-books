import { library } from "./[book]/[page]/library";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export default function Home() {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(400px,100%),1fr))] gap-4 p-4">
        {Object.entries(library).map(([id, book]) => (
          <BookCard key={id} title={book.title} cover={book.cover} id={id} />
        ))}
      </div>
    </div>
  );
}

const BookCard = ({ title, cover, id }: { title: string; cover: StaticImageData; id: string }) => (
  <Link href={`/${id}/1`} className="shadow-md rounded-2xl overflow-hidden">
    <Image src={cover} alt={title} placeholder="blur"/>
  </Link>
);

export const metadata: Metadata = {
  title: "Children Stories",
  description: "A collection of children's books",
}