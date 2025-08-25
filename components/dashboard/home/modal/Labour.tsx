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
import { Edit } from "lucide-react";

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
          <p className="font-medium">HeadLine</p>
          {inputs.map((values, index) => (
            <Input
              key={index}
              value={values.value}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder=""
            />
          ))}

          <div className="flex justify-between pt-3">
            <Button
              variant="default"
              onClick={handleAddInput}
              className="bg-cyan-700 hover:bg-cyan-800"
            >
              Add Input
            </Button>
            <Button
              variant="secondary"
              onClick={handleSubmit}
              className="bg-black text-white hover:bg-zinc-800"
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
