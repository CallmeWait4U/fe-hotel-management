"use client"

import { serviceInfo } from "@/app/constant/information";
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";

interface BookingForm {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    roomType: string;
    numOfGuest: number;
    checkInDate: Date;
    checkOutDate: Date;
    services: string[];
    note: string;
    promotionCode: string;
  }

export default function BookingPage() {
  const [bookingData, setBookingData] = useState<BookingForm>();
    
  const { register, handleSubmit, getValues, formState: { errors, touchedFields } } = useForm<BookingForm>();

  const onSubmit:SubmitHandler<BookingForm> = (data) => {
    setBookingData(data);
    console.log(data);
    console.log(bookingData);
  }

  const dropdownRooms = [ "Single bedroom", "Double bedroom", "Deluxe Room", "Family Room", "Suite", "Penthouse" ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-light-1 py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg flex flex-col p-6 gap-5 w-full max-w-2xl mx-auto">
        <h2 className="h3-semibold mx-auto text-black">Book room</h2>
        {/* Name */}
        <div>
          <h3 className="mb-2 font-semibold">
              Name <span className="text-red-500">*</span>
          </h3>
          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="input input-bordered border-gray-300 flex items-center gap-2 bg-white">
                <input type="text" {...register("firstName", { required: "This input is required." })} className="grow text-black" placeholder="First name" />
              </label>
              {errors.firstName  && <p className="text-red-500 text-xs mt-2">First name is required</p>}
            </div>

            <div className="w-1/2">
              <label className="input input-bordered border-gray-300 flex items-center gap-2 bg-white">
                <input type="text" {...register("lastName", { required: true })} className="grow text-black" placeholder="Last name" />
              </label>
              {errors.lastName && <p className="text-red-500 text-xs mt-2">Last name is required</p>}
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <h3 className="mb-2 font-semibold">
              Email <span className="text-red-500">*</span>
          </h3>
          <label className="input input-bordered border-gray-300 flex items-center gap-2 bg-white">
            <HiOutlineMail />
            <input type="text" {...register("email", { required: true })} className="grow text-black" placeholder="Email" />
          </label>
          {errors.email && <p className="text-red-500 text-xs mt-2">Email is required</p>}
        </div>

        <div>
          <h3 className="mb-2 font-semibold">
              Phone number <span className="text-red-500">*</span>
          </h3>
          <label className="input input-bordered border-gray-300 flex items-center gap-2 bg-white">
            <FiPhone />
            <input type="text" {...register("phoneNumber", { required: true })} className="grow text-black" placeholder="Phone number" />
          </label>
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-2">Phone number is required</p>}
        </div>

        {/* Roomtype and guest */}
        <div className="flex gap-2 grid-cols-2 z-20">
          <div className="w-1/2">
            <h3 className="mb-2 font-semibold">
                Room type <span className="text-red-500">*</span>
            </h3>
            <select {...register("roomType", { required: true })} className="select w-full max-w-xs bg-white border-gray-300 text-black">
              {
                dropdownRooms.map((item, index) => (
                  <option key={index}>{item}</option>
                ))
              }
            </select>
            {errors.roomType && <p className="text-red-500 text-xs mt-2">Room type is required</p>}
          </div>
          <div className="w-1/2">
            <h3 className="mb-2 font-semibold">
                Number of guests <span className="text-red-500">*</span>
            </h3>
            <label className="input input-bordered border-gray-300 flex items-center gap-2 bg-white">
              <input type="number" {...register("numOfGuest", { required: true })} className="grow text-black hover:bg-white" placeholder="Number of guests" />
            </label>
            {errors.numOfGuest && <p className="text-red-500 text-xs mt-2">Number of guests is required</p>}
          </div>
        </div>

        {/* Check in && check out */}
        <div className="flex gap-2 grid-cols-2">
          <div className="w-1/2">
            <h3 className="mb-2 font-semibold">
                Check-in date <span className="text-red-500">*</span>
            </h3>
            <label className="input input-bordered border-gray-300 flex items-center gap-2 bg-white">
              <input type="date" {...register("checkInDate", { required: true })} className="grow text-black hover:bg-white" />
              <MdDateRange />
            </label>
            {errors.checkInDate && <p className="text-red-500 text-xs mt-2">Check-in date is required</p>}
          </div>
          <div className="w-1/2">
            <h3 className="mb-2 font-semibold">
                Check-out date <span className="text-red-500">*</span>
            </h3>
            <label className="input input-bordered border-gray-300 flex items-center gap-2 bg-white">
              <input type="date" {...register("checkOutDate", { required: true })} className="grow text-black hover:bg-white" />
              <MdDateRange />
            </label>
            {errors.checkOutDate && <p className="text-red-500 text-xs mt-2">Check-out date is required</p>}
          </div>
        </div>

        {/* Choose services (optional) */}
        <div>
          <h3 className="mb-2 font-semibold">Services</h3>
          <div className="grid grid-cols-2 ml-6 gap-x-6 gap-y-4">
            {serviceInfo.map((item, i) => (
              <div className="flex items-center min-h-6" key={i}>
                <label className="flex inline-block ml-2 hover:cursor-pointer gap-2" htmlFor={`cb-${i}`}>
                  <input type="checkbox" value={item.serviceName} className="checkbox border-gray-300" {...register(`services`)} />
                  <span className="label-text text-black text-opacity-60">{item.serviceName}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Special note */}
        <div>
          <h3 className="font-semibold">Do you have any special requests?</h3>
          <textarea {...register("note", { required: false })} className="textarea textarea-bordered text-black bg-white w-full border-gray-300" cols={40} rows={5}></textarea>
        </div>

        {/* Voucher */}
        <div>
          <h3 className="mb-2 font-semibold">Promotion code</h3>
          <label className="input input-bordered text-black border-gray-300 flex items-center gap-2 bg-white">
            <input type="text" {...register("promotionCode", { required: false })} className="grow hover:bg-white" />
          </label>
        </div>
        <button className="uppercase btn-primary p-3">Book now</button>
      </div>
    </form>
  )
}