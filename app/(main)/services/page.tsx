"use client"

import ServiceCard from "@/app/component/card/serviceCard";
import Breadcrumb from "@/app/component/common/breadcrumb";
import { serviceInfo } from "@/app/constant/information";
import { useEffect, useState } from "react";

export default function ServicePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const data = serviceInfo;
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [windowWidth]);

  const bc = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Services",
    }
  ]
  
  if (!data) {
    return (
      <div className="flex-center m-5">
        <Breadcrumb breadcrumbs={bc} />
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  
  // Medium device++ will show services with left/right thumbnail
  if (windowWidth > 768)
    return (
      <div className="justify-center p-5">
        <Breadcrumb breadcrumbs={bc} />
        {data.map((item, index) => (
          <ServiceCard
            key={index}
            serviceName={item.serviceName}
            title={item.title}
            introduction={item.introduction}
            imgUrl={item.image}
            isImgLeft={index % 2 === 0}
          />
        ))}
      </div>
    );
  else
    return (
      <div className="justify-center mx-auto m-5">
        <Breadcrumb breadcrumbs={bc} />
        {data.map((item, index) => (
          <ServiceCard
            key={index}
            serviceName={item.serviceName}
            title={item.title}
            introduction={item.introduction}
            imgUrl={item.image}
            isImgLeft={true}
          />
        ))}
      </div>
    );
}