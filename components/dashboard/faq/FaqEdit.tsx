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
import { Input } from "@/components/ui/input";

export default function FaqEdit({
  trigger,
  title,
}: {
  trigger: React.ReactNode;
  title: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <div className="bg-white rounded-md  w-full min-w-md text-black">
          <form className="space-y-4 mt-6">
            {/* Headline */}
            <div>
              <label className="block mb-1">Question</label>
              <Input
                type="text"
                placeholder="Type..."
                className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none"
              />
            </div>

            {/* Sub Headline */}
            <div>
              <label className="block mb-1">Answer</label>
              <Input
                type="text"
                placeholder="Type..."
                className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none"
              />
            </div>

            <DialogFooter>
              <Button className="bg-[#FFC823] text-black" type="submit">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
