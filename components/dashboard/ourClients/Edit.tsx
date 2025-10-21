"use client";
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
import { Edit } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export function EditClientSection() {
  const [previewImage, setPreviewImage] = useState<string | null>(
    "https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png"
  );
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef?.current) {
      inputRef.current?.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setFile(file);
    }
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="cursor-pointer">
            <Edit />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Clients</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input name="title" placeholder="title here" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input name="description" placeholder="description here" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="rating">Rating</Label>
              <Input type="number" name="rating" placeholder="rating here" />
            </div>

            <Label htmlFor="Image">Upload Picture</Label>
            <div onClick={handleClick}>
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="upload image"
                  width={200}
                  height={200}
                />
              ) : (
                <div className="w-[200px] h-[200px] bg-muted flex items-center justify-center text-sm">
                  No image
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={inputRef}
                className="hidden"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
