import React from "react";
import JobResponseEdit from "../modal/JobResponse";
import { useGetSection } from "@/lib/query/hooks/dashboard/pageContent";
import { SECTION_TYPES } from "@/types/others";

export default function JobResponses() {
  const { data: section, isLoading } = useGetSection(SECTION_TYPES.JOB_RESPONSE);
  
  const text = section?.title ;
  console.log(text);

  if (isLoading) {
    return (
      <div className="bg-[#FFC823] p-5 rounded-md min-h-[80px] flex items-center justify-center">
        <div className="text-black opacity-70">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFC823] text-xl font-semibold p-5 relative rounded-md min-h-[100px] flex items-center">
      {/* Edit button - only show when data exists */}
      {text && (
        <div className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
          <JobResponseEdit 
            mode="edit"
            initialData={{ _id: section?._id, text: section?.title }}
          />
        </div>
      )}

      {text ? (
        <div className="w-full text-center">
          {text}
        </div>
      ) : (
        <div className="w-full text-center">
          <div className="mb-2 text-black">Job Response section is not created yet</div>
          <div className="flex justify-center">
            <JobResponseEdit 
              mode="create"
              initialData={{ _id: section?._id, text: section?.title || "" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}