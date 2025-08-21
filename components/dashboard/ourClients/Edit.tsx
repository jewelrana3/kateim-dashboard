import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit } from "lucide-react";

export function EditClientSection() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="cursor-pointer">
            <Edit />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Clients</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input name="title" placeholder="title here" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input name="description" placeholder="description here" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="rating">Rating</Label>
              <Input type="number" name="rating" placeholder="rating here" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
