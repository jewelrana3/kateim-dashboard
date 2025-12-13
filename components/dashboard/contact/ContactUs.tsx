"use client";
import Image from "next/image";
import { Edit, Plus } from "lucide-react";
import ContactUsForm from "@/modal/ContactUsModal";

import { SECTION_TYPES, PAGE_SLUGS } from "@/types/others";
import ContactEdit from "./ContactEdit";
import { useGetSection } from "@/lib/query/hooks/dashboard/pageContent";
import { getImageUrl } from "@/utils/image";

export default function ContactUs() {
  const { data: section, isLoading } = useGetSection(SECTION_TYPES.CONTACT_US);
  
  const hasData =  section?.title || section?.description;

  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto my-5">
        <div className="flex items-center justify-between bg-[#F6F6F6] p-4 rounded-md mb-4">
          <h2 className="text-base font-medium text-gray-800">
            Contact Us Landing Page
          </h2>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md min-h-[400px] flex items-center justify-center">
          <div className="text-gray-500">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between bg-[#F6F6F6] p-4 rounded-md mb-4">
        <h2 className="text-base font-medium text-gray-800">
          Contact Us Landing Page
        </h2>
      </div>

      <section className="p-4 bg-white rounded-lg shadow-md min-h-[400px] relative">
        {/* Edit/Create button */}
        {hasData ? (
          <ContactEdit
            mode="edit"
            section={section}
            trigger={
              <button className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 cursor-pointer transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            }
          />
        ) : (
          <div className="absolute top-4 right-4">
            <ContactEdit
              mode="create"
              trigger={
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Create Contact Section
                </button>
              }
            />
          </div>
        )}

        {hasData ? (
          <div className="grid grid-cols-2 gap-14">
            <div>
              <h1 className="font-semibold text-3xl 2xl:text-5xl my-3 leading-10 2xl:leading-16">
                {section.title}
              </h1>
              <p className="text-[#545454] mt-6">
                {section.description}
              </p>
            </div>

            <div>
              <Image
                src={getImageUrl(section.images?.[0]) || ""}
                alt="Contact us image"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center h-full min-h-[350px]">
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              Contact section is not created yet
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Click above to create the contact section
            </p>
            {/* <div className="text-gray-400">
              <div className="grid grid-cols-2 gap-14 opacity-50">
                <div>
                  <h1 className="font-semibold text-3xl 2xl:text-5xl my-3 leading-10 2xl:leading-16 text-gray-300">
                    Let's Connect and Build Something Great.
                  </h1>
                  <p className="text-gray-300 mt-6">
                    We make it simple for employers and skilled professionals to
                    connect, collaborate, and complete projects — all in one trusted
                    platform
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg w-full h-64 flex items-center justify-center">
                  <p className="text-gray-400">Image placeholder</p>
                </div>
              </div>
            </div> */}
          </div>
        )}
      </section>
    </section>
  );
}