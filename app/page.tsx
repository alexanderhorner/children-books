import { library } from "./[book]/[page]/library";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-4">
      {Object.entries(library).map(([id, book]) => (
        <BookCard key={id} title={book.title} cover={book.cover} id={id} />
      ))}
    </div>
  );
}

const BookCard = ({ title, cover, id }: { title: string; cover: StaticImageData; id: string }) => (
  <Link href={`/${id}/1`} className="shadow-md rounded-lg m-4 flex flex-col gap-4 overflow-hidden">
    <Image src={cover} alt={title} />
  </Link>
);
