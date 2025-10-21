"use client";
import React, { useState, ChangeEvent, useRef } from "react";
import { Input } from "../ui/input";
import { Edit2Icon } from "lucide-react";

export default function Profile() {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(
    "https://i.ibb.co.com/xJdQCTG/download.jpg"
  );
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setImage(url);
        setFile(file);
      }
    }
  };

  const handleClick = () => {
    inputFileRef.current?.click();
  };

  return (
    <div className=" bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Profile
      </h1>

      {/* Image Preview + Upload */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 mb-4 relative">
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-400 text-xl rounded-full">
              No Image
            </div>
          )}

          {/* Edit icon (click করলে ফাইল ইনপুট খুলবে) */}
          <div
            className="absolute bottom-0 right-1 bg-white rounded-full p-1 shadow-md cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
            title="Change Profile Image"
          >
            <Edit2Icon className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        <input
          ref={inputFileRef}
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 mb-1 font-medium"
          >
            Name
          </label>
          <Input
            id="name"
            placeholder="Your name"
            className="w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 mb-1 font-medium"
          >
            Email
          </label>
          <Input
            id="email"
            placeholder="Your email"
            type="email"
            className="w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold cursor-pointer"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
