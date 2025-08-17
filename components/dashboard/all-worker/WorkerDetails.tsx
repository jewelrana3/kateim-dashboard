import { BadgeCheck, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button"; // If you're using ShadCN
import Image from "next/image";

const worker = {
  name: "Md Kamran Khan",
  email: "Admin@instantlabour.Co.Uk",
  contact: "01333327633",
  location: "Dhaka Bangladesh",
  role: "Worker",
  rate: "$250",
  experience: "3 Years",
  title: "General Laborer",
  about: `I am a dedicated and hardworking general laborer specializing in removal, relocation, and site preparation work. 
  I take pride in completing tasks with precision, efficiency, and attention to detail...`,
  skills: [
    "Furniture Removal and Relocation",
    "Loading and Unloading Materials Safely",
    "Construction Site Cleanup and Preparation",
    "Debris and Waste Removal",
    "Packing and Unpacking Services",
    "Basic Handyman Aid and Repair Assistance",
    "Operation Of Basic Tools and Equipment",
    "Team Collaboration And Communication",
    "Physical Stamina and Safety Compliance",
  ],
  portfolio: [
    {
      title: "1. Residential & Office Furniture Removal",
      description:
        "Safely dismantled, packed, and relocated household and office furniture, ensuring no damage to property.",
    },
    {
      title: "2. Construction Site Assistance",
      description:
        "Provided general labor support, including unloading materials, cleaning debris, and assisting skilled tradesmen.",
    },
    {
      title: "3. Event Setup & Dismantling",
      description:
        "Helped set up and take down event stages, tents, and seating arrangements for corporate and community events.",
    },
    {
      title: "4. Junk & Waste Removal",
      description:
        "Handled the removal and disposal of unwanted items and debris, ensuring compliance with local waste regulations.",
    },
    {
      title: "5. Local & Long-Distance Moves",
      description:
        "Assisted in moving projects within the city and to neighboring areas, providing efficient transport and organization.",
    },
  ],
};

export default function WorkerDetails() {
  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 font-medium">
        <ArrowLeft className="w-4 h-4" />
        View Details
      </div>

      {/* Card */}
      <div className="bg-white p-6 shadow rounded-md">
        {/* Top section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar */}
          <Image
            src="https://i.ibb.co.com/G3cLcHyf/Ellipse-16.png" // Replace with real path
            alt="Worker Avatar"
            width={150}
            height={150}
            className="rounded-full object-cover"
          />

          {/* Info */}
          <div className=" space-y-2">
            <div>
              <p>
                <span className="font-semibold">Name</span> : {worker.name}
              </p>
              <p>
                <span className="font-semibold">Email</span> : {worker.email}
              </p>
              <p>
                <span className="font-semibold">Contact</span> :{" "}
                {worker.contact}
              </p>
              <p>
                <span className="font-semibold">Location</span> :{" "}
                {worker.location}
              </p>
              <p>
                <span className="font-semibold">Role Sec.</span> : {worker.role}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-1 text-green-600 font-medium text-sm">
            <BadgeCheck className="w-4 h-4" /> Verified
          </div>
          <div>
            <h2 className="text-xl font-semibold capitalize">{worker.name}</h2>
            <p className="text-sm text-gray-600">
              {worker.title} / {worker.experience} Of Experience
            </p>
            <p className="text-lg font-semibold text-gray-800">{worker.rate}</p>
          </div>
        </div>

        {/* About */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800">About</h3>
          <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">
            {worker.about}
          </p>
        </div>

        {/* Core Skills */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">Core Skill:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
            {worker.skills.map((skill, idx) => (
              <li key={idx} className="flex items-start gap-1">
                <CheckCircle className="text-green-500 w-4 h-4 mt-1" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">
            Portfolio / Work Experience
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            {worker.portfolio.map((item, idx) => (
              <li key={idx}>
                <p className="font-medium">{item.title}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
      </div>
      <section className="flex justify-between items-center bg-white shadow-md rouned-md p-2">
        <p>
          If you feel the user is fake in any way, you can block or delete the
          user from here.
        </p>
        <div className=" flex justify-end gap-3 ">
          <Button
            variant="outline"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Block
          </Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </section>
    </div>
  );
}
