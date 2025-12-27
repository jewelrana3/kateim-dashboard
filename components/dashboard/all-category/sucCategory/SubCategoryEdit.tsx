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
import {
  useCreateCategory,
  useUpdateCategory,
} from "@/lib/query/hooks/dashboard/category";
import { ICategory } from "@/types/others";
import { Minus, Plus, Upload } from "lucide-react";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import Swal from "sweetalert2";

type InputField = {
  id: number;
  value: string;
};

export function SubCategoryEdit({
  category,
  title,
  trigger,
  onSuccess,
}: {
  category?: ICategory;
  title?: string;
  trigger: React.ReactNode;
  onSuccess?: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputFields, setInputFields] = useState<InputField[]>([
    { id: Date.now(), value: "" },
  ]);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [categoryName, setCategoryName] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const generateId = useCallback(() => Date.now() + Math.random(), []);

  const initializeForm = useCallback(() => {
    if (category) {
      setCategoryName(category.title || "");
      setImageUrl(category.icon || "");
      setImageFile(null);

      if (category.subCategories?.length > 0) {
        setInputFields(
          category.subCategories.map((sub) => ({
            id: generateId(),
            value: sub,
          }))
        );
      } else {
        setInputFields([{ id: generateId(), value: "" }]);
      }
    } else {
      resetForm();
    }
  }, [category, generateId]);

  const resetForm = useCallback(() => {
    setCategoryName("");
    setImageUrl("");
    setImageFile(null);
    setInputFields([{ id: generateId(), value: "" }]);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [generateId]);

  useEffect(() => {
    if (isDialogOpen) {
      initializeForm();
    }
  }, [initializeForm, isDialogOpen]);

  const { mutate: updateCategory, isPending: isUpdating } = useUpdateCategory();
  const { mutate: createCategory, isPending: isCreating } = useCreateCategory();

  const handleSuccess = useCallback(() => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: category
        ? "Category updated successfully"
        : "Category created successfully",
      timer: 2000,
      showConfirmButton: false,
    });

    resetForm();
    setIsDialogOpen(false);

    if (onSuccess) onSuccess();
  }, [category, onSuccess, resetForm]);

  const handleError = useCallback((error: any) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text:
        error?.response?.data?.message ||
        "Something went wrong. Please try again.",
    });
  }, []);

  const handleAddInput = useCallback(() => {
    setInputFields((prev) => [...prev, { id: generateId(), value: "" }]);
  }, [generateId]);

  const handleInputChange = useCallback((id: number, value: string) => {
    setInputFields((prev) =>
      prev.map((f) => (f.id === id ? { ...f, value } : f))
    );
  }, []);

  const removeInput = useCallback((id: number) => {
    setInputFields((prev) =>
      prev.length > 1 ? prev.filter((f) => f.id !== id) : prev
    );
  }, []);

  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    },
    []
  );

  const prepareFormData = useCallback(() => {
    const subCategories = inputFields
      .map((f) => f.value.trim())
      .filter(Boolean);

    const data = {
      title: categoryName.trim(),
      subCategories,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (imageFile) {
      formData.append("images", imageFile);
    } else if (category?.icon) {
      formData.append("existingIcon", category.icon);
    }

    return formData;
  }, [categoryName, inputFields, imageFile, category?.icon]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = prepareFormData();

      if (category?._id) {
        updateCategory(
          { id: category._id, category: formData },
          {
            onSuccess: handleSuccess,
            onError: handleError,
          }
        );
        return;
      }

      createCategory(formData, {
        onSuccess: handleSuccess,
        onError: handleError,
      });
    },
    [
      prepareFormData,
      category?._id,
      updateCategory,
      createCategory,
      handleSuccess,
      handleError,
    ]
  );

  const dialogTitle = useMemo(
    () => title || (category ? "Edit Category" : "Add Category"),
    [title, category]
  );

  const buttonText = category ? "Update Category" : "Add Category";
  const isPending = isUpdating || isCreating;

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-3">
              <Label>Category title</Label>
              <Input
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
                disabled={isPending}
              />
            </div>

            <div>
              <Label>Add Icon</Label>
              <div
                className="w-full h-20 border px-3 py-4 flex justify-center items-center rounded-md cursor-pointer"
                onClick={() => inputRef.current?.click()}
              >
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                  disabled={isPending}
                />

                {imageUrl ? (
                  <img
                    src={
                      imageUrl.startsWith("blob:")
                        ? imageUrl
                        : imageUrl.startsWith("http")
                        ? imageUrl
                        : `${process.env.NEXT_PUBLIC_IMAGE_URL}${imageUrl}`
                    }
                    className="w-40 h-20 object-cover rounded border"
                  />
                ) : (
                  <span className="flex gap-2">
                    <Upload size={20} />
                    <span className="text-sm text-gray-500">Upload Icon</span>
                  </span>
                )}
              </div>
            </div>

            <div className="grid gap-3">
              <div className="flex justify-between">
                <Label>Sub Categories</Label>
                <button
                  type="button"
                  onClick={handleAddInput}
                  disabled={isPending}
                >
                  <Plus size={20} />
                </button>
              </div>

              {inputFields.map((f, i) => (
                <div key={f.id} className="flex gap-2">
                  <Input
                    value={f.value}
                    onChange={(e) => handleInputChange(f.id, e.target.value)}
                    disabled={isPending}
                  />
                  {inputFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeInput(f.id)}
                      disabled={isPending}
                    >
                      <Minus size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Processing..." : buttonText}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
