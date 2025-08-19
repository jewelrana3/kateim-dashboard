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
import { useState } from "react";
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
  const [status, setStatus] = useState("description");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* <DialogTrigger asChild>{trigger}</DialogTrigger> */}

      <DialogContent className="min-w-2xl">
        <div className="bg-white p-6 rounded-md  w-full text-black">
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
            {/* <section className="flex justify-between items-center mt-7">
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
            </section> */}

            {/* Sub Headline */}
            <div>
              <label className="mb-2" htmlFor="description">
                description
              </label>
              <Textarea
                placeholder="Type..."
                className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none"
              />
            </div>

            {/* Upload Image */}
            <div>
              <label className="block mb-1">Upload Image</label>
              <div className="w-full border border-gray-300 px-3 py-4 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-100">
                <Upload className="w-5 h-5 text-gray-500" />
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
