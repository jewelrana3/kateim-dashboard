import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddPromotional({
  trigger,
  title,
}: {
  title: string;
  trigger: React.ReactNode;
}) {
  return (
    <>
      <Dialog>
        <form>
          <div className="flex justify-between">
            <h2 className="text-sm font-medium"></h2>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
          </div>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
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
