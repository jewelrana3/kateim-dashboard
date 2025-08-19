"use client";

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

type HeroSectionProps = {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function HowWorker({
  trigger,
  open,
  onOpenChange,
}: HeroSectionProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-2xl">
        <div className="bg-white p-6 rounded-md  w-full text-black">
          <DialogTitle>how it work(worker)</DialogTitle>
          <form className="space-y-4 mt-6">
            {/* Headline */}
            <div className="">
              <label className="" htmlFor="headline">
                HeadLines
              </label>
              <Input
                type="text"
                placeholder="Type your headline here..."
                className="w-full border border-gray-300 px-3 rounded-md outline-none mt-2"
              />
            </div>
            <div className="my-3">
              <label className="py-2" htmlFor="description">
                Description
              </label>
              <Input
                type="text"
                placeholder="Type your headline here..."
                className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none"
              />
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
