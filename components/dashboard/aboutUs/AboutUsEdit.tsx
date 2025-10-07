"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";

export default function AboutUsEdit({
  trigger,
}: {
  trigger?: React.ReactNode;
}) {
  const [status, setStatus] = useState("description");

  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files?.[0];
    if (files) {
      const url = URL.createObjectURL(files);
      setImageUrl(url);
    }
  };

  const handleClick = () => {
    if (inputRef?.current) {
      inputRef.current?.click();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="min-w-2xl">
        <div className="bg-white p-6 rounded-md  w-full text-gray-700">
          <form className="space-y-4 mt-6">
            <label className="block mb-1 font-medium">HeadLine</label>
            <Input
              type="text"
              placeholder="headline here..."
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none"
            />
            {/* Headline */}
            <section className="flex justify-between items-center mt-7">
              {/* <div>
                <span
                  className={`border border-gray-500 rounded px-3 py-1 cursor-pointer ${
                    status === "description"
                      ? "bg-blue-500 text-white border-none"
                      : ""
                  }`}
                  onClick={() => setStatus("description")}
                >
                  List
                </span>
                <span
                  className={`border border-gray-500 rounded px-3 py-1 ml-3 cursor-pointer ${
                    status === "status"
                      ? "bg-blue-500 text-white border-none"
                      : ""
                  }`}
                  onClick={() => setStatus("status")}
                >
                  Text
                </span>
              </div> */}
            </section>

            {/* Sub Headline */}
            <label className="font-medium">Sub Body Text</label>
            <div>
              <Textarea
                placeholder="Type..."
                className="w-[600px] border border-gray-300 px-3 py-2 rounded-md outline-none"
              />
            </div>

            {/* Upload Image */}
            <div>
              <label className="block mb-1 font-medium">Upload Image</label>
              <div
                className="w-full h-40 border border-gray-300 px-3 py-4 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-100"
                onClick={handleClick}
              >
                <section>
                  <input
                    ref={inputRef}
                    id="upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </section>

                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded border"
                  />
                ) : (
                  <span>Upload Image</span>
                )}
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Publish</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
