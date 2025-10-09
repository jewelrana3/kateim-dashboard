import Button from "@/components/settings/Button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit } from "lucide-react";
import React from "react";

export default function WorkEdit() {
  return (
    <Dialog>
      <DialogTrigger>
        <Edit className="w-4 h-4 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <div className="  rounded-md text-black">
          {/* <DialogTitle>Hero Section</DialogTitle> */}

          <div className="max-w-md mx-auto bg-white p-6 space-y-3">
            {/* Main Headline */}
            <div>
              <Label className="text-lg font-semibold">Headline</Label>
              <Input placeholder="How It Work" />
            </div>

            {/* Step 1 */}
            <div>
              <Label className="font-medium">1. Headline</Label>
              <Input placeholder="Post A Shift" className="mt-1" />
            </div>
            <div>
              <Label className="font-medium">Sub Headline</Label>
              <Input
                placeholder="Describe Your Job – It Takes Under 1 Minute"
                className="mt-1"
              />
            </div>

            {/* Step 2 */}
            <div>
              <Label className="font-medium">2. Headline</Label>
              <Input placeholder="Get Matched Instantly" className="mt-1" />
            </div>
            <div>
              <Label className="font-medium">Sub Headline</Label>
              <Input
                placeholder="Our AI Sends It To The Best Local Work"
                className="mt-1"
              />
            </div>

            {/* Step 3 */}
            <div>
              <Label className="font-medium">3. Headline</Label>
              <Input placeholder="Get Matched Instantly" className="mt-1" />
            </div>
            <div>
              <Label className="font-medium">Sub Headline</Label>
              <Input
                placeholder="Our AI Sends It To The Best Local Work"
                className="mt-1"
              />
            </div>

            {/* Publish Button */}
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              Publish
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
