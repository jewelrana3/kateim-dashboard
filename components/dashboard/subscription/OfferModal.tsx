import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function OfferModal({
  title,
  trigger,
}: {
  title?: string;
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <h1 className="text-2xl font-medium text-gray-700">
          {title ? "Edit Offer" : "Add Offer"}
        </h1>
        <div>
          <Label>Percentage</Label>
          <Input placeholder="Type.." />
        </div>
        <div>
          <Label>Body Text</Label>
          <Input placeholder="Type.." />
        </div>
      </DialogContent>
    </Dialog>
  );
}
