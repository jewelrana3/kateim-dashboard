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
import { useRef, useState, useEffect } from "react";
import { useCreateSection } from "@/lib/query/hooks/dashboard/pageContent";
import { useUpdateSection } from "@/lib/query/hooks/dashboard/pageContent";
import { getImageUrl } from "@/utils/image";
import { ISection, PAGE_SLUGS, SECTION_TYPES } from "@/types/others";

type HeroSectionModalProps = {
  mode: "create" | "edit";
  contents?: ISection;
};

export default function HeroSectionModal({
  mode,
  contents,
}: HeroSectionModalProps) {
  const isEdit = mode === "edit";

  const [title, setTitle] = useState(contents?.title || "");
  const [description, setDescription] = useState(contents?.description || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    contents?.images?.[0] ? getImageUrl(contents.images[0]) : null,
  );

  const inputRef = useRef<HTMLInputElement>(null);

  // API mutations
  const { mutate: createMutation, isPending: isCreatePending } =
    useCreateSection(SECTION_TYPES.HERO);
  const { mutate: updateMutation, isPending: isUpdatePending } =
    useUpdateSection(SECTION_TYPES.HERO);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImageFile(null);
    setImagePreview(null);
  };

  // Reset preview when initialData changes
  useEffect(() => {
    if (contents?.images?.[0]) {
      setImagePreview(getImageUrl(contents.images[0]));
    }
  }, [contents]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    const heroData = {
      pageSlug: PAGE_SLUGS.HOME,
      sectionType: SECTION_TYPES.HERO,
      title: title.trim(),
      description: description.trim(),
    };

    formData.append("data", JSON.stringify(heroData));

    if (imageFile) {
      formData.append("images", imageFile);
    }

    try {
      if (isEdit && contents) {
        updateMutation({
          id: contents._id,
          data: formData,
        });
        resetForm();
      } else {
        // await createMutation.mutateAsync(formData);
        createMutation({
          data: formData,
        });
        resetForm();
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

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {/* Headline */}
          <div>
            <label className="mb-2 block text-sm font-medium">Headline</label>
            <Input
              placeholder="Type your headline here..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>
            <Textarea
              placeholder="Type description..."
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
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

              {imagePreview ? (
                <div className="relative w-full h-full">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={handleClick}
                      className="px-3 py-2 bg-white text-black rounded-md text-sm flex items-center gap-2 hover:bg-gray-100"
                    >
                      <Upload className="w-4 h-4" />
                      Change Image
                    </button>
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
            {contents?.images?.[0] && !imageFile && (
              <p className="text-xs text-gray-500 mt-1">
                Current image will be kept if no new image is selected
              </p>
            )}
          </div>

          <DialogFooter>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isCreatePending || isUpdatePending}
            >
              {isCreatePending || isUpdatePending
                ? "Saving..."
                : isEdit
                  ? "Update"
                  : "Create"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
