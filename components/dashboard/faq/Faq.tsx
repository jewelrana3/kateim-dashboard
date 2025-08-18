import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import FaqEdit from "./FaqEdit";
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
                <FaqEdit
                  trigger={
                    <span className="cursor-pointer">
                      <Edit2Icon size={20} />
                    </span>
                  }
                />
              </section>
            </AccordionContent>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
}
