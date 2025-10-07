import Button from "@/components/settings/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const user = {
  name: "Katiem",
  email: "Admin@Instantlabour.Co.Uk",
  contact: "01333327633",
  location: "Dhaka Bangladesh",
  role: "Employer",
  image: "https://i.ibb.co.com/xNXnsd1/Ellipse-7.png", // Replace with actual image path
};

export default function EmployeDetails({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <div className="">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4 text-black">
            <ArrowLeft className="w-5 h-5" />
            <h2 className="text-lg font-semibold">View Details</h2>
          </div>

          {/* Card */}
          <div className="bg-white p-5 flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <Image
              src={user.image}
              alt={user.name}
              width={200}
              height={200}
              className=" rounded-full object-cover"
            />

            {/* Info */}
            <div className="flex-1 space-y-2 text-gray-800">
              <p>
                <span className="font-semibold">Name</span> : {user.name}
              </p>
              <p>
                <span className="font-semibold">Email</span> : {user.email}
              </p>
              <p>
                <span className="font-semibold">Contact</span> : {user.contact}
              </p>
              <p>
                <span className="font-semibold">Location</span> :{" "}
                {user.location}
              </p>
              <p>
                <span className="font-semibold">Role Sec.</span> : {user.role}
              </p>

              {/* Warning note */}

              {/* Action buttons */}
            </div>
          </div>

          {/* footer */}
          <div className="mt-2 flex  gap-3">
            <p className="text-sm text-gray-500 w-[50%] mt-2">
              If you feel the user is fake in any way, you can block or delete
              the user from here.
            </p>
            <div className="flex">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white mr-4">
                Block
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
