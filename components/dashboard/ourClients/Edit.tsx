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
import { useUpdateClientReview } from "@/lib/query/hooks/dashboard/pageContent";
import { IClientreview } from "@/types/others";
import { Edit } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { getImageUrl } from "@/utils/image";

export function EditClientSection({ clientReview }: { clientReview: IClientreview }) {
  const [previewImage, setPreviewImage] = useState<string | null>(
    getImageUrl(clientReview.image)
  );
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate: updateClientReview } = useUpdateClientReview(clientReview._id);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const payload: Partial<IClientreview> = {
      name: formData.get("name") as string,
      designation: formData.get("designation") as string,
      description: formData.get("description") as string,
      rating: Number(formData.get("rating")),
    };

    // Append JSON payload as "data"
    formData.append("data", JSON.stringify(payload));

    // Append image file if selected
    if (file) {
      formData.append("images", file);
    }

    // Call mutation
    updateClientReview({ data: formData });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="cursor-pointer">
          <Edit />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Clients</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input name="name" defaultValue={clientReview.name} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="designation">Designation</Label>
              <Input name="designation" defaultValue={clientReview.designation} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input name="description" defaultValue={clientReview.description} />
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
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
