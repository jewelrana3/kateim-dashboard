"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Edit2Icon, Trash2 } from "lucide-react";
import FaqEdit from "./FaqEdit";
import Swal from "sweetalert2";
import {
  useGetFaq,
  useDeleteFaq,
} from "@/lib/query/hooks/dashboard/public";
import { IFaq } from "@/types/others";

export function Faq() {
  const { data: faqs } = useGetFaq();
  const { mutate: deleteFaq } = useDeleteFaq();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this FAQ!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFaq(id);
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
      {faqs && faqs.length > 0 ? (
        faqs?.map((item: IFaq) => (
          <div className="bg-[#E6EEFC] px-4 my-3 rounded-md" key={item._id}>
            <AccordionItem value={item.question}>
              <AccordionTrigger className="text-md cursor-pointer">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="flex flex-col gap-4 text-balance ">
                <p>{item.answer}</p>
                <section className="flex justify-end">
                  <div className="flex items-center gap-3">
                    <FaqEdit
                      title="Edit FAQ"
                      trigger={
                        <span className="cursor-pointer">
                          <Edit2Icon size={20} />
                        </span>
                      }
                      defaultValues={{
                        id: item._id,
                        question: item.question,
                        answer: item.answer,
                      }}
                    />
                    <span
                      className="cursor-pointer"
                      onClick={() => handleDelete(item._id!)}
                    >
                      <Trash2 size={20} />
                    </span>
                  </div>
                </section>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center min-h-[40vh]">
          <p>You have no faq created yet. Please create one.</p>
        </div>
      )}
    </Accordion>
  );
}
