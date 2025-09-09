import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function EditModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-100 font-medium mt-12 cursor-pointer">
            Edit Now
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Offer</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input name="title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="partencne">Partencne</Label>
              <Input name="partencne" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
