"use client";

import RoomCard from '../../component/card/roomCard';
import Breadcrumb from '../../component/common/breadcrumb';
import BookForm from '../../component/form/bookForm';
import { roomInfo } from '../../constant/information';
import { formatPrice } from '../../utils/utils';

export default function RoomPage() {
  const handleSubmit = (data: FormData) => {
    const obj: { [x: string]: FormDataEntryValue; } = {};
    data.forEach((value, key) => {
      obj[key] = value;
    })
    console.log(obj);
  }

  const data = roomInfo;

  const bc = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Rooms"
    },
  ];

  return (
    <div className="flex flex-col justify-center">
      <Breadcrumb breadcrumbs={bc} />
      <div className="flex justify-center">
        <BookForm handleData={handleSubmit}/>
      </div>

      {!data ? (
        <div className="flex-center m-5">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="rooms-container justify-center mx-auto m-5">
          {data.map((item, index) => (
            <RoomCard
              key={index}
              route={item.route}
              name={item.name}
              description={item.introduction}
              price={formatPrice(item.price)}
              imgUrl={item.thumbnail}
            />
          ))}
        </div>
      )}
    </div>
  );
}