"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Edit, Plus, Upload } from "lucide-react";
import { useRef, useState } from "react";

type HeroSectionModalProps = {
  mode: "create" | "edit";
};

export default function HeroSectionModal({ mode }: HeroSectionModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const isEdit = mode === "edit";

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isEdit ? (
          <button 
            className="bg-blue-600 h-8 w-8 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            aria-label="Edit hero section"
          >
            <Edit className="w-4 h-4" />
          </button>
        ) : (
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Create Hero Section
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogTitle>
          {isEdit ? "Edit Hero Section" : "Create Hero Section"}
        </DialogTitle>

        <form className="space-y-4 mt-6">
          {/* Headline */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Headline
            </label>
            <Input placeholder="Type your headline here..." />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>
            <Textarea 
              placeholder="Type description..." 
              rows={4}
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Upload Image
            </label>
            <div
              className="w-full h-40 border-2 border-dashed border-gray-300 flex flex-col justify-center items-center rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={handleClick}
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />

              {imageUrl ? (
                <div className="relative w-full h-full">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button 
                      type="button" 
                      variant="secondary" 
                      size="sm"
                      className="gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Change Image
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-gray-500">
                  <Upload className="w-8 h-8" />
                  <span>Click to upload image</span>
                  <span className="text-xs text-gray-400">
                    Recommended: 300x300px
                  </span>
                </div>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="gap-2">
              {isEdit ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}