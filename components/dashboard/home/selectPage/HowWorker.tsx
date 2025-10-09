import WorkEdit from "../modal/WorkEdit";

const data = [
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
  return (
    <div className="bg-white py-12 px-6 md:px-16 relative">
      <div className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer">
        <WorkEdit />
      </div>

      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-700">
        How It Works(Worker)
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {data.map((item) => (
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-4">
              {item.id}
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {item.title}
              </h3>
              <p className="text-gray-600 capitalize">{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
