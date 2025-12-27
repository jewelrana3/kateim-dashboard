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
import {
  useCreateSection,
  useUpdateSection,
} from "@/lib/query/hooks/dashboard/pageContent";
import { ISection, SECTION_TYPES } from "@/types/others";
import { Edit, Plus } from "lucide-react";
import React, { useState } from "react";

type WorkEditProps = {
  mode: "create" | "edit";
  section?: ISection; // Optional for create mode
  pageSlug: string; // Add pageSlug to know which page this belongs to
  sectionType?: string; // Add section type
};

type Step = {
  id: number;
  title: string;
  subTitle: string;
};

export default function WorkEdit({
  mode = "create",
  section,
  pageSlug,
  sectionType = SECTION_TYPES.HOW_IT_WORKS,
}: WorkEditProps) {
  const isEdit = mode === "edit";

  // Extract content from section or use defaults
  const sectionContent = section?.content || { steps: [] };
  const stepsData = sectionContent.steps || [];

  // Initialize form data
  const [formData, setFormData] = useState({
    headline: section?.title || "How It Works(worker)",
    steps:
      stepsData.length > 0
        ? stepsData
        : ([
            { id: 1, title: "", subTitle: "" },
            { id: 2, title: "", subTitle: "" },
            { id: 3, title: "", subTitle: "" },
          ] as Step[]),
  });

  // API mutations for sections
  const { mutateAsync: createMutation, isPending: createIsPending } =
    useCreateSection(sectionType);
  const { mutateAsync: updateMutation, isPending: updateIsPending } =
    useUpdateSection(sectionType);

  const handleInputChange = (
    index: number,
    field: "title" | "subTitle",
    value: string
  ) => {
    const updatedSteps = [...formData.steps];
    updatedSteps[index] = {
      ...updatedSteps[index],
      [field]: value,
    };
    setFormData({ ...formData, steps: updatedSteps });
  };

  const handleHeadlineChange = (value: string) => {
    setFormData({ ...formData, headline: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare content object according to ISection interface
    const content = {
      steps: formData.steps.map((step: Step, index: number) => ({
        id: step.id || index + 1,
        title: step.title,
        subTitle: step.subTitle,
      })),
    };

    const payload = {
      pageSlug: pageSlug,
      sectionType: sectionType,
      title: formData.headline,
      content: content,
      order: section?.order || 0,
      description: "",
    };

    const formDataPayload = new FormData();
    formDataPayload.append("data", JSON.stringify(payload));

    try {
      if (isEdit && section) {
        // Update existing section
        await updateMutation({
          id: section._id,
          data: formDataPayload,
        });
      } else {
        // Create new section
        await createMutation({
          data: formDataPayload,
        });
      }
    } catch (error) {
      console.error("Failed to save:", error);
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
      <DialogContent className="max-w-2xl h-[600px] overflow-y-auto">
        <DialogTitle>
          {isEdit ? "Edit How It Works" : "Create How It Works"}
        </DialogTitle>

        <form onSubmit={handleSubmit} className="rounded-md text-black">
          {/* <div className="max-w-md mx-auto bg-white p-6 space-y-6 "> */}
          {/* Main Headline */}
          <div>
            <Label className="text-lg font-semibold">Headline</Label>
            <Input
              placeholder="How It Works(Worker)"
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
                onChange={(e) => handleInputChange(0, "title", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="font-medium">Sub Headline</Label>
              <Input
                placeholder="Describe Your Job – It Takes Under 1 Minute"
                value={formData.steps[0]?.subTitle || ""}
                onChange={(e) =>
                  handleInputChange(0, "subTitle", e.target.value)
                }
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
                onChange={(e) => handleInputChange(1, "title", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="font-medium">Sub Headline</Label>
              <Input
                placeholder="Our AI Sends It To The Best Local Work"
                value={formData.steps[1]?.subTitle || ""}
                onChange={(e) =>
                  handleInputChange(1, "subTitle", e.target.value)
                }
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
                onChange={(e) => handleInputChange(2, "title", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="font-medium">Sub Headline</Label>
              <Input
                placeholder="Your worker confirms and shows up. Done."
                value={formData.steps[2]?.subTitle || ""}
                onChange={(e) =>
                  handleInputChange(2, "subTitle", e.target.value)
                }
                className="mt-1"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={updateIsPending}
          >
            {updateIsPending ? "Saving..." : isEdit ? "Update" : "Publish"}
          </button>
          {/* </div> */}
        </form>
      </DialogContent>
    </Dialog>
  );
}
