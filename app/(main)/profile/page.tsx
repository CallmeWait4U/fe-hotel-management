"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ProfileForm {
    username: string;
    fullName: string;
    email: string;
    phoneNumber: string;
}

export default function ProfilePage() {
  const [isEditable, setIsEditable] = useState(false);
  const [profileData, setProfileData] = useState<ProfileForm>({
    username: "User1",
    fullName: "Nguyễn Văn A",
    email: "user1@gmail.com",
    phoneNumber: "0123456789",
  });

  const { register, handleSubmit, getValues, formState: { errors } } = useForm<ProfileForm>({
    defaultValues: profileData
  });

  const onSubmit:SubmitHandler<ProfileForm> = (data) => {
    setProfileData(data);
    console.log(data);
    console.log(profileData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg flex-col flex mx-auto p-8 m-4 gap-5 w-full max-w-md">
      <h3 className="text-primary h3-semibold">Personal Information</h3>

      <div className="flex flex-col gap-2">
        <h3 className="text-dark-4">
            Username
        </h3>
        <label className={`input flex items-center gap-2 ${!isEditable ? "!bg-gray-200 !border-white" : "input-bordered bg-white border-gray-300" }`}>
          <input type="text" {...register("username", { required: true })} className="grow text-black" disabled={!isEditable} />
        </label>
        {errors.username && <p className="text-red-500 text-xs mt-2">Username is required</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-dark-4">
            Full name
        </label>
        <label className={`input flex items-center gap-2 ${!isEditable ? "!bg-gray-200 !border-white" : "input-bordered bg-white border-gray-300" }`}>
          <input type="text" {...register("fullName", { required: true })} className="grow text-black" disabled={!isEditable} />
        </label>
        {errors.fullName && <p className="text-red-500 text-xs mt-2">Full name is required</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-dark-4">
            Email
        </label>
        <label className={`input flex items-center gap-2 ${!isEditable ? "!bg-gray-200 !border-white" : "input-bordered bg-white border-gray-300" }`}>
          <input type="text" {...register("email", { required: true })} className="grow text-black" disabled={!isEditable} />
        </label>
        {errors.email && <p className="text-red-500 text-xs mt-2">Email is required</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-dark-4">
            Phone number
        </label>
        <label className={`input flex items-center gap-2 ${!isEditable ? "!bg-gray-200 !border-white" : "input-bordered bg-white border-gray-300" }`}>
          <input type="text" {...register("phoneNumber", { required: true })} className="grow text-black" disabled={!isEditable} />
        </label>
        {errors.phoneNumber && <p className="text-red-500 text-xs mt-2">Phone number is required</p>}
      </div>
    </form>
  )
}