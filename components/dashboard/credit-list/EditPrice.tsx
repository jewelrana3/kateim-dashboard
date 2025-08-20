import React from "react";
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

export default function EditPrice() {
  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-medium px-3 py-1 rounded-md text-black cursor-pointer">
              Edit Now
            </button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Price</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="purpose">Purpose</Label>
                <Input name="purpose" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="price">Price</Label>
                <Input type="number" name="price" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
      {/* modal  */}
    </>
  );
}
