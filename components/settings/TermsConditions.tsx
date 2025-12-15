"use client";

import { useRef, useState } from "react";
import Button from "./Button";
import { JoditEditor } from "../JodiClient";
import { useGetPublicData, useUpdateOrCreatePublicData } from "@/lib/query/hooks/dashboard/public";
import { PUBLIC_TYPES } from "@/types/others";

export default function TermsCondition() {
  const editor = useRef(null);

  const [content, setContent] = useState("");
  const { data: termsCondition } = useGetPublicData(PUBLIC_TYPES.TERMS_AND_CONDITIONS);
  const { mutate: updateTermsCondition } = useUpdateOrCreatePublicData(PUBLIC_TYPES.TERMS_AND_CONDITIONS);

  const handleOnSave = (value: string) => {
    updateTermsCondition({
      type: PUBLIC_TYPES.TERMS_AND_CONDITIONS,
      content: value,
    });
  };
  return (
    <section className="p-3">
      <div className="">
        <div className="">
          <JoditEditor
            className="border-none break-all"
            ref={editor}
            value={termsCondition?.content || ""}
            config={{ height: 550, theme: "", readonly: false }}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>
      </div>

      <Button
        onClick={() => handleOnSave(content)}
        htmlType="submit"
        className="bg-yellow-400 font-bold text-lg px-6  rounded-full transform transition-all duration-300 ease-in-out 0.5s ease  mt-4 text-gray-700"
      >
        Save
      </Button>
    </section>
  );
}
