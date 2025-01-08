"use client"

import Image from "next/image";
import React from "react";

const ServiceCard = (props: { serviceName: string, title: string, introduction: string, imgUrl: string, isImgLeft: boolean }) => {
  return (
    // If medium device
    <div className="md:flex max-w-5xl px-4 w-full mx-auto transition-transform duration-300 hover:scale-105">
      {props.isImgLeft && <Image className="md:w-1/2 bg-cover hover:cursor-pointer" src={props.imgUrl} alt={props.title} width={1000} height={1000} />}
      <div className="flex flex-col justify-between bg-light-1 p-4">
        <div>
          <h3 className="h3 uppercase text-primary" style={{ letterSpacing: "4px" }}>
            {props.serviceName}
          </h3>
          <h2 className="h2-bold hover:cursor-pointer">{props.title}</h2>
          <p className="text-dark-3 my-2">{props.introduction}</p>
        </div>

        <div className="flex">
          <button
            className={`text-white font-semibold bg-primary p-3 mt-2 transition-all transition-300 rounded-xl hover:bg-primary-1 ${props.isImgLeft ? "ml-auto" : ""}`}
          >
            View detail
          </button>
        </div>
      </div>

      {!props.isImgLeft && <Image className="md:w-1/2 bg-cover hover:cursor-pointer" src={props.imgUrl} alt={props.title} width={1000} height={1000} />}
    </div>
  );
};

export default ServiceCard;
