"use client";

import { Upload } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
type HeroSectionProps = {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function HeroSection({
  trigger,
  open,
  onOpenChange,
}: HeroSectionProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [status, setStatus] = useState("description");

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <div className="  rounded-md text-black">
          <DialogTitle>Hero Section</DialogTitle>
          <form className="space-y-4 mt-6">
            <div>
              <label className="mb-2" htmlFor="headline">
                HeadLine
              </label>
              <Input
                type="text"
                placeholder="Type your headline here..."
                className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none"
              />
            </div>

            {/* Sub Headline */}
            <div>
              <label className="mb-2" htmlFor="description">
                description
              </label>
              <Textarea
                placeholder="Type..."
                className="w-[460px] border border-gray-300 px-3 py-2 rounded-md outline-none"
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
