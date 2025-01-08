"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageRoomSlider = (props: { imageUrls: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const setActive = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? props.imageUrls.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === props.imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative">
        <Image
          className="h-auto w-full max-w-full rounded-lg object-fill md:h-[500px]"
          src={props.imageUrls[activeIndex]}
          alt=""
          width={1000}
          height={1000}
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 sm:-left-10 transform -translate-y-1/2 bg-primary-1 text-white rounded-full p-2 opacity-80 hover:bg-primary"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 sm:-right-10 transform -translate-y-1/2 bg-primary-1 text-white rounded-full p-2 opacity-80 hover:bg-primary"
        >
          <FaAngleRight />
        </button>
      </div>

      <div className="flex grid-cols-5 gap-4 max-w-4xl justify-center mt-4">
        {props.imageUrls.map((item, index) => (
          <div key={index}>
            <Image
              onClick={() => setActive(index)}
              src={item}
              className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center ${index === activeIndex ? "ring-4 ring-primary" : ""}`}
              alt="gallery"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageRoomSlider;
