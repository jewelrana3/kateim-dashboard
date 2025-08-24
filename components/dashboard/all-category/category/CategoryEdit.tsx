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

export function CategoryEdit({
  title,
  trigger,
}: {
  title?: string;
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Category Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
          </div>

          <section className="flex justify-between items-center mt-6">
            <DialogFooter className="mt-1">
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </section>
        </DialogContent>
      </form>
    </Dialog>
  );
}
