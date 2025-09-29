"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import React, { useState } from "react";

// const features = [
//   "Unlimited Job Posts",
//   "15 Boosts ( Job Posting Boost )",
//   "Includes Instant Labour Access",
// ];

export default function SubscriptionModal({
  trigger,
  header,
}: {
  trigger: React.ReactNode;
  header?: string;
}) {
  const [inputValue, setInputValue] = useState<string[]>([""]);

  const handleInput = () => {
    setInputValue((prev) => [...prev, ""]);
  };

  const handleChange = (index: number, value: string) => {
    const updated = [...inputValue];
    updated[index] = value;
    setInputValue(updated);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="sm:max-w-xl  bg-white rounded-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-4">
            {header ? "Add Subscriber" : "Subscription Edit "}
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-3">
          <div>
            <Label htmlFor="name">Plan Name</Label>
            <Input placeholder="Plan Name" />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input placeholder="Price" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="Features">Features</Label>
              <span className="cursor-pointer" onClick={handleInput}>
                <Plus />
              </span>
            </div>
            {/* features */}
            <div>
              {inputValue.map((feature, index) => (
                <Input
                  key={index}
                  value={feature}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="my-2"
                  placeholder=""
                />
              ))}
            </div>
          </div>

          {/* Submit */}
          {/* <Button
            type="submit"
            className="w-full btn-design text-lg font-semibold rounded-md  duration-200"
          >
            Submit
          </Button> */}
        </form>
      </DialogContent>
    </Dialog>
  );
}
