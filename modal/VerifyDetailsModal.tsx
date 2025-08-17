import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Modal from "./Modal";

export default function VerifyDetailsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white p-6 rounded-md shadow-md max-w-3xl mx-auto my-9">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Profile Picture */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://i.ibb.co.com/xNXnsd1/Ellipse-7.png"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>

          {/* Info Text */}
          <div className="space-y-2 text-sm text-gray-800">
            <p>
              <strong>Name</strong> : Katiem
            </p>
            <p>
              <strong>Email</strong> : Admin@Instantlabour.Co.Uk
            </p>
            <p>
              <strong>Contact</strong> : 01333327633
            </p>
            <p>
              <strong>Location</strong> : Dhaka Bangladesh
            </p>
            <p>
              <strong>Role Sec.</strong> : Employer
            </p>
          </div>
        </div>

        {/* ID Image Section */}
        <div className="mt-6 flex justify-center">
          <Image
            src="https://i.ibb.co.com/4nymc2Tt/image-10.png" // Replace with actual ID image path
            alt="ID Front"
            width={300}
            height={200}
            className="rounded-md shadow"
          />
        </div>
        {/* <div className="mt-4 flex justify-center">
          <Image
            src="/nid-back.jpg" // Replace with actual ID back image path
            alt="ID Back"
            width={300}
            height={200}
            className="rounded-md shadow"
          />
        </div> */}

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-white border border-red-500 text-red-500 px-5 py-2 rounded-md hover:bg-red-50">
            Decline
          </button>
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500">
            Approve
          </button>
        </div>
      </div>
    </Modal>
  );
}
