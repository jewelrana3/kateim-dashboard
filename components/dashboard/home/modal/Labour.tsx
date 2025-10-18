import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Minus, Plus } from "lucide-react";

export default function LabourModal() {
  const [inputs, setInputs] = useState([{ value: "" }]);

  const handleAddInput = () => {
    setInputs([...inputs, { value: "" }]);
  };

  const handleChange = (index: number, value: string) => {
    const updated = [...inputs];
    updated[index].value = value;
    setInputs(updated);
  };

  const handleSubmit = () => {
    console.log("Submitted data:", inputs);
    // submit logic here
  };

  const handleRemove = (index: number) => {
    const item = inputs.filter((_, i) => i !== index);
    setInputs(item);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Edit className="w-4 h-4 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            why instant labour
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-2">
          {/* header */}
          <div className="flex justify-between">
            <p className="font-medium">HeadLine</p>
            <div>
              <span
                onClick={handleAddInput}
                className="bg-cyan-700 hover:bg-cyan-800"
              >
                <Plus />
              </span>
            </div>
          </div>
          {inputs.map((values, index) => (
            <div className="flex items-center">
              <Input
                key={index}
                value={values.value}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder=""
              />
              <span onClick={() => handleRemove(index)}>
                <Minus className="text-red-500" />
              </span>
            </div>
          ))}

          <div className="flex justify-between pt-3">
            <Button
              variant="secondary"
              onClick={handleSubmit}
              className="bg-[#FFC823] text-[#333333] w-full"
            >
              Publish
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
