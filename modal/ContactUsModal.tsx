"use client";

import { Upload } from "lucide-react";
import Modal from "./Modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { use, useRef, useState } from "react";
import Image from "next/image";

export default function ContactUsForm({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFile(file);
      setPreviewImage(url);
    }
  };

  const handleRef = () => {
    if (inputFileRef?.current) {
      inputFileRef.current.click();
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <div className="bg-white p-6 rounded-md w-full min-w-md text-black">
          <form className="space-y-4 mt-6">
            {/* Headline */}
            <div>
              <label className="block  mb-1">Headline</label>
              <input
                type="text"
                placeholder="Type..."
                className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none "
              />
            </div>

            {/* Sub Headline */}
            <div>
              <label className="block  mb-1">Sub Headline</label>
              <input
                type="text"
                placeholder="Type..."
                className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none "
              />
            </div>

            {/* Upload Image */}
            <div>
              <label className="block  mb-1">Upload Image</label>
              <div onClick={handleRef}>
                {!previewImage ? (
                  <div className="w-full border border-gray-300 px-3 py-4 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-100">
                    <Upload className="w-5 h-5 text-gray-500" />
                  </div>
                ) : (
                  <Image
                    src={previewImage}
                    alt="preview"
                    width={100}
                    height={100}
                    className="w-60 border border-gray-300 px-3 py-4 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-100 object-co"
                  />
                )}
              </div>

              <input
                ref={inputFileRef}
                type="file"
                onChange={handleChange}
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Publish Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400  text-black  py-3 rounded-md cursor-pointer"
            >
              Publish
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
