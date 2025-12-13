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
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Track dialog state

  const generateId = useCallback(() => Date.now() + Math.random(), []);


  const initializeForm = useCallback(() => {
    if (category) {
      setCategoryName(category.title || "");
      setImageUrl(category.icon || "");
      setImageFile(null); // Reset image file when editing

      if (category.subCategories?.length > 0) {
        const fields = category.subCategories.map((subCat) => ({
          id: generateId(),
          value: subCat || "",
        }));
        setInputFields(fields);
      } else {
        setInputFields([{ id: generateId(), value: "" }]);
      }
    } else {
      // Reset form for new category
      resetForm();
    }
  }, [category, generateId]);


  const resetForm = useCallback(() => {
    setCategoryName("");
    setImageUrl("");
    setImageFile(null);
    setInputFields([{ id: generateId(), value: "" }]);

    // Reset file input
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
    resetForm();
    // setIsDialogOpen(false);
    if (onSuccess) {
      onSuccess();
    }
  }, [onSuccess, resetForm]);

  const handleAddInput = useCallback(() => {
    setInputFields((prev) => [...prev, { id: generateId(), value: "" }]);
  }, [generateId]);

  const handleInputChange = useCallback((id: number, value: string) => {
    setInputFields((prev) =>
      prev.map((field) => (field.id === id ? { ...field, value } : field))
    );
  }, []);

  const handleCategoryNameChange = useCallback((value: string) => {
    setCategoryName(value);
  }, []);

  const removeInput = useCallback((id: number) => {
    setInputFields((prev) => {
      if (prev.length > 1) {
        return prev.filter((field) => field.id !== id);
      }
      return prev;
    });
  }, []);

  // Memoized image upload handler
  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      setImageFile(file); // store real file

      const url = URL.createObjectURL(file); // Only for preview
      setImageUrl(url);
    },
    []
  );

  const handleClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  // Memoized form data preparation
  const prepareFormData = useCallback(() => {
    const subCategories = inputFields
      .map((field) => field.value.trim())
      .filter((value) => value !== "");

    const data = {
      title: categoryName.trim(),
      subCategories,
    };

    const formData = new FormData();


    formData.append("data", JSON.stringify(data));

    if (imageFile) {
      formData.append("images", imageFile);
    } else if (category?.icon && !imageFile) {

      formData.append("existingIcon", category.icon);
    }

    return formData;
  }, [categoryName, imageFile, inputFields, category?.icon]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = prepareFormData();

      if (category?._id) {
        updateCategory({ id: category._id, category: formData }, {
          onSuccess: handleSuccess,
        });
        return;
      }

      createCategory(formData, {
        onSuccess: handleSuccess,
      });
    },
    [prepareFormData, category?._id, createCategory, updateCategory]
  );

  // Memoize the dialog title
  const dialogTitle = useMemo(() => {
    return title || (category ? "Edit Category" : "Add Category");
  }, [title, category]);

  // Memoize the button text
  const buttonText = useMemo(() => {
    return category ? "Update Category" : "Add Category";
  }, [category]);

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
              <Label htmlFor="category-title">Category title</Label>
              <Input
                type="text"
                id="category-title"
                placeholder="Category title"
                value={categoryName}
                onChange={(e) => handleCategoryNameChange(e.target.value)}
                required
                disabled={isPending}
              />
            </div>

            {/* Upload Image */}
            <div>
              <Label className="block mb-1">Add Icon</Label>
              <div
                className="w-full h-20 border border-gray-300 px-3 py-4 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-100"
                onClick={handleClick}
              >
                <input
                  ref={inputRef}
                  id="upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                  disabled={isPending}
                />

                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Category icon"
                    className="w-40 h-20 object-cover rounded border"
                  />
                ) : (
                  <span className="flex items-center gap-2">
                    <Upload size={20} />
                    <span className="text-sm text-gray-500">Upload Icon</span>
                  </span>
                )}
              </div>
            </div>

            <div className="grid gap-3">
              <div className="flex justify-between items-center">
                <Label>Sub Categories</Label>
                <button
                  type="button"
                  onClick={handleAddInput}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Add subcategory"
                  disabled={isPending}
                >
                  <Plus size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {inputFields.map((field, index) => (
                  <div className="flex items-center gap-2" key={field.id}>
                    <Input
                      type="text"
                      placeholder={`Subcategory ${index + 1}`}
                      value={field.value}
                      onChange={(e) =>
                        handleInputChange(field.id, e.target.value)
                      }
                      className="flex-1"
                      disabled={isPending}
                    />
                    {inputFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeInput(field.id)}
                        className="p-1 rounded-full hover:bg-red-50 text-red-500 hover:text-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Remove subcategory"
                        disabled={isPending}
                      >
                        <Minus size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full mt-2" disabled={isPending}>
            {isPending ? "Processing..." : buttonText}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}