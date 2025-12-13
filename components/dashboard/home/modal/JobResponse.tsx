"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreateSection, useUpdateSection } from "@/lib/query/hooks/dashboard/pageContent";
import { PAGE_SLUGS, SECTION_TYPES } from "@/types/others";
import { Edit, Plus } from "lucide-react";
import React, { useState } from "react";


type JobResponseEditProps = {
  mode: "create" | "edit";
  initialData?: {
    _id: string;
    text: string;
  };
};

export default function JobResponseEdit({ mode = "create", initialData }: JobResponseEditProps) {
  const isEdit = mode === "edit";
  
  const [text, setText] = useState(initialData?.text);
  
  // API mutations
    const {mutateAsync: createMutation, isPending: createIsPending} = useCreateSection(SECTION_TYPES.JOB_RESPONSE);
    const {mutateAsync: updateMutation, isPending: updateIsPending} = useUpdateSection(SECTION_TYPES.JOB_RESPONSE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload = {
      pageSlug: PAGE_SLUGS.HOME,
      sectionType: SECTION_TYPES.JOB_RESPONSE,
      title: text
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(payload));

    try {
      if (isEdit && initialData) {
        // await updateMutation.mutateAsync({
        //   slug: "job-responses",
        //   data: payload
        // });
        await updateMutation({
          id: initialData._id,
          data: formData
        });
      } else {
        // await createMutation.mutateAsync(formData);
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
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Job Response
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogTitle className="text-2xl font-medium">
          {isEdit ? "Edit Jobs Response" : "Create Jobs Response"}
        </DialogTitle>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter job response text"
            className="w-full"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={createIsPending || updateIsPending}
          >
            {createIsPending || updateIsPending 
              ? "Saving..." 
              : isEdit ? "Update" : "Publish"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}