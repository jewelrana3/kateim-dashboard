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
import Image from "next/image";
import { useRef, useState } from "react";

type InputField = {
  value: string;
};

export function CategoryEdit({
  title,
  trigger,
}: {
  title?: boolean;
  trigger: React.ReactNode;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFields, setInputFields] = useState<InputField[]>([{ value: "" }]);
  const [icon, setIcon] = useState<string | null>(null);

  const handleAddInput = () => {
    const newInput = [...inputFields];
    setInputFields([...newInput, { value: "" }]);
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputValues = [...inputFields];
    newInputValues[index].value = event.target.value;
    setInputFields(newInputValues);
  };

  const handleUploadIcon = (event: React.ChangeEvent<HTMLInputElement>) => {
    const iconsFiles = event?.target.files?.[0];
    if (iconsFiles) {
      const iconUrl = URL.createObjectURL(iconsFiles);
      setIcon(iconUrl);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {title ? "Add Category" : "Edit Category"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Category Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            {/* Upload Image */}
            {/* <div>
              <label className="block mb-1">Add Icon</label>
              <div
                className="w-full h-20 border border-gray-300 px-3 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-100"
                onClick={handleClick}
              >
                <section>
                  <input
                    ref={inputRef}
                    id="upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleUploadIcon}
                  />
                </section>

                {icon ? (
                  <img
                    src={icon}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded border"
                  />
                ) : (
                  <span>Upload Icon</span>
                )}
              </div>
            </div> */}

            <div className="grid gap-3">
              <Label htmlFor="username-1">Sub Category</Label>
              {inputFields.map((field, index) => (
                <Input
                  className=""
                  key={index} // Use a more stable key if possible (e.g., unique ID)
                  type="text"
                  value={field.value}
                  onChange={(e) => handleInputChange(index, e)}
                />
              ))}
            </div>
          </div>

          <section className="flex justify-between items-center mt-6">
            <button
              className="bg-cyan-700 py-1 px-3 cursor-pointer text-white rounded"
              onClick={handleAddInput}
            >
              Add Input
            </button>
            <DialogFooter className="mt-1">
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </section>
        </DialogContent>
      </form>
    </Dialog>
  );
}
