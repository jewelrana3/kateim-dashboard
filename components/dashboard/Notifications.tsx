"use client";
import { useGetFaq } from "@/lib/query/hooks/dashboard/public";
import { BellIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Notifications() {
  const { data: faqData } = useGetFaq();

  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible>
        {faqData?.map((item: any, index: number) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="bg-white rounded-lg shadow-sm my-4 "
          >
            <AccordionTrigger className="flex items-center justify-between gap-3 p-4">
              <div className="flex items-center justify-between gap-5">
                <div className="bg-blue-100 p-2 rounded-md flex items-center ">
                  <BellIcon className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex items-start">{item.question}</div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pl-18 pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
