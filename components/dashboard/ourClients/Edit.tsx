"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useCreateClientReview,
  useUpdateClientReview,
} from "@/lib/query/hooks/dashboard/pageContent";
import {
  IClientreview,
  ISection,
  ISectionType,
  SECTION_TYPES,
} from "@/types/others";
import { Edit, Plus } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { getImageUrl } from "@/utils/image";

type AboutUsEditProps = {
  trigger?: React.ReactNode;
  mode?: "create" | "edit";
  section?: ISection;
  clientReview: IClientreview;
  sectionType: ISectionType;
};

export function EditClientSection({
  mode,
  clientReview,
  sectionType,
}: AboutUsEditProps) {
  const isEdit = mode === "edit";
  const [previewImage, setPreviewImage] = useState<string | null>(
    getImageUrl(clientReview.image),
  );
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const { mutate: updateClientReview } = useUpdateClientReview(sectionType);
  const { mutate: createMutation } = useCreateClientReview(sectionType);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewImage(url);
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload: Partial<IClientreview> = {
      name: formData.get("name") as string,
      designation: formData.get("designation") as string,
      description: formData.get("description") as string,
      rating: Number(formData.get("rating")),
    };

    formData.append("data", JSON.stringify(payload));

    if (file) {
      formData.append("images[]", file);
    }

    console.log("form data", formData);

    try {
      if (isEdit && clientReview._id) {
        updateClientReview({
          id: clientReview._id,
          data: formData,
        });
      } else {
        const res = createMutation({ data: formData });
        console.log("res", res);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            Create Client Review
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] h-[600px] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {" "}
              {isEdit ? "Edit Client Review" : "Create Client Review"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 mt-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input name="name" defaultValue={clientReview.name} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="designation">Designation</Label>
              <Input
                name="designation"
                defaultValue={clientReview.designation}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input
                name="description"
                defaultValue={clientReview.description}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="rating">Rating</Label>
              <Input
                type="number"
                name="rating"
                defaultValue={clientReview.rating}
              />
            </div>

            <Label htmlFor="image">Upload Picture</Label>
            <div onClick={handleClick} className="cursor-pointer">
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="upload image"
                  width={200}
                  height={200}
                />
              ) : (
                <div className="w-[200px] h-[200px] bg-muted flex items-center justify-center text-sm">
                  No image
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={inputRef}
                className="hidden"
              />
            </div>
          </div>

          <DialogFooter>
            <Button className="mt-7" type="submit">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
