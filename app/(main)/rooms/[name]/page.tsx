import Breadcrumb from "@/app/component/common/breadcrumb";
import RoomAmenities from "@/app/component/room/roomAmenities";
import RoomRating from "@/app/component/room/roomRating";
import RoomSpecification from "@/app/component/room/roomSpecification";
import ImageRoomSlider from "@/app/component/slider/imageRoomSlider";
import { roomInfo } from "@/app/constant/information";
import { formatPrice } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";

export default async function RoomDetailPage({ params }: { params: Promise<{ name: string }> }) {
  const name = (await params).name.replaceAll("-", " ");
  const room = roomInfo.filter(item => item.name.toLowerCase() === name)[0];

  const bc = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Rooms",
      route: "/rooms",
    },
    {
      name: name.charAt(0).toUpperCase() + name.slice(1),
    }
  ]

  return (
    <div>
      <Breadcrumb breadcrumbs={bc} />
      <div className="relative">
        <Image className="h-80 w-full object-cover block" src="/img/test.jpg" alt="hotel_background" width={1000} height={1000} />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-x-[15%] bottom-[30%] text-center">
          <div className="flex gap-2 items-center justify-center">
            <p className="text-primary-1 font-serif h3-bold lg:h1-bold">{room.name}</p>
          </div>
        </div>
      </div>

      {/* Room detail */}
      <div className="flex flex-col gap-4 m-4">
        <ImageRoomSlider imageUrls={room.imageUrls} />

        <div className="flex flex-col gap-2 justify-center mx-auto max-w-4xl">
          <div className="flex sm:flex-row sm:justify-between sm:items-center flex-col ">
            <h2 className="font-serif h3-semibold md:h1-semibold">{room.name}</h2>
            <p className="text-gold md:text-[20px] font-semibold ">{formatPrice(room.price)} VND / NIGHT</p>
          </div>

          <p className="text-dark-2 tracking-wide">{room.description}</p>
        </div>

        <RoomSpecification size={room.size} occupancy={room.occupancy} beds={room.beds} bathrooms={room.bathrooms} />

        <RoomAmenities amenities={room.amenities} />

        {/* Review and rating */}
        <RoomRating rating={room.rating} />

        <Link href="/booking" className="mx-auto">
          <button className="text-white bg-primary p-4 base-medium rounded-md tracking-wider hover:bg-primary-1">
            Make a reservation
          </button>
        </Link>
      </div>
    </div>
  )
}