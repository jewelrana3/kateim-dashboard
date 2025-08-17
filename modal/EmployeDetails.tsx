import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Modal from "./Modal";
import Image from "next/image";

export default function UserDetails({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const user = {
    name: "Katiem",
    email: "Admin@Instantlabour.Co.Uk",
    contact: "01333327633",
    location: "Dhaka Bangladesh",
    role: "Employer",
    image: "/avatar.jpg", // Replace with actual image path
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
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
            className="w-40 h-40 rounded-full object-cover"
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
              <span className="font-semibold">Location</span> : {user.location}
            </p>
            <p>
              <span className="font-semibold">Role Sec.</span> : {user.role}
            </p>

            {/* Warning note */}
            <p className="text-sm text-gray-500 mt-4">
              If you feel the user is fake in any way, you can block or delete
              the user from here.
            </p>

            {/* Action buttons */}
            <div className="mt-2 flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Block
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
