'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

import { slides } from '@/constants';

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
      <div className={`flex relative h-[calc(100vh-84px)]`}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative flex flex-none flex-nowrap w-full justify-between items-center"
          >
            <Image
              fill
              src={slide.imageUrl}
              alt={slide?.text ? slide.text : 'Slider Preview'}
              className="object-cover bg-black bg-opacity-75"
            />
            <button
              onClick={scrollPrev}
              className="hidden md:block bg-black bg-opacity-75 h-full z-10 p-4"
            >
              <AiOutlineDoubleLeft
                size={40}
                className="hover:text-light transition"
              />
            </button>
            {slide?.title || slide?.text ? (
              <div className="bg-black bg-opacity-75 z-10 flex flex-col justify-center items-center py-4 px-6 lg:px-12 h-full flex-1">
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
              className="hidden md:block bg-black bg-opacity-75 h-full z-10 p-4"
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
