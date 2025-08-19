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

import { Input } from "@/components/ui/input";

type HeroSectionProps = {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function Labour({
  trigger,
  open,
  onOpenChange,
}: HeroSectionProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-2xl">
        <div className="bg-white p-6 rounded-md  w-full text-black">
          <DialogTitle>why instant labour</DialogTitle>
          <form className="space-y-4 mt-6">
            {/* Headline */}
            <div>
              <div className="flex justify-between">
                <label className="mb-2 block" htmlFor="headline">
                  HeadLine
                </label>
                <span>+</span>
              </div>
              <Input
                type="text"
                placeholder="Type your headline here..."
                className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none"
              />
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
