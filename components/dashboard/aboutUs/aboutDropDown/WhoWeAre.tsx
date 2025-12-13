import React from "react";
import AboutUsEdit from "../AboutUsEdit";
import { Edit, Plus } from "lucide-react";
import Image from "next/image";
import { useGetSection } from "@/lib/query/hooks/dashboard/pageContent";
import { SECTION_TYPES } from "@/types/others";
import { getImageUrl } from "@/utils/image";
import { Button } from "@/components/ui/button";

export default function WhoWeAre() {
  const { data: section, isLoading } = useGetSection(SECTION_TYPES.WHO_WE_ARE);

  const { title, description, images = [] } = section || {};
  const hasData = Boolean(title && description);

  if (isLoading) {
    return (
      <section className="relative p-4 bg-white rounded-lg shadow-md min-h-[400px] flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative p-4 bg-white rounded-lg shadow-md min-h-[400px]">
      {/* Action button - Only show when there's data */}
      {hasData && (
        <div className="absolute top-4 right-4">
          <div className="flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer">
            <AboutUsEdit
              trigger={<Edit className="w-4 h-4 cursor-pointer" />}
              mode="edit"
              section={section}
              sectionType={SECTION_TYPES.WHO_WE_ARE}
            />
          </div>
        </div>
      )}

      {hasData ? (
        <div className="grid grid-cols-[auto_40%] gap-14">
          <div>
            <h1 className="font-semibold text-3xl 2xl:text-5xl my-3 leading-16">
              {title}
            </h1>
            <p className="text-[#545454] mt-6">{description}</p>
          </div>
          <div>
            {images[0] && (
              <Image
                src={getImageUrl(images[0])}
                alt={title || "Who we are"}
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center h-full min-h-[350px]">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Who We Are section is not created yet
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Click below to create the Who We Are section
          </p>
          <div>
            <AboutUsEdit
              trigger={
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Create Who We Are Section
                </Button>
              }
              mode="create"
              section={section}
              sectionType={SECTION_TYPES.WHO_WE_ARE}
            />
          </div>
        </div>
      )}
    </section>
  );
}
