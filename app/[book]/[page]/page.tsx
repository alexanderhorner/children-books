import { library } from './library';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ 
    book: string,
    page: string,
  }>;
}) {
  const { book, page } = await params;
  
  console.log(book, page, typeof page);

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
        />
      </div>

      {/* Text Section */}
      <div className="p-8 text-center md:flex md:items-center font-serif flex flex-col justify-center">
        <p className="text-gray-600 mb-4">
          Page {currentPage} of {library[book].pages.length}
        </p>
        
        <p className="text-lg font-medium">{pageData.text}</p>


        <div className="flex justify-between p-4 gap-4">
          {hasPreviousPage ? (
            <Link 
              href={`/${book}/${currentPage - 1}`} 
              className="border border-gray-400 shadow-sm rounded-md bg-white text-gray-800 px-4 py-2 hover:bg-gray-100"
            >
              Previous
            </Link>
          ) : (
            <Link 
              href="/" 
              className="border border-gray-400 shadow-sm rounded-md bg-white text-gray-800 px-4 py-2 hover:bg-gray-100"
            >
              Back to Home
            </Link>
          )}

          {hasNextPage ? (
            <Link 
              href={`/${book}/${currentPage + 1}`} 
              className="border border-gray-400 shadow-sm rounded-md bg-white text-gray-800 px-4 py-2 hover:bg-gray-100"
            >
              Next
            </Link>
          ) : (
            <Link 
              href="/" 
              className="border border-gray-400 shadow-sm rounded-md bg-white text-gray-800 px-4 py-2 hover:bg-gray-100"
            >
              Return to Home
            </Link>
          )}
        </div>
      </div>

    </div>
  );
}
