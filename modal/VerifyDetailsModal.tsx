import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IUser } from "@/types/users";
import { getImageUrl } from "@/utils/image";
import { useToggleUserVerification } from "@/lib/query/hooks/dashboard/users";

export default function VerifyDetailsModal({
  trigger,
  user,
}: {
  trigger: React.ReactNode;
  user: IUser;
}) {
  const { mutate: toggleVerification } = useToggleUserVerification(user?._id);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div className="bg-white   my-9">
          <div className="flex items-center justify-center gap-6 ">
            {/* Profile Picture */}
            <div className="">
              <Image
                src="https://i.ibb.co.com/xNXnsd1/Ellipse-7.png"
                alt="Profile"
                width={140}
                height={140}
                className="rounded-full object-cover"
              />
            </div>

            {/* Info Text */}
            <div className="space-y-2 text-sm text-gray-800">
              <p>
                <strong>Name</strong> : {user.name}
              </p>
              <p>
                <strong>Email</strong> : {user.email}
              </p>
              <p>
                <strong>Contact</strong> : {user.phone}
              </p>
              <p>
                <strong>Location</strong> : {user.address}
              </p>
              <p>
                <strong>Role Sec.</strong> : {user.role}
              </p>
            </div>
          </div>

          {/* ID Image Section */}
          <div className="mt-6 flex justify-center gap-3.5">
            <Image
              src={getImageUrl(user.nidFront)} // Replace with actual ID image path
              alt="ID Front"
              width={270}
              height={200}
              className="rounded-md shadow"
            />
            <Image
              src={getImageUrl(user.nidBack)} // Replace with actual ID image path
              alt="ID Back"
              width={270}
              height={200}
              className="rounded-md shadow"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => toggleVerification(user._id)}
              className={`bg-white border border-red-500 text-red-500 px-5 py-2 rounded-md hover:bg-red-50 `}
            >
              Decline
            </button>
            <button
              onClick={() => toggleVerification(user._id)}
              className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500"
            >
              Approve
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
