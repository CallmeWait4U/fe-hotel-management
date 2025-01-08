"use client";

import Link from "next/link";
import ImageSlider from "./component/slider/imageSlider";
import SlickSlider from "./component/slider/slickSlider";
import { PiCalendarCheckDuotone, PiFlowerLotusLight, PiForkKnife, PiHandshakeLight, PiPersonSimpleSwimLight, PiWifiHigh } from "react-icons/pi";
import Card from "./component/card";
import { FaGift } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";

export default function Home() {
  const images1 = [
    {
      id: "1",
      url: "/img/room_suite.jpg",
      title: "Rooms & Suites",
      description:
              "Choose from our diverse selection of beautifully appointed guest rooms and suites, all designed to deliver the perfect blend of comfort and convenience. Relax in spacious layouts, enjoy premium amenities, and unwind in a tranquil setting.",
    },
    {
      id: "2",
      url: "/img/restaurant.jpg",
      title: "Restaurant",
      description:
              "Enjoy a vibrant atmosphere, impeccable service, and a menu that caters to breakfast, lunch, and dinner. Our talented chefs showcase their expertise with innovative dishes prepared using fresh, locally sourced ingredients.",
    },
    {
      id: "3",
      url: "/img/spa.jpg",
      title: "Spa",
      description:
              " Escape the everyday and indulge in a range of pampering treatments at our luxurious spa. Our expert therapists offer massages, facials, and other body treatments to promote relaxation and rejuvenation.",
    },
    {
      id: "4",
      url: "/img/gym.jpg",
      title: "Fitness Center",
      description:
              "Stay active during your stay with access to our state-of-the-art fitness center. Featuring a variety of cardio and weight training equipment, it's the perfect place to maintain your workout routine.",
    },
  ];

  const images2 = [
    {
      id: "1",
      url: "/img/home/home_1.jpg",
    },
    {
      id: "2",
      url: "/img/home/home_2.jpg",
    },
    {
      id: "3",
      url: "/img/home/home_3.jpg",
    },
    {
      id: "4",
      url: "/img/home/home_4.jpg",
    },
    {
      id: "5",
      url: "/img/home/home_5.jpg",
    },
    {
      id: "6",
      url: "/img/home/home_6.jpg",
    },
    {
      id: "7",
      url: "/img/home/home_7.jpg",
    },
    {
      id: "8",
      url: "/img/home/home_8.jpg",
    },
    {
      id: "9",
      url: "/img/home/home_9.jpg",
    },
  ];

  const homeCard = [
    {
      img: "/img/home/cozy.jpg",
      title: "Cozy Room",
      description: "Experience ultimate comfort in our cozy rooms, perfect for relaxation and tranquility.",
      icon: <GiNightSleep className="text-6xl text-primary-1" />,
    },
    {
      img: "/img/home/service.jpg",
      title: "Special offer",
      description: "Enjoy exclusive deals and special offers tailored to enhance your stay.",
      icon: <FaGift className="text-6xl text-primary-1" />
    },
  ];

  const services = [
    { icon: <PiWifiHigh size={56} />, title: "Free Wifi" },
    { icon: <PiCalendarCheckDuotone size={56} />, title: "Easy Booking" },
    { icon: <PiForkKnife size={56} />, title: "Restaurant" },
    { icon: <PiPersonSimpleSwimLight size={56} />, title: "Swimming Pool" },
    { icon: <PiFlowerLotusLight size={56} />, title: "Beauty & Health" },
    { icon: <PiHandshakeLight size={56} />, title: "Help & Support" },
  ];

  return (
    <>
      <ImageSlider images={images1} />

      <div className="flex flex-col z-10 bg-light-1 pt-10 gap-10">
        <div className="max-w-6xl p-4 gap-6 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="w-full max-w-3xl flex gap-4">
            <Card data={homeCard[0]} isReverse={true} />
            <Card data={homeCard[1]} isReverse={false} />
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
