"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Edit, Minus, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PAGE_SLUGS, SECTION_TYPES } from "@/types/others";
import {
  useCreateSection,
  useUpdateSection,
} from "@/lib/query/hooks/dashboard/pageContent";

type LabourModalProps = {
  mode: "create" | "edit";
  content?: any;
};

export default function LabourModal({
  mode = "create",
  content,
}: LabourModalProps) {
  const isEdit = mode === "edit";

  // Initialize form data with initialData or defaults
  const [headline, setHeadline] = useState(
    content?.title || "Why Instant Labour?"
  );
  const [texts, setTexts] = useState<string[]>(
    content?.content?.texts || ["", "", "", "", "", ""]
  );

  // API mutations
  const { mutateAsync: createMutation, isPending: createPending } =
    useCreateSection(SECTION_TYPES.WHY_US);
  const { mutateAsync: updateMutation, isPending: updatePending } =
    useUpdateSection(SECTION_TYPES.WHY_US);

  const handleAddInput = () => {
    setTexts([...texts, ""]);
  };

  const handleTextChange = (index: number, value: string) => {
    const updated = [...texts];
    updated[index] = value;
    setTexts(updated);
  };

  const handleRemove = (index: number) => {
    if (texts.length > 1) {
      const filtered = texts.filter((_, i) => i !== index);
      setTexts(filtered);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      pageSlug: PAGE_SLUGS.HOME,
      sectionType: SECTION_TYPES.WHY_US,
      title: headline,
      content: {
        texts: texts.filter((text) => text.trim() !== ""), 
      },
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));

    try {
      if (isEdit && content) {
        await updateMutation({
          id: content._id,
          data: formData
        });
      } else {
        await createMutation({
          data: formData
        });
      }

      // Close dialog on success
      // You might need to handle dialog state here
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
          <button className="px-4 py-2 bg-yellow-400 text-black rounded-md  transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Section
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            {isEdit ? "Edit Why Instant Labour" : "Create Why Instant Labour"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Headline */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700">Headline</label>
            <Input
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Enter headline"
              className="w-full"
            />
          </div>

          {/* Points/Bullets */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="font-medium text-gray-700">Bullet Points</label>
              <button
                type="button"
                onClick={handleAddInput}
                className="p-1 bg-cyan-700 text-white rounded-md hover:bg-cyan-800 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {texts.map((text, index) => (
              <div className="flex items-center gap-2" key={index}>
                <div className="bg-teal-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <Input
                  value={text}
                  onChange={(e) => handleTextChange(index, e.target.value)}
                  placeholder={`Point ${index + 1}`}
                  className="flex-1"
                />
                {texts.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemove(index)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <Button
              type="submit"
              className="w-full bg-yellow-400  text-black font-semibold py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              // disabled={createMutation.isPending || updateMutation.isPending}
            >
              {/* {createMutation.isPending || updateMutation.isPending 
                ? "Saving..." 
                : isEdit ? "Update" : "Publish"} */}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
