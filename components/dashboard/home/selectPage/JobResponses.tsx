import React from "react";
import JobResponseEdit from "../modal/JobResponse";
import { useGetPageContent } from "@/lib/query/hooks/dashboard/pageContent";

export default function JobResponses() {
  const { data: pageContent, isLoading } = useGetPageContent("job-responses");
  
  const text = pageContent?.text || "All Applicants guaranteed a response within 7-14 days";
  const hasData = pageContent && pageContent.text;

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
      {hasData && (
        <div className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
          <JobResponseEdit 
            mode="edit"
            initialData={{ text }}
          />
        </div>
      )}

      {hasData ? (
        <div className="w-full text-center">
          {text}
        </div>
      ) : (
        <div className="w-full text-center">
          <div className="mb-2 text-black">Job Response section is not created yet</div>
          <div className="flex justify-center">
            <JobResponseEdit 
              mode="create"
              initialData={{ text: "All Applicants guaranteed a response within 7-14 days" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}