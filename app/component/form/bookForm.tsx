"use client";

import Form from "next/form";

const BookForm = (props: {handleData: (data: FormData) => void}) => {
  const dropdownRooms = [ "Single bedroom", "Double bedroom", "Deluxe Room"," Family Room", "Suite", "Penthouse" ];
    
  const dropdownGuests = [ "1", "2", "3", "4", "5+" ];
  
  return (
    <Form action={props.handleData} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-7xl gap-2 bg-gray-800 text-white p-4 mt-2 rounded-xl">
      <div className="flex-center flex-col rounded-xl border border-stone-700 gap-2 p-5">
            CHECK-IN
        <input
          type="date"
          className="input input-bordered w-full max-w-xs"
          name="checkInDate"
        />
      </div>
      <div className="flex-center flex-col rounded-md border border-stone-700 gap-2 p-5">
            CHECK-OUT
        <input
          type="date"
          className="input input-bordered w-full max-w-xs"
          name="checkOutDate"
        />
      </div>
      <div className="z-20 flex-center flex-col rounded-md border border-stone-700 gap-2 p-5">
            ROOM TYPE
        <select name="roomType" defaultValue={0} className="select select-bordered w-full max-w-xs">
          {
            dropdownRooms.map((item, index) => (
              <option key={index}>{item}</option>
            ))
          }
        </select>
      </div>
      <div className="z-10 flex-center flex-col rounded-md border border-stone-700 gap-2 p-5">
            GUESTS
        <select name="numOfGuest" defaultValue={0} className="select select-bordered w-full max-w-xs">
          {
            dropdownGuests.map((item, index) => (
              <option key={index}>{item}</option>
            ))
          }
        </select>
      </div>
      <div className="flex-center flex-col rounded-md bg-secondary gap-2 p-4 md:col-span-2 lg:p-5 lg:col-span-1 hover:cursor-pointer">
        <button className="text-2xl font-semibold p-2 rounded" type="submit">CHECK AVAILABILITY</button>
      </div>
    </Form>
  )
}

export default BookForm;