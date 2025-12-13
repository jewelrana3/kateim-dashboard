import WorkEdit from "../modal/WorkEdit";
import { useGetPageContent } from "@/lib/query/hooks/dashboard/pageContent";

// Default data structure
const defaultData = [
  {
    id: 1,
    title: "Create Worker Profile",
    subTitle: "Describe Your Job – It Takes Under 1 Minute",
  },
  {
    id: 2,
    title: "Get Matched With Jobs Instantly",
    subTitle: "our ai sends it to the best local work",
  },
  {
    id: 3,
    title: "Go To Work!",
    subTitle: "your worker confirm an shows up.done.",
  },
];

export default function HowWorker() {
  const { data: pageContent, isLoading } = useGetPageContent(
    "how-it-works-worker"
  );

  // Extract data from pageContent or use default
  const headline = pageContent?.headline || "How It Works(Worker)";
  const steps = pageContent?.steps || defaultData;

  const hasData = pageContent && pageContent.headline;

  if (isLoading) {
    return (
      <div className="bg-white py-12 px-6 md:px-16 relative min-h-[300px] flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-white py-12 px-6 md:px-16 relative min-h-[400px]">
      {/* Edit button - only show when data exists */}
      {hasData && (
        <div className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
          <WorkEdit
            mode="edit"
            initialData={{
              headline,
              steps,
            }}
          />
        </div>
      )}

      {hasData ? (
        <>
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-700">
            {headline}
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-center">
            {steps.map((item: any, index: number) => (
              <div key={item.id || index} className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-13 h-7 2xl:w-10 2xl:h-10 flex items-center justify-center text-lg font-medium mb-4 flex-shrink-0">
                  {item.id || index + 1}
                </div>
                <div className="text-left">
                  <h3 className="text-[18px] font-semibold mb-2 text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 capitalize">{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center h-full">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            How It Works section is not created yet
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Click below to create the how it works section
          </p>
          <div>
            <WorkEdit
              mode="create"
              // slug="how-it-works-worker"
              initialData={{
                headline: "How It Works(Worker)",
                steps: defaultData,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
