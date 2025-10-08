"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Minus, Plus, Upload } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

// const categories = [
//   "Contraction",
//   "Cleaning",
//   "Event & Hospitality",
//   "Security",
//   "Removals",
//   "Drivers",
//   "Warehouse & Logistics",
//   "Dj & Entertainment",
//   "Landscaping & Ground Maintenance",
//   "Handyman",
// ];

type InputField = {
  value: string;
};

export function SubCategoryEdit({
  title,
  trigger,
}: {
  title?: string;
  trigger: React.ReactNode;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFields, setInputFields] = useState<InputField[]>([{ value: "" }]);
  const [icon, setIcon] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

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

  const removeInput = (index: number) => {
    const filteredFields = inputFields.filter((_, i) => i !== index);
    setInputFields(filteredFields);
  };

  // image upload

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files?.[0];
    if (files) {
      const url = URL.createObjectURL(files);
      setImageUrl(url);
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
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Category Name</Label>
              <Input type="text" placeholder="Category Name" />
            </div>

            {/* Upload Image */}
            <div>
              <label className="block mb-1">Add Icon</label>
              <div
                className="w-full h-20 border border-gray-300 px-3 py-4 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-100"
                onClick={handleClick}
              >
                <section>
                  <input
                    ref={inputRef}
                    id="upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </section>

                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-40 h-20 object-cover rounded border"
                  />
                ) : (
                  <span>
                    <Upload />
                  </span>
                )}
              </div>
            </div>

            <div className="grid gap-3">
              <section className="flex justify-between">
                <Label htmlFor="name-1">Sub Category </Label>
                <span onClick={handleAddInput}>
                  <Plus />
                </span>
              </section>
              <section className="flex flex-col gap-2">
                {inputFields.map((field, index) => (
                  <section className="flex items-center gap-2" key={index}>
                    {/* Minus icon on the left */}

                    {/* Input on the right */}
                    <Input
                      type="text"
                      value={field.value}
                      onChange={(e) => handleInputChange(index, e)}
                      className="flex-1"
                    />

                    <span
                      onClick={() => removeInput(index)}
                      className="cursor-pointer text-red-500 hover:text-red-700"
                    >
                      <Minus />
                    </span>
                  </section>
                ))}
              </section>
            </div>
          </div>

          <section className="flex justify-between items-center mt-6">
            <Button className="!w-full" type="submit">
              Confirm
            </Button>
          </section>
        </DialogContent>
      </form>
    </Dialog>
  );
}
