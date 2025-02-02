import Breadcrumb from "@/app/component/common/breadcrumb";
import { serviceInfo } from "@/app/constant/information";
import Image from "next/image";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

export default async function SpaServicePage() {
  const bc = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Services",
      route: "/services",
    },
    {
      name: "Spa",
    }
  ]

  const service = serviceInfo.filter(item => item.serviceName === "Spa")[0];
  const utilities = [
    "Four single treatment rooms",
    "Two luxury treatment rooms for couples",
    "Nail care and manicure",
    "Women's changing area with shower and sauna",
    "Men's changing area with shower and sauna",
  ]

  return (
    <div>
      <Breadcrumb breadcrumbs={bc} />
      <div className="relative">
        <Image className="h-80 w-full object-cover block" src="/img/test.jpg" alt="hotel_background" width={1000} height={1000} />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-x-[15%] bottom-[30%] text-center">
          <div className="flex gap-2 items-center justify-center">
            <p className="text-primary-1 font-serif h3-bold lg:h1-bold">
              Spa
            </p>
          </div>
        </div>
      </div>

      {/* Service Detail */}
      <div className="flex flex-col gap-4 m-4">
        <div className="flex flex-col gap-2 justify-center mx-auto max-w-4xl">
          <div className="flex sm:flex-row sm:justify-between sm:items-center flex-col">
            <h2 className="font-serif h3-semibold md:h1-semibold">Spa</h2>
          </div>

          <p className="text-dark-2 tracking-wide">{service.introduction}</p>
        </div>

        <div className="w-3/4 max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 bg-gray-100 rounded-lg">
          <div className="flex items-start space-x-4">
            <FaLocationDot className="text-primary text-2xl" />
            <div>
              <h3 className="text-lg font-medium">Location</h3>
              <p className="text-dark-3">
                Floor M
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <AiFillDollarCircle className="text-primary text-2xl" />
            <div>
              <h3 className="text-lg font-medium">Price</h3>
              <p className="text-dark-3">
                Depending on service
              </p>
            </div>
          </div>
        </div>

        <div className='w-3/4 max-w-4xl mx-auto bg-gray-100 rounded-lg p-4'>
          <h2 className='h3-bold mb-4 font-serif tracking-wider text-primary'>Utilities</h2>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {utilities.map((item, index) => (
              <li key={index} className='text-dark-3'>
                &bull; {item}
              </li>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}