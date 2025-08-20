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

const title = [
  { id: 1, value: "Hero Section" },
  { id: 2, value: "Who We Are" },
  { id: 3, value: "Our Mission" },
  { id: 4, value: "What We Do" },
  { id: 5, value: "Why Chose Instantlabour" },
  { id: 6, value: "Our Vision" },
];

export default function AboutUsEdit({ trigger }: { trigger: React.ReactNode }) {
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
        <div className="bg-white p-6 rounded-md  w-full text-black">
          <form className="space-y-4 mt-6">
            <label className="block mb-1">Title</label>
            <Select>
              <SelectTrigger className="w-full cursor-pointer">
                <SelectValue placeholder="Select Title" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {title.map((item) => (
                    <SelectItem key={item.id} value={item.value}>
                      {item.value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Headline */}
            <section className="flex justify-between items-center mt-7">
              <p> Description</p>
              <div>
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
                  Description
                </span>
              </div>
            </section>

            {/* Sub Headline */}
            <div>
              <Textarea
                placeholder="Type..."
                className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none"
              />
            </div>

            {/* Upload Image */}
            <div>
              <label className="block mb-1">Upload Image</label>
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
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
