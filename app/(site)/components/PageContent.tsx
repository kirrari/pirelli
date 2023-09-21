import Slider from '@/components/Slider';
import Link from 'next/link';
import Poster from '@/components/Poster';
import { tyrePosters } from '@/constants';

const PageContent = () => {
  return (
    <>
      <Slider />
      <div className="py-16 px-8 md:px-12 xl:px-36 flex flex-col items-center">
        <h3 className="uppercase text-4xl text-center mb-16">
          Are you looking for tyres?
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px]">
          {tyrePosters.map((poster) => (
            <Link
              key={poster.id}
              href="/tyres"
              className="relative lg:hover:scale-100 transition"
            >
              <Poster
                title={poster?.title}
                imageUrl={poster?.imageUrl}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PageContent;
