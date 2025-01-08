"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ImageObject } from "../type";

const ImageSlider = (props: {images: ImageObject[]}) => {
  const customArrowPrev = (onClickHandler: MouseEventHandler<HTMLButtonElement> | undefined, hasPrev: boolean) =>
    hasPrev && (
      <button
        onClick={onClickHandler}
        className="absolute h1-bold z-10 h-full left-0 text-primary p-4 hover:opacity-50"
      >
        <FaAngleLeft />
      </button>
    );

  const customArrowNext = (onClickHandler: MouseEventHandler<HTMLButtonElement> | undefined, hasNext: boolean) =>
    hasNext && (
      <button
        onClick={onClickHandler}
        className="absolute h1-bold right-0 h-full bottom-[0%] text-primary p-4 hover:opacity-50"
      >
        <FaAngleRight />
      </button>
    );

  const customIndicator = (onClickHandler: MouseEventHandler<HTMLLIElement> | undefined, isSelected: boolean, index: number) => {
    return (
      <li
        key={index}
        className={`inline-block mx-1 w-4 h-1 md:w-6 md:h-3 rounded-full cursor-pointer select-none ${
          isSelected ? 'bg-pink-400' : 'bg-white'
        }`}
        onClick={onClickHandler}
      />
    );
  };

  return (
    <div className="z-10">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        infiniteLoop={true}
        useKeyboardArrows={true}
        renderArrowNext={customArrowNext}
        renderArrowPrev={customArrowPrev}
        renderIndicator={customIndicator}
      >
        {props.images.map((item) => (
          <div key={item.id} className="relative">
            <Image src={item.url} alt={item.title ? item.title : ""} width={1000} height={1000} className="block w-full lg:h-[768px] object-cover" />

            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-x-[15%] bottom-5 text-center text-white py-5">
              <h2 className="text-xl lg:text-3xl">{item.title}</h2>
              <p className="mt-2 hidden md:block">{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageSlider;