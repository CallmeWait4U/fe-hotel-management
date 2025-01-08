"use client";

import Link from "next/link";
import ImageSlider from "./component/slider/imageSlider";
import SlickSlider from "./component/slider/slickSlider";
import HomeCard from "./component/card/homeCard";
import { homeCard, images1, images2, services } from "./constant/information";

export default function Home() {
  return (
    <>
      <ImageSlider images={images1} />

      <div className="flex flex-col z-10 bg-light-1 pt-10 gap-10">
        <div className="max-w-6xl p-4 gap-6 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="w-full max-w-3xl flex gap-4">
            <HomeCard data={homeCard[0]} isReverse={true} />
            <HomeCard data={homeCard[1]} isReverse={false} />
          </div>

          {/* About us */}
          <div className="flex justify-center flex-col gap-4">
            <p className="font-semibold text-primary">About us</p>
            <h3 className="max-w-md font-serif text-5xl leading-normal text-black">Find Your Perfect Stay with Us</h3>
            <p className="text-black">
              Nestled in the serene landscapes of tranquility, far from the hustle and bustle of city life, lies a haven
              of comfort and relaxation. Our booking service is dedicated to finding you the perfect retreat where you
              can unwind and rejuvenate. Escape to a world of serene beauty and luxury, meticulously curated for your
              ultimate comfort.
            </p>
            <Link href='/booking'>
              <button className="mr-auto btn-primary">
                Book your room now
              </button>
            </Link>
          </div>
        </div>

        {/* Our services */}
        <section className="py-12 mx-auto text-center">
          <p className="font-semibold text-primary">About our services</p>
          <h2 className="w-full font-serif text-5xl leading-normal mb-6">Explore Our Hotel Services</h2>
          <Link href="/services" className="flex flex-col md:flex-row gap-6 hover:cursor-pointer">
            {services.map((service, index) => (
              <div key={index} className="group flex flex-col items-center text-primary transition-colors duration-300">
                <div className="bg-white p-6 rounded-t-full rounded-br-full shadow-md mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <p className="text-lg font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </p>
              </div>
            ))}
          </Link>
        </section>
      </div>

      <SlickSlider images={images2} />
    </>
  );
}
