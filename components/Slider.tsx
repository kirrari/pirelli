import { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

import { slides } from '@/constants';
import { TOP_HEADER_HEIGHT } from '@/components/Header';

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className="overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex relative">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`h-[calc(100vh-${TOP_HEADER_HEIGHT}px)] relative flex flex-none flex-nowrap w-full justify-center items-center`}
          >
            <Image
              fill
              src={slide.imageUrl}
              alt={slide?.text ? slide.text : 'Slider Preview'}
              className="object-cover"
            />
            <button
              onClick={scrollPrev}
              className="hidden md:block z-10 p-4 mr-auto"
            >
              <AiOutlineDoubleLeft
                size={40}
                className="hover:text-light transition"
              />
            </button>
            {slide?.title || slide?.text ? (
              <div className="bg-black bg-opacity-75 md:bg-opacity-0 z-10 max-w-6xl flex flex-col justify-center items-center p-4 h-full">
                <div className="flex items-center mb-4">
                  <img
                    src="/resources/bracket-left.svg"
                    alt="Left bracket"
                    className="w-12"
                  />
                  <span className="text-xl text-center">{slide?.title}</span>
                  <img
                    src="/resources/bracket-right.svg"
                    alt="Right bracket"
                    className="w-12"
                  />
                </div>
                <h2 className="text-4xl md:text-7xl text-center font-bold">
                  {slide?.text}
                </h2>
              </div>
            ) : (
              ''
            )}
            <button
              onClick={scrollNext}
              className="hidden md:block z-10 p-4 ml-auto"
            >
              <AiOutlineDoubleRight
                size={40}
                className="hover:text-light transition"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
