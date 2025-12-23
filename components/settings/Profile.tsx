"use client";
import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { Input } from "../ui/input";
import { Edit2Icon } from "lucide-react";
import { useGetProfile, useUpdateProfile, useUploadImage } from "@/lib/query/hooks";
import { getImageUrl } from "@/utils/image";

export default function Profile() {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch profile data
  const { data: profile, isLoading } = useGetProfile();
  const { mutate: updateProfile, isPending: isUpdatingProfile } = useUpdateProfile();
  const { mutate: uploadImage, isPending: isUploadingImage } = useUploadImage();

  const isPending = isUpdatingProfile || isUploadingImage;

  // Populate form when profile data is loaded
  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setEmail(profile.email || "");
      if (profile.profile) {
        setImage(getImageUrl(profile.profile));
      }
    }
  }, [profile]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const url = URL.createObjectURL(selectedFile);
        setImage(url);
        setFile(selectedFile);
      }
    }
  };

  const handleClick = () => {
    inputFileRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // First, upload image if a new file is selected
    if (file) {
      const formData = new FormData();
      formData.append("images", file);
      formData.append("type", "profile");

      uploadImage(formData, {
        onSuccess: () => {
          // After image upload, update profile with name
          updateProfile({ name });
          setFile(null); // Clear file after successful upload
        },
      });
    } else {
      // If no image, just update profile with name
      updateProfile({ name });
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
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

          {/* Edit icon */}
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

      <form onSubmit={handleSubmit}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            required
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
            value={email}
            readOnly
            className="w-full rounded-md border border-gray-300 bg-gray-50 cursor-not-allowed"
          />
          <p className="text-sm text-gray-500 mt-1">
            Email cannot be changed
          </p>
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold cursor-pointer hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}
