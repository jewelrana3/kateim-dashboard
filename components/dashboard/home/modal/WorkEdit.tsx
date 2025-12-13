"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit, Plus } from "lucide-react";
import React, { useState } from "react";


type WorkEditProps = {
  mode: "create" | "edit";
  initialData?: {
    headline: string;
    steps: Array<{
      id?: number;
      title: string;
      subTitle: string;
    }>;
  };
};

export default function WorkEdit({ mode = "create", initialData }: WorkEditProps) {
  const isEdit = mode === "edit";
  
  // Initialize form data with initialData or defaults
  const [formData, setFormData] = useState({
    headline: initialData?.headline || "How It Works(Employee)",
    steps: initialData?.steps || [
      { id: 1, title: "", subTitle: "" },
      { id: 2, title: "", subTitle: "" },
      { id: 3, title: "", subTitle: "" },
    ]
  });

  // API mutations
  // const createMutation = useCreatePageContent();
  // const updateMutation = useUpdatePageContent();

  const handleInputChange = (
    index: number,
    field: 'title' | 'subTitle',
    value: string
  ) => {
    const updatedSteps = [...formData.steps];
    updatedSteps[index] = {
      ...updatedSteps[index],
      [field]: value
    };
    setFormData({ ...formData, steps: updatedSteps });
  };

  const handleHeadlineChange = (value: string) => {
    setFormData({ ...formData, headline: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload = {
      slug: "how-it-works-employee",
      headline: formData.headline,
      steps: formData.steps.map((step, index) => ({
        ...step,
        id: step.id || index + 1
      }))
    };

    try {
      if (isEdit && initialData) {

      } else {

      }
      
      // Close dialog on success (you might need to handle dialog state)
      // You can add a success toast here
    } catch (error) {
      console.error("Failed to save:", error);
      // Handle error - show error toast
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isEdit ? (
          <Edit className="w-4 h-4 cursor-pointer" />
        ) : (
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Create How It Works
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogTitle>
          {isEdit ? "Edit How It Works" : "Create How It Works"}
        </DialogTitle>

        <form onSubmit={handleSubmit} className="rounded-md text-black">
          <div className="max-w-md mx-auto bg-white p-6 space-y-6">
            {/* Main Headline */}
            <div>
              <Label className="text-lg font-semibold">Headline</Label>
              <Input 
                placeholder="How It Works(Employee)" 
                value={formData.headline}
                onChange={(e) => handleHeadlineChange(e.target.value)}
                className="mt-2"
              />
            </div>

            {/* Step 1 */}
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-700">Step 1</h3>
              <div>
                <Label className="font-medium">Headline</Label>
                <Input 
                  placeholder="Post A Shift" 
                  value={formData.steps[0]?.title || ""}
                  onChange={(e) => handleInputChange(0, 'title', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="font-medium">Sub Headline</Label>
                <Input
                  placeholder="Describe Your Job – It Takes Under 1 Minute"
                  value={formData.steps[0]?.subTitle || ""}
                  onChange={(e) => handleInputChange(0, 'subTitle', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-700">Step 2</h3>
              <div>
                <Label className="font-medium">Headline</Label>
                <Input 
                  placeholder="Get Matched Instantly" 
                  value={formData.steps[1]?.title || ""}
                  onChange={(e) => handleInputChange(1, 'title', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="font-medium">Sub Headline</Label>
                <Input
                  placeholder="Our AI Sends It To The Best Local Work"
                  value={formData.steps[1]?.subTitle || ""}
                  onChange={(e) => handleInputChange(1, 'subTitle', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-700">Step 3</h3>
              <div>
                <Label className="font-medium">Headline</Label>
                <Input 
                  placeholder="Get Paid" 
                  value={formData.steps[2]?.title || ""}
                  onChange={(e) => handleInputChange(2, 'title', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="font-medium">Sub Headline</Label>
                <Input
                  placeholder="Your worker confirms and shows up. Done."
                  value={formData.steps[2]?.subTitle || ""}
                  onChange={(e) => handleInputChange(2, 'subTitle', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
              // disabled={isSubmitting}
            >
              {/* {isSubmitting 
                ? "Saving..." 
                : isEdit ? "Update" : "Publish"} */}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}