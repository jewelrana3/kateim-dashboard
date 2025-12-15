"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IFaq } from "@/types/others";
import { useCreateFaq, useUpdateFaq } from "@/lib/query/hooks/dashboard/public";

interface FaqEditProps {
  title: string;
  trigger: React.ReactNode;
  defaultValues?: {
    id?: string;
    question: string;
    answer: string;
  };
}

export default function FaqEdit({
  trigger,
  title,
  defaultValues,
}: FaqEditProps) {
  const isEdit = Boolean(defaultValues?.id);

  const [question, setQuestion] = useState(defaultValues?.question || "");
  const [answer, setAnswer] = useState(defaultValues?.answer || "");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { mutate: updateFaq } = useUpdateFaq(defaultValues?.id || "");
  const { mutate: createFaq } = useCreateFaq();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEdit) {
        updateFaq({
          _id: defaultValues?.id || "",
          question,
          answer,
        }, {
          onSuccess: () => {
            setOpen(false);
          }
        });
      } else {
        createFaq({
          question,
          answer,
        }, {
          onSuccess: () => {
            setOpen(false);
            setQuestion("");
            setAnswer("");
          }
        });
      }
    } catch (error) {
      console.error("FAQ submit failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <DialogTitle>{title}</DialogTitle>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {/* Question */}
          <div>
            <label className="block mb-1">Question</label>
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type question..."
            />
          </div>

          {/* Answer */}
          <div>
            <label className="block mb-1">Answer</label>
            <Input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type answer..."
            />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={loading}
              className="bg-[#FFC823] text-black"
            >
              {loading ? "Saving..." : isEdit ? "Update FAQ" : "Create FAQ"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
