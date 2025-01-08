"use client";

import Image from "next/image";
import React from "react";
import { CardObject } from "../type";

const HomeCard = (props: { data: CardObject, isReverse: boolean }) => {
  return (
    <div
      className={`flex w-1/2 text-center gap-5 transition md:gap-4 duration-400 group
        ease-in-out group ${props.isReverse ? "flex-col-reverse" : "flex-col"}`}
    >
      <Image className="object-cover group-hover:opacity-80" src={props.data.img} width={1000} height={1000} alt="" />

      <div className="flex flex-col gap-2 p-4 justify-center 
      items-center bg-white group-hover:bg-dark-4 group-hover:text-white">
        {props.data.icon}
        <h3 className="font-serif text-xl">{props.data.title}</h3>
        <p className="text-dark-3 group-hover:text-dark-1">{props.data.description}</p>
        {/* Price and book */}
      </div>
    </div>
  );
};

export default HomeCard;
