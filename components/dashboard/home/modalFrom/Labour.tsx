"use client";

import { Plus, Upload } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { useState } from "react";

type HeroSectionProps = {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type InputField = {
  value: string;
};

export default function Labour({
  trigger,
  open,
  onOpenChange,
}: HeroSectionProps) {
  const [inputFields, setInputFields] = useState<InputField[]>([{ value: "" }]);

  const handleAddInput = (event: any) => {
    event.preventDefault();
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleInputChange = (
    inedx: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputs = [...inputFields];
    newInputs[inedx].value = event.target.value;
    setInputFields(newInputs);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputFields);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-2xl">
        <div className="bg-white p-6 rounded-md  w-full text-black">
          <DialogTitle>why instant labour</DialogTitle>
          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            {/* Headline */}
            <div>
              <div className="flex justify-between">
                <label className="mb-2 block" htmlFor="headline">
                  HeadLine
                </label>
                {/* <span className="text-xl" onClick={handleInputAdd}>
                  <Plus />
                </span> */}
              </div>
              <div>
                {inputFields.map((field, index) => (
                  <Input
                    className="my-2"
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
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
