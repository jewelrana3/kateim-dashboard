"use client";

import { useRef, useState } from "react";
import Button from "./Button";
import { JoditEditor } from "../JodiClient";

export default function TermsCondition() {
  const editor = useRef(null);

  const [content, setContent] = useState("");

  const handleOnSave = (value: string) => {
    console.log(value);
  };
  return (
    <section className="p-3">
      <div className="">
        <div className="">
          <JoditEditor
            className="border-none "
            ref={editor}
            value={content}
            config={{ height: 550, theme: "", readonly: false }}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>
      </div>

      <Button
        onClick={() => handleOnSave(content)}
        htmlType="submit"
        className="bg-yellow-400 font-bold text-lg px-6  rounded-full transform transition-all duration-300 ease-in-out 0.5s ease  w-full mt-4 text-white"
      >
        Save
      </Button>
    </section>
  );
}
