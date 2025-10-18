import Button from "@/components/settings/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";
import React from "react";

export default function JobResponseEdit() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Edit className="w-4 h-4 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <h1 className="text-2xl font-medium">Edit Jobs Response</h1>
        <Input />

        {/* Publish Button */}
        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
          Publish
        </Button>
      </DialogContent>
    </Dialog>
  );
}
