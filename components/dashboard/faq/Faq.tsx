"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { DeleteIcon, Edit2Icon, Trash2 } from "lucide-react";
import FaqEdit from "./FaqEdit";
import Swal from "sweetalert2";
const data = [
  {
    id: 1,
    question: "What is the return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition and packaging.",
  },
  {
    id: 2,
    question: "How do I track my order?",
    answer:
      "You can track your order using the tracking number provided in your confirmation email. Visit our tracking page and enter the number to see the status.",
  },
  {
    id: 3,
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. For more details, visit our payment options page.",
  },
];

export function Faq() {
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to be delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full "
      defaultValue="item-1"
    >
      {data.map((item) => (
        <div className="bg-[#E6EEFC] px-4 my-3 rounded-md" key={item.id}>
          <AccordionItem value={item.question}>
            <AccordionTrigger className="text-md cursor-pointer">
              {item.question}
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance ">
              <p>{item.answer}</p>
              <section className="flex justify-end">
                <div className="flex items-center gap-3">
                  <FaqEdit
                    title="Edit Faq"
                    trigger={
                      <span className="cursor-pointer">
                        <Edit2Icon size={20} />
                      </span>
                    }
                  />
                  <span className="cursor-pointer" onClick={handleClick}>
                    <Trash2 size={20} />
                  </span>
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
}
