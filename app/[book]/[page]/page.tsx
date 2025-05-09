import { library } from './library';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

interface Params {
  book: string;
  page: string;
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { book, page } = await params;

  const currentPage = Number(page);
  const pageData = library[book].pages[currentPage - 1];

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < library[book].pages.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
      
      {/* Image Section */}
      <div className="">
        <Image 
          src={pageData.image} 
          alt="Story image" 
          className="object-cover h-full w-full" 
          placeholder="blur"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="p-8 text-center md:flex md:items-center font-serif flex flex-col justify-center">
        <p className="text-sky-900 mb-4">
          Page {currentPage} of {library[book].pages.length}
        </p>
        
        <p className="text-lg font-medium">{pageData.text}</p>


        <div className="flex justify-between p-4 gap-4">
          {hasPreviousPage ? (
            <Link 
              href={`/${book}/${currentPage - 1}`} 
              className="bg-sky-900 shadow-sm rounded-md text-white px-4 py-2 hover:bg-sky-800"
            >
              Previous
            </Link>
          ) : (
            <Link 
              href="/" 
              className="bg-sky-900 shadow-sm rounded-md text-white px-4 py-2 hover:bg-sky-800"
            >
              Back to Home
            </Link>
          )}

          {hasNextPage ? (
            <Link 
              href={`/${book}/${currentPage + 1}`} 
              className="bg-sky-900 shadow-sm rounded-md text-white px-4 py-2 hover:bg-sky-800"
            >
              Next
            </Link>
          ) : (
            <Link 
              href="/" 
              className="bg-sky-900 shadow-sm rounded-md text-white px-4 py-2 hover:bg-sky-800"
            >
              Return to Home
            </Link>
          )}
        </div>
      </div>

    </div>
  );
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata>  {
  const { book, page } = await params;
  const currentPage = Number(page);
  const pageData = library[book].pages[currentPage - 1];

  return {
    title: `${library[book].title} - Page ${currentPage}`,
    description: pageData.text,
    openGraph: {
      type: 'website',
      images: [
        {
          url: pageData.image.src,
          alt: library[book].title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const params = [];
  for (const book in library) {
    for (let i = 1; i <= library[book].pages.length; i++) {
      params.push({ book, page: i.toString() });
    }
  }
  return params;
}