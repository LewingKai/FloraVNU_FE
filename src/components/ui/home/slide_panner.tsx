import React, { useMemo } from "react";
import Image from "next/image";

const SlidePanner = React.memo(() => {
  const slides = useMemo(
    () => [
      "/images/home/event1.png",
      "/images/home/event2.png",
      "/images/home/event3.png",
    ],
    []
  );
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className="relative w-full sm:mt-10  overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div
        className="flex sm:h-[350px] h-[150px] w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative mr-5">
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2  text-white rounded-full sm:w-[50px] sm:h-[50px] w-[20px] h-[20px] text-2xl cursor-pointer z-10 flex items-center justify-center"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2  text-white rounded-full sm:w-[50px] sm:h-[50px] w-[20px] h-[20px] text-2xl cursor-pointer z-10 flex items-center justify-center"
      >
        ❯
      </button>

      {/* Indicator dots */}
      <div className="flex justify-center absolute bottom-5 w-full z-10 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={` h-0.5 rounded-full w-[25px] cursor-pointer ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
});

export default SlidePanner;
