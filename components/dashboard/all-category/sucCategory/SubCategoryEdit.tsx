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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const categories = [
  "Contraction",
  "Cleaning",
  "Event & Hospitality",
  "Security",
  "Removals",
  "Drivers",
  "Warehouse & Logistics",
  "Dj & Entertainment",
  "Landscaping & Ground Maintenance",
  "Handyman",
];

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
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Category Name</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {categories.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {title && (
              <>
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
              </>
            )}
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
