import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomCard = (props: { route: string, name: string, description: string, price: string, imgUrl: string }) => {
  return (
    <div className="room-card grid grid-rows-[auto,1fr,auto] transition duration-400 ease-in-out group">
      <Link href={props.route} className="relative block">
        <Image className="rounded-t-lg w-full group-hover:opacity-80" width={1000} height={1000} src={props.imgUrl} alt="" />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
      </Link>

      <div className="p-6 pb-0 group-hover:text-white flex-grow">
        <Link href={props.route} className="mb-2 text-2xl font-semibold font-serif text-dark-4">
          {props.name}
        </Link>
        <p className="my-4 text-dark-2">{props.description}</p>
      </div>

      <div className="p-6 group-hover:text-white">
        {/* Price and book */}
        <div className="flex-between font-semibold">
          <p className="text-gold">{props.price} VND / NIGHT</p>
          <Link href={props.route}>
            <button
              type="button"
              className="font-medium px-4 py-2 rounded-md bg-primary text-white active:animate-click-ease-out transition-all duration-300 hover:bg-primary-1"
            >
              Book now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
