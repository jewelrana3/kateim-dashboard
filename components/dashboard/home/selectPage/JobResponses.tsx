import React from "react";
import JobResponseEdit from "../modal/JobResponse";

export default function JobResponses() {
  return (
    <div className="bg-[#FFC823] text-xl font-semibold p-5 relative rounded-md">
      <div className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer">
        <JobResponseEdit />
      </div>
      All Applicants guaranteed a response within 7-14 days
    </div>
  );
}
